import React from "react";

function ApisTest() {
  fetch("https://reqres.in/api/users")
    .then((res) => res.json())
    .then((data) => console.log(data)); // converter dados para json type
  return <div>ApisTest</div>;
}

export default ApisTest;
