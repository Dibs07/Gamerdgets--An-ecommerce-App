/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
          
                <div className="container px-5 py-10 mx-auto">
                   
                    <h2 className=' text-center text-4xl text-white font-semibold mb-10' >What our <span className=' text-blue-700'>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer hover:shadow-m hover:shadow-gray-200" >
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://i.ibb.co/xHQ9PX8/QMIxjt7.jpg" />
                                <p className="leading-relaxed text-white">
                                    This is the best platform for buying gaming gadgets. I bought a gaming console and it was delivered on time. The quality of the product is also very good. I would recommend this platform to all the gamers out there.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 className="text-white font-bold title-font tracking-wider text-sm uppercase">Swastik Bhattacharya</h2>
                                <p className="text-white">Professional Gamer</p>
                            </div>
                        </div>
                        <div className="hidden lg:w-1/12 lg:mb-0 mb-6"></div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer hover:shadow-l hover:shadow-gray-200">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"  src="https://i.ibb.co/kxVkMZW/image.png" />
                                <p className="leading-relaxed text-white">
                                    This is a amazing platform for buying games. I bought 5 games and all of them were delivered on time. The quality of the games is also very good. I would recommend this platform to all the gamers out there.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 className="text-white font-bold title-font tracking-wider text-sm uppercase">Sayan Biswas</h2>
                                <p className="text-white">Pes Player</p>
                            </div>
                        </div>
                     
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer hover:shadow-l hover:shadow-gray-200">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://i.ibb.co/hV3m83R/image.png" />
                                <p className="leading-relaxed text-white">
                                    This website is the best for buying gaming equipments. I bought a gaming chair and it was delivered on time. The quality of the product is also very good. I would recommend this platform to all the gamers out there.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 className="text-white font-bold title-font tracking-wider text-sm uppercase">Sayan Adhikari</h2>
                                <p className="text-white">Professional Gaming Coach</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial