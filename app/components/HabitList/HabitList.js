import AddHabit from "../AddHabit/AddHabit";
import Habit from "../Habit/Habit";
import "./HabitList.css";

const HabitList = ({ habits, addHabit, deleteHabit }) => {
  return (
    <>
      <AddHabit addHabit={addHabit} />
      <div className="HabitList">
        {habits.map((habit) => (
          <Habit key={habit.id} habit={habit} deleteHabit={deleteHabit} />
        ))}
      </div>
    </>
  );
};

export default HabitList;
