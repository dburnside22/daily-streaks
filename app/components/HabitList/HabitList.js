import Habit from "../Habit/Habit";

const HabitList = ({ habits }) => {
  return (
    <div>
      {habits.map((habit) => (
        <Habit key={habit.id} habit={habit} />
      ))}
    </div>
  );
};

export default HabitList;
