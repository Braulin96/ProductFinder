import useQuestionsData from "components/hooks/useQuestionsData";
import { useData } from "components/hooks/DataContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { name, goal, sex, age, setName, setGoal, setSex } = useData();
  const navigate = useNavigate();

  const handleCleaning = () => {
    localStorage.clear();
    setName("");
    setGoal(null);
    setSex("");
    navigate("/questions");
  };

  const handleEdit = () => {
    navigate("/questions");
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
            Restart
          </button>
          <button onClick={handleEdit} className="p-4 rounded-lg border-2 border-black">Edit</button>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
