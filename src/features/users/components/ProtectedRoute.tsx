import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

import useAuthenticationCheck from "../hooks/useAuthenticationCheck";

function ProtectedRoute({ children }: PropsWithChildren) {
  const { authenticated, loading } = useAuthenticationCheck();

  if (loading) return <></>;

  return authenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
