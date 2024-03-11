import { useState } from "react";
import Onboarding from "./shared/Onboarding";

const Questions = () => {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Onboarding>
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
