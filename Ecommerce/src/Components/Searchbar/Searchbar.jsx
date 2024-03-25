import { useState } from "react";

const searchData = [
  {
      name: 'Video Games',
      image: 'https://i.ebayimg.com/images/g/bFgAAOSw0YFe~ifu/s-l1200.webp'
  },
  {
      name: 'Gaming Console',
      image: 'https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/235CN6/50a17a1c298e4c36819cf476d791c420.jpg/f/sony-playstation-5-dualsense-controller-white.jpg'
  },
  {
      name: 'Gaming PC',
      image: 'https://m.media-amazon.com/images/I/51bK4SfEMLL._AC_UF1000,1000_QL80_.jpg'
  },
  {
      name: 'Gaming Mobile',
      image: 'https://images-cdn.ubuy.co.in/63565a4db7369873ac133243-red-magic-6s-pro-gaming-phone.jpg'
  },
  {
      name: 'Gaming Laptop',
      image: 'https://m.media-amazon.com/images/I/51H9Br7KnXL._AC_UF1000,1000_QL80_.jpg'
  },
  {
      name: 'Gaming Chair',
      image: 'https://thesleepcompany.in/cdn/shop/files/GamingChair_3.jpg?v=1688993842&width=1445'
  },
  {
      name: 'Gaming Headphone',
      image: 'https://m.media-amazon.com/images/I/71BDfnzkrJL._AC_UF1000,1000_QL80_.jpg'
  },
]

const SearchBar = () => {

   const [search, setSearch] = useState("");

const filterSearchData = searchData.filter((obj) => obj.name.toLowerCase().includes(search.toLowerCase())).slice(0, 8);
return (
    <div className="">
        <div className="input flex justify-center">
            <input
                type="text"
                placeholder='Search here'
                onChange={(e) => setSearch(e.target.value)}
                className='bg-gray-200 placeholder-gray-400 rounded-lg px-2 py-2 w-44 lg:w-102 md:w-96 outline-none text-black'
            />
        </div>

        <div className="flex justify-center">
            {search && (
                <div className="block absolute bg-gray-200 w-96 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2">
                    {filterSearchData.length > 0 ? (
                        <>
                            {filterSearchData.map((item, index) => (
                                <div key={index} className="py-2 px-2">
                                    <div className="flex items-center gap-2">
                                        <img className="w-10" src={item.image} alt="" />
                                        <p className="text-black font-bold">{item.name}</p>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <>
                            <div className="flex justify-center">
                                <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" alt="img" />
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    </div>
);
}

export default SearchBar;