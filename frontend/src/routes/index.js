import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Landing } from "../pages/Landing";
import { Head } from "../pages/Parts/Head";
import { Chest } from "../pages/Parts/Chest";
import { Body } from "../pages/Parts/Body";
import { Stomach } from "../pages/Parts/Stomach";
import { Intimate } from "../pages/Parts/Intimate";
import { Consult } from "../pages/Patients/Consult";
import { Create } from "../pages/Patients/Create";
import { Result } from "../pages/Result";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/head" element={<Head />} />
        <Route path="/chest" element={<Chest />} />
        <Route path="/body" element={<Body />} />
        <Route path="/stomach" element={<Stomach />} />
        <Route path="/intimate" element={<Intimate />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/create" element={<Create />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
};
