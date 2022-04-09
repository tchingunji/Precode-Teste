import { createContext, FC, useState } from "react";
import { Client } from "../models/Client";

type AuthContextType = {
  clientLoggedIn: Client | undefined;
  logIn: (client: Client) => void;
  signOut: () => void;
};

export const AuthContext = createContext({} as AuthContextType);

const AuthProvider: FC = ({ children }) => {
  const [clientLoggedIn, setClientLoggedIn] = useState<Client | undefined>(
    undefined
  );

  const logIn = (client: Client) => {
    setClientLoggedIn(client);
  };

  const signOut = () => setClientLoggedIn(undefined);

  return (
    <AuthContext.Provider value={{ clientLoggedIn, logIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
