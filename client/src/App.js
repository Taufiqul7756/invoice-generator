import AdditionalCharges from "./components/AdditionalCharges";
import ChargesSummary from "./components/ChargesSummary";
import CustomerDetails from "./components/CustomerDetails";
import ReservationDetailsForm from "./components/ReservationDetailsForm";
import VehicleInformation from "./components/VehicleInformation";
import "./index.css";

function App() {
  return (
    <div className="lg:p-20 sm:p-5 md:p-5 bg-slate-200">
      <div className="bg-white">
        {/* navbar */}
        <div className="flex justify-between items-center py-4 px-4 sm:py-10 sm:px-10">
          <h1 className="font-bold text-2xl">Reservation</h1>
          <button className="border rounded-md bg-blue-500 py-2 px-2 text-white font-md hover:bg-black">
            Print / Download
          </button>
        </div>
        {/* Form Section */}
        <div className="flex flex-col md:flex-row ">
          {/* Left Section */}
          <div className="flex-grow">
            <div className="grid gap-6 px-5">
              <h2 className="font-bold border-b-2 border-indigo-200 pb-2">
                Reservation Details
              </h2>
              <div className="grid gap-4 rounded-md border-solid border-2 border-indigo-200 p-4">
                <ReservationDetailsForm />
              </div>
              <h2 className="font-bold border-b-2 border-indigo-200 pb-2">
                Vehicle Information
              </h2>
              <div className="grid gap-4 rounded-md border-solid border-2 border-indigo-200 p-4">
                <VehicleInformation />
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
                <CustomerDetails />
              </div>
              <h2 className="font-bold border-b-2 border-indigo-200 pb-2">
                Additional Charges
              </h2>
              <div className="grid gap-4 rounded-md border-solid border-2 border-indigo-200 p-4">
                <AdditionalCharges />
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="flex-grow mt-6 md:mt-0 px-2">
            <h2 className="font-bold border-b-2 border-indigo-200 pb-2">
              Charges Summary
            </h2>
            <div className="rounded-md border-solid border-2 border-indigo-200 p-4 mt-4">
              <ChargesSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
