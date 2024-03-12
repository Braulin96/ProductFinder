import { useState } from "react";

const useQuestionsData = () => {
  const [showNext, setShowNext] = useState(false);
  return {
    showNext,
    setShowNext,
  };
};
export default useQuestionsData;
