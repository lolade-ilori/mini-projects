// import './App.css'
import "./scss/main.scss";
import { AppProvider } from "./context/AppContext";
import ModalTest from "./components/modal/ModalTest";

function App() {
  return (
    <AppProvider>
      <ModalTest />
    </AppProvider>
  );
}

export default App;
