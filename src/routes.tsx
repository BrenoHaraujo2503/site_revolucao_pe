import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<LandingPage/>} />
      </Routes>
    </Router>
  )
}