import "./scss/main.scss";
import { AppProvider } from "./context/AppContext";
import RandomColor from "./components/random-color/RandomColor";
import Accordion from "./components/accordion/Accordion";
import StarRating from "./components/star-rating/StarRating ";
import ImageSlider from "./components/image-slider/ImageSlider";

function App() {
  return (
    <AppProvider>
      <Accordion />
      <RandomColor />
      <StarRating />
      <ImageSlider />
    </AppProvider>
  );
}

export default App;
