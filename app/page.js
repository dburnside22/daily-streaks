"use client";

import HabitChains from "./components/HabitChains/HabitChains";
import HabitList from "./components/HabitList/HabitList";
import { useEffect, useState } from "react";

const Home = () => {
  const [habitsList, setHabitsList] = useState([]);
  const [habitChainList, setHabitChainList] = useState([]);

  useEffect(() => {
    try {
      fetch("http://127.0.0.1:8090/api/collections/habit/records")
        .then((response) => response.json())
        .then((data) => setHabitsList(data.items))
        .catch((error) => console.error("Error fetching habits:", error));
      fetch("http://127.0.0.1:8090/api/collections/habitChain/records")
        .then((response) => response.json())
        .then((data) => setHabitChainList(data.items))
        .catch((error) => console.error("Error fetching habits:", error));

      console.log(habitChainList);
    } catch (error) {
      console.error("Error fetching habits:", error);
    }
  }, []);

  const addHabit = async (habit) => {
    const newHabit = {
      title: habit,
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:8090/api/collections/habit/records",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newHabit),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setHabitsList((prevHabitsList) => [...prevHabitsList, data]);
    } catch (error) {
      console.error("Error adding habit:", error);
    }
  };

  const deleteHabit = async (id) => {
    try {
      await fetch(`http://127.0.0.1:8090/api/collections/habit/records/${id}`, {
        method: "DELETE",
      });
      setHabitsList((prevHabitsList) =>
        prevHabitsList.filter((habit) => habit.id !== id)
      );
    } catch (error) {
      console.error("Error deleting habit:", error);
    }
  };

  return (
    <div className="Home">
      <HabitChains habitChains={habitChainList} />
      <HabitList
        habitChains={habitChainList}
        habits={habitsList}
        addHabit={addHabit}
        deleteHabit={deleteHabit}
      />
    </div>
  );
};

export default Home;
