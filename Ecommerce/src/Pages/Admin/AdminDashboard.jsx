import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faObjectGroup, faPeopleGroup, faPeopleLine, faReorder } from '@fortawesome/free-solid-svg-icons';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProductDetail from './ProductDetail';
import OrderDetail from './OrderDetail';
import UserDetail from './UserDetail';
import Nav from '../../Components/Navbar/nav';
import Foot from '../../Components/Footer/Foot';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const user = JSON.parse(localStorage.getItem('users'));
    const navigate = useNavigate();
    return (
        <>
        {user.role=="admin"?<><Nav />
        <div>
        {/* Top */}
        <div className="top mb-5 px-5 mt-5">
            <div className=" bg-pink-50 py-5 border border-pink-100 rounded-lg" style={{background:'radial-gradient(circle, rgba(215,174,238,1) 0%, rgba(156,109,181,1) 100%)'}}>
                <h1 className=" text-center text-2xl font-bold text-white">Admin Dashboard</h1>
            </div>
        </div>
        <div className="px-5">
 
            <div className="mid mb-5">
              
                <div className=" bg-pink-50 py-5 rounded-xl border border-pink-100" style={{background:'radial-gradient(circle, rgba(215,174,238,1) 0%, rgba(156,109,181,1) 100%)'}}>
  
                    <div className="flex justify-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
                    </div>

                    <div className="">
                        <h1 className=" text-center text-lg text-white"><span className=" font-bold">Name :</span> Dibakar Banerjee</h1>
                        <h1 className=" text-center text-lg text-white"><span className=" font-bold">Email :</span> banerjeedibs@gmail.com</h1>
                    </div>
                </div>
            </div>

            <div className="">
                <Tabs>
                    <TabList className="flex flex-wrap -m-4 text-center justify-center">
                        {/* Total Products */}
                        <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                            <div className=" border bg-pink-50 hover:bg-pink-100 border-pink-100 px-4 py-3 rounded-xl" style={{background:'radial-gradient(circle, rgba(215,174,238,1) 0%, rgba(156,109,181,1) 100%)'}} >
                                <div className="text-white w-12 h-12 mb-3 inline-block" >
                                <FontAwesomeIcon icon={faObjectGroup} className="text-blue-900 w-12 h-12 mb-3 inline-block" />
                                </div>
                                <h2 className="title-font font-medium text-3xl text-white fonts1" >10</h2>
                                <p className=" text-white  font-bold" >Total Products</p>
                            </div>
                        </Tab>
      
                        <Tab className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
                            <div className=" border bg-pink-50 hover:bg-pink-100 border-pink-100 px-4 py-3 rounded-xl" style={{background:'radial-gradient(circle, rgba(215,174,238,1) 0%, rgba(156,109,181,1) 100%)'}} >
                                <div className="text-white w-12 h-12 mb-3 inline-block" >
                                <FontAwesomeIcon icon={faReorder} className="text-blue-900 w-12 h-12 mb-3 inline-block" />
                                </div>
                                <h2 className="title-font font-medium text-3xl text-white fonts1" >10</h2>
                                <p className=" text-white  font-bold" >Total Order</p>
                            </div>
                        </Tab>
               
                        <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                            <div className=" border bg-pink-50 hover:bg-pink-100 border-pink-100 px-4 py-3 rounded-xl"  style={{background:'radial-gradient(circle, rgba(215,174,238,1) 0%, rgba(156,109,181,1) 100%)'}}>
                                <div className="text-white w-12 h-12 mb-3 inline-block" >
                                <FontAwesomeIcon icon={faPeopleGroup} className="text-blue-900 w-12 h-12 mb-3 inline-block" />
                                </div>
                                <h2 className="title-font font-medium text-3xl text-white fonts1" >10</h2>
                                <p className=" text-white  font-bold" >Total Order</p>
                            </div>
                        </Tab>
                    </TabList>
                    <TabPanel>
                        <ProductDetail />
                    </TabPanel>
                    <TabPanel>
                        <OrderDetail />
                    </TabPanel>
                    <TabPanel>
                       <UserDetail />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    </div>
    <Foot /></>:(navigate('/login'))}
    </>
    );
}

export default AdminDashboard;