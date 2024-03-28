import React from "react";

const VehicleInformation = () => {
  return (
    <div>
      <div className="flex flex-col space-y-4 ">
        {/* Vehicle Type */}
        <div>
          <label
            htmlFor="vehicleType"
            className="block text-sm font-medium text-gray-700"
          >
            Vehicle Type
          </label>
          <select
            id="vehicleType"
            name="vehicleType"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="">Select vehicle type</option>
            {/* Add options for vehicle types */}
          </select>
        </div>
        {/* Vehicle */}
        <div>
          <label
            htmlFor="vehicle"
            className="block text-sm font-medium text-gray-700"
          >
            Vehicle
          </label>
          <select
            id="vehicle"
            name="vehicle"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="">Select vehicle</option>
            {/* Add options for vehicles */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default VehicleInformation;
