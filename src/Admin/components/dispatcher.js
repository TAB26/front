import React, { useState } from "react";
import "./VehicleForm.css";

const DispatcherRegistration = () => {
  const [formData, setFormData] = useState({
    dispatcherFullName: {},
    dispatcherUsername: "",
    address: "",
    phoneNo: "",
    email: "",
    password: "",
  });

  const handleReset = () => {
    setFormData({
      dispatcherFullName: {},
      dispatcherUsername: "",
      address: "",
      phoneNo: "",
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://fleet-administration.onrender.com/api/dispatchers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Trip report sent successfully");
        window.alert("Registered");

        // Reset form fields
        setFormData({
          dispatcherFullName: {},
          dispatcherUsername: "",
          address: "",
          phoneNo: "",
          email: "",
          password: "",
        });
      } else {
        throw new Error("Error sending trip report");
      }
    } catch (error) {
      console.error("Error sending trip report:", error);
      window.alert("Error");
    }
  };

  return (
    <div className="lubricant-form-container">
      <h2>dispatcher Registration form</h2>
      <form onSubmit={handleSubmit}>
        {/* Existing form fields */}
        {/* ... */}

        <div className="form-group">
          <label htmlFor="dispatcherUsername"> username:</label>
          <input
            type="text"
            id="dispatcherUsername"
            name="dispatcherUsername"
            value={formData.dispatcherUsername}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dispatcherFullName.firstName">First Name:</label>
          <input
            type="text"
            id="dispatcherFullName.firstName"
            name="dispatcherFullName.firstName"
            value={formData.dispatcherFullName.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dispatcherFullName.lastName">Last Name:</label>
          <input
            type="text"
            id="dispatcherFullName.lastName"
            name="dispatcherFullName.lastName"
            value={formData.dispatcherFullName.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo">phone number:</label>
          <input
            type="text"
            id="phoneNo"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"> password:</label>
          <input
            type="text"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit button */}
        <button type="submit">register</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default DispatcherRegistration;
