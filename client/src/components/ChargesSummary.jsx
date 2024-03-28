// ChargesSummary.js

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
    <div>
      <div className="mt-4">
        <p className="text-lg font-semibold">Total Charges: ${totalCharges}</p>
      </div>
    </div>
  );
};

export default ChargesSummary;
