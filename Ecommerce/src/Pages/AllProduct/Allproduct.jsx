import Layout from "../../Components/Layout/Layout";
import { useContext } from "react";
import { useNavigate } from "react-router";
import myContext from "../../context/myContext";



const AllProduct = () => {
    const navigate = useNavigate();
    const context = useContext(myContext);
    const { getAllProduct } = context;
    return (
        <Layout>
    <div className="py-8">
    
            <div className="">
                <h1 className=" text-center mb-5 text-white text-3xl font-bold">All Products</h1>
            </div>
          
            <section className="text-gray-600 body-font">
                <div className="container px-5 lg:px-0 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {getAllProduct.map((item, index) => {
                            const { id, title,price, productImageUrl} = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                        <img
                                         onClick={()=> navigate(`/productinfo/${id}`)}
                                            className="lg:h-80  h-96 w-full"
                                            src={productImageUrl}
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