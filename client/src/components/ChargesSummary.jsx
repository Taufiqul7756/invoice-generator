import React, { useState, useEffect } from "react";

const ChargesSummary = ({
  reservationDuration,
  additionalCharges,
  selectedVehicleId,
  selectedVehicleType,
  filteredVehicles,
  customerData,
}) => {
  console.log("reservationDuration Check:", reservationDuration);
  console.log("selectedVehicleType Check:", selectedVehicleType);
  console.log("filteredVehicles Check:", filteredVehicles);
  console.log("additionalCharges Check:", additionalCharges);
  console.log("customerData Check:", customerData);
  console.log("selectedVehicleId Check:", selectedVehicleId);
  // State variables to store calculated charges
  const [dailyCharge, setDailyCharge] = useState(0);
  const [weeklyCharge, setWeeklyCharge] = useState(0);
  const [totalCharges, setTotalCharges] = useState(0);

  // Default rates and percentages
  const defaultRates = {
    collisionDamageWaiver: 9.0,
    liabilityInsurance: 15.0,
    rentalTax: 11, // Percentage
  };

  // useEffect to update charges whenever selectedVehicleId changes
  useEffect(() => {
    // Your logic to fetch dailyCharge and weeklyCharge based on selectedVehicleId
    // Example:
    setDailyCharge(50);
    setWeeklyCharge(300);
  }, [selectedVehicleId]);

  // Parse reservationDuration string to extract weeks and days using regex
  const regex = /(\d+)\s+weeks?\s*(\d+)\s+days?/;
  const match = reservationDuration.match(regex);

  let weeks = 0;
  let days = 0;
  if (match) {
    weeks = parseInt(match[1]) || 0;
    days = parseInt(match[2]) || 0;
  }

  // Calculate total charges
  const totalDaily = dailyCharge * days;
  const totalWeekly = weeklyCharge * weeks;

  // Additional charges
  let totalAdditionalCharges = 0;
  if (additionalCharges) {
    Object.entries(additionalCharges).forEach(([key, value]) => {
      if (value) {
        if (key === "collisionDamageWaiver") {
          totalAdditionalCharges += defaultRates.collisionDamageWaiver;
        } else if (key === "liabilityInsurance") {
          totalAdditionalCharges += defaultRates.liabilityInsurance;
        }
        // You can add more conditions for other additional charges if needed
      }
    });
  }

  // Calculate total charges including additional charges
  const total = totalDaily + totalWeekly + totalAdditionalCharges;

  useEffect(() => {
    setTotalCharges(total);
  }, [total]);

  // Prepare the data object to be sent to the database
  const dataToSend = {
    reservationDuration,
    additionalCharges,
    filteredVehicles,
    selectedVehicleType,
    selectedVehicleId,
    totalCharges,
  };

  console.log("dataToSend:", dataToSend);

  return (
    <div className="mt-4">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Charges</th>
            <th className="px-4 py-2">Unit</th>
            <th className="px-4 py-2">Rate</th>
            <th className="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Daily</td>
            <td className="border px-4 py-2">{days}</td>
            <td className="border px-4 py-2">${dailyCharge.toFixed(2)}</td>
            <td className="border px-4 py-2">${totalDaily.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Weekly</td>
            <td className="border px-4 py-2">{weeks}</td>
            <td className="border px-4 py-2">${weeklyCharge.toFixed(2)}</td>
            <td className="border px-4 py-2">${totalWeekly.toFixed(2)}</td>
          </tr>
          {/* Additional Charges */}
          {additionalCharges && (
            <>
              {additionalCharges.collisionDamageWaiver && (
                <tr>
                  <td className="border px-4 py-2">Collision Damage Waiver</td>
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">
                    ${defaultRates.collisionDamageWaiver.toFixed(2)}
                  </td>
                  <td className="border px-4 py-2">
                    ${defaultRates.collisionDamageWaiver.toFixed(2)}
                  </td>
                </tr>
              )}
              {additionalCharges.liabilityInsurance && (
                <tr>
                  <td className="border px-4 py-2">Liability Insurance</td>
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">
                    ${defaultRates.liabilityInsurance.toFixed(2)}
                  </td>
                  <td className="border px-4 py-2">
                    ${defaultRates.liabilityInsurance.toFixed(2)}
                  </td>
                </tr>
              )}
              {/* You can add more rows for other additional charges if needed */}
            </>
          )}
          <tr className="font-semibold">
            <td className="border px-4 py-2">Total Charges</td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2">${totalCharges.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChargesSummary;
