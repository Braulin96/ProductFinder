import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useQuestionsData from "components/hooks/useQuestionsData";

const useRevenueData = () => {
  const { name } = useQuestionsData(); // Move the hook call inside useRevenueData
  console.log('name:', name)


  const fetchRecipes = async () => {
    try {
      //const response = await axios.get(`https://dummyjson.com/products/category/${name}`);
      const response = await axios.get(`https://dummyjson.com/products`) 
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
