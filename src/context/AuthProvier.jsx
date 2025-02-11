import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import AuthContext from './AuthContext';
import auth from '../firebase/firebase.init';
import { useEffect, useState } from 'react';
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [lodging, setLodging] = useState(true);
  const createuserWithEmailandPass = (email, password) => {
    setLodging(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signUpwithpopup = () => {
    setLodging(true);
    return signInWithPopup(auth, provider);
  };
  const singupWitthgoogle = (email, password) => {
    setLodging(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const updeatProfile = (name, photo) => {
    return updateProfile(auth.current, {
      displayName: name,
      photoURL: photo,
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, current => {
      setLodging(false)
      setUser(current);
      return () => {
        unsubscribe();
      };
    });
  }, []);
  const authIfo = {
    createuserWithEmailandPass,
    signUpwithpopup,
    user,
    lodging,
    logOut,
    updeatProfile,
    setUser,
    singupWitthgoogle,
  };

  return (
    <AuthContext.Provider value={authIfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
