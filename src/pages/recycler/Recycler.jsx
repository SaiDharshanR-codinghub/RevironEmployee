import React, { useState } from "react";

const Recycler = () => {
  const [formData, setFormData] = useState({
    partName: "",
    testerName: "",
    condition: "",
    issueDescription: "",
    remarks: "",
    image: null,
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files && files[0]) {
      setFormData({
        ...formData,
        image: files[0],
        imageUrl: URL.createObjectURL(files[0]),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
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
      image: null,
      imageUrl: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-[#6F9674]">
          Recycle Non-Working Part
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="partName"
            value={formData.partName}
            onChange={handleChange}
            placeholder="Name of the non-working part"
            required
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-[#73B87C]"
          />
          <input
            type="text"
            name="testerName"
            value={formData.testerName}
            onChange={handleChange}
            placeholder="Name of the tester"
            required
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-[#73B87C]"
          />
          <select
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg shadow-sm text-gray-700"
          >
            <option value="" disabled>
              Select condition
            </option>
            <option value="Damaged">Damaged</option>
            <option value="Obsolete">Obsolete</option>
            <option value="Recyclable">Recyclable</option>
          </select>
          <textarea
            name="issueDescription"
            value={formData.issueDescription}
            onChange={handleChange}
            placeholder="Describe the issue with the part"
            required
            className="w-full p-3 border rounded-lg shadow-sm resize-none focus:outline-[#73B87C]"
            rows="4"
          />
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            placeholder="Any additional remarks"
            className="w-full p-3 border rounded-lg shadow-sm resize-none focus:outline-[#73B87C]"
            rows="2"
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {formData.imageUrl && (
            <img
              src={formData.imageUrl}
              alt="Preview"
              className="mt-3 w-full h-40 object-cover rounded"
            />
          )}
          <button
            type="submit"
            className="w-full bg-[#73B87C] hover:bg-[#6F9674] text-white py-3 rounded-lg transition-all duration-300"
          >
            Submit to Recycler
          </button>
        </form>
      </div>
    </div>
  );
};

export default Recycler;
