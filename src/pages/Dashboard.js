import useQuestionsData from "components/hooks/useQuestionsData";

const Dashboard = () => {
  const { name, goal, sex, age } = useQuestionsData();
  return (
    <div>
      My name is {name} I am {sex}, I am {age} years old and I want {goal}
    </div>
  );
};
export default Dashboard;
