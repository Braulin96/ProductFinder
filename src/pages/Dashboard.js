import useQuestionsData from "components/hooks/useQuestionsData";
import { useData } from "components/hooks/DataContext";

const Dashboard = () => {
  const { name, goal, sex, age } = useData();
  return (
    <div>
      My name is {name} I am {sex}, I am {age} years old and I want {goal}
    </div>
  );
};
export default Dashboard;
