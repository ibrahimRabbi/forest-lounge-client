import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import LazyLoad from 'react-lazy-load';


const Banner = () => {
    return (
        <header className="text-center">

            <Carousel>
                <div>
                    <img src="https://i.ibb.co/nckRXcD/04.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/QNVpqDf/02.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/qmBNXBr/03.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/3hTxYK5/01.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/9p5BPQb/05.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/CMncNxD/06.png" />
                </div>
            </Carousel>
        </header >
    );
};

export default Banner;