import AddHabit from "../AddHabit/AddHabit";
import Habit from "../Habit/Habit";
import "./HabitList.css";

const HabitList = ({ habits, addHabit, deleteHabit }) => {
  return (
    <div className="HabitList">
      <AddHabit addHabit={addHabit} />
      {habits.map((habit) => (
        <Habit key={habit.id} habit={habit} deleteHabit={deleteHabit} />
      ))}
    </div>
  );
};

export default HabitList;
