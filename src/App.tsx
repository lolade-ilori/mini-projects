// import './App.css'
import "./scss/main.scss";
import { AppProvider } from "./context/AppContext";
import ProfileFinder from "./components/github-profile-finder/ProfileFinder";
import RandomColor from "./components/random-color/RandomColor";

function App() {
  return (
    <AppProvider>
      <RandomColor />
    </AppProvider>
  );
}

export default App;
