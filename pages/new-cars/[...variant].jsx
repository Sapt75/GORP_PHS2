"use client"
import React, { useEffect, useRef, useState } from 'react'
import style from "../../styles/varient.module.css"
import ImageSlider from '../../components/carousel'
import Faq from '../../components/faq';
import Image from 'next/image';
import Color from "../../components/color"
import DoneIcon from '@mui/icons-material/Done';
import logo from "../../public/images/logo.png"
import star from "../../public/images/star.svg"
import color from "../../public/images/color.svg"
import image from "../../public/images/image.png"
import down from "../../public/images/down.svg"
import edit from "../../public/images/edit.svg"
import arai from "../../public/images/arai.svg"
import engine from "../../public/images/engine.svg"
import fuel from "../../public/images/fuel.svg"
import seat from "../../public/images/seat.svg"
import transmission from "../../public/images/transmission.svg"
import body from "../../public/images/body.svg"
import advert2 from "../../public/images/advert2.png"
import engine_white from "../../public/images/engine_white.svg"
import dimension from "../../public/images/dimension.svg"
import capacity from "../../public/images/capacity.svg"
import suspension from "../../public/images/suspension.svg"
import safety from "../../public/images/safety.svg"
import breaking from "../../public/images/breaking.svg"
import comfort from "../../public/images/comfort.svg"
import locks from "../../public/images/locks.svg"
import bow from "../../public/images/bow.svg"
import car1 from "../../public/images/car1.png"
import car2 from "../../public/images/car2.png"
import car3 from "../../public/images/car3.png"
import compare from "../../public/images/compare.svg"
import car5 from "../../public/images/car5.png"
import car4 from "../../public/images/car4.png"
import compare_white from "../../public/images/compare-white.svg"
import brochure from "../../public/images/brocher.jpg"
import brochure2 from "../../public/images/brochure.svg"
import download from "../../public/images/download.svg"
import connect from "../../public/images/connect.svg"
import promo from "../../public/images/promo.png"
import last_adv from "../../public/images/last_adv.png"
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import City_Modal from '../../components/city_modal';
import Version_Modal from '../../components/version_modal';
import { ChevronRight } from '@mui/icons-material';
import Right from '../../components/right';
import Rating_Model from '../../components/rating_modal';
import Emi_Modal from '../../components/emi';
import { useRouter } from "next/router";
import { Link, animateScroll as scroll } from "react-scroll";
import Brand_Model from '../../components/brand_modal';
import Variant_Mobile from "../../components/variant_mobile"



