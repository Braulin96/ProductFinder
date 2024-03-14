import { useState, useEffect } from "react";

const useQuestionsData = () => {
  // Retrieve data from local storage on initial load
  const initialName = localStorage.getItem("name") || "";
  const initialGoal = localStorage.getItem("goal") || null;
  const initialSex = localStorage.getItem("sex") || "";
  // const initialSelectedDate = localStorage.getItem("selectedDate")
  //   ? new Date(localStorage.getItem("selectedDate"))
  //   : null;

  // State variables
  const [name, setName] = useState(initialName);
  const [goal, setGoal] = useState(initialGoal);
  const [sex, setSex] = useState(initialSex);
  const [selectedDate, setSelectedDate] = useState(null);

  // Event handlers
  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    localStorage.setItem("name", newName);
  };
  
  const handleOptionChange = (value) => {
    setGoal(value);
    localStorage.setItem("goal", value);
  };
  
  const handleSexChange = (e) => {
    const newSex = e.target.value;
    setSex(newSex);
    localStorage.setItem("sex", newSex);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    localStorage.setItem("selectedDate", date);
  };

  // Calculate age based on selected date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const birthdayYear = selectedDate
    ? new Date(selectedDate).getFullYear()
    : null;
  const age = birthdayYear ? currentYear - birthdayYear : null;

  useEffect(() => {
    // Update local storage whenever state changes
    localStorage.setItem("name", name);
    localStorage.setItem("goal", goal);
    localStorage.setItem("sex", sex);
    if (selectedDate) {
      localStorage.setItem("selectedDate", selectedDate.toISOString());
    }
  }, [name, goal, sex, age]);

  return {
    name,
    goal,
    sex,
    handleNameChange,
    handleOptionChange,
    handleSexChange,
    age,
    selectedDate,
    handleDateChange,
  };
};

export default useQuestionsData;
