import { useState, useEffect } from "react";

const useFetchTasks = (url, congif = {}) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url, congif)
      .then((response) => response.json())
      .then((json) => setTasks(json))
      .catch((err) => {
        setError(err);
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return { tasks, isLoading, error };
};

export default useFetchTasks;
