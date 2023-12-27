import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import React, { useRef, useEffect, useState } from 'react';
// import { IKImage } from 'imagekitio-react';
// import "../styles/carousel.module.css"
import '@splidejs/splide/dist/css/splide.min.css';

const ImageSlider = (props) => {
    const mainRef = useRef(null);
    const thumbsRef = useRef(null);
    let [width, setWidth] = useState()
    const [images, setImages] = useState([])


    function titleCase(str) {
        return str.toLowerCase().split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ');
    }


    async function getData() {
        const data = await fetch(`${props.url}/color_images/${titleCase(props.brand)}/${titleCase(props.model)}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const res = await data.json()
        setImages(res)
    }



    useEffect(() => {
        getData()
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
        height: `${width >= 1000 ? "16rem" : "10rem"}`,
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
            <Splide hasTrack={false} options={mainOptions} ref={mainRef} aria-labelledby="thumbnail-slider-example">
                <div className='custom-wrapper'>
                    <SplideTrack>
                        {images.length > 0 ? images.map((item, index) => {
                            return (<SplideSlide key={index}>
                                <img className={`${width >= 1000 ? "h-[16rem]" : null} mx-auto`} src={`https://ik.imagekit.io/GORP/${props.brand}/${props.model}/Color/${item}`} alt="" />
                            </SplideSlide>)
                        }) : null}
                    </SplideTrack>
                    <div className="splide__arrows">
                        <button className="w-[40.38px] h-[40.38px] bg-white rounded-full splide__arrow splide__arrow--prev shadow-md">
                            <img width={8} className='rotate-[180deg]' src="./images/right.svg" alt="" />
                        </button>
                        <button className="w-[40.38px] h-[40.38px] bg-white rounded-full splide__arrow splide__arrow--next shadow-md">
                            <img width={8} src="./images/right.svg" alt="" />
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

export default ImageSlider;

