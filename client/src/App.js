import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoadingScreen from "./helper/LoadingScreen";
import CancelPage from "./pages/Cancel-page";
import CompletedPage from "./pages/Completed-page";
import CreatePage from "./pages/Create-page";
import DashboardPage from "./pages/Dashboard-page";
import LoginPage from "./pages/Login-page";
import NewPage from "./pages/New-page";
import ProfilePage from "./pages/Profile-page";
import ProgressPage from "./pages/Progress-page";
import RegistrationPage from "./pages/Registration-page";
import { getToken } from "./helper/SessionHelper";

function App() {
  if (getToken()) {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<DashboardPage />} />
            <Route exact path="/create" element={<CreatePage />} />
            <Route exact path="/new" element={<NewPage />} />
            <Route exact path="/completed" element={<CompletedPage />} />
            <Route exact path="/profile" element={<ProfilePage />} />
            <Route exact path="/progress" element={<ProgressPage />} />
            <Route exact path="/canceled" element={<CancelPage />} />
          </Routes>
        </BrowserRouter>
        <LoadingScreen />
      </div>
    );
  } else {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Navigate to="/login" replace />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegistrationPage />} />
          </Routes>
        </BrowserRouter>
        <LoadingScreen />
      </div>
    );
  }
}

export default App;
