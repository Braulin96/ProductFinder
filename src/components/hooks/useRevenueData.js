import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useQuestionsData from "components/hooks/useQuestionsData";

const useRevenueData = () => {
  const { category } = useQuestionsData(); // Move the hook call inside useRevenueData
  const fetchRecipes = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
      //const response = await axios.get(`https://dummyjson.com/products`) 
      console.log("Response:", response);
      return response.data.products;
    } catch (error) {
      console.error("Error fetching recipes:", error);
      throw error;
    }
  };

  const query = useQuery({
    queryFn: fetchRecipes,
    queryKey: ["user-data"],
  });

  return query;
};

export default useRevenueData;
