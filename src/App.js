import React, { useEffect, useState } from "react";
import "./styles.css";
import useFetchTasks from "./useFetchTasks";

export default function App() {
  const { tasks, isLoading, error } = useFetchTasks(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
    <div className="App">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        tasks.map((task) => <h4 key={task.id}>{task.title}</h4>)
      )}
      {error ? <pre></pre> : null}
    </div>
  );
}
