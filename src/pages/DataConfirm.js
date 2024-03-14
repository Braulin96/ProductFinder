import { useData } from "components/hooks/DataContext";
import { useNavigate } from "react-router-dom";

const DataConfirm = () => {
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

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <p>
        a My name is {name} I am {sex}, I am {age} years old and I want {goal}
      </p>
      <div>
        Is that right?
        <div className="flex">
          <button
            onClick={handleEdit}
            className="p-4 rounded-lg border-2 border-black"
          >
            Edit
          </button>
          <button
            onClick={handleDashboard}
            className="p-4 rounded-lg border-2 border-black"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
export default DataConfirm;
