import React, { createContext, useState } from "react";
import { app } from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
export const MainContext = createContext();
export const auth = getAuth(app);

const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

//  user context started here

const UserContex = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);

    return signInWithPopup(auth, googleProvider);
  };

  const githubSignIn = () => {
    setLoading(true);

    return signInWithPopup(auth, githubProvider);
  };

  const updateUserInfo = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const info = {
    darkMode,
    loading,
    setLoading,
    logOut,
    updateUserInfo,
    setDarkMode,
    createUser,
    googleSignIn,
    githubSignIn,
    setUser,
    user,
  };
  return (
    <div>
      <MainContext.Provider value={info}>{children}</MainContext.Provider>
    </div>
  );
};

export default UserContex;
