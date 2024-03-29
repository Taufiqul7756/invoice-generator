import React, { useState, useEffect } from "react";

const ChargesSummary = ({}) => {
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
            <td className="border px-4 py-2">Rental Charges</td>
            <td className="border px-4 py-2"> hours</td>
            <td className="border px-4 py-2">$</td>
            <td className="border px-4 py-2">$</td>
          </tr>

          <tr>
            <td className="border px-4 py-2">Collision Damage Waiver</td>
            <td className="border px-4 py-2">1 time</td>
            <td className="border px-4 py-2">$9.00</td>
            <td className="border px-4 py-2">$</td>
          </tr>

          <tr className="font-semibold">
            <td className="border px-4 py-2">Total Charges</td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2"></td>
            <td className="border px-4 py-2">$</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChargesSummary;
