// import './App.css'
import "./scss/main.scss";
import { AppProvider } from "./context/AppContext";
import ThemeSwitch from "./components/theme-switch/ThemeSwitch";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";

function App() {
  return (
    <AppProvider>
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </AppProvider>
  );
}

export default App;
