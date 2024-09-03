import { useState } from "react";

const AddHabit = ({ addHabit }) => {
  const [habit, setHabit] = useState("");

  const handleChange = (e) => {
    setHabit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHabit(habit);
    setHabit("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={habit}
        onChange={handleChange}
        placeholder="Add a new habit"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddHabit;
