import { useState, useEffect } from "react";

export const Counter = () => {
  const [timeFromAppRun, setAppFromAppRun] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setAppFromAppRun((value) => value + 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return <>{timeFromAppRun}</>;
};
