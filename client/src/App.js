/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import AdditionalCharges from "./components/AdditionalCharges";
import ChargesSummary from "./components/ChargesSummary";
import CustomerDetails from "./components/CustomerDetails";
import ReservationDetailsForm from "./components/ReservationDetailsForm";
import VehicleInformation from "./components/VehicleInformation";
import "./index.css";
import Print from "./components/print/Print.jsx";
import { useReactToPrint } from "react-to-print";

function App() {
  const printRef = useRef();
  const [carsList, setCarsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reservationDuration, setReservationDuration] = useState("");
  const [reservationRemainingDays, setReservationRemainingDays] = useState("");
  const [reservationWeeks, setReservationWeeks] = useState("");

  const [selectedVehicleType, setSelectedVehicleType] = useState("");
  const [selectedVehicleId, setSelectedVehicleId] = useState("");
  const [currentUser, setCurrentUser] = useState(() => {
    // Initialize currentUser from local storage or default to null
    const storedUser = localStorage.getItem("currentUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [reservationId, setReservationId] = useState("");

  const [customerData, setCustomerData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [additionalCharges, setAdditionalCharges] = useState({
    collisionDamageWaiver: false,
    liabilityInsurance: false,
    rentalTax: false,
  });

  useEffect(() => {
    fetch("https://exam-server-7c41747804bf.herokuapp.com/carsList")
      .then((response) => response.json())
      .then((data) => {
        setCarsList(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cars list:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Update local storage when currentUser changes
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  // Callback function to receive duration from child component
  const handleDurationChange = (duration, remainingDays, weeks) => {
    setReservationDuration(duration);
    setReservationRemainingDays(remainingDays);
    setReservationWeeks(weeks);
  };

  // Callback function to receive selected vehicle type and filtered vehicles from child component
  const handleVehicleSelection = (type, vehicles, id) => {
    setSelectedVehicleType(type);
    setFilteredVehicles(vehicles);
    setSelectedVehicleId(id);
  };

  const handleInputChange = (data) => {
    setCustomerData(data);
  };

  const handleUserChange = (user) => {
    setCurrentUser(user);
  };

  // Function to handle checkbox state changes
  const handleCheckboxChange = (name, value) => {
    setAdditionalCharges({
      ...additionalCharges,
      [name]: value,
    });
  };

  // remove token from local storage and reload page
  const handleRemoveToken = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    window.location.reload();
  };
  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    if (!currentUser) {
      setReservationId("");
    }
  }, [currentUser]);

  const handleReservationIdChange = (newReservationId) => {
    setReservationId(newReservationId);
  };

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <div className="lg:p-16 sm:p-5 md:p-5 bg-slate-200">
      <div className="bg-white">
        {/* navbar */}
        <div className="flex justify-between items-center py-4 px-4 sm:py-10 sm:px-10">
          <h1 className="font-bold text-2xl">Reservation</h1>
          <span>
            You are logged in as:{" "}
            <span className="text-green-500">
              {currentUser ? currentUser.firstName : ""}
            </span>
          </span>
          {currentUser && (
            <button
              onClick={handleRemoveToken}
              className="ml-4 border rounded-md bg-gray-500 py-2 px-2 text-red-500 font-lg hover:bg-black"
            >
              Remove
            </button>
          )}

          <button
            onClick={handlePrint}
            className="border rounded-md bg-blue-500 py-2 px-2 text-white font-md hover:bg-black"
          >
            Print / Download
          </button>

          <div ref={printRef} className="WMessage">
            <Print />
          </div>
        </div>
        {/* Form Section */}
        <div className="flex flex-col md:flex-row ">
          {/* Left Section */}
          <div className="flex-grow mb-10">
            <div className="grid gap-6 px-5">
              <h2 className="font-bold border-b-2 border-indigo-200 pb-2">
                Reservation Details
              </h2>
              <div className="grid gap-4 rounded-md border-solid border-2 border-indigo-200 p-4">
                <ReservationDetailsForm
                  onDurationChange={handleDurationChange}
                  currentUser={currentUser}
                  onReservationIdChange={handleReservationIdChange}
                />
              </div>
              <h2 className="font-bold border-b-2 border-indigo-200 pb-2">
                Vehicle Information
              </h2>
              <div className="grid gap-4 rounded-md border-solid border-2 border-indigo-200 p-4">
                <VehicleInformation
                  carsList={carsList}
                  onVehicleSelection={handleVehicleSelection}
                />
              </div>
            </div>
          </div>
          {/* Middle Section */}
          <div className="flex-grow mt-6 md:mt-0">
            <div className="grid gap-6 px-2">
              <h2 className="font-bold border-b-2 border-indigo-200 pb-2">
                Customer Information
              </h2>
              <div className="grid gap-4 rounded-md border-solid border-2 border-indigo-200 p-4">
                <CustomerDetails
                  onInputChange={handleInputChange}
                  onUserChange={handleUserChange}
                />
              </div>
              <h2 className="font-bold border-b-2 border-indigo-200 pb-2">
                Additional Charges
              </h2>
              <div className="grid gap-4 rounded-md border-solid border-2 border-indigo-200 p-4">
                <AdditionalCharges
                  additionalCharges={additionalCharges}
                  onCheckboxChange={handleCheckboxChange}
                />
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="flex-grow mt-6 md:mt-0 px-2 ">
            <h2 className="font-bold border-b-2 border-indigo-200 pb-2">
              Charges Summary
            </h2>
            <div className="rounded-md border-solid border-2 border-indigo-200 p-4 mt-4">
              <ChargesSummary
                customerData={customerData}
                reservationDuration={reservationDuration}
                selectedVehicleType={selectedVehicleType}
                filteredVehicles={filteredVehicles}
                additionalCharges={additionalCharges}
                selectedVehicleId={selectedVehicleId}
                carsList={carsList}
                reservationWeeks={reservationWeeks}
                reservationRemainingDays={reservationRemainingDays}
                currentUser={currentUser}
                reservationId={reservationId}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
