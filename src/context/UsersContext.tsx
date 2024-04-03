import { useState, createContext, FC, ReactNode } from "react";

interface UsersContextData {
  users: any;
  updateUserList: (list: any) => void;
}

const UsersContext = createContext<UsersContextData>({
  users: null,
  updateUserList: () => {},
});

const UsersContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState(() =>
    window.localStorage.getItem("user_list")
  );

  const updateUserList = (
    list: any
  ) => {
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