export default function Variant({ data, response, vpresponse, vvpresponse, params }) {

    const [width, setWidth] = useState()
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


    const url = "https://inquisitive-knickers-fish.cyclic.app"



    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            top_bar.current.classList.add(style.scrolling);
            top_shift.current.classList.add("mt-[-4rem]")
            white.current.classList.remove("top-[50px]")
            white.current.classList.add("top-[-13px]")
            white.current.classList.remove("h-[2rem]")
            white.current.classList.add("h-[10rem]")

        } else {
            top_bar.current.classList.remove(style.scrolling);
            top_shift.current.classList.remove("mt-[-4rem]")
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
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        })
        setWidth(window.innerWidth)
        window.onscroll = function () { scrollFunction() };
        setCardetails(data)

        setVersion(response)
        setFinalVersion(response)


        vpresponse == "No Data" ? setAllVersionPrice([]) : setAllVersionPrice(vpresponse)


        vvpresponse == "No Data" ? setVersionPrice([]) : setVersionPrice(vvpresponse)
    }, [params, data, response, vpresponse, vvpresponse])



    return (
        <>
            <Navbar />
            {width > 800 ? <div>
                <div ref={top_bar} className={`${style["top-scroll"]} block`}>
                    <div className='flex justify-around'>
                        <div className='flex'>
                            <ul className='whitespace-nowrap text-gray-800 md:whitespace-normal md:overflow-x-auto md:mx-0 overflow-x-scroll mx-[1rem] my-[1rem] flex space-x-10 2xl:space-x-[5rem] text-[16px] font-normal tracking-[-0.32px]'>
                                <li><Image width={200} src={logo} /></li>
                                <Brand_Model url={url} state={true} brand={cardetails[0].brand} model={cardetails[0].model_name} />
                                <Link to='spec' spy={true} smooth={true} offset={-100} duration={500}>
                                    <li className='hover:text-[#09809A] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold text-[#484848]'>Features & Specifications</li>
                                </Link>
                                <Link to='ver' spy={true} smooth={true} offset={-100} duration={500}>
                                    <li className='hover:text-[#09809A] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold text-[#484848]'>Variant</li>
                                </Link>
                            </ul>
                        </div>
                        <div className='flex w-[25%] border-x border-[#E1E1E1]'>
                            <div className='px-4 w-1/2 py-[0.5rem] border-r justify-between border-[#E1E1E1] flex'>
                                <div className='pt-2'>
                                    <p className='text-[16px] text-[#6F6F6F]'>Variant</p>
                                    <p className='text-[13px] font-semibold text-[#484848]'>E</p>
                                </div>
                                <div className='pt-4'>
                                    <ChevronRight />
                                </div>
                            </div>
                            <div className='px-4 w-1/2 py-[0.5rem] justify-between border-[#E1E1E1] flex'>
                                <div className='pt-2'>
                                    <p className='text-[16px] text-[#6F6F6F]'>City</p>
                                    <p className='text-[13px] font-semibold text-[#484848]'>New Delhi</p>
                                </div>
                                <div className='pt-4'>
                                    <ChevronRight />
                                </div>
                            </div>
                        </div>
                        <div className='my-[0.5rem] px-8 border-[#E1E1E1]'>
                            <button className='bg-[#e53012] text-white font-semibold text-[15px] px-[20px] py-2 mt-2'>Get Offers from Dealers</button>
                        </div>
                    </div>
                </div>
                <div className="mx-[5rem]">
                    <div>
                        <div className='block mt-[2rem] mb-[1.5rem]'>
                            <h1 className='text-[24px] text-[#484848] font-semibold tracking-[-0.4px]'>{cardetails[0].brand} {cardetails[0].model_name} {cardetails[0].version_name} <Image src={edit} className='inline mx-2 mb-1' /></h1>
                            {/* <div className='flex pt-3 justify-between'>
                                    <div className='flex space-x-[1rem] text-[14px] font-light'>
                                        <div>
                                            <span className='bg-[#09809A] px-[0.6rem] py-[4px] flex text-[14px] font-semibold rounded-md text-white'>
                                                4.5
                                                <Image width={20} className='pl-[4px]' src={star} alt="" />
                                            </span>
                                        </div>
                                        <p className='text-[14px] md:inline text-[#6F6F6F] hidden md:text-base'>17 Ratings & 25 Reviews</p>
                                        <p className='md:inline hidden'>|</p>
                                        <Rating_Model />
                                        <div className='flex space-x-2 md:hidden'>
                                            <p className='text-[11px] text-[#6F6F6F] md:text-base'>17 Ratings & 25 Reviews</p>
                                            <p>|</p>
                                            <Rating_Model />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <input className='mx-1' type="checkbox"></input>
                                        <span className='text-[#484848] md:text-[16px] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
                                    </div>
                                </div> */}
                            {/* <hr className='border-t-1 border-[#E1E1E1]' /> */}
                        </div>
                        <ul className='whitespace-nowrap flex md:whitespace-normal md:overflow-x-auto md:mx-0 overflow-x-scroll mx-[1rem] my-[1rem] space-x-5 md:space-x-[5rem] text-[16px] font-normal tracking-[-0.32px]'>
                            <Brand_Model url={url} state={true} brand={cardetails[0].brand} model={cardetails[0].model_name} />
                            <Link activeClass="active"
                                to="spec" spy={true} smooth={true} offset={-150} duration={500}>
                                <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Features & Specifications</li>
                            </Link>
                            <Link activeClass="active"
                                to="ver" spy={true} smooth={true} offset={-150} duration={500}>
                                <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Variants</li>
                            </Link>
                            <Link activeClass="active"
                                to="col" spy={true} smooth={true} offset={-150} duration={500}>
                                <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Colors</li>
                            </Link>
                            {/* <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Similar Cars</li>
                                <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>FAQ&apos;s</li> */}
                        </ul>
                        <hr className='border-t-1 mt-2 border-[#E1E1E1]' />
                        <div className='md:flex xl:space-x-[6rem] my-[1rem] py-[1rem] md:border md:border-[#E1E1E1]'>
                            <div className='md:w-[50%] text-center'>
                                <ImageSlider />
                                <Link to='col' spy={true} smooth={true} offset={-150} duration={500}>
                                    <span className='mx-[2rem] text-[14px] font-normal tracking-[-0.28px] text-[#09809A] cursor-pointer'><Image className='inline' src={color} alt="" /> Colors</span>
                                </Link>
                                {/* <span className='mx-[2rem] text-[14px] font-normal tracking-[-0.28px] text-[#09809A]'><Image className='inline' src={image} alt="" /> Images</span> */}
                            </div>
                            <div className='md:w-[40%]'>
                                <div className='flex space-x-1'>
                                    <Version_Modal brand={cardetails[0].brand} model={cardetails[0].model_name} version={cardetails[0].version_name} price={allVersionPrice} data={finalVersion} />
                                    <City_Modal />
                                </div>
                                <div className='block'>
                                    <div className='pt-[1.5rem] space-x-[1.6rem]'>
                                        {versionPrice.length > 0 ? <span className='text-[24px] text-[#484848] font-semibold tracking-[-0.48px]'>{`₹ ${numFormat(versionPrice[0].ex_showroom_price)}`}</span> : null}
                                        <span className='text-[16px] text-[#CE4327] font-semibold underline'>View Price Breakup</span>
                                    </div>
                                    <span className='text-[14px] font-[400] tracking-[-0.28px] text-[#484848]'>On-Road Price New Delhi</span>
                                    {/* <div className='flex justify-between mt-2 w-100 bg-[#F4F4F4] py-[0.5rem]'>
                                            <div className='px-2 pb-1'>
                                                <p className='text-[16px] text-[#484848] font-medium pb-0.5 tracking-[-0.28px]'>EMI Starts  at 12550/Month</p>
                                                <Emi_Modal />
                                            </div>
                                            <div>
                                                <button className='px-[1rem] hover:bg-[#09809A] bg-[#09809A] py-[0.1rem] mx-[1rem] mt-[0.5rem] rounded-[5px] text-white text-[14px] font-medium tracking-[-0.24px]'>View Offers</button>
                                            </div>
                                        </div> */}
                                    <button className='text-[14px] my-[1rem] py-[0.5rem] block rounded-[2px] bg-[#09809A] font-medium tracking-[-0.28px] text-white w-full md:w-3/5'>Get The Best Deal</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='flex'>
                        <div className='md:w-[74%]'>
                            <div className='w-full'>
                                <h2 className='md:text-[24px] py-2 text-[18px] text-[#484848] font-semibold tracking-[-0.48px]'>{cardetails[0].brand} {cardetails[0].model_name} {cardetails[0].version_name} Latest Updates</h2>
                                <div className='bg-[#f4f4f4] text-[#6F6F6F]  p-3'>
                                    <p>{cardetails[0].brand} {cardetails[0].model_name} {cardetails[0].version_name} Prices: The price of the {cardetails[0].brand} {cardetails[0].model_name} {cardetails[0].version_name} in New Delhi is Rs 6.33 Lakh (Ex-showroom). To know more about the Aura E Images, Reviews, Offers & other details, download the Get On road price App. {cardetails[0].brand} {cardetails[0].model_name} {cardetails[0].version_name} mileage : It returns a certified mileage of . <span className={`${show ? null : "hidden"}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, nobis culpa nesciunt temporibus vel consequatur consectetur, natus ab magnam adipisci incidunt nulla dolor et. Explicabo quos omnis magni voluptatum cum natus tenetur similique, magnam itaque aspernatur, harum dolor nesciunt vitae.</span> </p>

                                    <div onClick={() => show ? setShow(false) : setShow(true)} className='text-right pt-[1rem] cursor-pointer'>
                                        <span className='mx-[1rem] text-[#09809A] text-[16px] font-normal'>Read {show ? "Less" : "More"} <Image className='inline' src={down} alt="" /></span>
                                    </div>
                                </div>
                                <hr className='border-t-1 border-[#E1E1E1]' />
                                <div className='py-5'>
                                    <div className='w-full rounded-[2px] flex justify-between font-semibold text-[#484848] py-2'>
                                        <h2 className='md:text-[24px] text-[12px] font-semibold tracking-[-0.32px]'>Key Specs of {cardetails[0].brand} {cardetails[0].model_name} {cardetails[0].version_name}</h2>
                                        <p className='md:text-[14px] text-[12px] font-semibold tracking-[-0.28px] mx-3 md:mx-[2rem] flex'>View All <span className='mx-2'>
                                            +
                                        </span></p>
                                    </div>
                                    <div className={`${style["spec-category"]} my-1`}>
                                        <div className="border border-[#E1E1E1] col-span-3">
                                            <div className='flex space-x-3 mx-4 py-2'>

                                                <div>
                                                    <Image className='mt-1' src={fuel} alt="" />
                                                </div>
                                                <div>
                                                    <p className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.28px]'>Fuel Type</p>
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>{cardetails[0].Specifications.engine_and_transmission.fuel_type}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border border-[#E1E1E1] col-span-3">
                                            <div className='flex space-x-3 mx-4 py-2'>

                                                <div>
                                                    <Image className='mt-1' src={seat} alt="" />
                                                </div>
                                                <div>
                                                    <p className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.28px]'>Seating Capacity</p>
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>{cardetails[0].seating_capacity}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border border-[#E1E1E1] col-span-3 rounded-sm">
                                            <div className='flex space-x-3 mx-4 py-2'>

                                                <div>
                                                    <Image className='mt-1' src={body} alt="" />
                                                </div>
                                                <div>
                                                    <p className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.28px]'>Body Type</p>
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>{cardetails[0].body_type}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border border-[#E1E1E1] col-span-3">
                                            <div className='flex space-x-3 mx-4 py-2'>

                                                <div>
                                                    <Image className='mt-1' src={transmission} alt="" />
                                                </div>
                                                <div>
                                                    <p className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.28px]'>Transmission Type</p>
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>{cardetails[0].transmission_type}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border border-[#E1E1E1] col-span-3">
                                            <div className='flex space-x-3 mx-4 py-2'>

                                                <div>
                                                    <Image className='mt-1' src={engine} alt="" />
                                                </div>
                                                <div>
                                                    <p className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.28px]'>Engine Displacement</p>
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>{cardetails[0].Specifications.engine_and_transmission.displacement} CC</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border border-[#E1E1E1] col-span-3 rounded-sm">
                                            <div className='flex space-x-3 mx-4 py-2'>

                                                <div>
                                                    <Image className='mt-1' src={arai} alt="" />
                                                </div>
                                                <div>
                                                    <p className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.28px]'>ARAI Mileage</p>
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>{cardetails[0].Specifications.engine_and_transmission.arai_mileage ? cardetails[0].Specifications.engine_and_transmission.arai_mileage : "null"} /kmph</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='py-[1.5rem]'>
                                        <Image src={advert2} alt="" />
                                    </div>
                                </div>
                            </div>


                            {/* Specifications, Features & Brochure */}
                            <div id='spec'>
                                <p className='text-[24px] text-[#484848] font-semibold tracking-[0.48px] mb-6'>{cardetails[0].brand} {cardetails[0].model_name} {cardetails[0].version_name} Features & Specs</p>
                                <div className='md:w-full'>
                                    <div className='mx-3'>
                                        <p className='bg-[#F4F4F4] mb-1 text-[#484848] py-2 px-2 text-[18px] font-semibold tracking-[-0.32px]'>Specifications & Features</p>
                                        <div className='flex'>
                                            <div className='min-w-fit space-y-1 relative z-0'>
                                                {Object.keys(cardetails[0].Specifications).map((item, index) => {
                                                    return (index === 0 ? <div key={index} className={`md:p-[10px] text-[#484848] py-2.5 max-w-[320px] ${distance >= 100 ? null : style.speech} ${distance >= 100 ? style.normal : style.right}  md:pr-10 md:pl-4 flex space-x-2`}>
                                                        <p>{titleCase(item.replace("_", " ").replace("_", " ").replace("and", "&"))}</p>
                                                    </div> : <div key={index} className={`md:py-3 text-[#484848] ${distance >= 5 && distance <= 10 ? "text-[#484848]" : null} ${distance >= index * 100 && distance <= (index * 100) + 100 ? style.speech : style.normal} ${distance >= 5 && distance <= 10 >= 5 ? style.right : null} max-w-[330px] md:pr-10 md:pl-4`}>
                                                        <p>{titleCase(item.replace("_", " ").replace("_", " ").replace("and", "&"))}</p>
                                                    </div>)
                                                })}
                                                {Object.keys(cardetails[0].Features).map((item, index) => {
                                                    return (index === 0 ? <div key={index} className={`md:py-3 text-[#484848] ${distance >= 5 && distance <= 10 ? "text-[#484848]" : null} ${distance >= Object.keys(cardetails[0].Specifications).length * 100 && distance <= (Object.keys(cardetails[0].Specifications).length * 100) + 100 ? style.speech : style.normal} ${distance >= 5 && distance <= 10 >= 5 ? style.right : null} max-w-[330px] md:pr-10 md:pl-4`}>
                                                        <p>{titleCase(item.replace("_", " ").replace("_", " ").replace("and", "&"))}</p>
                                                    </div> : <div key={index} className={`md:py-3 text-[#484848] ${distance >= 5 && distance <= 10 ? "text-[#484848]" : null} ${distance >= (index * 100) + (Object.keys(cardetails[0].Specifications).length * 100) && distance <= ((index * 100) + (Object.keys(cardetails[0].Specifications).length * 100)) + 100 ? style.speech : style.normal} ${distance >= 5 && distance <= 10 >= 5 ? style.right : null} max-w-[330px] md:pr-10 md:pl-4`}>
                                                        <p>{titleCase(item.replace("_", " ").replace("_", " ").replace("and", "&"))}</p>
                                                    </div>)
                                                })}
                                            </div>
                                            <div className='text-center w-[80%]'>
                                                <div onScroll={(event) => {
                                                    setDistance(event.currentTarget.scrollTop)
                                                }} className={`${style["scroll-sec"]} text-left relative z-10`}>
                                                    {Object.keys(cardetails[0].Specifications).map((item, index) => {
                                                        return (<div key={index} className='py-2 border-r-[1px] border-[#C6C6C6] px-4'>
                                                            <p className='text-[18px] mx-4 my-[10px] font-bold text-[#09809A] tracking-[-0.32px]'>
                                                                {titleCase(item.replace("_", " ").replace("_", " ").replace("and", "&"))}
                                                            </p>
                                                            {Object.keys(cardetails[0].Specifications[item]).map((itm, ind) => {
                                                                return (cardetails[0].Specifications[item][itm] === null ? null : <div key={ind} className={`flex mx-4 border-b-[1px] py-4 border-[#c6c6c6] my-2`}>
                                                                    <p className='text-[#6F6F6F] w-[25rem] text-[16px]'>{titleCase(itm.split("_").join(" "))}</p>
                                                                    <p className='text-[#484848] text-[16px] font-semibold'>{cardetails[0].Specifications[item][itm]}</p>
                                                                </div>)
                                                            })}
                                                        </div>)
                                                    })}
                                                    {Object.keys(cardetails[0].Features).map((item, index) => {
                                                        return (<div key={index} className='py-2 border-r-[1px] border-[#C6C6C6] px-4'>
                                                            <p className='text-[18px] mx-4 my-[10px] font-bold text-[#09809A] tracking-[-0.32px]'>
                                                                {titleCase(item.replace("_", " ").replace("_", " ").replace("and", "&"))}
                                                            </p>
                                                            {Object.keys(cardetails[0].Features[item]).map((itm, ind) => {
                                                                return (cardetails[0].Features[item][itm] === null ? null : <div key={ind} className={`flex mx-4 border-b-[1px] py-4 border-[#c6c6c6] my-2`}>
                                                                    <p className='text-[#6F6F6F] w-[25rem] text-[16px]'>{titleCase(itm.split("_").join(" "))}</p>
                                                                    <p className='text-[#484848] text-[16px] font-semibold'>{cardetails[0].Features[item][itm]}</p>
                                                                </div>)
                                                            })}
                                                        </div>)
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Car Versions Listing  */}

                            <div id='ver' className='lg:w-full'>
                                <p className='lg:text-[24px] text-[#484848] text-[16px] my-4 font-semibold tracking-[-0.48px]'>Hyundai Aura Versions 2023</p>
                                <div>
                                    <div className='flex justify-between bg-[#F4F4F4] py-3 px-4'>
                                        <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px]'>Versions</p>
                                        <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px] ml-[3.5rem]'>On Road Price</p>
                                        <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px]'>Price Breakup</p>
                                    </div>

                                    {/* Versions  */}
                                    <div>
                                        {finalVersion.map((element, id) => {
                                            return (<div key={id} className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                                                <div className='w-[10rem]'>
                                                    <p className='text-[18px] mb-1 text-[#484848] font-semibold tracking-[-0.36px]'>{element.model_name} {element.version_name}</p>
                                                    <span className='text-[14px] text-[#6F6F6F] font-normal tracking-[-0.28px]'>{element.Specifications.engine_and_transmission.displacement} cc, {element.transmission_type}, {element.Specifications.engine_and_transmission.fuel_type} </span>
                                                </div>
                                                <div>
                                                    <p className='text-[18px] text-[#484848] font-semibold tracking-[-0.36px]'>{allVersionPrice.length > 0 ? `₹ ${numFormat(allVersionPrice.find(o => o.Version_UID === element.uid).ex_showroom_price)}` : null} </p>
                                                    {/* <div className='pb-[1rem]'>
                                                            <input className='mx-1' type="checkbox"></input>
                                                            <span className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
                                                        </div> */}
                                                </div>
                                                <div>
                                                    <p className='text-[16px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</p>
                                                </div>
                                            </div>)
                                        })}

                                    </div>

                                    <div className='text-center my-4'>
                                        <button className='px-16 rounded-md'> <span className='text-[16px] font-normal tracking-[-0.24px] hover:text-[#09809A] text-[#09809A]'>
                                            View All Versions
                                        </span></button>
                                    </div>
                                </div>
                            </div>


                            {/* Color Listing  */}
                            <div id='col' className='lg:w-full mt-[2rem] mb-[3rem]'>
                                <p className='lg:text-[24px] text-[#484848] text-[16px] my-4 font-semibold tracking-[-0.48px]'>{cardetails[0].brand} {cardetails[0].model_name} Colors</p>
                                <div className='border-[1px] border-[#C6C6C6]'>
                                    <Color url={url} brand={cardetails[0].brand} model={cardetails[0].model_name} />
                                    <div className='flex justify-center space-x-5 pt-8 pb-4'>
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
                                    </div>
                                </div>
                            </div>


                            {/* Similar Cars  */}

                            {/* <div className='lg:flex'>
                                    <div className='lg:w-full mx-3 md:mx-0'>
                                        <p className='text-[24px] text-[#484848] font-semibold tracking-[-0.48px]'>Similar Cars</p>
                                        <div className='flex'>
                                            <div style={{ whiteSpace: "nowrap", overflow: "scroll", display: "flow" }} className='space-x-3'>
                                                <div className='w-[19rem] inline-block border border-[#C6C6C6] my-3'>
                                                    <div className='h-[7rem]'>
                                                        <Image className='mx-auto' src={car1} alt="" />
                                                    </div>
                                                    <div className='bg-[#f4f4f4] p-3'>
                                                        <p className='text-[16px] text-[#484848] font-normal leading-[24px] capitalize'>Hyundai Exter</p>
                                                        <span className='mr-3 text-[14px] text-[#484848] font-semibold leading-[24px] capitalize'>₹ 6.00 Lakh</span>
                                                        <span className='text-[#CE4327] text-[12px] font-semibold leading-[24px] tracking-[-0.24px]'>View Price Breakup</span>
                                                        <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize py-[4px]'>On-Road Price New Delhi</p>
                                                        <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize'>Petrol, Manual, 22.05 KMPL</p>
                                                        <p className='mt-3 text-[#09809A] text-[14px] font-normal'><span><Image className='inline' src={compare} alt="" /></span> Compare Aura v/s Exter</p>
                                                    </div>
                                                </div>
                                                <div className='w-[19rem] inline-block border border-[#C6C6C6] my-3'>
                                                    <div className='h-[7rem]'>
                                                        <Image className='mx-auto' src={car2} alt="" />
                                                    </div>
                                                    <div className='bg-[#f4f4f4] p-3'>
                                                        <p className='text-[16px] text-[#484848] font-normal leading-[24px] capitalize'>Tata Punch</p>
                                                        <span className='mr-3 text-[14px] text-[#484848] font-semibold leading-[24px] capitalize'>₹ 7.15 Lakh</span>
                                                        <span className='text-[#CE4327] text-[12px] font-semibold leading-[24px] tracking-[-0.24px]'>View Price Breakup</span>
                                                        <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize py-[4px]'>On-Road Price New Delhi</p>
                                                        <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize'>Petrol, Manual, 20.05 KMPL</p>
                                                        <p className='mt-3 text-[#09809A] text-[14px] font-normal'><span><Image className='inline' src={compare} alt="" /></span> Compare Aura v/s Punch</p>
                                                    </div>
                                                </div>
                                                <div className='w-[19rem] inline-block border border-[#C6C6C6] my-3'>
                                                    <div className='h-[7rem]'>
                                                        <Image className='mx-auto' src={car3} alt="" />
                                                    </div>
                                                    <div className='bg-[#f4f4f4] p-3'>
                                                        <p className='text-[16px] text-[#484848] font-normal leading-[24px] capitalize'>Maruti Brezza</p>
                                                        <span className='mr-3 text-[14px] text-[#484848] font-semibold leading-[24px] capitalize'>₹ 8.69 Lakh</span>
                                                        <span className='text-[#CE4327] text-[12px] font-semibold leading-[24px] tracking-[-0.24px]'>View Price Breakup</span>
                                                        <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize py-[4px]'>On-Road Price New Delhi</p>
                                                        <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize'>Petrol, Manual, 20.05 KMPL</p>
                                                        <p className='mt-3 text-[#09809A] text-[14px] font-normal'><span><Image className='inline' src={compare} alt="" /></span> Compare Aura v/s Punch</p>
                                                    </div>
                                                </div>
                                                <div className='w-[19rem] inline-block border border-[#C6C6C6] my-3'>
                                                    <div className='h-[7rem]'>
                                                        <Image className='mx-auto' src={car2} alt="" />
                                                    </div>
                                                    <div className='bg-[#f4f4f4] p-3'>
                                                        <p className='text-[16px] text-[#484848] font-normal leading-[24px] capitalize'>KIA Sonet</p>
                                                        <span className='mr-3 text-[14px] text-[#484848] font-semibold leading-[24px] capitalize'>₹ 10.29 Lakh</span>
                                                        <span className='text-[#CE4327] text-[12px] font-semibold leading-[24px] tracking-[-0.24px]'>View Price Breakup</span>
                                                        <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize py-[4px]'>On-Road Price New Delhi</p>
                                                        <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize'>Petrol, Manual, 20.05 KMPL</p>
                                                        <p className='mt-3 text-[#09809A] text-[14px] font-normal'><span><Image className='inline' src={compare} alt="" /></span> Compare Aura v/s Punch</p>
                                                    </div>
                                                </div>
                                                <div className='w-[19rem] inline-block border border-[#C6C6C6] my-3'>
                                                    <div className='h-[7rem]'>
                                                        <Image className='mx-auto' src={car1} alt="" />
                                                    </div>
                                                    <div className='bg-[#f4f4f4] p-3'>
                                                        <p className='text-[16px] font-normal text-[#484848] leading-[24px] capitalize'>Maruti Brezza</p>
                                                        <span className='mr-3 text-[14px] font-semibold text-[#484848] leading-[24px] capitalize'>₹ 8.69 Lakh</span>
                                                        <span className='text-[#CE4327] text-[12px] font-semibold leading-[24px] tracking-[-0.24px]'>View Price Breakup</span>
                                                        <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize py-[4px]'>On-Road Price New Delhi</p>
                                                        <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize'>Petrol, Manual, 20.05 KMPL</p>
                                                        <p className='mt-3 text-[#09809A] text-[14px] font-normal'><span><Image className='inline' src={compare} alt="" /></span> Compare Aura v/s Punch</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}


                            {/* City Prices  */}
                            {/* <div className='my-10 md:w-full'>
                                    <p className='md:text-[24px] text-[16px] mx-2 md:mx-0 font-semibold tracking-[-0.48px]'>Aura E 1.2 Petrol Price in cities near New Delhi</p>
                                    <table className='w-full my-2 md:my-5'>
                                        <tr className='bg-[#09809A]'>
                                            <th className='text-left p-2 text-white text-[16px] font-normal tracking-[-0.32px]'>City</th>
                                            <th className='text-right px-6 py-2 text-white text-[16px] font-normal tracking-[-0.32px]'>On Road Price</th>
                                            <th className='text-right px-6 py-2 text-white text-[16px] font-normal tracking-[-0.32px]'>Price Breakup</th>
                                        </tr>
                                        <tr className='border border-[#C6C6C6]'>
                                            <td className='text-[16px] text-[#09809A] font-normal p-2'>Noida</td>
                                            <td className='text-right px-6 p-2'>
                                                <p className='text-[16px] leading-[5px] pt-2 font-semibold tracking-[-0.32px]'>₹ 6.09 Lakh</p>
                                            </td>
                                            <td className='text-right px-6 p-2'>
                                                <span className='text-[14px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</span>
                                            </td>
                                        </tr>
                                        <tr className='border border-[#C6C6C6]'>
                                            <td className='text-[16px] text-[#09809A] font-normal p-2'>Gaziabad</td>
                                            <td className='text-right px-6 p-2'>
                                                <p className='text-[16px] leading-[5px] pt-2 font-semibold tracking-[-0.32px]'>₹ 6.09 Lakh</p>
                                            </td>
                                            <td className='text-right px-6 p-2'>
                                                <span className='text-[14px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</span>
                                            </td>
                                        </tr>
                                        <tr className='border border-[#C6C6C6]'>
                                            <td className='text-[16px] text-[#09809A] font-normal p-2'>Gurugram</td>
                                            <td className='text-right px-6 p-2'>
                                                <p className='text-[16px] leading-[5px] pt-2 font-semibold tracking-[-0.32px]'>₹ 6.09 Lakh</p>
                                            </td>
                                            <td className='text-right px-6 p-2'>
                                                <span className='text-[14px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</span>
                                            </td>
                                        </tr>
                                        <tr className='border border-[#C6C6C6]'>
                                            <td className='text-[16px] text-[#09809A] font-normal p-2'>Haridwar</td>
                                            <td className='text-right px-6 p-2'>
                                                <p className='text-[16px] leading-[5px] pt-2 font-semibold tracking-[-0.32px]'>₹ 6.09 Lakh</p>
                                            </td>
                                            <td className='text-right px-6 p-2'>
                                                <span className='text-[14px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</span>
                                            </td>
                                        </tr>
                                    </table>
                                </div> */}

                            {/* Compare Cars  */}
                            {/* <div className='my-10'>
                                    <p className='text-[24px] text-[#484848] font-semibold tracking-[-0.48px]'>Compare With Other Cars</p>
                                    <div className='flex pt-[1rem]'>
                                        <div className='border border-[#C6C6C6] h-[20rem] lg:w-[25rem] text-center'>
                                            <Image className='mx-auto' src={car5} alt="" />
                                            <div className='text-center'>
                                                <p className='text-[20px] text-[#484848] font-medium tracking-[-0.4px]'>Hyundai Aura</p>
                                                <p className='text-[18px] text-[#484848] font-semibold relative right-[20px]'>₹ 6 Lakhs</p>
                                                <p className='text-[14px] text-[#6F6F6F] font-normal tracking-[-0.28px] relative right-[4px]'>Price in New Delhi</p>
                                            </div>
                                        </div>
                                        <div className='relative z-20'>
                                            <div className={`${style.box} absolute left-[-45px] top-[100px]`}>
                                                <div className={`${style["v-s"]}`}>
                                                    <div className={`${style["overlap-group"]}`}>
                                                        <div className={`${style.ellipse}`}></div>
                                                        <div className={`${style["text-wrapper"]}`}>V/s</div>
                                                    </div>
                                                </div>
                                            </div>
    
    
                                        </div>
    
                                        <div className='h-[20rem] overflow-y-scroll'>
                                            <div className='border border-[#C6C6C6] h-[20rem] lg:w-[25rem] text-center relative z-10'>
                                                <Image className='mx-auto' src={car5} alt="" />
                                                <div className='text-center'>
                                                    <p className='text-[20px] text-[#484848] font-medium tracking-[-0.4px]'>Tata Punch</p>
                                                    <p className='text-[18px] text-[#484848] font-semibold relative right-[5px]'>₹ 6 Lakhs</p>
                                                    <p className='text-[14px] text-[#6F6F6F] font-normal tracking-[-0.28px] relative right-[-11px]'>Price in New Delhi</p>
                                                </div>
                                                <div className='bottom-0 absolute text-center w-full'>
                                                    <button className='bg-[#09809A] w-full py-3 text-white text-[14px] font-normal'><Image className='inline mr-2' src={compare_white} alt="" />Add to Compare</button>
                                                </div>
                                            </div>
                                            <div className='border border-[#C6C6C6] h-[20rem] lg:w-[25rem] text-center relative z-10'>
                                                <Image className='mx-auto' src={car4} alt="" />
                                                <div className='text-center'>
                                                    <p className='text-[20px] text-[#484848] font-medium tracking-[-0.4px]'>Tata Punch</p>
                                                    <p className='text-[18px] text-[#484848] font-semibold relative right-[5px]'>₹ 6 Lakhs</p>
                                                    <p className='text-[14px] text-[#6F6F6F] relative right-[-11px] font-normal tracking-[-0.28px]'>Price in New Delhi</p>
                                                </div>
                                                <div className='bottom-0 absolute text-center w-full'>
                                                    <button className='bg-[#09809A] w-full py-3 text-white text-[14px] font-normal'><Image className='inline mr-2' src={compare_white} alt="" />Add to Compare</button>
                                                </div>
                                            </div>
                                            <div className='border border-[#C6C6C6] h-[20rem] lg:w-[25rem] text-center relative z-10'>
                                                <Image className='mx-auto' src={car3} alt="" />
                                                <div className='text-center'>
                                                    <p className='text-[20px] text-[#484848] font-medium tracking-[-0.4px]'>Tata Punch</p>
                                                    <p className='text-[18px] text-[#484848] font-semibold relative right-[5px]'>₹ 6 Lakhs</p>
                                                    <p className='text-[14px] text-[#6F6F6F] relative right-[-11px] font-normal tracking-[-0.28px]'>Price in New Delhi</p>
                                                </div>
                                                <div className='bottom-0 absolute text-center w-full'>
                                                    <button className='bg-[#09809A] w-full py-3 text-white text-[14px] font-normal'><Image className='inline mr-2' src={compare_white} alt="" />Add to Compare</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                            {/* Reviews Section  */}
                            {/* <div className='my-10'>
                                    <p className='text-[24px] font-semibold text-[#484848] pb-2 tracking-[-0.48px]'>Aura E User Reviews</p>
                                    <div className='md:w-full border border-[#C6C6C6]'>
                                        <p className='text-[16px] font-normal text-[#484848] tracking-[-0.32px] m-3'>{cardetails[0].brand} {cardetails[0].model_name} {cardetails[0].version_name} 1.2 Petrol</p>
                                        <div className='flex pt-1 justify-between mx-3'>
                                            <div className='flex space-x-[1rem] text-[14px] font-light'>
                                                <div>
                                                    <span className='bg-[#09809A] px-[0.6rem] py-[4px] flex text-[14px] font-semibold rounded-md text-white'>
                                                        4.5
                                                        <Image width={20} className='pl-[4px]' src={star} alt="" />
                                                    </span>
                                                </div>
                                                <p className='text-[11px] text-[#484848] md:inline hidden md:text-base'>25 Reviews</p>
                                                <p className='md:inline hidden'>|</p>
                                                <Rating_Model />
                                                <div className='flex space-x-2 md:hidden'>
                                                    <p className='text-[11px] md:text-base'>25 Reviews</p>
                                                    <p>|</p>
                                                    <Rating_Model />
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ display: "-webkit-box" }} className='overflow-x-scroll space-x-3 m-3'>
                                            <div className='border border-[#C6C6C6] w-[20rem] px-4'>
                                                <div className='mb-5 mt-4'>
                                                    <span className='bg-[#09809A] pt-[5px] px-[10px] pb-[10px] text-[12px] rounded-md text-white'>
                                                        <Image width={20} className='inline' src={star} alt="" />
                                                    </span>
                                                    <span className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px] mx-4'>4.5 Excellent Star</span>
                                                </div>
                                                <div>
                                                    <p className='text-[16px] text-[#6F6F6F] font-light tracking-[-0.32px] text-justify'>It&apos;s a good car with a good design, and the mileage is also very good. I would like to buy it as i... <span className='text-[#09809A] text-[14px]'>Read More</span>
                                                    </p>
                                                </div>
                                                <div className='mt-10 mb-2'>
                                                    <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px]'>By Salauddin</p>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal tracking-[-0.24px]'>On: Jul 14, 2023 | 568 views</p>
                                                </div>
                                            </div>
                                            <div className='border border-[#C6C6C6] w-[20rem] px-4'>
                                                <div className='mb-5 mt-4'>
                                                    <span className='bg-[#09809A] pt-[5px] px-[10px] pb-[10px] text-[12px] rounded-md text-white'>
                                                        <Image width={20} className='inline' src={star} alt="" />
                                                    </span>
                                                    <span className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px] mx-4'>4.5 Excellent Star</span>
                                                </div>
                                                <div>
                                                    <p className='text-[16px] text-[#6F6F6F] font-light tracking-[-0.32px] text-justify'>It&apos;s a good car with a good design, and the mileage is also very good. I would like to buy it as i... <span className='text-[#09809A] text-[14px]'>Read More</span>
                                                    </p>
                                                </div>
                                                <div className='mt-10 mb-2'>
                                                    <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px]'>By Salauddin</p>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal tracking-[-0.24px]'>On: Jul 14, 2023 | 568 views</p>
                                                </div>
                                            </div>
                                            <div className='border border-[#C6C6C6] w-[20rem] px-4'>
                                                <div className='mb-5 mt-4'>
                                                    <span className='bg-[#09809A] pt-[5px] px-[10px] pb-[10px] text-[12px] rounded-md text-white'>
                                                        <Image width={20} className='inline' src={star} alt="" />
                                                    </span>
                                                    <span className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px] mx-4'>4.5 Excellent Star</span>
                                                </div>
                                                <div>
                                                    <p className='text-[16px] text-[#6F6F6F] font-light tracking-[-0.32px] text-justify'>It&apos;s a good car with a good design, and the mileage is also very good. I would like to buy it as i... <span className='text-[#09809A] text-[14px]'>Read More</span>
                                                    </p>
                                                </div>
                                                <div className='mt-10 mb-2'>
                                                    <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px]'>By Salauddin</p>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal tracking-[-0.24px]'>On: Jul 14, 2023 | 568 views</p>
                                                </div>
                                            </div>
                                            <div className='border border-[#C6C6C6] w-[20rem] px-4'>
                                                <div className='mb-5 mt-4'>
                                                    <span className='bg-[#09809A] pt-[5px] px-[10px] pb-[10px] text-[12px] rounded-md text-white'>
                                                        <Image width={20} className='inline' src={star} alt="" />
                                                    </span>
                                                    <span className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px] mx-4'>4.5 Excellent Star</span>
                                                </div>
                                                <div>
                                                    <p className='text-[16px] text-[#6F6F6F] font-light tracking-[-0.32px] text-justify'>It&apos;s a good car with a good design, and the mileage is also very good. I would like to buy it as i... <span className='text-[#09809A] text-[14px]'>Read More</span>
                                                    </p>
                                                </div>
                                                <div className='mt-10 mb-2'>
                                                    <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px]'>By Salauddin</p>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal tracking-[-0.24px]'>On: Jul 14, 2023 | 568 views</p>
                                                </div>
                                            </div>
                                            <div className='border border-[#C6C6C6] w-[20rem] px-4'>
                                                <div className='mb-5 mt-4'>
                                                    <span className='bg-[#09809A] pt-[5px] px-[10px] pb-[10px] text-[12px] rounded-md text-white'>
                                                        <Image width={20} className='inline' src={star} alt="" />
                                                    </span>
                                                    <span className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px] mx-4'>4.5 Excellent Star</span>
                                                </div>
                                                <div>
                                                    <p className='text-[16px] text-[#6F6F6F] font-light tracking-[-0.32px] text-justify'>It&apos;s a good car with a good design, and the mileage is also very good. I would like to buy it as i... <span className='text-[#09809A] text-[14px]'>Read More</span>
                                                    </p>
                                                </div>
                                                <div className='mt-10 mb-2'>
                                                    <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px]'>By Salauddin</p>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal tracking-[-0.24px]'>On: Jul 14, 2023 | 568 views</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                            {/* FAQ Section  */}
                            {/* <div className='my-10'>
                                    <p className='text-[24px] text-[#484848] font-semibold tracking-[-0.48px]'>FAQ&apos;s</p>
                                    <div className='my-3 md:w-[65rem]'>
                                        <Faq />
                                    </div>
                                </div> */}
                        </div>


                        <div className='md:w-[26%] mx-[1rem]'>
                            <Right url={url} uid={cardetails[0].uid} brand={cardetails[0].brand} model={cardetails[0].model_name} version={cardetails[0].version_name} />
                        </div>
                    </div>
                </div>
            </div> : <Variant_Mobile data={data} response={response} vpresponse={vpresponse} vvpresponse={vvpresponse} params={params} />}

            <div className='md:p-4 p-1.5'>
                <p>Home &gt; Hyundai &gt; Aura</p>
            </div>


            <Footer />
        </>
    )
}



export async function getServerSideProps(context) {

    const { params } = context;
    const url = "https://inquisitive-knickers-fish.cyclic.app"

    let id, model



    const res = await fetch(`${url}/single_car/${params.variant[0]}/${params.variant[1]}/${params.variant[2]}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await res.json()

    id = data[0].uid
    model = data[0].model_id

    // setCardetails(data)


    let vversion = await fetch(`${url}/version_data/${model}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    let response = await vversion.json()


    // setVersion(response)
    // setFinalVersion(response)

    let vp = await fetch(`${url}/version_prices/${model}/Mumbai`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    let vpresponse = await vp.json()

    // vpresponse == "No Data" ? setAllVersionPrice([]) : setAllVersionPrice(vpresponse)


    let vvp = await fetch(`${url}/single_version/${id}/Mumbai`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    let vvpresponse = await vvp.json()


    // vvpresponse == "No Data" ? setVersionPrice([]) : setVersionPrice(vvpresponse)


    return {
        props: {
            data,
            response,
            vpresponse,
            vvpresponse,
            params
        }
    }
}

