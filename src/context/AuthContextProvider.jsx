import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // firebase getAuth
  const auth = getAuth(app);

  // Context states
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  /****************************
   ** Auth related functions **
   ****************************/

  // Create user
  const registerUserWithPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /****************************************/

  // Auth state change observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUserData) => {
      setUser(currentUserData);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

  //auth context values
  const authContextValues = {
    user,
    loading,
    registerUserWithPass,
  };
  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
