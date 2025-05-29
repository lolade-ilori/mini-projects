import "./scss/main.scss";
import { AppProvider } from "./context/AppContext";
import Accordion from "./components/accordion/Accordion";

function App() {
  return (
    <AppProvider>
      <Accordion />
    </AppProvider>
  );
}

export default App;
