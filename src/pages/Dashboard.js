import { useData } from "components/hooks/DataContext";
import axios from "axios";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const { name, goal, sex, age } = useData();
  //const [items, setItems] = useState([]);
  //const response = await fetch("https://source.unsplash.com/random");

 fetch('https://reqres.in/api/users').then(res => res.json()).then((data)=>console.log(data)) // converter dados para json type

  return (
    <div>
      Hello {name}
    </div>
  );
};
export default Dashboard;
