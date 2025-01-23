// import './App.css'
import "./scss/main.scss";
import { AppProvider } from "./context/AppContext";
import Tabs from "./components/tabs/Tabs";
import TabsMain from "./components/tabs/TabsMain";

function App() {
  return (
    <AppProvider>
      <TabsMain />
    </AppProvider>
  );
}

export default App;
