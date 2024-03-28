// CustomerDetails.js

import React from "react";

const CustomerDetails = () => {
  return (
    <div>
      <div className="flex flex-col space-y-4">
        {/* First Name */}
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter first name"
          />
        </div>
        {/* Last Name */}
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter last name"
          />
        </div>
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter email"
          />
        </div>
        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter phone number"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
