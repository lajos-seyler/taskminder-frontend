import { useEffect, useState } from "react";

import api, { refreshAccessToken } from "../../../utils/api";
import User from "../interfaces/User";
import useAuthStore from "./useAuthStore";

const useAuthenticationCheck = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const { token: accessToken, setToken, setUser } = useAuthStore();

  useEffect(() => {
    const checkAuthentication = async () => {
      if (!accessToken) {
        try {
          const newAccessToken = await refreshAccessToken();
          setToken(newAccessToken);

          const response = await api.get("api/users/me");
          const user = response.data as User;
          setUser(user);

          setAuthenticated(!!newAccessToken);
        } catch (error) {
          console.error("Failed to refresh access token:", error);
          setAuthenticated(false);
        }
      } else {
        setAuthenticated(true);
      }

      setLoading(false);
    };

    checkAuthentication();
  }, [accessToken, setToken, setUser]);

  return { authenticated, loading };
};

export default useAuthenticationCheck;
