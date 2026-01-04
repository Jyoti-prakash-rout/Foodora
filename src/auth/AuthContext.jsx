import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubsribe();
  }, []);

  return (
    <authContext.Provider value={{ user }}>
      {!loading && children}
    </authContext.Provider>
  );
};

// Custom hook
export const useAuth = () => {
  return useContext(authContext);
};
