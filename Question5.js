import "./styles.css";
import Vegetables from "./Vegetables";

// Build a React component to display the list of all the vegetables and their pick date as ordered list. Create a button which says “Highlight Fresh Vegetables”. On click of the button change the color of the vegetable to green whose pick date is ‘2023-03-30’.

// Data:
const vegetables = [
  {
    id: 1,
    name: "Carrots",
    pickDate: "2023-03-25"
  },
  {
    id: 2,
    name: "Broccoli",
    pickDate: "2023-03-30"
  },
  {
    id: 3,
    name: "Peppers",
    pickDate: "2023-03-25"
  },
  {
    id: 4,
    name: "Tomatoes",
    pickDate: "2023-03-27"
  },
  {
    id: 5,
    name: "Ladies Finger",
    pickDate: "2023-03-30"
  }
];
export default function App() {
  return (
    <div className="App">
      <Vegetables vegetables={vegetables} />
    </div>
  );
}


import { useState } from "react";

const Vegetables = ({ vegetables }) => {
  const [click, setClick] = useState(false);
  return (
    <>
      <div>
        {vegetables.map(({ name, pickDate }) => (
          <p
            style={{
              border: "2px solid black",
              color: pickDate === "2023-03-30" && click ? "green" : "black",
              backgroundColor:
                pickDate === "2023-03-30" && click ? "lightblue" : "white"
            }}
          >
            name:{name}
            {"  "}pickDate:{pickDate}
          </p>
        ))}
      </div>
      <button onClick={() => setClick(!click)}>
        Highlight Fresh Vegetables
      </button>
    </>
  );
};

export default Vegetables;
