import React from "react";

const VehicleInformation = ({ carsList }) => {
  console.log("carsList from Vehicle info compo:", carsList);
  const vehicleTypes = [...new Set(carsList.map((car) => car.type))];
  const vehicleModels = [...new Set(carsList.map((car) => car.model))];

  return (
    <div>
      <div className="flex flex-col space-y-4 ">
        {/* Vehicle Type */}
        <div>
          <label htmlFor="vehicleType" className="block text-sm font-medium ">
            Vehicle Type <span className="text-red-500">*</span>
          </label>
          <select
            id="vehicleType"
            name="vehicleType"
            className="mt-1 p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="">Select vehicle type</option>
            {vehicleTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        {/* Vehicle */}
        <div>
          <label htmlFor="vehicle" className="block text-sm font-medium ">
            Vehicle <span className="text-red-500">*</span>
          </label>
          <select
            id="vehicle"
            name="vehicle"
            className="mt-1 p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="">Select vehicle</option>
            {vehicleModels.map((model, index) => (
              <option key={index} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default VehicleInformation;
