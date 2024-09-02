import Habit from "../Habit/Habit";
import "./HabitList.css";

const HabitList = ({ habits }) => {
  return (
    <div className="HabitList">
      {habits.map((habit) => (
        <Habit key={habit.id} habit={habit} />
      ))}
    </div>
  );
};

export default HabitList;
