"use client"
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
import Variant_Mobile from "../components/variant_mobile"
import Head from "next/head"
import ColorSlider from '../components/color';



export default function Variant_Web({ data, response, vpresponse, vvpresponse, params, cres }) {

    const [width, setWidth] = useState()
    const [update, setUpdate] = useState(false)
    const [show, setShow] = useState(false)
    const top_bar = useRef(null)
    const tab_change = useRef(null)
    let [distance, setDistance] = useState(0)
    const [cardetails, setCardetails] = useState(data)
    const [finalVersion, setFinalVersion] = useState(response)
    const [getVersion, setVersion] = useState(response)
    const [allVersionPrice, setAllVersionPrice] = useState(vpresponse == "No Data" ? [] : vpresponse)
    const [versionPrice, setVersionPrice] = useState(vvpresponse == "No Data" ? [] : vvpresponse)




    const url = "https://inquisitive-knickers-fish.cyclic.app"
    // https://inquisitive-knickers-fish.cyclic.app



    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            top_bar.current.classList.add(style.scrolling);

        } else {
            top_bar.current.classList.remove(style.scrolling);
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
    }, [params, data, response, vpresponse, vvpresponse, width])



    return (
        <>

            <div>
                <div ref={top_bar} className={`${style["top-scroll"]} block`}>
                    <div className='flex justify-around'>
                        <div className='flex'>
                            <ul className='whitespace-nowrap text-gray-800 md:whitespace-normal md:overflow-x-auto md:mx-0 overflow-x-scroll mx-[1rem] my-[0.5rem] flex space-x-10 2xl:space-x-[5rem] text-[16px] font-normal tracking-[-0.32px]'>
                                <li><Image className='w-auto h-[50px]' width={200} height={60} src={logo} alt='logo' /></li>
                                <Brand_Model url={url} state={true} brand={cardetails[0].brand} model={cardetails[0].model_name} />
                                <Link to='spec' spy={true} smooth={true} offset={-100} duration={500}>
                                    <li className='hover:text-[#09809A] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold text-[#484848] mt-2'>Features & Specifications</li>
                                </Link>
                                <Link to='ver' spy={true} smooth={true} offset={-100} duration={500}>
                                    <li className='hover:text-[#09809A] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold text-[#484848] mt-2'>Variant</li>
                                </Link>
                            </ul>
                        </div>
                        <div className='flex w-[25%] border-x border-[#E1E1E1]'>
                            <div className='px-4 w-1/2 py-[0.5rem] border-+*r justify-between border-[#E1E1E1] flex'>
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
                            <h1 className='text-[24px] text-[#484848] font-semibold tracking-[-0.4px]'>{cardetails[0].brand} {cardetails[0].model_name} {cardetails[0].version_name} <Version_Modal brand={cardetails[0].brand} model={cardetails[0].model_name} version={cardetails[0].version_name} price={allVersionPrice} data={finalVersion} status={true} /></h1>
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
                            <Link title={`${cardetails[0].model_name} ${cardetails[0].version_name} Features & Specification`} activeClass="active"
                                to="spec" spy={true} smooth={true} offset={-150} duration={500}>
                                <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Features & Specifications</li>
                            </Link>
                            <Link title={`${cardetails[0].model_name} Variants`} activeClass="active"
                                to="ver" spy={true} smooth={true} offset={-150} duration={500}>
                                <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Variants</li>
                            </Link>
                            <Link title={`${cardetails[0].model_name} ${cardetails[0].version_name} Colors`} activeClass="active"
                                to="col" spy={true} smooth={true} offset={-150} duration={500}>
                                <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Colors</li>
                            </Link>
                            {/* <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Similar Cars</li>
                                <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>FAQ&apos;s</li> */}
                        </ul>
                        <hr className='border-t-1 mt-2 border-[#E1E1E1]' />
                        <div className='md:flex xl:space-x-[6rem] my-[1rem] py-[1rem] md:border md:border-[#E1E1E1]'>
                            <div className='md:w-[50%] text-center'>
                                <ImageSlider url={url} brand={cardetails[0].brand} model={cardetails[0].model_name} />
                                <Link to='col' spy={true} smooth={true} offset={-150} duration={500}>
                                    <span className='mx-[2rem] text-[14px] font-normal tracking-[-0.28px] text-[#09809A] cursor-pointer'><Image className='inline' src={color} alt="color" /> Colors</span>
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
                                    <p>{cardetails[0].varient_description} <span className={`${show ? null : "hidden"}`}></span> </p>

                                    <div onClick={() => show ? setShow(false) : setShow(true)} className='text-right pt-[1rem] cursor-pointer'>
                                        <span className='mx-[1rem] text-[#09809A] text-[16px] font-normal'>Read {show ? "Less" : "More"} <Image className='inline' src={down} alt="down" /></span>
                                    </div>
                                </div>
                                <hr className='border-t-1 border-[#E1E1E1]' />
                                <div className='py-5'>
                                    <div className='w-full rounded-[2px] flex justify-between font-semibold text-[#484848] py-2'>
                                        <h2 className='md:text-[24px] text-[12px] font-semibold tracking-[-0.32px]'>Key Specs of {cardetails[0].brand} {cardetails[0].model_name} {cardetails[0].version_name}</h2>
                                        <Link activeClass="active"
                                            to="spec" spy={true} smooth={true} offset={-150} duration={500}>
                                            <p className='md:text-[14px] cursor-pointer text-[12px] font-semibold tracking-[-0.28px] mx-3 md:mx-[2rem] flex'>View All</p>
                                        </Link>
                                    </div>
                                    <div className={`${style["spec-category"]} my-1`}>
                                        <div className="border border-[#E1E1E1] col-span-3">
                                            <div className='flex space-x-3 mx-4 py-2'>

                                                <div>
                                                    <Image className='mt-1' src={fuel} alt="fuel" />
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
                                                    <Image className='mt-1' src={seat} alt="seat" />
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
                                                    <Image className='mt-1' src={body} alt="body" />
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
                                                    <Image className='mt-1' src={transmission} alt="transmission" />
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
                                                    <Image className='mt-1' src={engine} alt="engine" />
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
                                                    <Image className='mt-1' src={arai} alt="arai" />
                                                </div>
                                                <div>
                                                    <p className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.28px]'>ARAI Mileage</p>
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>{cardetails[0].Specifications.engine_and_transmission.arai_mileage ? cardetails[0].Specifications.engine_and_transmission.arai_mileage : "null"} /kmph</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='py-[1.5rem]'>
                                        <Image src={advert2} alt="advertisement" />
                                    </div>
                                </div>
                            </div>


                            {/* Specifications, Features & Brochure */}
                            <div id='spec'>
                                <h2 className='text-[24px] text-[#484848] font-semibold tracking-[0.48px] mb-6'>{cardetails[0].brand} {cardetails[0].model_name} {cardetails[0].version_name} Features & Specs</h2>
                                <div className='md:w-full'>
                                    <div className='mx-3'>
                                        <p className='bg-[#F4F4F4] mb-1 text-[#484848] py-2 px-2 text-[18px] font-semibold tracking-[-0.32px]'>Features & Specifications</p>
                                        <div className='flex'>
                                            <div className='min-w-fit space-y-1 relative z-0'>
                                                {Object.keys(cardetails[0].Specifications).map((item, index) => {
                                                    return (index === 0 ? <div onClick={() => document.getElementById(item).scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'start' })} key={index} className={`md:p-[10px] text-[#484848] py-2.5 max-w-[320px] ${distance >= 100 ? null : style.speech} ${distance >= 100 ? style.normal : style.right}  md:pr-10 md:pl-4 flex space-x-2 cursor-pointer`}>
                                                        <p>{titleCase(item.replace("_", " ").replace("_", " ").replace("and", "&"))}</p>
                                                    </div> : <div onClick={() => document.getElementById(item).scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'start' })} key={index} className={`md:py-3 text-[#484848] ${distance >= 5 && distance <= 10 ? "text-[#484848]" : null} ${distance >= index * 100 && distance <= (index * 100) + 100 ? style.speech : style.normal} ${distance >= 5 && distance <= 10 >= 5 ? style.right : null} max-w-[330px] md:pr-10 md:pl-4 cursor-pointer`}>
                                                        <p>{titleCase(item.replace("_", " ").replace("_", " ").replace("and", "&"))}</p>
                                                    </div>)
                                                })}
                                                {Object.keys(cardetails[0].Features).map((item, index) => {
                                                    return (index === 0 ? <div onClick={() => document.getElementById(item).scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'start' })} key={index} className={`md:py-3 text-[#484848] ${distance >= 5 && distance <= 10 ? "text-[#484848]" : null} ${distance >= Object.keys(cardetails[0].Specifications).length * 100 && distance <= (Object.keys(cardetails[0].Specifications).length * 100) + 100 ? style.speech : style.normal} ${distance >= 5 && distance <= 10 >= 5 ? style.right : null} max-w-[330px] md:pr-10 md:pl-4 cursor-pointer`}>
                                                        <p>{titleCase(item.replace("_", " ").replace("_", " ").replace("and", "&"))}</p>
                                                    </div> : <div onClick={() => document.getElementById(item).scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'start' })} key={index} className={`md:py-3 text-[#484848] ${distance >= 5 && distance <= 10 ? "text-[#484848]" : null} ${distance >= (index * 100) + (Object.keys(cardetails[0].Specifications).length * 100) && distance <= ((index * 100) + (Object.keys(cardetails[0].Specifications).length * 100)) + 100 ? style.speech : style.normal} ${distance >= 5 && distance <= 10 >= 5 ? style.right : null} max-w-[330px] md:pr-10 md:pl-4 cursor-pointer`}>
                                                        <p>{titleCase(item.replace("_", " ").replace("_", " ").replace("and", "&"))}</p>
                                                    </div>)
                                                })}
                                            </div>
                                            <div className='text-center w-[80%]'>
                                                <div onScroll={(event) => {
                                                    setDistance(event.currentTarget.scrollTop)
                                                }} className={`${style["scroll-sec"]} text-left relative z-10`}>
                                                    {Object.keys(cardetails[0].Specifications).map((item, index) => {
                                                        return (<div id={item} key={index} className='py-2 border-r-[1px] border-[#C6C6C6] px-4'>
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
                                                        return (<div id={item} key={index} className='py-2 border-r-[1px] border-[#C6C6C6] px-4'>
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
                                <p className='lg:text-[24px] text-[#484848] text-[16px] my-4 font-semibold tracking-[-0.48px]'>{cardetails[0].brand} {cardetails[0].model_name} Variants 2023</p>
                                <div>
                                    <div className='flex justify-between bg-[#F4F4F4] py-3 px-4'>
                                        <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px]'>Variants</p>
                                        <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px] w-[25rem] text-right'>On Road Price</p>
                                        <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px]'>Price Breakup</p>
                                    </div>

                                    {/* Versions  */}
                                    <div>
                                        {finalVersion.map((element, id) => {
                                            return (<div key={id} className={`${update ? "flex" : id > 3 ? "hidden" : "flex"} justify-between py-3 px-4 border border-[#C6C6C6]`}>
                                                <div className='w-[25rem]'>
                                                    <RLink title={`${element.model_name} ${element.version_name}`} href={`/new-cars/${element.brand.toLowerCase()}/${element.model_name.toLowerCase().split(" ").join("-")}/${element.version_name.toLowerCase().split(" ").join("-")}`}>
                                                        <h3 className='text-[18px] mb-1 text-[#484848] font-semibold tracking-[-0.36px]'>{element.model_name} {element.version_name}</h3>
                                                    </RLink>
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
                                                    <p title={`${cardetails[0].model_name} ${cardetails[0].version_name} Price in Mumbai`} className='text-[16px] text-[#CE4327] cursor-pointer font-semibold tracking-[-0.24px]'>View Price Breakup</p>
                                                </div>
                                            </div>)
                                        })}

                                    </div>

                                    <div className='text-center my-4'>
                                        <button onClick={() => update ? setUpdate(false) : setUpdate(true)} className='px-16 rounded-md'> <span className='text-[16px] font-normal tracking-[-0.24px] hover:text-[#09809A] text-[#09809A]'>
                                            {update ? "Hide" : "View"} All Variants
                                        </span></button>
                                    </div>
                                </div>
                            </div>


                            {/* Color Listing  */}
                            <div id='col' className='lg:w-full mt-[2rem] mb-[3rem]'>
                                <p className='lg:text-[24px] text-[#484848] text-[16px] my-4 font-semibold tracking-[-0.48px]'>{cardetails[0].brand} {cardetails[0].model_name} Colors</p>
                                <ColorSlider url={url} data={cres} brand={cardetails[0].brand} model={cardetails[0].model_name} />
                                {/* <div className='border-[1px] border-[#C6C6C6]'>
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
                                </div> */}
                            </div>

                        </div>


                        <div className='md:w-[26%] mx-[1rem]'>
                            <Right url={url} uid={cardetails[0].uid} brand={cardetails[0].brand} model={cardetails[0].model_name} version={cardetails[0].version_name} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}




