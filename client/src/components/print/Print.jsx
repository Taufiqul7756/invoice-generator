import React, { useState, useEffect } from "react";
import invoiceImg from "../../assets/invoice-img.png";

const Print = ({ currentUser }) => {
  const [summary, setSummary] = useState(null);
  const [reservationDurationFromSummary, setReservationDurationFromSummary] =
    useState("");
  // console.log("Summary for current user:", currentUserSummary);
  console.log("get all the summary: ", summary);
  console.log(
    "reservationDurationFromSummary: ",
    reservationDurationFromSummary
  );

  const currentUserSummary = summary
    ? summary.data.find((item) => item.currentUser.userId === currentUser._id)
    : null;

  console.log("currentUserSummary form popup:", currentUserSummary);
  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await fetch(
          "https://invoice-generator-api-git-main-taufiqul-islams-projects.vercel.app/getSummary"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSummary(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchSummary();
  }, []);

  useEffect(() => {
    if (currentUserSummary) {
      setReservationDurationFromSummary(currentUserSummary.reservationDuration);
    }
  }, [currentUserSummary]);

  return (
    <div className="flex px-20 ">
      {/* right */}
      <div className="grid p-5  ">
        <div className="flex">
          <div className="">
            <div className="p-3">
              <img src={invoiceImg} alt="invoice img" />
            </div>
            <div className="grid">
              <h1 className="font-bold">RENTER INFO:</h1>
              <span>
                {currentUserSummary?.currentUser.firstName}_
                {currentUserSummary?.currentUser.lastName}
              </span>
              <span>{currentUserSummary?.currentUser.email}</span>
              <span>{currentUserSummary?.currentUser.phone}</span>
            </div>
          </div>
          <div className=" ml-6">
            <div className="grid mb-6">
              <span>CH Car Place Inc.</span>
              <span>162 Bergen st</span>
              <span>Brooklyn, NY 11213</span>
              <span>PH#</span>
            </div>
            <div className="grid">
              <span>Monday 9:00 AM - 6:00 PM</span>
              <span>Tuesday 9:00 AM - 6:00 PM</span>
              <span>Wednesday 9:00 AM - 6:00 PM</span>
              {/* <span>Thursday 9:00 AM - 6:00 PM</span>
              <span>Friday 9:00 AM - 6:00 PM</span>
              <span>Saturday 9:00 AM - 6:00 PM</span> */}
            </div>
          </div>
        </div>

        <div className="grid">
          {" "}
          <span className="font-bold text-xl py-5">
            ADDITIONAL AUTHORIZATION DRIVER(S)
          </span>
          <span className="font-bold">UNIT DETAILS</span>
          <span className="">
            Unit: {currentUserSummary?.selectedVehicleType}
          </span>
          <span className="">Make and Model: Toyota </span>
          <span className="mt-5">BILL TO: </span>
          <span className="">Payment Type: Unpaid </span>
          <span className="">AUTH: $0.00 </span>
          <span>Referral:</span>
          <span>
            <span className="text-md">NOTICE:</span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit,
            ratione.
          </span>
          <div className="flex justify-around items-center p-5">
            <span className=" cursor-pointer border-1 rounded-md bg-slate-400 text-white hover:bg-slate-200 hover:text-black py-1 px-3 ">
              Accept
            </span>
            <span className="cursor-pointer border-1 rounded-md bg-slate-400 text-white hover:bg-slate-200 hover:text-black py-1 px-3 ">
              Reject
            </span>
          </div>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            accusantium, nu
          </span>
          {/* <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            accusantium, nu
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            accusantium, nu
          </span> */}
        </div>
      </div>
      {/* left */}
      <div className=" p-5  ">
        <div className="grid">
          <span className="font-bold text-xl">RESERVATION</span>
          <span className="font-bold text-lg">
            {currentUserSummary?.reservationId}
          </span>
          <span className="font-bold text-md mt-5">CLAIM:</span>
          <span>
            <span className="font-bold">Date/Time out:</span> 03/29/2024 12:33
            AM
          </span>
          <span>
            <span className="font-bold">Date/Time In:</span> 03/29/2024 12:33 AM
          </span>
        </div>

        <div className="p-10 bg-gray-400 my-5 ">charges Summary</div>
        {/* <span>Lorem ipsum dolor sit amet consectetur, a</span> */}

        <div className="grid my-10">
          <span className="font-bold">Renter Signature: </span>
          <span className="font-bold">
            -----------------------------------------------------{" "}
          </span>
        </div>

        <div className="grid my-10">
          <span className="font-bold">Additional Driver 1: </span>
          <span className="font-bold">
            -----------------------------------------------------{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Print;
