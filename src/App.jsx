import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Allproject from "./pages/Allproject";
import Description from "./pages/Description";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Allproject />} />
        <Route
          exact
          path="/projects/project-description/:id"
          element={<Description />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
