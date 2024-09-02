"use client";

import "./Habit.css";

const Habit = ({ habit }) => {
  const completedToday = async (event) => {
    const updatedHabit = {
      ...habit,
      completedToday: event.target.checked,
      streak: event.target.checked ? habit.streak + 1 : 0,
    };

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
  };

  return (
    <div className="Habit">
      <input
        type="checkbox"
        value={habit.completedToday}
        onChange={completedToday}
      />
      <h3>{habit.title}</h3>
      <p className="Habit-streak">
        <span>Current Streak:</span>
        <span>{habit.streak}</span>
      </p>
    </div>
  );
};

export default Habit;
