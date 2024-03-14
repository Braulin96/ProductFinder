import useQuestionsData from "components/hooks/useQuestionsData";
import { useData } from "components/hooks/DataContext";

const Dashboard = () => {
  const { name, goal, sex, age } = useData();
  const cleanLocalStorage = () => {
    localStorage.clear();
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
            onClick={cleanLocalStorage}
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
