// import './App.css'
import "./scss/main.scss";
import { AppProvider } from "./context/AppContext";
import Accordion from "./components/accordion/Accordion";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating ";

function App() {
  return (
    <AppProvider>
      <>
        <StarRating noOfStars={10} />
      </>
    </AppProvider>
  );
}

export default App;
