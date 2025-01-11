import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useState } from "react";
import App from "../App";

function ProtectedPage() {
  return <h1>Welcome to the Protected Page!</h1>;
}

function HomePage() {
  return <h1>Welcome to the Home Page!</h1>;
}

export default function Main() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/login"
        element={<App setIsAuthenticated={setIsAuthenticated} />}
      />
      <Route
        path="/protected"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ProtectedPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
