import "./styles.css";
import TotalCars from "./TotalCars";

// Given an array of objects representing a list of cars. Each object consists of: id, name, price, category. Build a React component that shows on the DOM the total number of cars present in each category. For Example: if there are categories, luxury and sports, where there are 5 luxury cars and 2 sports car then the data should be represented as:

// luxury: 5

// sports: 2

// Data:
const cars = [
  {
    id: 1,
    name: "supra",
    price: 500000,
    category: "sports"
  },
  {
    id: 2,
    name: "A5",
    price: 700000,
    category: "luxury"
  },
  {
    id: 3,
    name: "huyara",
    price: 1500000,
    category: "sports"
  },
  {
    id: 4,
    name: "agera R",
    price: 3500000,
    category: "sports"
  }
];
export default function App() {
  return (
    <div className="App">
      <TotalCars cars={cars} />
    </div>
  );
}


const TotalCars = ({ cars }) => {
    const carNo = cars.reduce((acc, cur) => {
      acc[cur.category] = (acc[cur.category] || 0) + 1;
      return acc;
    }, {});
    console.log(carNo);
    console.log(Object.keys(carNo));
    return (
      <>
        <div>
          {Object.keys(carNo).map((e) => (
            <p>
              {e}:{carNo[e]}
            </p>
          ))}
        </div>
      </>
    );
  };
  export default TotalCars;
  
