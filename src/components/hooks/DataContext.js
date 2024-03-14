// DataContext.js
import React, { createContext, useContext } from "react";
import useQuestionsData from "components/hooks/useQuestionsData";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const data = useQuestionsData();

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);