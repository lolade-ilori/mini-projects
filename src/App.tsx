// import './App.css'
import "./scss/main.scss";
import { AppProvider } from "./context/AppContext";
import TreeView from "./components/tree-view/TreeView";

function App() {
  return (
    <AppProvider>
      <TreeView />
    </AppProvider>
  );
}

export default App;
