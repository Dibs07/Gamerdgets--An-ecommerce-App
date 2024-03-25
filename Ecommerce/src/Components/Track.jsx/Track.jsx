import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faTools, faHandshake, faKeyboard } from '@fortawesome/free-solid-svg-icons';

const Track = () => {
    return (
        <section>
            <div className=" container mx-auto px-5 py-10 md:py-14">

                <div className="flex flex-wrap -m-4 text-center">

                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"  >

                            <FontAwesomeIcon icon={faKeyboard} className="text-blue-900 w-12 h-12 mb-3 inline-block" />


                            <h2 className="title-font font-medium text-lg text-gray-900" >Premium Equipments</h2>
                            <p className="leading-relaxed">We provide the best equipments to our customers.
                            </p>
                        </div>
                    </div>


                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"  >
                            <FontAwesomeIcon icon={faGamepad} className="text-blue-900 w-12 h-12 mb-3 inline-block" />


                            <h2 className="title-font font-medium text-lg text-gray-900" >Premium Games</h2>
                            <p className="leading-relaxed">We provide the best games to our customers.
                            </p>
                        </div>
                    </div>


                    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                        <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"  >
                            <FontAwesomeIcon icon={faTools} className="text-blue-900 w-12 h-12 mb-3 inline-block" />


                            <h2 className="title-font font-medium text-lg text-gray-900" >Premium Sevices</h2>
                            <p className="leading-relaxed">We provide the best services to our customers.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Track;