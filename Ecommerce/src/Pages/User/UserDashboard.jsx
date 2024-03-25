import { useNavigate } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
const products = [
    {
        id: 1,
        name: 'Logitech G Logitech Extreme 3D Pro Joystick Playstation',
        imageSrc:
            'https://m.media-amazon.com/images/I/61Nlu-1WgRL._AC_UF1000,1000_QL80_.jpg',
        href: '#',
        price: '₹61,999',
        color: 'Orange',
        imageAlt: 'Logitech G Logitech Extreme 3D Pro Joystick Playstation',
        quantity: 1,
    },
]

const UserDashboard = () => {
    const user = JSON.parse(localStorage.getItem('users'));
    //console.log(user);
    const navigate = useNavigate();
    return (
        <>
        {user?<><Layout>
            <div className=" container mx-auto px-4 py-5 lg:py-8" >
         
                <div className="top ">
               
                    <div className=" py-5 rounded-xl border border-pink-100" style={{background:'linear-gradient(90deg, rgba(191,172,222,1) 7%, rgba(143,137,207,1) 44%, rgba(0,134,255,1) 99%)'}}>
                      
                        <div className="flex justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
                        </div>
                        
                        <div className="">
                            <h1 className=" text-center text-lg"><span className=" font-bold">Name :</span> {user.firstname} {user.lastname}</h1>
                            <h1 className=" text-center text-lg"><span className=" font-bold">Email :</span> {user.email}</h1>
                        </div>
                    </div>
                </div>

            
                <div className="bottom">
             
                    <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
                 
                        <h2 className=" text-2xl lg:text-3xl text-white font-bold">Order Details</h2>

                        <div className="mt-5 flex flex-col overflow-hidden rounded-xl border border-pink-100 md:flex-row">
                  
                            <div className="w-full border-r border-pink-100 bg-pink-50 md:max-w-xs">
                         
                                <div className="p-8" style={{background:'linear-gradient(90deg, rgba(191,172,222,1) 7%, rgba(143,137,207,1) 44%, rgba(0,134,255,1) 99%)'}}>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                                        <div className="mb-4">
                                            <div className="text-sm font-semibold text-black">Order Id</div>
                                            <div className="text-sm font-medium text-gray-900">#74557994327</div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="text-sm font-semibold">Date</div>
                                            <div className="text-sm font-medium text-gray-900">4 March, 2023</div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="text-sm font-semibold">Total Amount</div>
                                            <div className="text-sm font-medium text-gray-900">₹84,499</div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="text-sm font-semibold">Order Status</div>
                                            <div className="text-sm font-medium text-green-800">Confirmed</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                            <div className="flex-1" >
                                <div className="p-8">
                                    <ul className="-my-7 divide-y divide-gray-200" >
                                        {products.map((product) => (
                                            <li
                                                key={product.id}
                                                className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
                                            >
                                                <div className="flex flex-1 items-stretch">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                                                            src={product.imageSrc}
                                                            alt={product.imageSrc}
                                                        />
                                                    </div>

                                                    <div className="ml-5 flex flex-col justify-between">
                                                        <div className="flex-1">
                                                            <p className="text-sm font-bold text-white">{product.name}</p>
                                                            <p className="mt-1.5 text-sm font-medium text-white">{product.color}</p>
                                                        </div>

                                                        <p className="mt-4 text-sm font-medium text-white">x {product.quantity}</p>
                                                    </div>
                                                </div>

                                                <div className="ml-auto flex flex-col items-end justify-between">
                                                    <p className="text-right text-sm font-bold text-white">{product.price}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout></>:(navigate('/login'))}
        </>
    );
}

export default UserDashboard;