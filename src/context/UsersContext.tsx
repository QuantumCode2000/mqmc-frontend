import { useState, createContext, FC, ReactNode } from "react";

const UsersContext = createContext(null);

const UsersContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState(() =>
    window.localStorage.getItem("user_list")
  );

  
  const updateUserList = (list) => {
    window.localStorage.setItem("user_list", JSON.stringify(list));
    setUsers(list);
  };

  const value = {
    users,
    updateUserList,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export { UsersContextProvider };
export default UsersContext;
