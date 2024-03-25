import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const HeroSection = () => {
    const user = JSON.parse(localStorage.getItem('users'));
    return (
        <div>
            <div className="flex justify-center items-center h-screen" style={{backgroundImage: 'url("./bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-white">Welcome to Gamerdgets</h1>
                    <p className="text-3xl text-white">The best place to buy gaming gadgets</p>
                    <div className="flex justify-center" style={{marginTop:"1rem"}}>
                        {!user && <Link to={"/signup"}> <Button
                            size="lg"
                            variant="outlined"
                            color="white"
                            className="flex items-center gap-3 justify-center" 
                            style={{marginRight:"1rem"}}
                        >
                           Join
                        </Button></Link>}
                     <Button
                            size="lg"
                            variant="outlined"
                            color="white"
                            className="flex items-center gap-3 justify-center" 
                        >
                            Explore
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
