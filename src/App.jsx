import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <div className=" mx-auto  ">
        <Footer />
        <Routes>
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
