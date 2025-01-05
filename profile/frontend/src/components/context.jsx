import { createContext, useState } from "react";

export const Context = createContext(null);

function ContextProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("userItem") || null);
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
}

export default ContextProvider;
