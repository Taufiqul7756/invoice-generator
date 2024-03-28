// AdditionalCharges.js

import React, { useState } from "react";

const AdditionalCharges = () => {
  // State variables to track whether each additional charge is selected
  const [collisionDamageWaiver, setCollisionDamageWaiver] = useState(false);
  const [liabilityInsurance, setLiabilityInsurance] = useState(false);
  const [rentalTax, setRentalTax] = useState(false);

  // Function to calculate total additional charges based on selected options
  const calculateTotalAdditionalCharges = () => {
    let total = 0;
    if (collisionDamageWaiver) total += 9;
    if (liabilityInsurance) total += 15;
    // Calculate rental tax (11.5% of total charges excluding rental tax itself)
    if (rentalTax) total += total * 0.115;
    return total.toFixed(2);
  };

  return (
    <div>
      <div className="flex flex-col space-y-4">
        {/* Collision Damage Waiver */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="collisionDamageWaiver"
            name="collisionDamageWaiver"
            className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
            checked={collisionDamageWaiver}
            onChange={() => setCollisionDamageWaiver(!collisionDamageWaiver)}
          />
          <label
            htmlFor="collisionDamageWaiver"
            className="ml-2 block text-sm text-gray-700"
          >
            Collision Damage Waiver ($9.00)
          </label>
        </div>
        {/* Liability Insurance */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="liabilityInsurance"
            name="liabilityInsurance"
            className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
            checked={liabilityInsurance}
            onChange={() => setLiabilityInsurance(!liabilityInsurance)}
          />
          <label
            htmlFor="liabilityInsurance"
            className="ml-2 block text-sm text-gray-700"
          >
            Liability Insurance ($15.00)
          </label>
        </div>
        {/* Rental Tax */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="rentalTax"
            name="rentalTax"
            className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
            checked={rentalTax}
            onChange={() => setRentalTax(!rentalTax)}
          />
          <label
            htmlFor="rentalTax"
            className="ml-2 block text-sm text-gray-700"
          >
            Rental Tax (11.5%)
          </label>
        </div>
      </div>
      {/* Display total additional charges */}
      <div className="mt-4">
        <p className="text-lg font-semibold">
          Total Additional Charges: ${calculateTotalAdditionalCharges()}
        </p>
      </div>
    </div>
  );
};

export default AdditionalCharges;
