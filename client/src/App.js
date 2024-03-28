import AdditionalCharges from "./components/AdditionalCharges";
import ChargesSummary from "./components/ChargesSummary";
import CustomerDetails from "./components/CustomerDetails";
import ReservationDetailsForm from "./components/ReservationDetailsForm";
import VehicleInformation from "./components/VehicleInformation";
import "./index.css";

function App() {
  return (
    <div className="p-20 bg-slate-200">
      <div className="bg-white">
        {/* navbar */}
        <div className="flex justify-between items-center py-10 px-5">
          <h1 className="font-bold text-2xl">Reservation</h1>
          <button className="border rounded-md bg-blue-500 py-2 px-2 text-white font-md hover:bg-black">
            Print / Download
          </button>
        </div>
        {/* Form Section */}
        <div className="flex">
          <div className="flex-grow">
            <div className="grid px-5 gap-6">
              <h2 className="font-bold border-b-2 border-indigo-200 pb-1">
                Reservation Details
              </h2>
              <div className="grid gap-5 rounded-md border-solid border-2 border-indigo-200 p-5">
                <ReservationDetailsForm />
              </div>
              <h2 className="font-bold border-b-2 border-indigo-200 pb-1">
                Vehicle Information
              </h2>
              <div className="grid gap-5 rounded-md border-solid border-2 border-indigo-200 p-5 mb-10">
                <VehicleInformation />
              </div>
            </div>
          </div>
          <div className="flex-grow">
            <div className="grid gap-6">
              <h2 className="font-bold border-b-2 border-indigo-200 pb-1">
                Customer Information
              </h2>
              <div className="grid gap-5 rounded-md border-solid border-2 border-indigo-200 p-5">
                <CustomerDetails />
              </div>
              <h2 className="font-bold border-b-2 border-indigo-200 pb-1">
                Additional Charges
              </h2>
              <div className="grid gap-5 rounded-md border-solid border-2 border-indigo-200 p-5">
                <AdditionalCharges />
              </div>
            </div>
          </div>
          <div className="flex-grow ml-5">
            <h2 className="font-bold border-b-2 border-indigo-200 pb-1">
              Charges Summary
            </h2>
            <div className=" rounded-md border-solid border-2 border-indigo-200 p-5 mt-6">
              <ChargesSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
