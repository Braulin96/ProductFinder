import { useState } from "react";

const useQuestionsData = () => {
  //State variables
  const [name, setName] = useState("");
  const [goal, setGoal] = useState(null);
  const [sex, setSex] = useState("");

  // Event handlers
  const handleNameChange = (e) => setName(e.target.value);
  const handleOptionChange = (value) => setGoal(value);
  const handleSexChange = (e) => setSex(e.target.value);

  //Calculate DOB
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const birthdayYear = selectedDate
    ? new Date(selectedDate).getFullYear()
    : null;
  const age = birthdayYear ? currentYear - birthdayYear : null;

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
