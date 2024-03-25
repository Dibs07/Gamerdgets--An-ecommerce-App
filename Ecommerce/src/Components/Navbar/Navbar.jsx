import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";

const Navbar = () => {
    const navList = (
        <ul className="flex space-x-3 text-white font-bold text-md px-5 ">
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/allproduct'}>All Product</Link>
            </li>
            <li>
                <Link to={'/signup'}>Signup</Link>
            </li>
            <li>
                <Link to={'/'}>Kamal</Link>
            </li>
            {/* <li>
                <Link to={'/'}>Admin</Link>
            </li> */}

            {/* logout */}
            {/* <li>
                logout
            </li> */}

            <li>
                <Link to={'/cart'}>
                    Cart(0)
                </Link>
            </li>
        </ul>
    )
    return (
      <nav className="sticky top-0" style={{background: 'linear-gradient(to right, #4a148c, #ff8f00)'}}>
        <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
          <div className="left py-3 lg:py-0">
            <Link to={'/'}>
              {/* <img src="/logo.jpg" alt="ShopKaro Logo" className="h-20 w-20" /> */}
            <h2 className="font-bold text-white text-2xl text-center">GamerGadgets</h2>
            </Link>
          </div>
          <div className="right flex justify-center mb-4 lg:mb-0">
            {navList}
          </div>
          <Searchbar />
        </div>
      </nav>
    );
}

export default Navbar;
