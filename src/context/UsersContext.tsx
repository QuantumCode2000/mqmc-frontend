import { useState, createContext, FC, ReactNode, useEffect } from "react";

interface UsersContextData {
  users: any;
  updateUserList: (list: any) => void;
}

const UsersContext = createContext<UsersContextData>({
  users: null,
  updateUserList: () => {},
});

const UsersContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try { 
        const token = window.localStorage.getItem("my-auth-app");
        if (!token) return;

        const response = await fetch("http://localhost:3000/api/v1/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Error obteniendo los usuarios");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error en fetchUsers:", error);
      }
    };

    fetchUsers();
  }, []);

  const updateUserList = (list: any) => {
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
