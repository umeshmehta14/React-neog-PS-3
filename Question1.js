import "./styles.css";
import ShowImage from "./ShowImage";

// Build a React component which takes an image, image height and image width as props and sets the height and width of the image and displays the image on DOM. Image link -

const img = "https://picsum.photos/200";
const width = "100px";
const height = "100px";

export default function App() {
  return (
    <div className="App">
      <ShowImage img={img} width={width} height={height} />
    </div>
  );
}

const ShowImage = ({ img, width, height }) => {
  return (
    <>
      <img src={img} width={width} height={height} />
    </>
  );
};
export default ShowImage;
