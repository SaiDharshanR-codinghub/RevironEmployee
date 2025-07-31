import React from "react";

const Seller = () => {
  return (
    <div className="page-container">
      <h2>Seller - Upload Refurbished Product</h2>
      <form className="form-box">
        <input type="text" placeholder="Tester Name/ID" />
        <input type="text" placeholder="Product Name" />
        <input type="text" placeholder="Verified Working parts list" />
        <input type="text" placeholder="Verified Non-Working parts list" />
        <input type="date" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Seller;
