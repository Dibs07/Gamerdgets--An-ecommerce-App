import { Button } from "@material-tailwind/react";

const HeroSection = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-screen" style={{backgroundImage: 'url("./bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-white">Welcome to GamerGadgets</h1>
                    <p className="text-3xl text-white">The best place to buy gaming gadgets</p>
                    <div className="flex justify-center" style={{marginTop:"1rem"}}>
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
