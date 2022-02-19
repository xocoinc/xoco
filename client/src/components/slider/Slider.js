import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Slider = () =>{
    return(
        <Carousel>
            <div>
                <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt='logo'/>
            </div>
            <div>
                <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt='logo'/>
            </div>
            <div>
                <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt='logo'/>
            </div>
        </Carousel>
    )
}

export default Slider;