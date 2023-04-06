import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Landing } from "../pages/Landing";
import { Head } from "../pages/Head";
import { Patients } from "../pages/Patients";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/head" element={<Head />} />
        <Route path="/patients" element={<Patients />} />
      </Routes>
    </Router>
  );
};
