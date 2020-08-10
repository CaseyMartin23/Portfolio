import React, { useState, useEffect } from "react";

const List = () => {
  const [list, setList] = useState([]);
  const [emailSuccess, setEmailSuccess] = useState();

  const getList = () => {
    fetch("/getList")
      .then((res) => res.json())
      .then((list) => setList(list));
  };

  // <<<<<<THIS TEST WORKS!!>>>>>
  const sendEmailTest = () => {
    try {
      fetch("/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userFirstName: "acsdvarva",
          userLastName: "arvevaerb",
          userEmail: "earveav",
          emailContent: "earrrrrrrrrrrrrrrve\nasdvwevwv\nwfWCEAWEV  ",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setEmailSuccess(data.text);
          console.log("Ping response->", data.text);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="App">
      <h1>List of Items</h1>
      {list.length ? (
        <div>
          {list.map((item, idex) => {
            return <div key={idex}>{item}</div>;
          })}
        </div>
      ) : (
        <div>
          <h2>No List Items Found</h2>
        </div>
      )}
      <button onClick={sendEmailTest}>Test Emailer!</button>
    </div>
  );
};

export default List;
