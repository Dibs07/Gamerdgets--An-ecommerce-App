import "./Category.css";
const category = [
    {
        name: 'Video Games',
        image: 'ps4.png'
    },
    {
        name: 'Gaming Console',
        image: 'game-console.png'
    },
    {
        name: 'Gaming PC',
        image: 'gaming.png'
    },
    {
        name: 'Gaming Mobile',
        image: 'videogame.png'
    },
    {
        name: 'Gaming Laptop',
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png'
    },
    {
        name: 'Gaming Chair',
        image: 'gaming-chair.png'
    },
    {
        name: 'Gaming Headphone',
        image: 'headset.png'
    },
]

const Category = () => {
    return (
        <div className="mt-5">
            <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
                {category.map((item, index) => (
                    <div key={index} className="px-3 lg:px-10">
                        <div className="w-24 h-24 lg:w-32 lg:h-32 max-w-xs rounded-full bg-blue-800 transition-all hover:bg-blue-400 cursor-pointer mb-1">
                            <div className="flex justify-center mb-12">
                                <img src={item.image} alt="img" />
                            </div>
                        </div>
                        <h1 className='text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase'>{item.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Category;
