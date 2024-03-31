import React, { useContext } from "react";
import { AlertContext } from "../Context/AlertContext";

function Alert() {
  const { alert, mgs, alertype } = useContext(AlertContext);

  return (
    <div>
      {alert && (
        <div className="bg-green-300  ">
          <div className="flex space-x-6 px-10 py-3 items-center">
            <h1 className="text-white text-2xl">{alertype}</h1>
            <p className="text-white">{mgs}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Alert;
