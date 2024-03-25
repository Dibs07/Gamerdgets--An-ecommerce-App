
import Category from "../../Components/Category/Category";
import HeroSection from "../../Components/HeroSection/Herosection";
import Layout from "../../Components/Layout/Layout";
import Products from "../../Components/Products/Products";
import Track from "../../Components/Track.jsx/Track";


const HomePage = () => {
    return (
        <Layout>
            <HeroSection/>
            <Category/>
            <Products/>
            <Track/>
        </Layout>
        
    );
}

export default HomePage;