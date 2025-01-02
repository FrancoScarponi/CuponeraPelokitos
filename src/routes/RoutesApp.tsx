import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../views/Home/Home";
export const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
