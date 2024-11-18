import "bootstrap/dist/css/bootstrap.min.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import ProtectedRoute from "./features/users/components/ProtectedRoute";
import useAuthenticationCheck from "./features/users/hooks/useAuthenticationCheck";
import ActivateUser from "./pages/ActivateUser";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import Tasks from "./pages/Tasks";
import AppLayout from "./ui/AppLayout";

const queryClient = new QueryClient();

function App() {
  const { authenticated, loading } = useAuthenticationCheck();

  if (loading) return;

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to="/login" />} />
          <Route
            path="login"
            element={authenticated ? <Navigate to="/app" /> : <Login />}
          />
          <Route path="register" element={<Register />} />
          <Route
            path="registration-success"
            element={<RegistrationSuccess />}
          />
          <Route
            path="users/activate/:uuid/:token"
            element={<ActivateUser />}
          />

          <Route
            path="/app"
            element={
              authenticated ? (
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              ) : (
                <Navigate to="/" />
              )
            }
          >
            <Route path="" element={<Dashboard />} />
            <Route path="tasks" element={<Tasks />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
