import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Collector from "./pages/collector/Collector";
import Tester from "./pages/tester/Tester";
import Seller from "./pages/seller/Seller";
import Recycler from "./pages/recycler/Recycler";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collector" element={<Collector />} />
        <Route path="/tester" element={<Tester />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/recycler" element={<Recycler />} />
        <Route
          path="*"
          element={<div style={{ padding: "2rem" }}>Page Not Found</div>}
        />
      </Routes>
    </>
  );
};

export default App;
