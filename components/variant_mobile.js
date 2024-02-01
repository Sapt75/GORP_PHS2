import React, { useEffect, useRef, useState } from 'react'
import style from "../styles/varient.module.css"
import ImageSlider from '../components/carousel'
import Faq from '../components/faq';
import Image from 'next/image';
import Color from "../components/color"
import DoneIcon from '@mui/icons-material/Done';
import logo from "../public/images/logo.png"
import star from "../public/images/star.svg"
import color from "../public/images/color.svg"
import image from "../public/images/image.png"
import down from "../public/images/down.svg"
import edit from "../public/images/edit.svg"
import arai from "../public/images/arai.svg"
import engine from "../public/images/engine.svg"
import fuel from "../public/images/fuel.svg"
import seat from "../public/images/seat.svg"
import transmission from "../public/images/transmission.svg"
import body from "../public/images/body.svg"
import advert2 from "../public/images/advert2.png"
import engine_white from "../public/images/engine_white.svg"
import dimension from "../public/images/dimension.svg"
import capacity from "../public/images/capacity.svg"
import suspension from "../public/images/suspension.svg"
import safety from "../public/images/safety.svg"
import breaking from "../public/images/breaking.svg"
import comfort from "../public/images/comfort.svg"
import locks from "../public/images/locks.svg"
import bow from "../public/images/bow.svg"
import car1 from "../public/images/car1.png"
import car2 from "../public/images/car2.png"
import car3 from "../public/images/car3.png"
import compare from "../public/images/compare.svg"
import car5 from "../public/images/car5.png"
import car4 from "../public/images/car4.png"
import compare_white from "../public/images/compare-white.svg"
import brochure from "../public/images/brocher.jpg"
import brochure2 from "../public/images/brochure.svg"
import download from "../public/images/download.svg"
import connect from "../public/images/connect.svg"
import promo from "../public/images/promo.png"
import last_adv from "../public/images/last_adv.png"
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import City_Modal from '../components/city_modal';
import Version_Modal from '../components/version_modal';
import { ChevronRight } from '@mui/icons-material';
import Right from '../components/right';
import Rating_Model from '../components/rating_modal';
import Emi_Modal from '../components/emi';
import { useRouter } from "next/router";
import { Link, animateScroll as scroll } from "react-scroll";
import Brand_Model from '../components/brand_modal';
import RLink from 'next/link';
import ColorSlider from '../components/color';






