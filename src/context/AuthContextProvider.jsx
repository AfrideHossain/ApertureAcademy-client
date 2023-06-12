import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // firebase getAuth
  const auth = getAuth(app);
  // auth providers
  const providerGoogle = new GoogleAuthProvider();

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
  // Login user
  const loginUserWithPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Log out user
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  // sign in with google
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGoogle);
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
    loginUserWithPass,
    logOutUser,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
