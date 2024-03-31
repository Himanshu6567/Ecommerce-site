import React, { useState, createContext } from "react";

export const AlertContext = createContext();

export default function AlertProvider({ children }) {
  let [alert, setAlert] = useState(false);
  const [mgs, setMgs] = useState("");
  const [alertype, setAlertype] = useState("");

  const showAlert = ({ mgs, alertype }) => {
    setMgs(mgs);
    setAlertype(alertype);
  };
  return (
    <AlertContext.Provider
      value={{ alert, mgs, alertype, setAlert, showAlert }}
    >
      {children}
    </AlertContext.Provider>
  );
}
