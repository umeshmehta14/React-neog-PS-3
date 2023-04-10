import "./styles.css";
import Calculates from "./Calculates";

// Create an array of objects representing students marks out of 100. Each object consists of: id, name and marks. Build a React component that calculates the mean marks of all the students to see if the institute passes the criteria of the certification.

// If the mean is above 80, display on the DOM Certification Approved

// If the mean is below 80, display on the DOM Certification Not Approved

// Data:

const studentData = [
  {
    id: 1,
    name: "Nitin",
    marks: 78
  },
  {
    id: 2,
    name: "Mehak",
    marks: 95
  },
  {
    id: 3,
    name: "Mehul",
    marks: 65
  },
  {
    id: 4,
    name: "Nina",
    marks: 56
  }
];

export default function App() {
  return (
    <div className="App">
      <Calculates studentData={studentData} />
    </div>
  );
}



const Calculates = ({ studentData }) => {
    return (
      <>
        <div>
          {studentData.reduce((acc, { marks }) => acc + marks, 0) /
            studentData.length >
          80
            ? "Certification Approved"
            : "Certification not Approved"}
        </div>
      </>
    );
  };
  export default Calculates;
  