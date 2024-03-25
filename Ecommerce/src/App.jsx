import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Homepage from "./Pages/Home/Homepage";
import Nopage from "./Pages/Nopage/Nopage";
import "./App.css";
import ProductInfo from "./Pages/ProductInfo/ProductInfo";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/*" element={<Nopage />} />
          <Route path="/productinfo" element={<ProductInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;