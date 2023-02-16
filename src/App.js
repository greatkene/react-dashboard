import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Item2 from "./pages/Item2";
import Item3 from "./pages/Item3";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/item2" element={<Item2 />} />
        <Route path="/item3" element={<Item3 />} />
      </Routes>
    </Router>
  );
};

export default App;
