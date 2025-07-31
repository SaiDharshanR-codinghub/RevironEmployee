import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to Reviron Warehouse</h1>
        <p>Track, Test, and Trade your electronic waste responsibly.</p>
        <button onClick={() => (window.location.href = "/collector")}>
          Start Collecting
        </button>
      </section>

      <section className="features">
        <div className="feature-box">
          <h3>👷 Collector</h3>
          <p>Register and update e-waste collected from various locations.</p>
        </div>
        <div className="feature-box">
          <h3>🔬 Tester</h3>
          <p>Analyze the working and non-working components.</p>
        </div>
        <div className="feature-box">
          <h3>🛍️ Seller</h3>
          <p>Upload refurbished or reusable components to the marketplace.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
