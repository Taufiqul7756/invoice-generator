/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const CustomerDetails = ({ onInputChange, onUserChange }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

  // console.log("token :", token);
  console.log("currentUser from CustomerDetails :", currentUser);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);

      // Decode the token to get user details
      const decodedToken = jwtDecode(storedToken);
      setCurrentUser(decodedToken.user);
    }
  }, []);

  useEffect(() => {
    // Check if all fields are filled
    const filled =
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phone;

    setAllFieldsFilled(filled);
  }, [formData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear previous timer
    if (timerId) {
      clearTimeout(timerId);
    }

    // Set a new timer to trigger the post request
    const newTimerId = setTimeout(() => {
      if (allFieldsFilled && formData.phone) {
        postData();
      }
    }, 3000);

    setTimerId(newTimerId);
  };

  const postData = async () => {
    try {
      const response = await fetch(
        "https://invoice-generator-api-git-main-taufiqul-islams-projects.vercel.app/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        const { token } = responseData;
        if (token) {
          localStorage.setItem("token", token);
          setToken(token);

          // Decode the token to get user details
          const decodedToken = jwtDecode(token);
          setCurrentUser(decodedToken.user);
          onUserChange(decodedToken.user); // Pass currentUser to parent component
        }
        console.log("User data saved successfully");
      } else {
        console.error("Failed to save user data");
      }
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  return (
    <div>
      <div className="flex flex-col space-y-4">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium ">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="mt-1 p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter first name"
            required
          />
        </div>
        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium ">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="mt-1 p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter last name"
            required
          />
        </div>
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium ">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter email"
            required
          />
        </div>
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium ">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-1 p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter phone number"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
