// import './App.css'
import "./scss/main.scss";
import { AppProvider } from "./context/AppContext";
import QRGenerator from "./components/qrcode-generator/QRGenerator";

function App() {
  return (
    <AppProvider>
      <QRGenerator />
    </AppProvider>
  );
}

export default App;
