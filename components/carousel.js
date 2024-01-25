import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import React, { useRef, useEffect, useState } from 'react';
// import { IKImage } from 'imagekitio-react';
// import "../styles/carousel.module.css"
import '@splidejs/splide/dist/css/splide.min.css';
import right from "../public/images/right.svg"
import Image from 'next/image';


export default function ImageSlider(props) {
    const mainRef = useRef(null);
    const thumbsRef = useRef(null);
    let [width, setWidth] = useState()
    const [images, setImages] = useState([])


    const url = "https://inquisitive-knickers-fish.cyclic.app"


    async function getData() {
        const data = await fetch(`${url}/car_images/${titleCase(props.brand)}/${titleCase(props.model)}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const res = await data.json()

        console.log(res)

        setImages(res)
    }


    function titleCase(str) {
        if (str) {
            return str.toLowerCase().split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ');
        }
    }

    useEffect(() => {
        if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
            mainRef.current.sync(thumbsRef.current.splide);
        }

        getData()

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
                        <SplideSlide>
                            <img title={`${titleCase(props.brand)} ${titleCase(props.model)}`} className={`${width >= 1000 ? "h-[16rem]" : "h-auto"} mx-auto`} src={`https://ik.imagekit.io/GORP/${titleCase(props.brand)}/${titleCase(props.model)}/${titleCase(props.model)}.jpg?updatedAt=${new Date().getTime() / 1000}`} alt={`${props.brand} ${props.model} Hero`} />
                        </SplideSlide>
                        {Object.keys(images).map((item) => {
                            return (images[item].map((itm, ind) => {
                                return (<SplideSlide key={ind}>
                                    <img className={`${width >= 1000 ? "h-[16rem]" : null} mx-auto`} src={itm + `?updatedAt=${new Date().getTime() / 1000}`} alt={`${props.brand} ${props.model} ${item}`} />
                                </SplideSlide>)
                            }))
                        })}
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

                {/* <SplideSlide>
                    <img className={`${width >= 1000 ? "h-[16rem]" : null} mx-auto`} src="https://ik.imagekit.io/GORP/Hyundai/Aura/Exterior/car6.jpg?updatedAt=1690106137961" alt="" />
                </SplideSlide> */}
            </Splide>
        </div>
    );

};



