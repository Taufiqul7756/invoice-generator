import React, { useState, useEffect } from "react";
import axios from "axios";

const VehicleInformation = () => {
  const [carData, setCarData] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);

  console.log("carData:", carData);
  // Fetch car data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://exam-server-7c41747804bf.herokuapp.com/carsList"
        );
        setCarData(response.data.data);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };
    fetchData();
  }, []);

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
            {/* Add options for vehicle types */}
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
            {/* Add options for vehicles */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default VehicleInformation;
