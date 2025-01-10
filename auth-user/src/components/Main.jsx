import { Routes, Route } from "react-router-dom";
import App from "../App";

function ProtectedPage() {
  return <h1>Welcome to the Protected Page!</h1>;
}

function HomePage() {
  return <h1>Welcome to the Home Page!</h1>;
}

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/protected" element={<ProtectedPage />} />
      <Route path="/login" element={<App />} />
    </Routes>
  );
}
