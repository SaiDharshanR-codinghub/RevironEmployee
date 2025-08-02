import React, { useState } from "react";

const Recycler = () => {
  const [formData, setFormData] = useState({
    partName: "",
    testerName: "",
    condition: "",
    issueDescription: "",
    remarks: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Data submitted successfully!");
    setFormData({
      partName: "",
      testerName: "",
      condition: "",
      issueDescription: "",
      remarks: "",
      date: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Recycler - Non-Working Parts Form
          </h1>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <div className="space-y-6">
            {/* Part Name */}
            <div>
              <input
                type="text"
                name="partName"
                value={formData.partName}
                onChange={handleChange}
                placeholder="Name of the non-working part"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Tester Name */}
            <div>
              <input
                type="text"
                name="testerName"
                value={formData.testerName}
                onChange={handleChange}
                placeholder="Name of the tester"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Condition */}
            <div>
              <select
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
                required
              >
                <option value="" disabled>
                  Select condition
                </option>
                <option value="Damaged">Damaged</option>
                <option value="Obsolete">Obsolete</option>
                <option value="Recyclable">Recyclable</option>
              </select>
            </div>

            {/* Issue Description */}
            <div>
              <textarea
                name="issueDescription"
                value={formData.issueDescription}
                onChange={handleChange}
                placeholder="Describe the issue with the part"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                required
              />
            </div>

            {/* Remarks */}
            <div>
              <textarea
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                placeholder="Any additional remarks"
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Date */}
            <div>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recycler;
