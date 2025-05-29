import "./scss/main.scss";
import { AppProvider } from "./context/AppContext";
import RandomColor from "./components/random-color/RandomColor";
import Accordion from "./components/accordion/Accordion";

function App() {
  return (
    <AppProvider>
      <Accordion />
      <RandomColor />
    </AppProvider>
  );
}

export default App;
