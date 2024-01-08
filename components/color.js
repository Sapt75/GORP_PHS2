import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import React, { useRef, useEffect, useState } from 'react';
// import { IKImage } from 'imagekitio-react';
// import "../styles/carousel.module.css"
import '@splidejs/splide/dist/css/splide.min.css';
import right from "../public/images/right.svg"
import Image from 'next/image';

export default function ColorSlider(props){
    const mainRef = useRef(null);
    const thumbsRef = useRef(null);
    let [width, setWidth] = useState()
    const [images, setImages] = useState(props.data)





    useEffect(() => {
        if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
            mainRef.current.sync(thumbsRef.current.splide);
        }
        setImages(props.data)
        setWidth(window.innerWidth)
    }, []);




    const mainOptions = {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '1rem',
        pagination: false,
        height: `${width >= 1000 ? "16rem" : "10rem"}`,
    };

    // const thumbsOptions = {
    //     type: 'slide',
    //     rewind: true,
    //     gap: '1rem',
    //     pagination: false,
    //     fixedWidth: 110,
    //     fixedHeight: 70,
    //     cover: true,
    //     focus: 'center',
    //     isNavigation: true,
    // };

    return (
        <div className="wrapper">
            <Splide hasTrack={false} options={mainOptions} ref={mainRef} aria-labelledby="thumbnail-slider-example">
                <div className='custom-wrapper'>
                    <SplideTrack>
                        {images ? images.map((item, index) => {
                            return (<SplideSlide key={index}>
                                <img title={`${props.brand} ${props.model} ${item.split("/")[item.split("/").length - 1].split(".")[0].split("_")[1]}`} className={`${width >= 1000 ? "h-[16rem]" : "h-auto"} mx-auto`} src={item} alt={`${item.split("/")[item.split("/").length - 1].split(".")[0]} Color`} />
                            </SplideSlide>)
                        }) : null}
                    </SplideTrack>
                    <div className="splide__arrows">
                        <button className="w-[40.38px] h-[40.38px] bg-white rounded-full splide__arrow splide__arrow--prev shadow-md">
                            <Image width={8} className='rotate-[180deg]' src={right} alt="left arrow" />
                        </button>
                        <button className="w-[40.38px] h-[40.38px] bg-white rounded-full splide__arrow splide__arrow--next shadow-md">
                            <Image width={8} src={right} alt="right arrow" />
                        </button>
                    </div>
                </div>
            </Splide>

            {/* <Splide
                options={thumbsOptions}
                ref={thumbsRef} // Use "as" to assert the type.
                aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
            >

                <SplideSlide>
                    <img src="https://ik.imagekit.io/GORP/Hyundai/Aura/Aura.jpg?updatedAt=1690106132936" alt="" />
                </SplideSlide>
                <SplideSlide>
                    <img src="https://ik.imagekit.io/GORP/Hyundai/Aura/Exterior/car6.jpg?updatedAt=1690106137961" alt="" />
                </SplideSlide>

            </Splide> */}
        </div>
    );

    
};



