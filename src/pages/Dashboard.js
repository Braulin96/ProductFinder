import useQuestionsData from "components/hooks/useQuestionsData";
import { useData } from "components/hooks/DataContext";
import { useEffect } from "react";

const Dashboard = () => {
  const { name, goal, sex, age, setName, setGoal, setSex } = useData();

  const handleCleaning = () => {
    localStorage.clear();
    setName("");
    setGoal(null);
    setSex("");
  };

  return (
    <div>
      <p>
        My name is {name} I am {sex}, I am {age} years old and I want {goal}
      </p>
      <div>
        Is that right?
        <div className="flex">
          <button
            onClick={handleCleaning}
            className="p-4 rounded-lg border-2 border-black"
          >
            Clear Data
          </button>
          <button className="p-4 rounded-lg border-2 border-black">Edit</button>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
