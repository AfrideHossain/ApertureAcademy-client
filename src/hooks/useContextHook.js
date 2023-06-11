import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

const useContextHook = () => {
  const context = useContext(AuthContext);
  return context;
};

export default useContextHook;
