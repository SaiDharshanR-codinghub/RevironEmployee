import React from "react";

const Collector = () => {
  return (
    <div className="page-container">
      <h2>Update Collection</h2>
      <form className="form-box">
        <input type="text" placeholder="Collector Name/ID" />
        <input type="number" placeholder="SlotID" />
        <input type="text" placeholder="Location" />
        <input type="text" placeholder="E-Waste Item" />
        <input type="number" placeholder="Quantity" />
        <button type="submit">Submit</button>
      </form>

      <div className="tracking-box">
        <h3>Tracking QR Code</h3>
        <p>Total Items Collected: 2</p>
      </div>

      <div className="history-box">
        <h4>Collection History</h4>
        <p>1/6/2024 | Location: Bangalore | Item: Smartphone | Quantity: 1</p>
      </div>
    </div>
  );
};

export default Collector;
