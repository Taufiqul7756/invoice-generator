/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const VehicleInformation = ({ carsList, onVehicleSelection }) => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedCarId, setSelectedCarId] = useState("");

  // console.log("selectedType:", selectedType);
  // console.log("selectedModel:", selectedModel);
  // console.log("selectedCarId:", selectedCarId);

  // Update filtered vehicles when the selected type changes
  React.useEffect(() => {
    // Reset selected model and car ID when type changes
    setSelectedModel("");
    setSelectedCarId("");
  }, [selectedType]);

  // Get unique vehicle types
  const uniqueTypes = [...new Set(carsList.map((car) => car.type))];

  // Handle change in vehicle type selection
  const handleTypeSelection = (e) => {
    const type = e.target.value;
    setSelectedType(type);
    // Call callback function with selected type, model, and car ID
    onVehicleSelection(type, "", "");
  };

  // Handle change in vehicle model selection
  const handleModelSelection = (e) => {
    const model = e.target.value;
    setSelectedModel(model);
    // Find the corresponding car ID based on the selected type and model
    const carId = carsList.find(
      (car) => car.type === selectedType && car.model === model
    )?.id;
    setSelectedCarId(carId || "");
    // Call callback function with selected type, model, and car ID
    onVehicleSelection(selectedType, model, carId);
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
            onChange={handleTypeSelection}
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
            onChange={handleModelSelection}
            value={selectedModel}
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
