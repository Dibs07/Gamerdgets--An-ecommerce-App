import Layout from "../../Components/Layout/Layout";
import { useNavigate } from "react-router";
const productData = [
    {
        id: 1,
        image: 'https://5.imimg.com/data5/SELLER/Default/2020/11/BF/ME/YP/80385951/ant-esports-mk-3000-mechanical-rgb-gaming-keyboard.PNG',
        title: 'Gaming Headset X1000',
        desc: 'Immerse yourself in the game with crystal-clear audio and surround sound technology.',
        price: 99.99,
        trendingProductName: 'Bestseller',
        quantity: 1,
    },
    {
        id: 2,
        image: 'https://resource.logitech.com/content/dam/gaming/en/products/pro-wireless-gaming-mouse/pro-wireless-carbon-gallery-1.png',
        title: 'Gaming Mouse Pro',
        desc: 'Experience precision and speed with our advanced gaming mouse designed for esports professionals.',
        price: 79.99,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 3,
        image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/keyboard/desktop-keyboard/w/l/6/gaming-keyboard-with-87-keys-rgb-backlit-with-suspension-keys-original-imagzcgwtrabgjna.jpeg?q=90&crop=false',
        title: 'Gaming Keyboard RGB',
        desc: 'Customize your gaming experience with vibrant RGB lighting and mechanical key switches for superior performance.',
        price: 129.99,
        trendingProductName: 'New Arrival',
        quantity: 1,
    },
    {
        id: 1,
        image: 'https://m.media-amazon.com/images/I/61Y0JHgpWJL.jpg',
        title: 'Gaming Monitor UltraWide',
        desc: 'Get the edge over your opponents with our ultra-wide gaming monitor featuring high refresh rates and low response times.',
        price: 499.99,
        trendingProductName: 'Recommended',
        quantity: 1,
    },
]

const AllProduct = () => {
    const navigate = useNavigate();
    return (
        <Layout>
    <div className="py-8">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-white text-3xl font-bold">All Products</h1>
            </div>
            {/* main  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 lg:px-0 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {productData.map((item, index) => {
                            const { image, title, price } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/3">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                        <img
                                        onClick={()=> navigate('/productinfo')}
                                            className="lg:h-80  h-96 w-full"
                                            src={image}
                                            alt="blog"
                                            style={{background:"white"}}
                                        />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-white mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-white mb-3">
                                                ₹{price}
                                            </h1>
                                            <div className="flex justify-center ">
                                                <button className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
        </Layout>
    );
}

export default AllProduct;