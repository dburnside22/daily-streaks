import HabitList from "./components/HabitList/HabitList";

const Home = () => {
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
    <div>
      <HabitList habits={testRecords} />
    </div>
  );
};

export default Home;
