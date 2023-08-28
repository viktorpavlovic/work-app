import { LoginPage } from "./pages/LoginPage/LoginPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { supabase } from "./client";

export const App = () => {
  console.log(supabase);
  return (
    <div className="div-app">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};
