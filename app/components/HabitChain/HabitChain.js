"use client";

import { useEffect, useState } from "react";
import Habit from "../Habit/Habit";
import "./HabitChain.css";

const HabitChain = ({ habitChain }) => {
  const [hydratedHabits, setHydratedHabits] = useState([]);

  const hydrateHabitsInChain = async (habitChain) => {
    const habits = await Promise.all(
      habitChain.field.map(async (habitId) => {
        const response = await fetch(
          `http://localhost:8090/api/collections/habit/records/${habitId}`
        );
        const habit = await response.json();
        return habit;
      })
    );
    setHydratedHabits(habits);
    console.log(hydratedHabits);
  };

  useEffect(() => {
    hydrateHabitsInChain(habitChain);
  }, [habitChain]);

  return (
    <div className="HabitChain">
      <ul>
        {hydratedHabits.map((habit) => (
          <Habit key={habit.id} habit={habit} noborder />
        ))}
      </ul>
    </div>
  );
};

export default HabitChain;
