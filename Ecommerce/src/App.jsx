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
import UserDashboard from "./Pages/User/UserDashboard";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AddProductPage from "./Pages/Admin/AddPrroduct";
import Updateproduct from "./Pages/Admin/Updateproduct";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div>
      <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/*" element={<Nopage />} />
          <Route path="/productinfo" element={<ProductInfo />} />
          <Route path="/cart" element={<Cartpage/>} />
          <Route path="/allproduct" element={<Allproduct/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<UserDashboard/>} />
          <Route path="/admin" element={<AdminDashboard/>} />
          <Route path="/addproduct" element={<AddProductPage/>} />
          <Route path="/update" element={<Updateproduct/>} />
        </Routes>
        
      <Toaster/>
      </Router>
      </MyState>
    </div>
  );
}

export default App;