import { useContext } from "react";
import { GlobalContext } from ".";

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within GlobalContextProvider",
    );
  }

  return context;
};
