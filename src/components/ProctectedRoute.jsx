import { useEffect, useState } from "react";
import { account } from "../appwrite";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    account.get()
      .then((res) => {
        setUser(res);
        setLoading(false);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
      });
  }, []);

  if (loading) return <h3>Loading...</h3>;

  if (!user) return <Navigate to="/login" />;

  return children;
}