import { useState, useEffect } from "react";
import Onboarding from "./shared/Onboarding";
import useQuestionsData from "./hooks/useQuestionsData";
import FitPeople from "assets/images/fitPeople.jpeg";

const NameImput = () => {
  return (
    <div className="">
      <label className="text-xl"> What is you first name</label>
      <input placeholder="type your name..." type="text" className="mt-6 w-full rounded-lg border border-gray-400 px-4 py-2" />
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
    description: "description for example 2",
  },
  {
    image: FitPeople,
    title: "example 3",
    description: "description for example 3",
  },
  {
    image: FitPeople,
    title: "example 4",
    description: "description for example 4",
  },
];

const Questions = () => {
  const { showNext, setShowNext } = useQuestionsData();
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Onboarding elements={elements}>
      <label
        htmlFor="nameInput"
        className="pb-2"
        style={{ fontSize: "1.6rem" }}
      >
        What is your first name?
      </label>
      <input
        id="nameInput"
        type="text"
        value={name}
        onChange={handleNameChange}
        className="px-4 py-2 rounded-lg border-tertiary-gray"
        placeholder="Type your name..."
      />
      <p style={{ fontSize: "1.1rem" }}>{name}</p>
    </Onboarding>
  );
};

export default Questions;
