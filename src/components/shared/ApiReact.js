import React from "react";
import useUsersData from "./useUsersData";

function ApiReact() {
  const { data, isLoading, isError } = useUsersData();
  // isLoading and isError you do not need to declare, automatically from react-query

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <h2>API React</h2>
      {data.map((user) => (
        <div className="mt-8" key={user.id}>
          <p>
            {user.first_name} {user.last_name}
          </p>
          <p>Email: {user.email}</p>
          <img src={user.avatar} alt="Avatar" />
        </div>
      ))}
    </div>
  );
}

export default ApiReact;
