import "./scss/main.scss";
import { AppProvider } from "./context/AppContext";
import RandomColor from "./components/random-color/RandomColor";
import Accordion from "./components/accordion/Accordion";
import StarRating from "./components/star-rating/StarRating ";

function App() {
  return (
    <AppProvider>
      {/* <Accordion />
      <RandomColor /> */}
      <StarRating />
    </AppProvider>
  );
}

export default App;
