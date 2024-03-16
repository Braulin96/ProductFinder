import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUsers = async () => {
  const response = await axios.get("https://reqres.in/api/users");
  return response.data.data;
};

const useRevenueData = () => {
  const query = useQuery({
    queryFn: fetchUsers, //We pass the function that does the fetch of the data
    queryKey: ["user-data"],//the key that will identify this request with a unique identity (will give a name for the data)
    //refetchInterval: 60 * 5 * 1000 // in this case it would refresh and update this fetch each 5 minutes
    //retry: false, // used to disable server to retry request
  });
  return query
};
export default useRevenueData;
