import "./scss/main.scss";
import { AppProvider } from "./context/AppContext";
import RandomColor from "./components/random-color/RandomColor";
import Accordion from "./components/accordion/Accordion";
import StarRating from "./components/star-rating/StarRating ";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMore from "./components/load-more-data/LoadMore";
import TreeView from "./components/tree-view/TreeView";
import QRGenerator from "./components/qrcode-generator/QRGenerator";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";

function App() {
  return (
    <AppProvider>
      {/* <Accordion />
      <RandomColor />
      <StarRating />
      <ImageSlider />
      <LoadMore />
      <TreeView />
      <QRGenerator /> */}
      <ScrollIndicator url="https://dummyjson.com/products?limit=100" />
    </AppProvider>
  );
}

export default App;
