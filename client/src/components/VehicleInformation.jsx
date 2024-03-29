import React, { useState } from "react";

const VehicleInformation = ({ carsList, onVehicleSelection }) => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");

  console.log("selectedType:", selectedType);
  console.log("selectedVehicle:", selectedVehicle);

  // Update filtered vehicles when the selected type changes
  React.useEffect(() => {
    // Reset selected vehicle when type changes
    setSelectedVehicle("");
  }, [selectedType]);

  // Get unique vehicle types
  const uniqueTypes = [...new Set(carsList.map((car) => car.type))];

  // Handle change in vehicle selection
  const handleVehicleSelection = (e) => {
    const selectedModel = e.target.value;
    setSelectedVehicle(selectedModel);
    // Call callback function with selected type and model
    onVehicleSelection(selectedType, selectedModel);
  };

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
            onChange={handleVehicleSelection}
            value={selectedVehicle}
          >
            <option value="">Select vehicle</option>
            {carsList
              .filter((car) => car.type === selectedType)
              .map((car, index) => (
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
