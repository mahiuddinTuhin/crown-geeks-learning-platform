import React, { createContext, useState } from "react";
import { app } from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
export const MainContext = createContext();
export const auth = getAuth(app);

const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

//  user context started here

const UserContex = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateNameImage = (name, url) => {
    updateProfile(user, {
      displayName: name,
      photoURL: url,
    })
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {})
      .catch((error) => console.error(error));
  };

  const githubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {})
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  const info = {
    darkMode,
    setDarkMode,
    createUser,
    googleSignIn,
    githubSignIn,
    user,
    updateNameImage,
  };
  return (
    <div>
      <MainContext.Provider value={info}>{children}</MainContext.Provider>
    </div>
  );
};

export default UserContex;
