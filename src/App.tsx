import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage.tsx";
import CentralePage from "./pages/CentralePage.tsx";
import SchemaPage from "./pages/SchemaPage.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map/:centrale" element={<CentralePage />} />
        <Route path="/schema/:centrale" element={<SchemaPage />} />

      </Routes>
    </Router>
  );
};

export default App;
