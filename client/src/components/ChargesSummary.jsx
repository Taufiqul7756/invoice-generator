import React, { useState, useEffect } from "react";

const ChargesSummary = ({
  rentalDuration,
  selectedCarRates,
  additionalCharges,
}) => {
  const [totalCharges, setTotalCharges] = useState(0);

  // Calculate total charges based on selected rental duration, car rates, and additional charges
  useEffect(() => {
    let total = 0;

    // Calculate rental charges based on duration and selected car rates
    if (rentalDuration && selectedCarRates) {
      const { hourly, daily, weekly } = selectedCarRates;

      if (rentalDuration >= 168) {
        // If rental duration is 1 week or more (168 hours)
        total += weekly;
      } else if (rentalDuration >= 24) {
        // If rental duration is 1 day or more (24 hours)
        total += Math.min(weekly, daily * Math.ceil(rentalDuration / 24));
      } else {
        total += hourly * rentalDuration;
      }
    }

    // Add additional charges if the object is defined
    if (additionalCharges) {
      if (additionalCharges.collisionDamageWaiver) total += 9;
      if (additionalCharges.liabilityInsurance) total += 15;
      // Calculate rental tax (11.5% of total charges excluding rental tax itself)
      total += total * 0.115;
    }

    // Update total charges
    setTotalCharges(total.toFixed(2));
  }, [rentalDuration, selectedCarRates, additionalCharges]);

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
          {/* Render rows for charges */}
          {/* Example row for rental charges */}
          <tr>
            <td className="border px-4 py-2">Rental Charges</td>
            <td className="border px-4 py-2">{rentalDuration} hours</td>
            <td className="border px-4 py-2">${selectedCarRates?.hourly}</td>
            <td className="border px-4 py-2">
              ${(selectedCarRates?.hourly * rentalDuration).toFixed(2)}
            </td>
          </tr>
          {/* Example row for additional charges */}
          <tr>
            <td className="border px-4 py-2">Collision Damage Waiver</td>
            <td className="border px-4 py-2">1 time</td>
            <td className="border px-4 py-2">$9.00</td>
            <td className="border px-4 py-2">
              ${additionalCharges?.collisionDamageWaiver ? "9.00" : "0.00"}
            </td>
          </tr>
          {/* Render row for total charges */}
          <tr className="font-semibold">
            <td className="border px-4 py-2">Total Charges</td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2">${totalCharges}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChargesSummary;
