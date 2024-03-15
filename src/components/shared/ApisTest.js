import React from "react";

function ApisTest() {
  fetch("https://reqres.in/api/users/1000")
    .then((res) => {
      if (res.ok) {
        return res.json(); // convert to JSON and return
      } else {
        console.log("Unsuccess");
        //throw new Error("Unsuccessful request"); 
      }
    })
    .then((data) => {
      console.log(data); // log the JSON data
      // console.log(data.data[0].first_name); // to get the data inside the 'data' property at position 0 and then 'first_name'
    })
    .catch((err) => console.log(err)); // will only execute if there's an error during the network request itself 

  return <div>ApisTest</div>;
}

export default ApisTest;
