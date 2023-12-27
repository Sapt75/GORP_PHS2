import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useRef, useEffect, useState } from 'react';
// import { IKImage } from 'imagekitio-react';
// import "../styles/carousel.module.css"
import '@splidejs/splide/dist/css/splide.min.css';

const ImageSlider = (props) => {
    const mainRef = useRef(null);
    const thumbsRef = useRef(null);
    let [width, setWidth] = useState()

    useEffect(() => {
        if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
            mainRef.current.sync(thumbsRef.current.splide);
        }

        setWidth(window.innerWidth)
    }, []);




    const mainOptions = {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '1rem',
        pagination: false,
        height: `${width >= 1000 ? "16rem" : "14rem"}`,
    };

    const thumbsOptions = {
        type: 'slide',
        rewind: true,
        gap: '1rem',
        pagination: false,
        fixedWidth: 110,
        fixedHeight: 70,
        cover: true,
        focus: 'center',
        isNavigation: true,
    };

    return (
        <div className="wrapper">
            <Splide options={mainOptions} ref={mainRef} aria-labelledby="thumbnail-slider-example">

                <SplideSlide>
                    <img className={`${width >= 1000 ? "h-[16rem]" : null} mx-auto`} src="https://ik.imagekit.io/GORP/Hyundai/Aura/Aura.jpg?updatedAt=1690106132936" alt="" />
                </SplideSlide>
                <SplideSlide>
                    <img className={`${width >= 1000 ? "h-[16rem]" : null} mx-auto`}src="https://ik.imagekit.io/GORP/Hyundai/Aura/Exterior/car6.jpg?updatedAt=1690106137961" alt="" />
                </SplideSlide>
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

export default ImageSlider;

