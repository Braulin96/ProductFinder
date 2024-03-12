import { useState, useEffect } from "react";
import Onboarding from "./shared/Onboarding";
import useQuestionsData from "./hooks/useQuestionsData";
import FitPeople from "assets/images/fitPeople.jpeg";

const Questions = () => {
  const { showNext, setShowNext } = useQuestionsData();
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

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
    return (
      <div className="">
        <label className="text-xl"> Thanks {name} , Now your goals.</label>
        <p>Select up to 3</p>
        <input
          placeholder="type your name..."
          type="text"
          className="mt-6 w-full rounded-lg border border-gray-400 px-4 py-2"
        />
      </div>
    );
  };

  const RaisonImput = () => {
    return (
      <div className="">
        <label className="text-xl"> What is the raison for losing weight</label>
        <p>Select up to 3</p>
        <input
          placeholder="type your name..."
          type="text"
          className="mt-6 w-full rounded-lg border border-gray-400 px-4 py-2"
        />
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
      description: RaisonImput(),
    },
  ];

  return <Onboarding elements={elements} />;
};

export default Questions;
