import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MembershipPage from "./pages/MembershipPage";
import { Toaster } from "sonner";

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans antialiased bg-background">
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<MembershipPage />} />
          <Route path="/dashboard" element={<MembershipPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
