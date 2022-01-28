import React,{useEffect} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const arr = ['hello 1','hello 2','hello 3']
const Carousal2 = ({data}) => {


    return (
        <Carousel 
         autoPlay={true}
        autoFocus={true}
        interval={4000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        centerMode={true}
        centerSlidePercentage={93}
        stopOnHover={false}
        >
            {
                arr.map((e)=>{
                    return e;
                })
            }
        </Carousel>
    )
}

export default Carousal2
