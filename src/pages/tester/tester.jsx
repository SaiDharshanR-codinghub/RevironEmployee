import React from "react";

const Tester = () => {
  return (
    <div className="page-container">
      <h2>Tester - Product Testing Form</h2>
      <form className="form-box">
        <input type="text" placeholder="Collector Name/ID" />
        <input type="text" placeholder="Product Name" />
        <textarea placeholder="Testing Report (working/non-working parts)"></textarea>
        <input type="text" placeholder="Non-working Parts List" />
        <input type="text" placeholder="Working Parts List" />
        <input type="date" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Tester;
