import React, { useState, useEffect } from "react";

const ChargesSummary = ({
  customerData,
  reservationDuration,
  selectedVehicleType,
  filteredVehicles,
  additionalCharges,
  selectedVehicleId,
  carsList,
  reservationWeeks,
  reservationRemainingDays,
}) => {
  console.log("reservationDuration:", reservationDuration);
  const [dailyCharge, setDailyCharge] = useState(0);
  const [weeklyCharge, setWeeklyCharge] = useState(0);
  const [totalCharges, setTotalCharges] = useState(0);

  console.log(
    "reservationRemainingDays from summary: ",
    reservationRemainingDays
  );
  console.log("reservationWeeks from summary: ", reservationWeeks);
  useEffect(() => {
    if (selectedVehicleId && carsList) {
      const vehicle = carsList.find((car) => car.id === selectedVehicleId);
      if (vehicle) {
        setDailyCharge(vehicle.rates.daily);
        setWeeklyCharge(vehicle.rates.weekly);
      }
    }
  }, [selectedVehicleId, carsList]);

  let Days = reservationRemainingDays || 0;
  let Weeks = reservationWeeks || 0;

  const totalDaily = dailyCharge * Days;
  const totalWeekly = weeklyCharge * Weeks;
  const total = totalDaily + totalWeekly;

  useEffect(() => {
    setTotalCharges(total);
  }, [total]);

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
            <td className="border px-4 py-2">{Days}</td>
            <td className="border px-4 py-2">${dailyCharge.toFixed(2)}</td>
            <td className="border px-4 py-2">${totalDaily.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Weekly</td>
            <td className="border px-4 py-2">{Weeks}</td>
            <td className="border px-4 py-2">${weeklyCharge.toFixed(2)}</td>
            <td className="border px-4 py-2">${totalWeekly.toFixed(2)}</td>
          </tr>
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
