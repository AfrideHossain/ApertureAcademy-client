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
      if (currentUserData && currentUserData.email) {
        fetch(`${import.meta.env.VITE_BACKEND}/jwtSign`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            username: currentUserData.displayName,
            email: currentUserData.email,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("aperture-token", data.token);
          });
      } else {
        localStorage.removeItem("aperture-token");
      }
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
