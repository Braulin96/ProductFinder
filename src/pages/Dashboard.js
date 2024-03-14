import { useData } from "components/hooks/DataContext";

const Dashboard = () => {
    const { name, goal, sex, age, setName, setGoal, setSex } = useData();
  return (
    <div>Hello {name} welcome to your dashboard app where you can...</div>
  )
}
export default Dashboard