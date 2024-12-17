import React from "react";
import useFetch from "./customHooks/UseFetch";

const App = () => {
  const [data] = useFetch("https://dummyjson.com/todos?limit=10");

  console.log(data, "dta");

  return (
    <div>
      {data &&
        data.todos.map((item) => {
          return (
            <p key={item.id}>
              <b>{item.todo}</b>
            </p>
          );
        })}
      {/* <p>jhhhkhkhkhk</p> */}
    </div>
  );
};

export default App;
