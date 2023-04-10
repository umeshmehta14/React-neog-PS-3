import "./styles.css";
import TotalAmount from "./TotalAmount";
// Given an array of objects representing people who donated money to the NGO. Each object consists of: id, name, amount. Build a React component that takes the data as props and shows the total donation collected on the DOM. Output should be in the format: Total Donation Collected: _amount_

// Data:
const DonationData = [
  {
    id: 1,
    name: "Nitin",
    Donation: 7800
  },
  {
    id: 2,
    name: "Mehak",
    Donation: 9500
  },
  {
    id: 3,
    name: "Mehul",
    Donation: 65000
  },
  {
    id: 4,
    name: "Nina",
    Donation: 560
  }
];

console.log("hello");
export default function App() {
  return (
    <div className="App">
      <TotalAmount DonationData={DonationData} />
    </div>
  );
}


const TotalAmount = ({ DonationData }) => {
    return (
      <>
        <div>
          Total Donation Collected:
          {DonationData.reduce((acc, { Donation }) => acc + Donation, 0)}
        </div>
      </>
    );
  };
  export default TotalAmount;
  