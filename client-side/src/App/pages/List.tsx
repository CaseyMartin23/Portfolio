import React, { useState, useEffect } from "react";

const List = () => {
  const [list, setList] = useState([]);

  const getList = () => {
    fetch("/getList")
      .then((res) => res.json())
      .then((list) => setList(list));
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
    </div>
  );
};

export default List;
