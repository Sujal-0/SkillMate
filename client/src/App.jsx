import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAppStore } from "./store";
import { apiClient } from "./lib/api-client";
import { GET_USER_INFO } from "./utils/constants";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Landing from "./pages/Landing";

/* ===================== ROUTE GUARDS ===================== */

const PrivateRoute = ({ children }) => {
  const { userInfo } = useAppStore();
  return userInfo ? children : <Navigate to="/auth" replace />;
};

const AuthRoute = ({ children }) => {
  const { userInfo } = useAppStore();
  return userInfo ? <Navigate to="/home" replace /> : children;
};

const ProfileGuard = ({ children }) => {
  const { userInfo } = useAppStore();

  if (!userInfo) return <Navigate to="/auth" replace />;
  if (!userInfo.profileSetup) return children;

  return <Navigate to="/home" replace />;
};

/* ===================== APP ===================== */

const App = () => {
  const { userInfo, setUserInfo } = useAppStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await apiClient.get(GET_USER_INFO, {
          withCredentials: true,
        });

        if (res.status === 200 && res.data.id) {
          setUserInfo(res.data);
        } else {
          setUserInfo(undefined);
        }
      } catch {
        setUserInfo(undefined);
      } finally {
        setLoading(false);
      }
    };

    if (!userInfo) fetchUser();
    else setLoading(false);
  }, [userInfo, setUserInfo]);

  if (loading) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH */}
        <Route
          path="/auth"
          element={
            <AuthRoute>
              <Auth />
            </AuthRoute>
          }
        />

        {/* HOME */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        {/* PROFILE SETUP */}
        <Route
          path="/profile"
          element={
            <ProfileGuard>
              <Profile />
            </ProfileGuard>
          }
        />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/auth" replace />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
