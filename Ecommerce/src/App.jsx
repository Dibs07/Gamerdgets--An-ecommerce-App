import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Homepage from "./Pages/Home/Homepage";
import Nopage from "./Pages/Nopage/Nopage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/*" element={<Nopage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;