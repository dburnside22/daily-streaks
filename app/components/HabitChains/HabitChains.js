import HabitChain from "../HabitChain/HabitChain";

const HabitChains = ({ habitChains }) => {
  return (
    <div className="HabitChain">
      <h2>Habit Chains</h2>
      {habitChains.map((habitChain) => (
        <HabitChain key={habitChain.id} habitChain={habitChain} />
      ))}
    </div>
  );
};

export default HabitChains;
