import React, { useState, useEffect } from "react";
import axios from "axios"

function ApiReact() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users");
        if (response.status !== 200) {
          throw new Error("Failed to fetch users");
        }
        setUsers(response.data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
        <h2>ApI react</h2>
      {users.map((user) => (
        <div className="mt-8" key={user.id}>
          <p>
            {user.first_name} {user.last_name}
          </p>
          <p> Email: {user.email}</p>
          <img src={user.avatar} alt="Avatar" />
        </div>
      ))}
    </div>
  );
}

export default ApiReact;
