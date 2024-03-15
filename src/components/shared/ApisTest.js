import React, { useState, useEffect } from "react";

function ApisTest() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
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

export default ApisTest;
