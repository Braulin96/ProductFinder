import { useData } from "components/hooks/DataContext";

const Dashboard = () => {
    const { name, goal, sex, age } = useData();
  return (
    <div>Hello {name} welcome to your dashboard app where you can, you are a {sex} with {age} years olt trying to {goal}
    </div>
  )
}
export default Dashboard