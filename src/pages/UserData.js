//hooks:
import { useState } from "react";
//components:
import Onboarding from "../components/shared/Onboarding";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
//images:
import FitPeople from "assets/images/fitPeople.jpeg";

const UserData = () => {
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

  const UserName = () => {
    return (
      <div className="">
        <label className="text-xl"> What is you first name</label>
        <input
          placeholder="type your name..."
          type="text"
          value={name}
          onChange={handleNameChange}
          className="mt-6 w-full rounded-lg border border-gray-400 px-4 py-2"
        />
      </div>
    );
  };

  const Goals = () => {
    const answers = [
      { text: "Lose Weight", value: 0 },
      { text: "Maintain weight", value: 1 },
      { text: "Gain muscle", value: 2 },
    ];

    return (
      <div className="flex flex-col">
        <label className="text-xl"> Thanks {name}! Now your goals.</label>
        <p className="text-sm mt-2">
          Select one option that is better in your case.
        </p>
        {answers.map((answer) => (
          <label
            className="mt-4 border border-black p-4 w-full"
            key={answer.value}
          >
            <input
              type="radio"
              name="goal"
              value={answer.text}
              checked={goal === answer.text}
              onChange={() => handleOptionChange(answer.text)}
            />
            {answer.text}
          </label>
        ))}
      </div>
    );
  };

  const PersonalData = () => {
    return (
      <div className="flex flex-col">
        <label className="text-xl">Select sex:</label>
        <div className="flex gap-x-8">
          <label className="inline-flex items-center mt-2">
            <input
              type="radio"
              value="male"
              checked={sex === "male"}
              onChange={handleSexChange}
              className="form-radio h-5 w-5 text-blue-600"
            />
            <span className="ml-2">Male</span>
          </label>
          <label className="inline-flex items-center mt-2">
            <input
              type="radio"
              value="female"
              checked={sex === "female"}
              onChange={handleSexChange}
              className="form-radio h-5 w-5 text-pink-600"
            />
            <span className="ml-2">Female</span>
          </label>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DemoItem label="Insert Your Birthday">
                <DatePicker
                  label="Insert Your Birthday"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <p>
          my name is {name} I want {goal} I am a {sex} and I
          am {age} years
        </p>
      </div>
    );
  };

  const elements = [
    { image: FitPeople, description: UserName() },
    { image: FitPeople, description: Goals() },
    { image: FitPeople, description: PersonalData() },
  ];
  return <Onboarding elements={elements} />;
};
export default UserData;
