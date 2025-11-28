import { useUsers } from "../hooks/useUsers";
import { UserContext } from "../context/UserContext";

export function UserProvider({ children }) {
  const { userData, setUserData, pickStorage, changeStorage } = useUsers(
    JSON.parse(localStorage.getItem("data"))
  );
  return (
    <UserContext.Provider
      value={{ userData, setUserData, pickStorage, changeStorage }}
    >
      {children}
    </UserContext.Provider>
  );
}
