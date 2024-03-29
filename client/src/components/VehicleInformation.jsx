import React, { useState } from "react";

const VehicleInformation = ({ carsList }) => {
  const [selectedType, setSelectedType] = useState("");
  const [filteredVehicles, setFilteredVehicles] = useState([]);

  // Update filtered vehicles when the selected type changes
  React.useEffect(() => {
    if (selectedType) {
      const filtered = carsList.filter((car) => car.type === selectedType);
      setFilteredVehicles(filtered);
    } else {
      setFilteredVehicles([]);
    }
  }, [selectedType, carsList]);

  // Get unique vehicle types
  const uniqueTypes = [...new Set(carsList.map((car) => car.type))];

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
            onChange={(e) => setSelectedType(e.target.value)}
            value={selectedType}
          >
            <option value="">Select vehicle type</option>
            {uniqueTypes.map((type, index) => (
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
            {filteredVehicles.map((car, index) => (
              <option key={index} value={car.model}>
                {car.model}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default VehicleInformation;
