import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Homepage from "./Pages/Home/Homepage";
import Nopage from "./Pages/Nopage/Nopage";
import "./App.css";
import ProductInfo from "./Pages/ProductInfo/ProductInfo";
import Cartpage from "./Pages/Cart/Cartpage";
import Allproduct from "./Pages/AllProduct/Allproduct";
import Signup from "./Pages/Registration/Signup";
import Login from "./Pages/Registration/Login";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/*" element={<Nopage />} />
          <Route path="/productinfo" element={<ProductInfo />} />
          <Route path="/cart" element={<Cartpage/>} />
          <Route path="/allproduct" element={<Allproduct/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;