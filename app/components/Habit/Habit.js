"use client";

const Habit = ({ habit }) => {
  const completedToday = () => {
    console.log("completedToday");
  };

  return (
    <div>
      <input
        type="checkbox"
        value={habit.completedToday}
        onChange={() => completedToday}
      />
      <h3>{habit.title}</h3>
      <p>Current Streak:{habit.streak}</p>
    </div>
  );
};

export default Habit;
