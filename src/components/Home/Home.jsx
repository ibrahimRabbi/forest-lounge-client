import About from "./AboutForest/About";
import Banner from "./banner/Banner";
import CallUs from "./callUs/CallUs";
import Gallery from "./Categorygallery/Gallery";
import Feature from "./Feature/Feature";
import PopularManu from "./PopularManu/PopularManu";



const Home = () => {
    return (
        <div>
            <Banner />
            <Gallery />
            <About />
            <PopularManu />
            <Feature />
            <CallUs />
        </div>
    );
};

export default Home;