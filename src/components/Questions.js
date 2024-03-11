import { useState } from "react";
import Onboarding from "./shared/Onboarding";

const Questions = () => {
  const [name, setName] = useState("");
  return (
    <Onboarding>
      <h2 className="pb-2" style={{ fontSize: "1.6rem" }}>
        What is your first name?
      </h2>
      <input
      onChange={(e)=>setName(e.target.value)}
        type="text"
        className="px-4 py-2 rounded-lg border-tertiary-gray"
        placeholder="type your name..."
      />
      <p style={{ fontSize: "1.1rem" }}>{name}</p>
    </Onboarding>
  );
};
export default Questions;
