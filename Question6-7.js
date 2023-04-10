import "./styles.css";
import Bouquet from "./Bouquet";

// Build a React component which takes an array of objects as props. The object represents a bouquet of mixed flowers and consists of: id, flowers, totalFlowers, and price. Display the price of that bouquet on the DOM that has rose in it, in the format, “Price of bouquet with roses : {price}”

// Data:

const bouquet = [
  {
    id: 1,
    flowers: ["rose", "lily", "marigold"],
    totalFlowers: 9,
    price: 1400
  },
  {
    id: 2,
    flowers: ["snapdragon", "sunflower"],
    totalFlowers: 10,
    price: 3400
  }
];

export default function App() {
  return (
    <div className="App">
      <Bouquet bouquet={bouquet} />
    </div>
  );
}


const Bouquet = ({ bouquet }) => {
    return (
      <>
        <div>
          {bouquet
            .filter((e) => e.flowers.find((arr) => arr === "rose"))
            .map(({ price }) => (
              <p>Price of bouquet with roses : {price}</p>
            ))}
        </div>
      </>
    );
  };
  export default Bouquet;
  

  // QUESTION 7
// Build a React component to display the flowers of a bouquet in an ordered list on the DOM which has a price above 2000. Pass data as prop
// Expected Output
// 1. snapdragon
// 2. sunflower

const MorePrice = ({ bouquet }) => {
  return (
    <>
      <div>
        <h1>flowers which has a price above 2000</h1>
        <ul>
          {bouquet
            .filter(({ price }) => price > 2000)
            .map(({ flowers }) => flowers.map((e) => <li>{e}</li>))}
        </ul>
      </div>
    </>
  );
};

export default MorePrice;