export default function Variant_Mobile(props) {


    const { data, response, vpresponse, vvpresponse, params, color, rcity } = props

    const [update, setUpdate] = useState(false)
    const [show, setShow] = useState(false)
    const top_bar = useRef(null)
    const top_shift = useRef(null)
    const tab_change = useRef(null)
    let [distance, setDistance] = useState(0)
    const white = useRef(null)
    const [cardetails, setCardetails] = useState(data)
    const [finalVersion, setFinalVersion] = useState(response)
    const [getVersion, setVersion] = useState(response)
    const [allVersionPrice, setAllVersionPrice] = useState(vpresponse == "No Data" ? [] : vpresponse)
    const [versionPrice, setVersionPrice] = useState(vvpresponse == "No Data" ? [] : vvpresponse)
    const [city, setCity] = useState(rcity)
    const router = useRouter();


    const url = "https://inquisitive-knickers-fish.cyclic.app"




    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            top_shift.current.classList.add("mt-[-5rem]")
            white.current.classList.remove("top-[50px]")
            white.current.classList.add("top-[-13px]")
            white.current.classList.remove("h-[2rem]")
            white.current.classList.add("h-[10rem]")

        } else {
            top_shift.current.classList.remove("mt-[-5rem]")
            white.current.classList.remove("top-[-13px]")
            white.current.classList.add("top-[50px]")
            white.current.classList.remove("h-[10rem]")
            white.current.classList.add("h-[2rem]")
        }
    }

    function titleCase(str) {
        return str.toLowerCase().split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ');
    }


    function numFormat(value) {
        const val = Math.abs(value)
        if (val >= 10000000) return `${(value / 10000000).toFixed(2)} Crore`
        if (val >= 100000) return `${(value / 100000).toFixed(2)} Lakh`
        return value;
    }



    useEffect(() => {
        window.onscroll = function () { scrollFunction() };
        setCardetails(data)

        setVersion(response)
        setFinalVersion(response)



        vpresponse == "No Data" ? setAllVersionPrice([]) : setAllVersionPrice(vpresponse)


        vvpresponse == "No Data" ? setVersionPrice([]) : setVersionPrice(vvpresponse)
        setCity(rcity)
    }, [params, data, response, vpresponse, vvpresponse, rcity])






    return (
        <div className='mx-2'>
            <div>
                <div ref={top_shift} className='h-[10rem] md:h-auto'>
                    <div className='mt-[1rem] bg-white z-[9999]'>
                        <div className='h-[5rem] md:h-auto mr-3'>
                            <div className='flex w-[-webkit-fill-available] mr-[10px] bg-white fixed z-[999] md:hidden space-x-1'>
                                <Version_Modal brand={cardetails[0].brand} model={cardetails[0].model_name} version={cardetails[0].version_name} price={allVersionPrice} data={finalVersion} />
                                <City_Modal url={url} />
                            </div>
                        </div>
                        <div ref={white} className='w-full md:hidden fixed bg-white top-[50px] z-[99] h-[2rem]'>

                        </div>
                        <div>
                            <ul className='flex fixed mt-[15px] z-[999] bg-white w-full md:hidden whitespace-nowrap overflow-x-scroll md:whitespace-normal space-x-8 md:space-x-[5rem] text-[16px] border-y border-[#E1E1E1] font-normal tracking-[-0.32px] px-2'>
                                <li className='font-semibold text-[#484848] text-[14px] my-2'>{cardetails[0].model_name}</li>
                                <Link title={`${cardetails[0].model_name} ${cardetails[0].version_name} Features & Specification`} activeclassName="active"
                                    to="spec" spy={true} smooth={true} offset={-150} duration={500}>
                                    <li className='hover:text-[#09809A] text-[14px] text-[#484848] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold my-2'>Features & Specifications</li>
                                </Link>
                                <Link title={`${cardetails[0].model_name} Variants`} activeclassName="active"
                                    to="ver" spy={true} smooth={true} offset={-150} duration={500}>
                                    <li className='hover:text-[#09809A] text-[14px] text-[#484848] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold my-2'>Variants</li>
                                </Link>
                                <Link title={`${cardetails[0].model_name} ${cardetails[0].version_name} Colors`} activeclassName="active"
                                    to="col" spy={true} smooth={true} offset={-150} duration={500}>
                                    <li className='hover:text-[#09809A] text-[14px] text-[#484848] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold my-2'>Colors</li>
                                </Link>
                                <li className='my-1.5'>
                                    <button className='text-white text-[14px] px-4 bg-[#CE4327] font-semibold pb-1 rounded-md'>Get Offer</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='md:hidden'>
                    <div className='flex justify-between'>
                        <h1 className='text-[20px] text-[#484848] font-semibold tracking-[-0.4px]'>{cardetails[0].brand} {cardetails[0].model_name} {cardetails[0].version_name}</h1>
                        {/* <div className=''>
                            <input className='mx-1' type="checkbox"></input>
                            <span className='text-[#484848] md:text-[16px] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
                        </div> */}
                    </div>
                    <div className='space-x-[1.6rem]'>
                        {versionPrice.length > 0 ? <span className='text-[20px] text-[#484848] font-semibold tracking-[-0.48px]'> {`₹ ${numFormat(versionPrice[0].ex_showroom_price)}`}</span> : null}
                        <span className='text-[12px] text-[#CE4327] font-semibold underline'>View Price Breakup</span>
                    </div>
                    <span className='text-[14px] pt-1.5 font-normal tracking-[-0.28px] text-[#484848]'>On-Road Price New Delhi</span>
                    {/* <div className='hidden md:flex justify-between w-100 bg-[#F4F4F4] py-[0.5rem]'>
                                <div className='px-2 pb-1'>
                                    <p className='text-[12px] text-[#484848] font-medium pb-0.5 tracking-[-0.28px]'>EMI Starts  at 12550/Month</p>
                                    <Emi_Modal />
                                </div>
                                <div>
                                    <button className='px-[1rem] hover:bg-[#09809A] bg-[#09809A] py-[0.1rem] mx-[1rem] mt-[0.5rem] rounded-[5px] text-white text-[14px] font-medium tracking-[-0.24px]'>View Offers</button>
                                </div>
                            </div> */}
                    <button className='hidden md:block text-[14px] my-[1rem] py-[0.5rem] rounded-[2px] bg-[#09809A] font-medium tracking-[-0.28px] text-white w-full md:w-3/5'>Get The Best Deal</button>
                </div>
                <hr className='border-t-1 mt-2 border-[#E1E1E1]' />
                <div className='md:flex xl:space-x-[6rem] my-[1rem] py-[1rem] md:border md:border-[#E1E1E1]'>
                    <div className='md:w-[50%] text-center'>
                        <ImageSlider url={url} brand={cardetails[0].brand} model={cardetails[0].model_name} />
                        <Link to='col' spy={true} smooth={true} offset={-150} duration={500}>
                            <span className='mx-[2rem] text-[14px] font-normal tracking-[-0.28px] text-[#09809A] cursor-pointer'><Image className='inline' src={color} alt="Color Image" /> Colors</span>
                        </Link>
                        {/* <span className='mx-[2rem] text-[14px] font-normal tracking-[-0.28px] text-[#09809A]'><Image className='inline' src={image} alt="" /> Images</span> */}
                    </div>
                </div>
            </div>

            <div className='md:hidden'>
                <div className='md:w-[74%]'>
                    <div className='w-full'>
                        <h2 className='md:text-[24px] text-[#484848] mb-3 text-[18px] font-semibold tracking-[-0.48px]'>{cardetails[0].brand} {cardetails[0].model_name} {cardetails[0].version_name} Latest Updates</h2>
                        <div className='bg-[#f4f4f4] text-[#6F6F6F] p-3'>
                            <p>{cardetails[0].varient_description} <span className={`${update ? null : "hidden"}`}>
                            </span></p>

                            <div onClick={() => update ? setUpdate(false) : setUpdate(true)} className='text-right cursor-pointer pt-[1rem]'>
                                <span className='mx-[1rem] text-[#09809A] text-[14px] font-normal'>Read More <Image className='inline' src={down} alt="down icon" /></span>
                            </div>
                        </div>
                        <hr className='border-t-1 border-[#E1E1E1]' />

                        <div className='md:hidden block my-3'>
                            {/* <div className='flex justify-between w-100 bg-[#F4F4F4] py-[0.5rem]'>
                                        <div className='px-2 pb-1'>
                                            <p className='text-[16px] text-[#484848] font-medium pb-0.5 tracking-[-0.28px]'>EMI Starts  at 12550/Month</p>
                                            <Emi_Modal />
                                        </div>
                                        <div>
                                            <button className='px-[1rem] hover:bg-[#09809A] bg-[#09809A] py-[0.1rem] mx-[1rem] mt-[0.5rem] rounded-[5px] text-white text-[14px] font-medium tracking-[-0.24px]'>View Offers</button>
                                        </div>
                                    </div> */}
                            {/* <h2 className='md:text-[24px] text-[#484848] text-[16px] mt-4 mb-2 font-semibold tracking-[-0.48px]'>{cardetails[0].brand} {cardetails[0].model_name} {cardetails[0].version_name} Ratings</h2>
                            <div className='flex md:hidden space-x-[1rem] text-[14px] border-b-[1px] border-[#E1E1E1] pb-4 font-light'>
                                <div>
                                    <span className='bg-[#09809A] px-[0.6rem] py-[4px] flex text-[14px] font-semibold rounded-md text-white'>
                                        4.5
                                        <Image width={20} className='pl-[4px]' src={star} alt="Star" />
                                    </span>
                                </div>
                                <div className='flex space-x-2 md:hidden pt-1'>
                                    <p className='text-[14px] font-normal text-[#6F6F6F] md:text-base'>17 Ratings & 25 Reviews</p>
                                    <p>|</p>
                                    <Rating_Model />
                                </div>
                            </div> */}
                        </div>

                        {/* SPonsored adv  */}
                        <div>
                            <p className='text-[12px] text-[#484848] mb-2 underline'>Sponsored</p>
                            <div className='w-full bg-[#E1E1E1] h-[15rem]'>

                            </div>
                        </div>


                        <div className='py-2'>
                            <div className='w-full rounded-[2px] flex justify-between text-[#484848] py-2 px-2'>
                                <h2 className='text-[15px] md:text-[24px] font-semibold tracking-[-0.32px]'>Key Specs of {cardetails[0].brand} {cardetails[0].model_name} {cardetails[0].version_name}</h2>
                                <Link title={`${cardetails[0].model_name} ${cardetails[0].version_name} Features & Specification`} activeclassName="active"
                                    to="spec" spy={true} smooth={true} offset={-150} duration={500}>
                                    <p className='md:text-[14px] text-[12px] font-semibold tracking-[-0.28px] mx-3 md:mx-[2rem] flex'>View All</p>
                                </Link>
                            </div>
                            <div className={`${style["spec-category"]} my-1`}>
                                <div className="border border-[#E1E1E1] col-span-2 xl:col-span-2">
                                    <div className='flex space-x-3 ml-2 py-2'>

                                        <div>
                                            <Image className='mt-1' src={fuel} alt="fuel" />
                                        </div>
                                        <div>
                                            <p className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.28px]'>Fuel Type</p>
                                            <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>{cardetails[0].Specifications.engine_and_transmission.fuel_type}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border border-[#E1E1E1] col-span-2 xl:col-span-3">
                                    <div className='flex space-x-3 ml-2 py-2'>

                                        <div>
                                            <Image className='mt-1' src={seat} alt="seat" />
                                        </div>
                                        <div>
                                            <p className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.28px]'>Seating Capacity</p>
                                            <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>{cardetails[0].seating_capacity}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border border-[#E1E1E1] col-span-2 xl:col-span-2">
                                    <div className='flex space-x-3 ml-2 py-2'>

                                        <div>
                                            <Image className='mt-1' src={body} alt="body" />
                                        </div>
                                        <div>
                                            <p className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.28px]'>Body Type</p>
                                            <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>{cardetails[0].body_type}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border border-[#E1E1E1] col-span-2 xl:col-span-3">
                                    <div className='flex space-x-3 ml-2 py-2'>

                                        <div>
                                            <Image className='mt-1' src={transmission} alt="transmission" />
                                        </div>
                                        <div>
                                            <p className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.28px]'>Transmission Type</p>
                                            <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>{cardetails[0].transmission_type}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border border-[#E1E1E1] col-span-2 xl:col-span-3">
                                    <div className='flex space-x-3 ml-2 py-2'>

                                        <div>
                                            <Image className='mt-1' src={engine} alt="engine" />
                                        </div>
                                        <div>
                                            <p className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.28px]'>Engine Displacement</p>
                                            <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>{cardetails[0].Specifications.engine_and_transmission.displacement} CC</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="border border-[#E1E1E1] col-span-2 xl:col-span-2 rounded-sm">
                                    <div className='flex space-x-3 ml-2 py-2'>

                                        <div>
                                            <Image className='mt-1' src={arai} alt="arai" />
                                        </div>
                                        <div>
                                            <p className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.28px]'>ARAI Mileage</p>
                                            <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>{cardetails[0].Specifications.engine_and_transmission.arai_mileage ? cardetails[0].Specifications.engine_and_transmission.arai_mileage : "null"} /kmph</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='md:py-[3rem] pt-4 pb-3'>
                                <Image src={advert2} alt="advertisement" />
                            </div>
                        </div>
                    </div>


                    {/* Specifications, Features */}
                    <div id='spec'>
                        <h2 className='md:text-[24px] text-[#484848] text-[18px] font-semibold tracking-[0.48px] mb-2'>{cardetails[0].brand} {cardetails[0].model_name} {cardetails[0].version_name} Features & Specs</h2>
                        <div className='md:w-full'>
                            <div className='md:mx-3'>
                                <p className='bg-[#F4F4F4] mb-1 text-[#484848] py-2 px-2 text-[16px] font-semibold tracking-[-0.32px]'>Features & Specifications</p>
                                <div className='flex'>
                                    <div className='w-[40%] space-y-1 relative z-0'>
                                        <div className={`md:py-3 max-w-[320px] ${distance >= 100 ? null : style.speech} ${distance >= 100 ? style.normal : style.right}  py-3 px-2 flex space-x-2`}>
                                            <p>Dimensions</p>
                                        </div>
                                        <div className={`md:py-3 ${distance >= 5 && distance <= 10 ? "text-[#484848]" : null} ${distance >= 100 && distance <= 200 ? style.speech : style.normal} ${distance >= 5 && distance <= 10 >= 5 ? style.right : null} max-w-[330px] py-3 px-2`}>
                                            <p>Engine</p>
                                        </div>
                                        <div className={`md:py-3 ${distance >= 5 && distance <= 10 ? "text-[#484848]" : null} ${distance >= 200 && distance <= 300 ? style.speech : style.normal} ${distance >= 5 && distance <= 10 >= 5 ? style.right : null} max-w-[330px] py-3 px-2`}>
                                            <p>Transmission</p>
                                        </div>
                                        <div className={`md:py-3 ${distance >= 5 && distance <= 10 ? "text-[#484848]" : null} ${distance >= 300 && distance <= 400 ? style.speech : style.normal} ${distance >= 5 && distance <= 10 >= 5 ? style.right : null} max-w-[330px] py-3 px-2`}>
                                            <p>Safety & Security</p>
                                        </div>
                                        <div className={`md:py-3 ${distance >= 5 && distance <= 10 ? "text-[#484848]" : null} ${distance >= 400 && distance <= 500 ? style.speech : style.normal} ${distance >= 5 && distance <= 10 >= 5 ? style.right : null} max-w-[330px] py-3 px-2`}>
                                            <p>Vehicle Status & Alert</p>
                                        </div>
                                        <div className={`md:py-3 ${distance >= 5 && distance <= 10 ? "text-[#484848]" : null} ${distance >= 500 && distance <= 600 ? style.speech : style.normal} ${distance >= 5 && distance <= 10 >= 5 ? style.right : null} max-w-[330px] py-3 px-2`}>
                                            <p>Location & Trips</p>
                                        </div>
                                        <div className={`md:py-3 ${distance >= 5 && distance <= 10 ? "text-[#484848]" : null} ${distance >= 600 && distance <= 700 ? style.speech : style.normal} ${distance >= 5 && distance <= 10 >= 5 ? style.right : null} max-w-[330px] py-3 px-2`}>
                                            <p>Infotainment & Connectivity</p>
                                        </div>
                                        <div className={`md:py-3 ${distance >= 5 && distance <= 10 ? "text-[#484848]" : null} ${distance >= 700 && distance <= 800 ? style.speech : style.normal} ${distance >= 5 && distance <= 10 >= 5 ? style.right : null} max-w-[330px] py-3 px-2`}>
                                            <p>Comfort and Convenience</p>
                                        </div>
                                        <div className={`md:py-3 ${distance >= 5 && distance <= 10 ? "text-[#484848]" : null} ${distance >= 800 && distance <= 900 ? style.speech : style.normal} ${distance >= 5 && distance <= 10 >= 5 ? style.right : null} max-w-[330px] py-3 px-2`}>
                                            <p>Capacity</p>
                                        </div>
                                        <div className={`md:py-3 ${distance >= 5 && distance <= 10 ? "text-[#484848]" : null} ${distance >= 900 && distance <= 1000 ? style.speech : style.normal} ${distance >= 5 && distance <= 10 >= 5 ? style.right : null} max-w-[330px] py-3 px-2`}>
                                            <p>Exterior</p>
                                        </div>
                                        <div className={`md:py-3 ${distance >= 5 && distance <= 10 ? "text-[#484848]" : null} ${distance >= 1000 && distance <= 1100 ? style.speech : style.normal} ${distance >= 5 && distance <= 10 >= 5 ? style.right : null} max-w-[330px] py-3 px-2`}>
                                            <p>Interior</p>
                                        </div>
                                        <div className={`md:py-3 ${distance >= 5 && distance <= 10 ? "text-[#484848]" : null} ${distance >= 1100 && distance <= 1200 ? style.speech : style.normal} ${distance >= 5 && distance <= 10 >= 5 ? style.right : null} max-w-[330px] py-3 px-2`}>
                                            <p>Entertainment & Communication</p>
                                        </div>
                                        <div className={`md:py-3 ${distance >= 5 && distance <= 10 ? "text-[#484848]" : null} ${distance >= 1200 && distance <= 1300 ? style.speech : style.normal} ${distance >= 5 && distance <= 10 >= 5 ? style.right : null} max-w-[330px] py-3 px-2`}>
                                            <p>Suspension & Brakes</p>
                                        </div>
                                        <div className={`md:py-3 ${distance >= 5 && distance <= 10 ? "text-[#484848]" : null} ${distance >= 1300 && distance <= 1400 ? style.speech : style.normal} ${distance >= 5 && distance <= 10 >= 5 ? style.right : null} max-w-[330px] py-3 px-2`}>
                                            <p>Steering & Tyres</p>
                                        </div>
                                    </div>
                                    <div className='text-center w-[60%]'>
                                        <div onScroll={(event) => {
                                            setDistance(event.currentTarget.scrollTop)
                                        }} className={`${style["scroll-sec"]} text-left relative z-10`}>
                                            {Object.keys(cardetails[0].Specifications).map((item, index) => {
                                                return (<div key={index} className='py-2 border-r-[1px] border-[#C6C6C6] px-4'>
                                                    <p className='text-[14px] mx-4 my-[10px] font-bold text-[#09809A] tracking-[-0.32px]'>
                                                        {titleCase(item.replace("_", " ").replace("_", " ").replace("and", "&"))}
                                                    </p>
                                                    {Object.keys(cardetails[0].Specifications[item]).map((itm, ind) => {
                                                        return (cardetails[0].Specifications[item][itm] === null ? null : <div key={ind} className={`flex justify-between border-b-[1px] py-4 border-[#c6c6c6] my-2`}>
                                                            <p className='text-[#6F6F6F] text-[12px]'>{titleCase(itm.split("_").join(" "))}</p>
                                                            <p className='text-[#484848] text-[12px] font-semibold'>{cardetails[0].Specifications[item][itm]}</p>
                                                        </div>)
                                                    })}
                                                </div>)
                                            })}
                                            {Object.keys(cardetails[0].Features).map((item, index) => {
                                                return (<div key={index} className='py-2 border-r-[1px] border-[#C6C6C6] px-4'>
                                                    <p className='text-[14px] mx-4 my-[10px] font-bold text-[#09809A] tracking-[-0.32px]'>
                                                        {titleCase(item.replace("_", " ").replace("_", " ").replace("and", "&"))}
                                                    </p>
                                                    {Object.keys(cardetails[0].Features[item]).map((itm, ind) => {
                                                        return (cardetails[0].Features[item][itm] === null ? null : <div key={ind} className={`flex justify-between border-b-[1px] py-4 border-[#c6c6c6] my-2`}>
                                                            <p className='text-[#6F6F6F] text-[12px]'>{titleCase(itm.split("_").join(" "))}</p>
                                                            <p className='text-[#484848] text-[12px] font-semibold'>{cardetails[0].Features[item][itm]}</p>
                                                        </div>)
                                                    })}
                                                </div>)
                                            })}
                                            <div className='text-center my-4'>
                                                <button className='text-[13px] bg-[#09809A] font-extralight py-2.5 px-14 rounded-sm text-white'>Download Brochure</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Brochure  */}
                    <div className='relative mt-5 md:mt-[5rem]'>
                        <div className='md:w-full p-3 md:p-0 bg-[#CE4327] md:absolute md:top-1/3 rounded-sm'>
                            <p className='md:text-[28px] mx-4 text-[18px] text-white font-semibold tracking-[-0.56px] md:py-2'>{cardetails[0].brand} {cardetails[0].model_name} </p>
                            <div className='mx-2'>
                                <Image className='mx-2 md:py-4 inline w-4 md:w-6' src={brochure2} alt="brochure" />
                                <span className='md:text-[22px] text-[14px] inline mr-2 text-white font-medium tracking-[-0.44px]'>Download Brochure</span>
                                <Image className='mx-2 md:py-4 inline w-4 md:w-6' src={download} alt="download" />
                            </div>
                        </div>
                    </div>

                    {/* Car Versions Listing  */}

                    <div id='ver' className='lg:w-full'>
                        <h2 className='lg:text-[24px] text-[#484848] text-[18px] mt-4 mb-2 font-semibold tracking-[-0.48px]'>{cardetails[0].brand} {cardetails[0].model_name} Variants 2023</h2>
                        <div>
                            <div className='flex justify-between bg-[#F4F4F4] py-3 px-4'>
                                <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px]'>Variants</p>
                                <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px]'>On Road Price</p>
                            </div>

                            {/* Versions  */}
                            <div>
                                {finalVersion.map((element, id) => {
                                    return (<div key={id} className={`${show ? "flex" : id > 3 ? "hidden" : "flex"} justify-between py-3 px-4 border border-[#C6C6C6]`}>
                                        <div className='w-[10rem]'>
                                            <RLink title={`${element.model_name} ${element.version_name}`} href={`/new-cars/${element.brand.toLowerCase()}/${element.model_name.toLowerCase().split(" ").join("-")}/${element.version_name.toLowerCase().split(" ").join("-")}`}>
                                                <h3 className='text-[16px] text-[#484848] font-semibold tracking-[-0.36px]'>{element.model_name} {element.version_name}</h3>
                                            </RLink>
                                            <span className='text-[13px] text-[#6F6F6F] font-normal tracking-[-0.28px]'>{element.Specifications.engine_and_transmission.displacement} cc, {element.transmission_type}, {element.Specifications.engine_and_transmission.fuel_type} </span>
                                            <p className='text-[12px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</p>
                                        </div>
                                        <div>
                                            <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.36px]'>{allVersionPrice.length > 0 ? `₹ ${numFormat(allVersionPrice.find(o => o.Version_UID === element.uid).ex_showroom_price)}` : null}</p>
                                            {/* <div className=''>
                                                    <input className='mx-1' type="checkbox"></input>
                                                    <span className='text-[#484848] md:text-[16px] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
                                                </div> */}
                                        </div>
                                    </div>)
                                })}
                            </div>

                            <div className='text-center my-4'>
                                <button onClick={() => show ? setShow(false) : setShow(true)} className='px-16 rounded-md'><span className='text-[12px] font-normal tracking-[-0.24px] text-[#09809A]'>
                                    {show ? "Hide" : "View"} All Variants
                                </span></button>
                            </div>
                        </div>
                    </div>

                    {/* SPonsored adv  */}
                    <div>
                        <p className='text-[12px] text-[#484848] mb-2 underline'>Sponsored</p>
                        <div className='w-full bg-[#E1E1E1] h-[15rem]'>

                        </div>
                    </div>


                    {/* Color Listing  */}
                    <div id='col' className='lg:w-full mt-[2rem] mb-[3rem]'>
                        <p className='lg:text-[24px] text-[#484848] text-[16px] my-4 font-semibold tracking-[-0.48px]'>{cardetails[0].brand} {cardetails[0].model_name} Colors</p>
                        <div className='border-[1px] border-[#C6C6C6]'>
                            <ColorSlider url={url} data={color} brand={cardetails[0].brand} model={cardetails[0].model_name} />
                            {/* <div className='flex justify-center space-x-5 pt-8 pb-4'>
                                <div className='bg-[#A5172B] w-10 h-10'>
                                    <DoneIcon sx={{ color: "white" }} className='m-2' />
                                </div>
                                <div className='bg-[#27283A] w-10 h-10'>
                                    <DoneIcon sx={{ color: "white" }} className='m-2' />
                                </div>
                                <div className='bg-[#143049] w-10 h-10'>
                                    <DoneIcon sx={{ color: "white" }} className='m-2' />
                                </div>
                                <div className='bg-[#707783] w-10 h-10'>
                                    <DoneIcon sx={{ color: "white" }} className='m-2' />
                                </div>
                                <div className='bg-[#98A4AA] w-10 h-10'>
                                    <DoneIcon sx={{ color: "white" }} className='m-2' />
                                </div>
                            </div> */}
                        </div>
                    </div>


                    {/* City Prices  */}
                    <div className='md:w-full'>
                        <h2 className='md:text-[24px] text-[18px] mt-3 text-[#484848] mx-2 md:mx-0 font-semibold tracking-[-0.48px]'> {cardetails[0].model_name} Price in top cities
                            in India</h2>
                        <table className='w-full my-2 md:my-5'>
                            <tbody>
                                <tr className='bg-[#f4f4f4]'>
                                    <th className='text-left p-2 text-[16px] font-normal tracking-[-0.32px]'>City</th>
                                    <th className='text-right mx-4 py-2 px-2 text-[16px] font-normal tracking-[-0.32px]'>On Road Price</th>
                                </tr>
                                {city ? city.map((item, index) => {
                                    return (<tr key={index} className='border border-[#C6C6C6]'>
                                        <td className='text-[15px] text-[#09809A] font-normal p-2'>{item.city_name}</td>
                                        <td className='text-right p-2'>
                                            <p className='text-[16px] pb-1 leading-[5px] pt-2 font-semibold tracking-[-0.32px]'>₹ {numFormat(item.ex_showroom_price)} Onwards</p>
                                            {/* <span className='text-[12px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</span> */}
                                        </td>
                                    </tr>)
                                }):null}
                            </tbody>
                        </table>
                    </div>


                    {/* Dream Car  */}
                    <div className='w-full bg-[#065465] my-4'>
                        <div className='relative w-[80%] pt-4'>
                            <Image className='w-auto h-auto' width={150} height={50} src={logo} alt='logo' />
                            <p className='absolute right-[3.5rem] text-[14px] bottom-[-5px] text-white'>Recommender</p>
                        </div>
                        <div className='pb-8 pt-4 flex justify-evenly'>
                            <div>
                                <Image src={bow} alt='bow' />
                            </div>
                            <div className='text-white'>
                                <p className='text-[12px]'>Not Sure, Which car to buy?</p>
                                <p className='text-[10px]'>Let us help you find the dream car</p>
                            </div>
                            <div>
                                <button className='bg-[#CE4327] text-[12px] px-2 py-0.5 rounded-md text-white'>Show my car <ChevronRight /></button>
                            </div>
                        </div>
                    </div>


                    {/* SPonsored adv  */}
                    <div className='mb-8'>
                        <p className='text-[12px] text-[#484848] mb-2 underline'>Sponsored</p>
                        <div className='w-full bg-[#E1E1E1] h-[15rem]'>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

