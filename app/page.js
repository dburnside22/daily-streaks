"use client";

import HabitList from "./components/HabitList/HabitList";
import { useEffect, useState } from "react";

const Home = () => {
  const [habitsList, setHabitsList] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8090/api/collections/habit/records")
      .then((response) => response.json())
      .then((data) => setHabitsList(data.items))
      .catch((error) => console.error("Error fetching habits:", error));
  }, []);

  const testRecords = [
    {
      id: 1,
      title: "Drink water",
      completedToday: false,
      streak: 0,
      owner: {
        id: 1,
        userName: "testUser",
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: "Exercise",
      completedToday: true,
      streak: 5,
      owner: {
        id: 2,
        userName: "userTwo",
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: "Read a book",
      completedToday: false,
      streak: 2,
      owner: {
        id: 3,
        userName: "userThree",
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      title: "Meditate",
      completedToday: true,
      streak: 10,
      owner: {
        id: 4,
        userName: "userFour",
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 5,
      title: "Write a journal",
      completedToday: false,
      streak: 1,
      owner: {
        id: 5,
        userName: "userFive",
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  return (
    <div className="Home">
      <HabitList habits={habitsList} />
    </div>
  );
};

export default Home;
