// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import React, { useRef, useEffect, useState } from 'react';
// // import { IKImage } from 'imagekitio-react';
// // import "../styles/carousel.module.css"
// import '@splidejs/splide/dist/css/splide.min.css';

// const TruckGallery = (props) => {
//     const mainRef = useRef(null);
//     const thumbsRef = useRef(null);
//     let [width, setWidth] = useState()

//     useEffect(() => {
//         if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
//             mainRef.current.sync(thumbsRef.current.splide);
//         }

//         setWidth(window.innerWidth)
//     }, []);




//     const mainOptions = {
//         type: 'loop',
//         perPage: 1,
//         perMove: 1,
//         gap: '1rem',
//         pagination: false,
//         height: `${width >= 1000 ? "16rem" : "10rem"}`,
//     };

//     return (
//         <div className="wrapper">
//             <Splide options={mainOptions} ref={mainRef} aria-labelledby="thumbnail-slider-example">

//                 <SplideSlide>
//                     <img className='mx-auto' src="./images/truck.png" alt="" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img className='mx-auto' src="./images/truck.png" alt="" />
//                 </SplideSlide>
//             </Splide>
//         </div>
//     );
// };

// export default TruckGallery;

