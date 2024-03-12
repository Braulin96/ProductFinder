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
        <p className="text-sm mt-2">Select one option that is better in your case.</p>
        {answers.map((question) => (
          <a
            className="mt-4 border border-black p-4 w-full"
            key={question.value}
          >
            {question.text}
          </a>
        ))}
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
