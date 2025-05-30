import "./scss/main.scss";
import { AppProvider } from "./context/AppContext";
import RandomColor from "./components/random-color/RandomColor";
import Accordion from "./components/accordion/Accordion";
import StarRating from "./components/star-rating/StarRating ";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMore from "./components/load-more-data/LoadMore";

function App() {
  return (
    <AppProvider>
      <Accordion />
      <RandomColor />
      <StarRating />
      <ImageSlider />
      <LoadMore />
    </AppProvider>
  );
}

export default App;
