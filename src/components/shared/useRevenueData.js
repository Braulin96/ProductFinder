import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchRecipes = async () => {
  const apiKey = "49552169f7cf4948b4e4b4b65d769356"; // Replace "YOUR_SPOONACULAR_API_KEY" with your actual Spoonacular API key
  const response = await axios.get(
    "https://api.spoonacular.com/recipes/complexSearch",
    {
      params: {
        apiKey: apiKey,
        number: 5, // Specify the number of recipes you want to fetch
        cuisine: 'Asian',
        diet: 'Gluten Free'
        //query: "cuisine", // Replace "YOUR_SEARCH_QUERY" with your actual search query
        // You can add more parameters as needed, such as cuisine, diet, intolerances, etc.
    
      },
    }
  );
  return response.data.results;
};

const useRevenueData = () => {
  const query = useQuery({
    queryFn: fetchRecipes, //We pass the function that does the fetch of the data
    queryKey: ["user-data"], //the key that will identify this request with a unique identity (will give a name for the data)
    //refetchInterval: 60 * 5 * 1000 // in this case it would refresh and update this fetch each 5 minutes
    //retry: false, // used to disable server to retry request
  });
  return query;
};
export default useRevenueData;
