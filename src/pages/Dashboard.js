import { useData } from "components/hooks/DataContext";
import axios from "axios";
import { useState, useEffect } from "react";

const Dashboard = () => {
  //const [items, setItems] = useState([]);

  const [randomImage, setRandomImage] = useState("");
  const [time, setTime] = useState("");

  const fetchRandomImage = async () => {
    try {
      const response = await fetch("https://source.unsplash.com/random");
      // Get the final URL after any redirects (actual image URL)
      const imageUrl = response.url;
      setRandomImage(imageUrl);
    } catch (error) {
      console.error("Error fetching random image:", error);
    }
  };
  useEffect(() => {
    fetchRandomImage();
  }, [time]);

  const { name, goal, sex, age } = useData();
  return (
    <div>
      Hello {name} welcome to your dashboard app where you can, you are a {sex}{" "}
      with {age} years olt trying to {goal}
      <div className="w-96 h-96 rounded-full bg-cover overflow-hidden mt-12">
        {randomImage && (
          <img
            className="w-full h-full object-cover"
            src={randomImage}
            alt="Random"
          />
        )}
        {!randomImage && <p className="text-black">Loading random image...</p>}
      </div>
    </div>
  );
};
export default Dashboard;
