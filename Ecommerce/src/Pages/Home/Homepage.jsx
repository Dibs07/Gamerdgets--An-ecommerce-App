import { useContext } from "react";
import Category from "../../Components/Category/Category";
import HeroSection from "../../Components/HeroSection/Herosection";
import Layout from "../../Components/Layout/Layout";
import Products from "../../Components/Products/Products";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Track from "../../Components/Track.jsx/Track";
import Loader from "../../Components/loader/Loader";



const HomePage = () => {
   
 
    return (
        <Layout>
            <HeroSection/>
            <Category/>
            <Products/>
            <Track/>
            <Testimonial/>
           {/* <Loader/> */}
        </Layout>
        
    );
}

export default HomePage;