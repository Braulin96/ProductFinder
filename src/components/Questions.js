import { useState } from "react";
import Onboarding from "./shared/Onboarding";
import FitPeople from "assets/images/fitPeople.jpeg";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Questions = () => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  //GoalsImput:
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  //-----------------Personal Data
  //sex:
  const [selectedSex, setSelectedSex] = useState(""); // State to store the selected sex
  //const [age, setAge]= useState(null)
  const handleSexChange = (e) => {
    setSelectedSex(e.target.value); // Update the selected sex state
  };
  //DOB
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const [selectedDate, setSelectedDate] = useState(null); // State to store the selected date
  const handleDateChange = (date) => {
    setSelectedDate(date); // Update the selected date state
  };
  const birthdayYear = selectedDate
    ? new Date(selectedDate).getFullYear()
    : null;
  const age = birthdayYear ? currentYear - birthdayYear : null;

  console.log("age:", age);

  const NameImput = () => {
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

  const GoalsImput = () => {
    const answers = [
      {
        text: "Lose Weight",
        value: 0,
        id: "exerciseIntensity_sing",
      },
      {
        text: "Maintain weight",
        value: 1,
        id: "exerciseIntensity_sentences",
      },
      {
        text: "Gain muscle",
        value: 2,
        id: "exerciseIntensity_brokenSentences",
      },
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
              checked={selectedOption === answer.text}
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
              checked={selectedSex === "male"} // Set checked based on selected sex
              onChange={handleSexChange} // Handle change event
              className="form-radio h-5 w-5 text-blue-600"
            />
            <span className="ml-2">Male</span>
          </label>
          <label className="inline-flex items-center mt-2">
            <input
              type="radio"
              value="female"
              checked={selectedSex === "female"} // Set checked based on selected sex
              onChange={handleSexChange} // Handle change event
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
      </div>
    );
  };

  const elements = [
    {
      image: FitPeople,
      title: "",
      description: NameImput(),
    },
    {
      image: FitPeople,
      title: "example 2",
      description: GoalsImput(),
    },
    {
      image: FitPeople,
      title: "example 3",
      description: PersonalData(),
    },
  ];

  return <Onboarding elements={elements} />;
};

export default Questions;
