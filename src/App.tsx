// import './App.css'
import "./scss/main.scss";
import { AppProvider } from "./context/AppContext";
import LoadMore from "./components/load-more-data/LoadMore";

function App() {
  return (
    <AppProvider>
      <>
        <LoadMore />
      </>
    </AppProvider>
  );
}

export default App;
