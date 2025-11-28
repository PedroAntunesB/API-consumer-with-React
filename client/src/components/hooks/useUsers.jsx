import { useState } from "react";

export function useUsers(obj = {}) {
  const [userData, setUserData] = useState(obj);

  const pickStorage = () => {
    const data = localStorage.getItem("data");
    setUserData(JSON.parse(data));
  };

  const changeStorage = (newData) => {
    localStorage.setItem("data", newData);
    const data = localStorage.getItem("data");
    setUserData(JSON.parse(data));
  };

  return { userData, setUserData, pickStorage, changeStorage };
}
