import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      {/* Header (fixed at top) */}
      <Header />

      {/* <main className="mx-auto px-4 sm:px-5 py-6 w-full max-w-6xl box-border"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      {/* </main> */}

      <Footer />
    </Router>
  );
};

export default App;
