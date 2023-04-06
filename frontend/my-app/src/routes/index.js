import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Landing } from "../pages/Landing";
import { Head } from "../pages/Parts/Head";
import { Chest } from "../pages/Parts/Chest";
import { Body } from "../pages/Parts/Body";
import { Stomach } from "../pages/Parts/Stomach";
import { Intimate } from "../pages/Parts/Intimate";
import { Patients } from "../pages/Patients";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/head" element={<Head />} />
        <Route path="/chest" element={<Chest />} />
        <Route path="/body" element={<Body />} />
        <Route path="/stomach" element={<Stomach />} />
        <Route path="/Intimate" element={<Intimate />} />
        <Route path="/patients" element={<Patients />} />
      </Routes>
    </Router>
  );
};
