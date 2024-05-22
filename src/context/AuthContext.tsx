import { useState, createContext, FC, ReactNode } from "react";

const MY_AUTH_APP = "my-auth-app";
type AuthContextType = {
  isAuthenticated: string | null;
  currentUser: any;
  Login: (token: string, email: string) => void;
  Logout: () => void;
  updateCurrentUserInformation: (info: any) => void;
};
const AuthContext = createContext<AuthContextType | null>(null);

const AuthContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    window.localStorage.getItem(MY_AUTH_APP),
  );
  const [currentUser, setCurrentUser] = useState(
    () =>
      JSON.parse(window.localStorage.getItem("currentUser") as string) || {},
  );

  const Login = (token: string, email: string) => {
    window.localStorage.setItem(MY_AUTH_APP, token);
    window.localStorage.setItem("email", email);
    setIsAuthenticated(token);
  };

  const Logout = () => {
    window.localStorage.removeItem(MY_AUTH_APP);
    window.localStorage.removeItem("currentUser");
    setIsAuthenticated(null);
    setCurrentUser({});
  };

  const updateCurrentUserInformation = (info: any) => {
    window.localStorage.setItem("currentUser", JSON.stringify(info));
    setCurrentUser(info);
  };

  const value = {
    isAuthenticated,
    currentUser,
    Login,
    Logout,
    updateCurrentUserInformation,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContextProvider };
export default AuthContext;
