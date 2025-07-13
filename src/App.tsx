import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MembershipPage from "./pages/MembershipPage";

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans antialiased bg-background">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<MembershipPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
