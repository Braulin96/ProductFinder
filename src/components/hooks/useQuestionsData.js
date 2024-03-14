import { useState, useEffect } from "react";

const useQuestionsData = () => {
  // Retrieve data from local storage on initial load
  const initialName = localStorage.getItem("name") || "";
  const initialGoal = localStorage.getItem("goal") || null;
  const initialSex = localStorage.getItem("sex") || "";
  const initialAge = localStorage.getItem("age") || null;

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

  // Calculate age based on selected date
  const handleDateChange = (date) => {
    setSelectedDate(date);
    const currentYear = new Date().getFullYear();
    const birthdayYear = date ? new Date(date).getFullYear() : null;
    const age = birthdayYear ? currentYear - birthdayYear : null;
    localStorage.setItem("age", age);
  };

  useEffect(() => {
    if (selectedDate) {
      handleDateChange(selectedDate);
    }
  }, [selectedDate]);

  return {
    name,
    goal,
    sex,
    age: initialAge,
    selectedDate,
    setName,
    setGoal,
    setSex,
    setSelectedDate,
    handleNameChange,
    handleOptionChange,
    handleSexChange,
    handleDateChange,
  };
};

export default useQuestionsData;
