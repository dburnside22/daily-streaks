"use client";

import { useEffect, useState } from "react";
import "./Habit.css";

const Habit = ({ habit, deleteHabit }) => {
  const [completedToday, setCompletedToday] = useState(habit.completedToday);
  const [streak, setStreak] = useState(habit.streak);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(habit.title);

  const handleCompletedToday = async (event) => {
    const newCompletedToday = event.target.checked;
    setCompletedToday(newCompletedToday);

    const updatedHabit = {
      ...habit,
      completedToday: event.target.checked,
      streak: newCompletedToday ? habit.streak + 1 : 0,
    };

    try {
      await fetch(
        `http://localhost:8090/api/collections/habit/records/${habit.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedHabit),
        }
      );
      setStreak(updatedHabit.streak);
    } catch (error) {
      console.error("Error updating habit:", error);
    }
  };

  const handleTitleClick = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTitleBlur = async () => {
    setIsEditing(false);

    const updatedHabit = {
      ...habit,
      title: title,
    };

    try {
      await fetch(
        `http://localhost:8090/api/collections/habit/records/${habit.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedHabit),
        }
      );
    } catch (error) {
      console.error("Error updating habit title:", error);
    }
  };

  const handleTitleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleTitleBlur();
    }
  };

  return (
    <div className="Habit">
      <input
        type="checkbox"
        checked={completedToday}
        onChange={handleCompletedToday}
      />
      {isEditing ? (
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
          onKeyDown={handleTitleKeyPress}
          autoFocus
        />
      ) : (
        <h3 onClick={handleTitleClick}>{title}</h3>
      )}
      <p className="Habit-streak">
        <span>Current Streak:</span>
        <span>{streak}</span>
      </p>
      <button onClick={() => deleteHabit(habit.id)}>X</button>
    </div>
  );
};

export default Habit;
