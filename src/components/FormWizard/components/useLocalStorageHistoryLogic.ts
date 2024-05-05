import { useState, useEffect } from "react";

import { formattedTimestamp } from "../../../utills/dateHelpers";

export const useLocalStorageHistoryLogic = (watchedName: string) => {
  console.log(watchedName, "watchedName");
  const [nameHistory, setNameHistory] = useState<
    { value: string; timestamp: string }[]
  >([]);
  const [getItem, setGetItem] = useState(false);

  const handleGetItem = () => setGetItem((prevState) => !prevState);

  const saveNameHistoryToLocalStorage = () => {
    localStorage.setItem("nameHistory", JSON.stringify(nameHistory));
  };

  const handleNameBlur = () => {
    if (watchedName.trim() !== "") {
      setNameHistory((prevHistory) => [
        ...prevHistory,
        { value: watchedName, timestamp: formattedTimestamp },
      ]);
      saveNameHistoryToLocalStorage();
    }
  };

  useEffect(() => {
    if (nameHistory.length > 0) {
      localStorage.setItem("nameHistory", JSON.stringify(nameHistory));
    }
  }, [nameHistory]);

  useEffect(() => {
    const savedNameHistory = localStorage.getItem("nameHistory");
    if (savedNameHistory && getItem) {
      setNameHistory(JSON.parse(savedNameHistory));
    }
  }, [getItem]);

  return {
    getItem,
    nameHistory,
    handleGetItem,
    handleNameBlur,
  };
};
