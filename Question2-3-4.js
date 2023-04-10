import "./styles.css";
import Cartoon from "./Cartoon";

// Given an array of objects with cartoon character details as: id, name, superpower, magnitude. Build a React component and display all details of those characters whose magnitude is greater than 5. Data:

const cartoons = [
  {
    id: 1,
    name: "Mickey Mouse",
    superpower: "Invisibility",
    magnitude: 1
  },
  {
    id: 2,
    name: "Spongebob Squarepants",
    superpower: "Super Strength",
    magnitude: 3
  },
  {
    id: 3,
    name: "Bugs Bunny",
    superpower: "Teleportation",
    magnitude: 9
  },
  {
    id: 4,
    name: "Tom and Jerry",
    superpower: "Intelligence",
    magnitude: 8
  },
  {
    id: 5,
    name: "The Powerpuff Girls",
    superpower: "Flight",
    magnitude: 10
  }
];

export default function App() {
  return (
    <div className="App">
      <Cartoon cartoons={cartoons} />
    </div>
  );
}


const Cartoon = ({ cartoons }) => {
    return (
      <>
        <div>
          {cartoons
            .filter(({ magnitude }) => magnitude > 5)
            .map(({ name, superpower, magnitude }) => {
              return (
                <div style={{ border: "2px solid black", margin: "1rem" }}>
                  <p>name:{name}</p>
                  <p>superpower:{superpower}</p>
                  <p>magnitude:{magnitude}</p>
                </div>
              );
            })}
        </div>
      </>
    );
  };
  
  export default Cartoon;
  

  // question 3
  // Use the cartoons data from above question (2) and build a React component to display only the names of characters whose magnitude is an even number. Use h1 tag to display names. Pass the entire data as props.

  const EvenCartoon = ({ cartoons }) => {
    return (
      <>
        <div>
          <p style={{ color: "darkgreen" }}>
            characters whose magnitude is an even number
          </p>
          {cartoons
            .filter(({ magnitude }) => magnitude % 2 === 0)
            .map(({ name }) => {
              return (
                <>
                  <h1>{name}</h1>
                </>
              );
            })}
        </div>
      </>
    );
  };
  
  export default EvenCartoon;
  
  // QUESTION 4
  // Use the cartoons data from above question (2) and build a React component that takes the superpower ”Intelligence”, as prop and display the details of the character having that super power. Show details on DOM in the format “name - superpower - magnitude”.

  const ShowSuperpower = ({ cartoon, superpower1 }) => {
    return (
      <>
        <div>
          <p>cartoon with intelligence superpower</p>
          {cartoon
            .filter(({ superpower }) => superpower === superpower1)
            .map(({ name, superpower, magnitude }) => (
              <p>
                name:{name}, superpower:{superpower}, magnitude:{magnitude}
              </p>
            ))}
        </div>
      </>
    );
  };
  
  export default ShowSuperpower;
  