
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router";
import { fireDB } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../../Components/loader/Loader";

const ProductInfo = () => {
    const [value, setValue] = React.useState(2);
    const navigate = useNavigate();
    const context = useContext(myContext);
    const { loading, setLoading } = context;
    const [product, setProduct] = useState('')

    const { id } = useParams()

    useEffect(() => {
        const getProductData = async () => {
            setLoading(true)
            try {
                const productTemp = await getDoc(doc(fireDB, "products", id))
                setProduct(productTemp.data());
                console.log(productTemp.data())
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        getProductData()
    }, [])
    return (

        <Layout>
            <section className="py-5 lg:py-16 font-poppins dark:bg-gray-800">
            {loading ?
                    <>
                        <div className="flex justify-center items-center">
                            <Loader />
                        </div>
                    </>

                    :
                <div className="max-w-6xl px-4 mx-auto">
                    <div className="flex flex-wrap mb-24 -mx-4">
                        <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                            <div className="">
                                <div className="">
                                    <img
                                        className=" w-full lg:h-[37em] rounded-lg"
                                        src={product?.productImageUrl}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2">
                            <div className="lg:pl-20">
                                <div className="mb-6 ">
                                    <h2 className="max-w-xl mb-6 text-xl font-semibold text-center leading-loose tracking-wide text-white md:text-2xl dark:text-gray-300">
                                        {product?.title}
                                    </h2>
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                    <p className=" text-2xl font-semibold text-white dark:text-gray-400 ">
                                        <span>Rs.{product?.price}</span>
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <h2 className="mb-2 text-lg font-bold text-white dark:text-gray-400">
                                        Description :
                                    </h2>
                                    <p className="text-white">{product?.description} </p>
                                </div>

                                <div className="mb-6 " />
                                <div className="flex flex-wrap items-center mb-6">

                                    <button
                                        className="w-full px-4 py-3 text-center font-bold text-black bg-purple-300 border border-white-600  hover:bg-purple-600 hover:text-gray-100 rounded-xl"
                                    >
                                        Add to cart
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>}
            </section>

        </Layout>
    );
}

export default ProductInfo;