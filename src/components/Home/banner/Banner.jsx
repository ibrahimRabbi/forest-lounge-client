import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import LazyLoad from 'react-lazy-load';


const Banner = () => {
    return (
        <header className="text-center">

            <Carousel>
                <div>

                    <img src="../../../../public/banner/01.jpg" />

                </div>
                <div>

                    <img src="../../../../public/banner/02.jpg" />

                </div>
                <div>

                    <img src="../../../../public/banner/03.png" />

                </div>
                <div>

                    <img src="../../../../public/banner/04.jpg" />

                </div>
                <div>

                    <img src="../../../../public/banner/05.png" />

                </div>
                <div>

                    <img src="../../../../public/banner/06.png" />

                </div>
            </Carousel>
        </header >
    );
};

export default Banner;