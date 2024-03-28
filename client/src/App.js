import AdditionalCharges from "./components/AdditionalCharges";
import ChargesSummary from "./components/ChargesSummary";
import CustomerDetails from "./components/CustomerDetails";
import ReservationDetailsForm from "./components/ReservationDetailsForm";
import VehicleInformation from "./components/VehicleInformation";
import "./index.css";

function App() {
  return (
    <div className="p-20 ">
      <div className="bg-slate-200">
        {/* navbar */}
        <div className="flex justify-between items-center p-10">
          <h1>Reservation</h1>
          <h1>Button</h1>
        </div>
        {/* Form Section */}
        <div className="flex">
          <div className="flex-grow">
            <div className="grid p-3 gap-10">
              <div className="grid gap-5 rounded-md border-solid border-2 border-indigo-200 p-5">
                <h2>Reservation Details</h2>
                <ReservationDetailsForm />
              </div>
              <div className="grid gap-5 rounded-md border-solid border-2 border-indigo-200 p-5">
                <h2>Vehicle Information</h2>
                <VehicleInformation />
              </div>
            </div>
          </div>
          <div className="flex-grow">
            <div className="grid gap-10">
              <div className="grid gap-5 rounded-md border-solid border-2 border-indigo-200 p-5">
                <h2>Customer Details</h2>
                <CustomerDetails />
              </div>
              <div className="grid gap-5 rounded-md border-solid border-2 border-indigo-200 p-5">
                <h2>Additional Charges.</h2>
                <AdditionalCharges />
              </div>
            </div>
          </div>
          <div className="flex-grow">
            <div className="gap-10 rounded-md border-solid border-2 border-indigo-200 p-5">
              <h2>Charges Summary</h2>
              <ChargesSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
