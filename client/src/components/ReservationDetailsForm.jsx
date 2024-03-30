import React, { useState, useEffect } from "react";

const ReservationDetailsForm = ({
  onDurationChange,
  currentUser,
  onReservationIdChange,
}) => {
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [duration, setDuration] = useState("");
  const [reservationId, setReservationId] = useState("");

  console.log("currentUser from reservation", currentUser);
  console.log("reservationId: ", reservationId);

  // Calculate reservationId whenever currentUser changes
  useEffect(() => {
    if (currentUser) {
      const newReservationId = currentUser.firstName + "_" + currentUser._id;
      setReservationId(newReservationId);
      // Send reservationId to App.js
      onReservationIdChange(newReservationId);
    }
  }, [currentUser, onReservationIdChange]);

  // console.log("duration from child", duration);

  // Function to handle changes in the pickup date input
  const handlePickupDateChange = (event) => {
    setPickupDate(event.target.value);
    updateDuration(event.target.value, returnDate);
  };

  // Function to handle changes in the return date input
  const handleReturnDateChange = (event) => {
    setReturnDate(event.target.value);
    updateDuration(pickupDate, event.target.value);
  };

  const updateDuration = (pickupDate, returnDate) => {
    if (pickupDate && returnDate) {
      const pickup = new Date(pickupDate);
      const returnD = new Date(returnDate);
      const timeDifference = Math.abs(returnD.getTime() - pickup.getTime());
      const durationInDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
      const weeks = Math.floor(durationInDays / 7);
      const remainingDays = durationInDays % 7;
      const newDuration = `${
        weeks > 0 ? weeks + " week" + (weeks > 1 ? "s" : "") : ""
      } ${
        remainingDays > 0
          ? remainingDays + " day" + (remainingDays > 1 ? "s" : "")
          : ""
      }`;

      // Call the callback function with the duration
      onDurationChange(newDuration, remainingDays, weeks);
      // Update the duration state
      setDuration(newDuration);
    }
  };
  return (
    <div className="">
      <div className="flex flex-col space-y-4 ">
        {/* Reservation ID */}
        <div>
          <label
            htmlFor="reservationId"
            className="block text-sm font-medium text-gray-700"
          >
            Reservation ID
          </label>
          <input
            type="text"
            id="reservationId"
            name="reservationId"
            readOnly
            value={reservationId}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        {/* Pickup Date */}
        <div>
          <label htmlFor="pickupDateTime" className="block text-sm font-medium">
            Pickup Date <span className="text-red-500">*</span>
          </label>
          <input
            type="datetime-local"
            id="pickupDate"
            name="pickupDate"
            value={pickupDate}
            onChange={handlePickupDateChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Select date and time"
          />
        </div>

        {/* Return Date */}
        <div>
          <label htmlFor="returnDateTime" className="block text-sm font-medium">
            Return Date <span className="text-red-500">*</span>
          </label>
          <input
            type="datetime-local"
            id="returnDate"
            name="returnDate"
            value={returnDate}
            onChange={handleReturnDateChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Select date and time"
          />
        </div>

        {/* Duration */}

        <div>
          <label htmlFor="duration" className="block text-sm font-medium">
            Duration
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={duration}
            readOnly
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        {/* Discount */}
        <div>
          <label
            htmlFor="discount"
            className="block text-sm font-medium text-gray-700"
          >
            Discount
          </label>
          <input
            type="number"
            id="discount"
            name="discount"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter discount amount"
          />
        </div>
      </div>
    </div>
  );
};

export default ReservationDetailsForm;
