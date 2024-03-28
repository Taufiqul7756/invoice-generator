// ReservationDetailsForm.js

import React from "react";

const ReservationDetailsForm = () => {
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
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter reservation ID"
          />
        </div>
        {/* Pickup Date */}
        <div>
          <label
            htmlFor="pickupDate"
            className="block text-sm font-medium text-gray-700"
          >
            Pickup Date
          </label>
          <input
            type="date"
            id="pickupDate"
            name="pickupDate"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        {/* Return Date */}
        <div>
          <label
            htmlFor="returnDate"
            className="block text-sm font-medium text-gray-700"
          >
            Return Date
          </label>
          <input
            type="date"
            id="returnDate"
            name="returnDate"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        {/* Duration */}
        <div>
          <label
            htmlFor="duration"
            className="block text-sm font-medium text-gray-700"
          >
            Duration
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter duration in hours"
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
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter discount amount"
          />
        </div>
      </div>
    </div>
  );
};

export default ReservationDetailsForm;
