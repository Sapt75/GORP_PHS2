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




export default function Variant() {

    const [update, setUpdate] = useState(false)
    const [show, setShow] = useState(false)
    const top_bar = useRef(null)
    const top_shift = useRef(null)
    const tab_change = useRef(null)
    let [distance, setDistance] = useState(0)
    const white = useRef(null)


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



    useEffect(() => {
        window.onscroll = function () { scrollFunction() };
    }, [])




    return (
        <>
            <Navbar />
            <div className='mx-2 md:mx-0'>
                <div ref={top_bar} className={`${style["top-scroll"]} hidden md:block`}>
                    <div className='flex justify-around'>
                        <div className='flex'>
                            <ul className='whitespace-nowrap text-gray-800 md:whitespace-normal md:overflow-x-auto md:mx-0 overflow-x-scroll mx-[1rem] my-[1rem] flex space-x-10 2xl:space-x-[5rem] text-[16px] font-normal tracking-[-0.32px]'>
                                <li><Image width={200} height={60} src={logo} /></li>
                                <Brand_Model url={url} state={true} brand="Hyundai" model="Aura" />
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

                <div className='lg:mx-[5rem]'>
                    <div>
                        <div ref={top_shift} className='h-[10rem] md:h-auto'>
                            <div className='mt-[1rem] bg-white z-[9999]'>
                                <div className='h-[5rem] md:h-auto mr-3'>
                                    <div className='flex w-[-webkit-fill-available] mr-[10px] bg-white fixed z-[999] md:hidden space-x-1'>
                                        <Version_Modal brand="Hyundai" model="Aura" version="E" price={[]} data={[]} />
                                        <City_Modal />
                                    </div>
                                </div>
                                <div ref={white} className='w-full md:hidden fixed bg-white top-[50px] z-[99] h-[2rem]'>

                                </div>
                                <div>
                                    <ul className='flex fixed mt-[15px] z-[999] bg-white w-full md:hidden whitespace-nowrap overflow-x-scroll md:whitespace-normal space-x-8 md:space-x-[5rem] text-[16px] border-y border-[#E1E1E1] font-normal tracking-[-0.32px] px-2'>
                                        <li className='font-semibold text-[#484848] text-[14px] my-2'>Aura</li>
                                        <li className='hover:text-[#09809A] text-[14px] text-[#484848] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold my-2'>Overview</li>
                                        <li className='hover:text-[#09809A] text-[14px] text-[#484848] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold my-2'>Features</li>
                                        <li className='hover:text-[#09809A] text-[14px] text-[#484848] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold my-2'>Specifications</li>
                                        <li className='hover:text-[#09809A] text-[14px] text-[#484848] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold my-2'>Version</li>
                                        <li className='hover:text-[#09809A] text-[14px] text-[#484848] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold my-2'>Reviews</li>
                                        <li className='my-1.5'>
                                            <button className='text-white text-[14px] px-4 bg-[#CE4327] font-semibold pb-1 rounded-md'>Get Offer</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='md:hidden'>
                            <div className='flex justify-between'>
                                <h1 className='text-[20px] text-[#484848] font-semibold tracking-[-0.4px]'>Hyundai Aura E</h1>
                                <div className=''>
                                    <input className='mx-1' type="checkbox"></input>
                                    <span className='text-[#484848] md:text-[16px] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
                                </div>
                            </div>
                            <div className='space-x-[1.6rem]'>
                                <span className='text-[20px] text-[#484848] font-semibold tracking-[-0.48px]'> ₹6,95,860</span>
                                <span className='text-[12px] text-[#CE4327] font-semibold underline'>View Price Breakup</span>
                            </div>
                            <span className='text-[14px] pt-1.5 font-normal tracking-[-0.28px] text-[#484848]'>On-Road Price New Delhi</span>
                            <div className='hidden md:flex justify-between w-100 bg-[#F4F4F4] py-[0.5rem]'>
                                <div className='px-2 pb-1'>
                                    <p className='text-[12px] text-[#484848] font-medium pb-0.5 tracking-[-0.28px]'>EMI Starts  at 12550/Month</p>
                                    <Emi_Modal />
                                </div>
                                <div>
                                    <button className='px-[1rem] hover:bg-[#09809A] bg-[#09809A] py-[0.1rem] mx-[1rem] mt-[0.5rem] rounded-[5px] text-white text-[14px] font-medium tracking-[-0.24px]'>View Offers</button>
                                </div>
                            </div>
                            <button className='hidden md:block text-[14px] my-[1rem] py-[0.5rem] rounded-[2px] bg-[#09809A] font-medium tracking-[-0.28px] text-white w-full md:w-3/5'>Get The Best Deal</button>
                        </div>
                        <div className='hidden md:block mt-[2rem] mb-[1.5rem]'>
                            <h1 className='text-[24px] text-[#484848] font-semibold tracking-[-0.4px]'>Hyundai Aura E <Image src={edit} className='inline mx-2 mb-1' /></h1>
                            <div className='flex pt-3 justify-between'>
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
                            </div>
                            {/* <hr className='border-t-1 border-[#E1E1E1]' /> */}
                        </div>
                        <ul className='whitespace-nowrap hidden md:flex md:whitespace-normal md:overflow-x-auto md:mx-0 overflow-x-scroll mx-[1rem] my-[1rem] space-x-5 md:space-x-[5rem] text-[16px] font-normal tracking-[-0.32px]'>
                            <Brand_Model url={url} state={true} brand={"Hyundai"} model={"Aura"} />
                            <Link activeclassName="active"
                                to="spec" spy={true} smooth={true} offset={-150} duration={500}>
                                <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Features & Specifications</li>
                            </Link>
                            <Link activeclassName="active"
                                to="ver" spy={true} smooth={true} offset={-150} duration={500}>
                                <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Variants</li>
                            </Link>
                            <Link activeclassName="active"
                                to="col" spy={true} smooth={true} offset={-150} duration={500}>
                                <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Colors</li>
                            </Link>
                            <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Similar Cars</li>
                            <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>FAQ&apos;s</li>
                        </ul>
                        <hr className='border-t-1 mt-2 border-[#E1E1E1]' />
                        <div className='md:flex xl:space-x-[6rem] my-[1rem] py-[1rem] md:border md:border-[#E1E1E1]'>
                            <div className='md:w-[50%] text-center'>
                                {/* <ImageSlider /> */}
                                <Link to='col' spy={true} smooth={true} offset={-150} duration={500}>
                                    <span className='mx-[2rem] text-[14px] font-normal tracking-[-0.28px] text-[#09809A] cursor-pointer'><Image className='inline' src={color} alt="" /> Colors</span>
                                </Link>
                                <span className='mx-[2rem] text-[14px] font-normal tracking-[-0.28px] text-[#09809A]'><Image className='inline' src={image} alt="" /> Images</span>
                            </div>
                            <div className='md:w-[40%]'>
                                <div className='md:flex hidden space-x-1'>
                                    <Version_Modal brand={"Hyundai"} model={"Aura"} version={"E"} price={[]} data={[]} />
                                    <City_Modal />
                                </div>
                                <div className='hidden md:block'>
                                    <div className='pt-[1.5rem] space-x-[1.6rem]'>
                                        <span className='text-[24px] text-[#484848] font-semibold tracking-[-0.48px]'>₹6,95,860</span>
                                        <span className='text-[16px] text-[#CE4327] font-semibold underline'>View Price Breakup</span>
                                    </div>
                                    <span className='text-[14px] font-[400] tracking-[-0.28px] text-[#484848]'>On-Road Price New Delhi</span>
                                    <div className='flex justify-between mt-2 w-100 bg-[#F4F4F4] py-[0.5rem]'>
                                        <div className='px-2 pb-1'>
                                            <p className='text-[16px] text-[#484848] font-medium pb-0.5 tracking-[-0.28px]'>EMI Starts  at 12550/Month</p>
                                            <Emi_Modal />
                                        </div>
                                        <div>
                                            <button className='px-[1rem] hover:bg-[#09809A] bg-[#09809A] py-[0.1rem] mx-[1rem] mt-[0.5rem] rounded-[5px] text-white text-[14px] font-medium tracking-[-0.24px]'>View Offers</button>
                                        </div>
                                    </div>
                                    <button className='text-[14px] my-[1rem] py-[0.5rem] block rounded-[2px] bg-[#09809A] font-medium tracking-[-0.28px] text-white w-full md:w-3/5'>Get The Best Deal</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='md:hidden'>
                        <div className='md:w-[74%]'>
                            <div className='w-full'>
                                <h2 className='md:text-[24px] text-[#484848] mb-3 text-[18px] font-semibold tracking-[-0.48px]'>{"Hyundai"} {"Aura"} {"E"} Latest Updates</h2>
                                <div className='bg-[#f4f4f4] text-[#6F6F6F] p-3'>
                                    <p>{"Hyundai"} {"Aura"} {"E"} Prices: The price of the {"Hyundai"} {"Aura"} {"E"} in New Delhi is Rs 6.33 Lakh (Ex-showroom). To know more about the Aura E Images, Reviews, Offers & other details, download the Get On road price App. {"Hyundai"} {"Aura"} {"E"} mileage : It returns a certified mileage of . <span className={`${update ? null : "hidden"}`}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, repellat tempore quasi doloribus possimus laudantium. Exercitationem commodi nobis dolore assumenda neque repudiandae, sit dolores, quae eaque soluta maiores! Corporis quis ipsa perferendis, repellendus odio eligendi accusamus impedit quia animi eius.
                                    </span></p>

                                    <div onClick={() => update ? setUpdate(false) : setUpdate(true)} className='text-right cursor-pointer pt-[1rem]'>
                                        <span className='mx-[1rem] text-[#09809A] text-[14px] font-normal'>Read More <Image className='inline' src={down} alt="" /></span>
                                    </div>
                                </div>
                                <hr className='border-t-1 border-[#E1E1E1]' />

                                <div className='md:hidden block my-3'>
                                    <div className='flex justify-between w-100 bg-[#F4F4F4] py-[0.5rem]'>
                                        <div className='px-2 pb-1'>
                                            <p className='text-[16px] text-[#484848] font-medium pb-0.5 tracking-[-0.28px]'>EMI Starts  at 12550/Month</p>
                                            <Emi_Modal />
                                        </div>
                                        <div>
                                            <button className='px-[1rem] hover:bg-[#09809A] bg-[#09809A] py-[0.1rem] mx-[1rem] mt-[0.5rem] rounded-[5px] text-white text-[14px] font-medium tracking-[-0.24px]'>View Offers</button>
                                        </div>
                                    </div>
                                    <h2 className='md:text-[24px] text-[#484848] text-[16px] mt-4 mb-2 font-semibold tracking-[-0.48px]'>Hyundai Aura E Latest Updates</h2>
                                    <div className='flex md:hidden space-x-[1rem] text-[14px] border-b-[1px] border-[#E1E1E1] pb-4 font-light'>
                                        <div>
                                            <span className='bg-[#09809A] px-[0.6rem] py-[4px] flex text-[14px] font-semibold rounded-md text-white'>
                                                4.5
                                                <Image width={20} className='pl-[4px]' src={star} alt="" />
                                            </span>
                                        </div>
                                        <div className='flex space-x-2 md:hidden pt-1'>
                                            <p className='text-[14px] font-normal text-[#6F6F6F] md:text-base'>17 Ratings & 25 Reviews</p>
                                            <p>|</p>
                                            <Rating_Model />
                                        </div>
                                    </div>
                                </div>

                                {/* SPonsored adv  */}
                                <div>
                                    <p className='text-[12px] text-[#484848] mb-2 underline'>Sponsored</p>
                                    <div className='w-full bg-[#E1E1E1] h-[15rem]'>

                                    </div>
                                </div>


                                <div className='py-2'>
                                    <div className='w-full rounded-[2px] flex justify-between text-[#484848] py-2 px-2'>
                                        <h2 className='text-[15px] md:text-[24px] font-semibold tracking-[-0.32px]'>Key Specs of Hyundai Aura E 1.2 Petrol</h2>
                                        <p className='md:text-[14px] text-[12px] font-semibold tracking-[-0.28px] mx-3 md:mx-[2rem] flex'>View All <span className='mx-2'>
                                            +
                                        </span></p>
                                    </div>
                                    <div className={`${style["spec-category"]} my-1`}>
                                        <div className="border border-[#E1E1E1] col-span-2 xl:col-span-2">
                                            <div className='flex space-x-3 ml-2 py-2'>

                                                <div>
                                                    <Image className='mt-1' src={fuel} alt="" />
                                                </div>
                                                <div>
                                                    <p className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.28px]'>Fuel Type</p>
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>Petrol</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border border-[#E1E1E1] col-span-2 xl:col-span-3">
                                            <div className='flex space-x-3 ml-2 py-2'>

                                                <div>
                                                    <Image className='mt-1' src={seat} alt="" />
                                                </div>
                                                <div>
                                                    <p className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.28px]'>Seating Capacity</p>
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>5</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border border-[#E1E1E1] col-span-2 xl:col-span-2">
                                            <div className='flex space-x-3 ml-2 py-2'>

                                                <div>
                                                    <Image className='mt-1' src={body} alt="" />
                                                </div>
                                                <div>
                                                    <p className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.28px]'>Body Type</p>
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>Sedan</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border border-[#E1E1E1] col-span-2 xl:col-span-3">
                                            <div className='flex space-x-3 ml-2 py-2'>

                                                <div>
                                                    <Image className='mt-1' src={transmission} alt="" />
                                                </div>
                                                <div>
                                                    <p className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.28px]'>Transmission Type</p>
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>Manual</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border border-[#E1E1E1] col-span-2 xl:col-span-3">
                                            <div className='flex space-x-3 ml-2 py-2'>

                                                <div>
                                                    <Image className='mt-1' src={engine} alt="" />
                                                </div>
                                                <div>
                                                    <p className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.28px]'>Engine Displacement</p>
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>1490 - 2000 CC</p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="border border-[#E1E1E1] col-span-2 xl:col-span-2 rounded-sm">
                                            <div className='flex space-x-3 ml-2 py-2'>

                                                <div>
                                                    <Image className='mt-1' src={arai} alt="" />
                                                </div>
                                                <div>
                                                    <p className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.28px]'>ARAI Mileage</p>
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>24 - 28 /kmph</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='md:py-[3rem] pt-4 pb-3'>
                                        <Image src={advert2} alt="" />
                                    </div>
                                </div>
                            </div>


                            {/* Specifications, Features */}
                            <div>
                                <p className='md:text-[24px] text-[#484848] text-[18px] font-semibold tracking-[0.48px] mb-2'>Hyundai Aura E 1.2 Petrol Features & Specs</p>
                                <div className='md:w-full'>
                                    <div className='md:mx-3'>
                                        <p className='bg-[#F4F4F4] mb-1 text-[#484848] py-2 px-2 text-[16px] font-semibold tracking-[-0.32px]'>Specifications & Features</p>
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
                                                    <div className='border-t-[1px] py-2 border-r-[1px] border-[#C6C6C6] px-4'>
                                                        <p>Dimension</p>
                                                        <p className='text-[14px] font-normal pt-[10px] pb-[5px] text-[#6F6F6F] tracking-[-0.28px] leading-[1]'>Charging Time A C</p>
                                                        <p className='text-[12px] text-[#484848] font-bold pb-[5px] tracking-[-0.24px]'>9.5-10h</p>
                                                        <p className='text-[12px] text-[#484848]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias quas error animi exercitationem eum laborum at perferendis excepturi adipisci, harum quam quisquam ea a! Atque repellat officiis voluptate necessitatibus in iusto tempore, neque ipsa ducimus ratione sunt vero, itaque illo ullam ad aliquam minima rem officia? Ipsum ipsam repellendus id, magni architecto dolorem doloribus. Eveniet inventore aspernatur laudantium maxime aliquid, tempore, iste laborum, assumenda tenetur nisi error sint laboriosam magnam dolorum tempora repellat libero expedita quia optio asperiores blanditiis voluptates. Quod doloribus sit reiciendis obcaecati. Nulla repellendus veritatis ipsa, quis dolor accusantium ab autem blanditiis perferendis rerum. Velit, voluptatum.</p>
                                                    </div>
                                                    <div className='border-t-[1px] py-2 border-r-[1px] border-[#C6C6C6] px-4'>
                                                        <p>Dimension</p>
                                                        <p className='text-[14px] font-normal pt-[10px] pb-[5px] text-[#6F6F6F] tracking-[-0.28px] leading-[1]'>Charging Time A C</p>
                                                        <p className='text-[12px] text-[#484848] font-bold pb-[5px] tracking-[-0.24px]'>9.5-10h</p>
                                                        <p className='text-[12px] text-[#484848]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias quas error animi exercitationem eum laborum at perferendis excepturi adipisci, harum quam quisquam ea a! Atque repellat officiis voluptate necessitatibus in iusto tempore, neque ipsa ducimus ratione sunt vero, itaque illo ullam ad aliquam minima rem officia? Ipsum ipsam repellendus id, magni architecto dolorem doloribus. Eveniet inventore aspernatur laudantium maxime aliquid, tempore, iste laborum, assumenda tenetur nisi error sint laboriosam magnam dolorum tempora repellat libero expedita quia optio asperiores blanditiis voluptates. Quod doloribus sit reiciendis obcaecati. Nulla repellendus veritatis ipsa, quis dolor accusantium ab autem blanditiis perferendis rerum. Velit, voluptatum.</p>
                                                    </div>
                                                    <div className='border-t-[1px] py-2 border-r-[1px] border-[#C6C6C6] px-4'>
                                                        <p>Dimension</p>
                                                        <p className='text-[14px] font-normal pt-[10px] pb-[5px] text-[#6F6F6F] tracking-[-0.28px] leading-[1]'>Charging Time A C</p>
                                                        <p className='text-[12px] text-[#484848] font-bold pb-[5px] tracking-[-0.24px]'>9.5-10h</p>
                                                        <p className='text-[12px] text-[#484848]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias quas error animi exercitationem eum laborum at perferendis excepturi adipisci, harum quam quisquam ea a! Atque repellat officiis voluptate necessitatibus in iusto tempore, neque ipsa ducimus ratione sunt vero, itaque illo ullam ad aliquam minima rem officia? Ipsum ipsam repellendus id, magni architecto dolorem doloribus. Eveniet inventore aspernatur laudantium maxime aliquid, tempore, iste laborum, assumenda tenetur nisi error sint laboriosam magnam dolorum tempora repellat libero expedita quia optio asperiores blanditiis voluptates. Quod doloribus sit reiciendis obcaecati. Nulla repellendus veritatis ipsa, quis dolor accusantium ab autem blanditiis perferendis rerum. Velit, voluptatum.</p>
                                                    </div>
                                                    <div className='border-t-[1px] py-2 border-r-[1px] border-[#C6C6C6] px-4'>
                                                        <p>Dimension</p>
                                                        <p className='text-[14px] font-normal pt-[10px] pb-[5px] text-[#6F6F6F] tracking-[-0.28px] leading-[1]'>Charging Time A C</p>
                                                        <p className='text-[12px] text-[#484848] font-bold pb-[5px] tracking-[-0.24px]'>9.5-10h</p>
                                                        <p className='text-[12px] text-[#484848]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias quas error animi exercitationem eum laborum at perferendis excepturi adipisci, harum quam quisquam ea a! Atque repellat officiis voluptate necessitatibus in iusto tempore, neque ipsa ducimus ratione sunt vero, itaque illo ullam ad aliquam minima rem officia? Ipsum ipsam repellendus id, magni architecto dolorem doloribus.</p>
                                                    </div>
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
                                    <p className='md:text-[28px] mx-4 text-[18px] text-white font-semibold tracking-[-0.56px] md:py-2'> Hyundai Aura</p>
                                    <div className='mx-2'>
                                        <Image className='mx-2 md:py-4 inline w-4 md:w-6' src={brochure2} alt="" />
                                        <span className='md:text-[22px] text-[14px] inline mr-2 text-white font-medium tracking-[-0.44px]'>Download Brochure</span>
                                        <Image className='mx-2 md:py-4 inline w-4 md:w-6' src={download} alt="" />
                                    </div>
                                </div>
                            </div>

                            {/* Car Versions Listing  */}

                            <div className='lg:w-full'>
                                <h2 className='lg:text-[24px] text-[#484848] text-[18px] mt-4 mb-2 font-semibold tracking-[-0.48px]'>Hyundai Aura Versions 2023</h2>
                                <div>
                                    <div className='flex justify-between bg-[#F4F4F4] py-3 px-4'>
                                        <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px]'>Versions</p>
                                        <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px]'>On Road Price</p>
                                    </div>

                                    {/* Versions  */}
                                    <div>
                                        <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                                            <div>
                                                <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.36px]'>Aura</p>
                                                <span className='text-[13px] text-[#6F6F6F] font-normal tracking-[-0.28px]'>1197 cc, Manual, Petrol </span>
                                                <p className='text-[12px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</p>
                                            </div>
                                            <div>
                                                <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.36px]'>₹ 6.09 Lakh</p>
                                                <div className=''>
                                                    <input className='mx-1' type="checkbox"></input>
                                                    <span className='text-[#484848] md:text-[16px] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                                            <div>
                                                <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.36px]'>Aura</p>
                                                <span className='text-[13px] text-[#6F6F6F] font-normal tracking-[-0.28px]'>1197 cc, Manual, Petrol </span>
                                                <p className='text-[12px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</p>
                                            </div>
                                            <div>
                                                <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.36px]'>₹ 7.18 Lakh</p>
                                                <div className=''>
                                                    <input className='mx-1' type="checkbox"></input>
                                                    <span className='text-[#484848] md:text-[16px] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                                            <div>
                                                <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.36px]'>Aura</p>
                                                <span className='text-[13px] text-[#6F6F6F] font-normal tracking-[-0.28px]'>1197 cc, Manual, Petrol </span>
                                                <p className='text-[12px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</p>
                                            </div>
                                            <div>
                                                <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.36px]'>₹ 7.95 Lakh</p>
                                                <div className=''>
                                                    <input className='mx-1' type="checkbox"></input>
                                                    <span className='text-[#484848] md:text-[16px] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                                            <div>
                                                <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.36px]'>Aura</p>
                                                <span className='text-[13px] text-[#6F6F6F] font-normal tracking-[-0.28px]'>1197 cc, Manual, Petrol </span>
                                                <p className='text-[12px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</p>
                                            </div>
                                            <div>
                                                <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.36px]'>₹ 8.13 Lakh</p>
                                                <div className=''>
                                                    <input className='mx-1' type="checkbox"></input>
                                                    <span className='text-[#484848] md:text-[16px] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                                            <div>
                                                <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.36px]'>Aura</p>
                                                <span className='text-[13px] text-[#6F6F6F] font-normal tracking-[-0.28px]'>1197 cc, Manual, Petrol </span>
                                                <p className='text-[12px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</p>
                                            </div>
                                            <div>
                                                <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.36px]'>₹ 8.61 Lakh</p>
                                                <div className=''>
                                                    <input className='mx-1' type="checkbox"></input>
                                                    <span className='text-[#484848] md:text-[16px] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='text-center my-4'>
                                        <button className='px-16 rounded-md'><span className='text-[12px] font-normal tracking-[-0.24px] text-[#09809A]'>
                                            View All Versions
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
                            <div className='lg:w-full mt-[2rem] mb-[3rem]'>
                                <p className='lg:text-[24px] text-[#484848] text-[16px] my-4 font-semibold tracking-[-0.48px]'>Hyundai Aura Colors</p>
                                <div className='border-[1px] border-[#C6C6C6]'>
                                    <Color url={url} brand={"Hyundai"} model={"Aura"} />
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

                            <div className='lg:flex'>
                                <div className='lg:w-full md:mx-0'>
                                    <h2 className='text-[18px] pt-2 text-[#484848] font-semibold tracking-[-0.48px]'>Similar Cars</h2>
                                    <div className='flex'>
                                        <div style={{ whiteSpace: "nowrap", overflow: "scroll", display: "flow" }} className='space-x-3'>
                                            <div className='w-[19rem] inline-block border border-[#C6C6C6] my-3'>
                                                <div className='h-[7rem]'>
                                                    <Image className='mx-auto' src={car1} alt="" />
                                                </div>
                                                <div className='bg-[#f4f4f4] p-3'>
                                                    <p className='text-[16px] text-[#484848] font-normal leading-[24px] capitalize'>Hyundai Exter</p>
                                                    <span className='mr-3 text-[14px] text-[#484848] font-semibold leading-[24px] capitalize'>₹ 6.00 Lakh</span>
                                                    <span className='text-[12px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</span>
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
                                                    <span className='text-[12px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</span>
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
                                                    <span className='text-[12px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</span>
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
                                                    <span className='text-[12px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</span>
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
                                                    <span className='text-[12px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</span>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize py-[4px]'>On-Road Price New Delhi</p>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize'>Petrol, Manual, 20.05 KMPL</p>
                                                    <p className='mt-3 text-[#09809A] text-[14px] font-normal'><span><Image className='inline' src={compare} alt="" /></span> Compare Aura v/s Punch</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* City Prices  */}
                            <div className='md:w-full'>
                                <h2 className='md:text-[24px] text-[18px] mt-3 text-[#484848] mx-2 md:mx-0 font-semibold tracking-[-0.48px]'>Aura Price in cities near New Delhi</h2>
                                <table className='w-full my-2 md:my-5'>
                                    <thead>
                                        <tr className='bg-[#f4f4f4]'>
                                            <th className='text-left p-2 text-[16px] font-normal tracking-[-0.32px]'>City</th>
                                            <th className='text-right mx-4 py-2 px-2 text-[16px] font-normal tracking-[-0.32px]'>On Road Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='border border-[#C6C6C6]'>
                                            <td className='text-[15px] text-[#09809A] font-normal p-2'>Noida</td>
                                            <td className='text-right p-2'>
                                                <p className='text-[16px] pb-1 leading-[5px] pt-2 font-semibold tracking-[-0.32px]'>₹ 6.09 Lakh</p>
                                                <span className='text-[12px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</span>
                                            </td>
                                        </tr>
                                        <tr className='border border-[#C6C6C6]'>
                                            <td className='text-[15px] text-[#09809A] font-normal p-2'>Gaziabad</td>
                                            <td className='text-right p-2'>
                                                <p className='text-[16px] pb-1 leading-[5px] pt-2 font-semibold tracking-[-0.32px]'>₹ 6.09 Lakh</p>
                                                <span className='text-[12px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</span>
                                            </td>
                                        </tr>
                                        <tr className='border border-[#C6C6C6]'>
                                            <td className='text-[15px] text-[#09809A] font-normal p-2'>Gurugram</td>
                                            <td className='text-right p-2'>
                                                <p className='text-[16px] pb-1 leading-[5px] pt-2 font-semibold tracking-[-0.32px]'>₹ 6.09 Lakh</p>
                                                <span className='text-[12px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</span>
                                            </td>
                                        </tr>
                                        <tr className='border border-[#C6C6C6]'>
                                            <td className='text-[15px] text-[#09809A] font-normal p-2'>Haridwar</td>
                                            <td className='text-right p-2'>
                                                <p className='text-[16px] pb-1 leading-[5px] pt-2 font-semibold tracking-[-0.32px]'>₹ 6.09 Lakh</p>
                                                <span className='text-[12px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Compare Cars  */}
                            <div className='my-4'>
                                <h2 className='text-[18px] font-semibold text-[#484848] tracking-[-0.48px]'>Compare With Other Cars</h2>
                                <div className='flex pt-2'>
                                    <div className='border border-[#C6C6C6] md:h-[20rem] md:w-[30rem] text-center'>
                                        <Image className='mx-auto' src={car5} alt="" />
                                        <div className='text-center'>
                                            <p className='md:text-[20px] text-[15px] font-medium tracking-[-0.4px]'>Hyundai Aura</p>
                                            <p className='md:text-[18px] text-[13px] font-semibold relative right-[17px]'>₹ 6 Lakhs</p>
                                            <p className='md:text-[14px] text-[13px] text-[#6F6F6F] relative right-[-5px] font-normal tracking-[-0.28px]'>Price in New Delhi</p>
                                        </div>
                                    </div>
                                    <div className='relative z-20'>
                                        <div className={`${style.box} absolute left-[-35px] md:left-[-45px] top-[90px] md:top-[100px]`}>
                                            <div className={`${style["v-s"]}`}>
                                                <div className={`${style["overlap-group"]}`}>
                                                    <div className={`${style.ellipse}`}></div>
                                                    <div className={`${style["text-wrapper"]}`}>V/s</div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                    <div className='h-[15rem] md:h-[20rem] overflow-y-scroll'>
                                        <div className='border border-[#C6C6C6] md:h-[20rem] h-[15rem] md:w-[30rem] text-center relative z-10'>
                                            <Image className='mx-auto' src={car4} alt="" />
                                            <div className='text-center'>
                                                <p className='md:text-[20px] text-[15px] font-medium tracking-[-0.4px]'>Tata Punch</p>
                                                <p className='md:text-[18px] text-[13px] font-semibold right-[5px] relative'>₹ 6 Lakhs</p>
                                                <p className='md:text-[14px] text-[13px] text-[#6F6F6F] right-[-18px] relative font-normal tracking-[-0.28px]'>Price in New Delhi</p>
                                            </div>
                                            <div className='bottom-0 absolute text-center w-full'>
                                                <button className='bg-[#09809A] w-full py-3 text-white text-[14px] font-normal'><Image className='inline mr-1' width={20} src={compare_white} alt="" />Add to Compare</button>
                                            </div>
                                        </div>
                                        <div className='border border-[#C6C6C6] md:h-[20rem] h-[15rem] md:w-[30rem] text-center relative z-10'>
                                            <Image className='mx-auto' src={car4} alt="" />
                                            <div className='text-center'>
                                                <p className='md:text-[20px] text-[15px] font-medium tracking-[-0.4px]'>Tata Punch</p>
                                                <p className='md:text-[18px] text-[13px] font-semibold relative right-[5px]'>₹ 6 Lakhs</p>
                                                <p className='md:text-[14px] text-[13px] text-[#6F6F6F] relative right-[-18px] font-normal tracking-[-0.28px]'>Price in New Delhi</p>
                                            </div>
                                            <div className='bottom-0 absolute text-center w-full'>
                                                <button className='bg-[#09809A] w-full py-3 text-white text-[14px] font-normal'><Image className='inline mr-1' width={20} src={compare_white} alt="" />Add to Compare</button>
                                            </div>
                                        </div>
                                        <div className='border border-[#C6C6C6] md:h-[20rem] h-[15rem] md:w-[30rem] text-center relative z-10'>
                                            <Image className='mx-auto' src={car4} alt="" />
                                            <div className='text-center'>
                                                <p className='md:text-[20px] text-[15px] font-medium tracking-[-0.4px]'>Tata Punch</p>
                                                <p className='md:text-[18px] text-[13px] font-semibold relative right-[5px]'>₹ 6 Lakhs</p>
                                                <p className='md:text-[14px] text-[13px] text-[#6F6F6F] relative right-[-18px] font-normal tracking-[-0.28px]'>Price in New Delhi</p>
                                            </div>
                                            <div className='bottom-0 absolute text-center w-full'>
                                                <button className='bg-[#09809A] w-full py-3 text-white text-[14px] font-normal'><Image className='inline mr-1' width={20} src={compare_white} alt="" />Add to Compare</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Dream Car  */}
                            <div className='w-full bg-[#065465] my-4'>
                                <div className='relative w-[80%] pt-4'>
                                    <Image width={150} height={50} src={logo} />
                                    <p className='absolute right-[3.5rem] text-[14px] bottom-[-5px] text-white'>Recommender</p>
                                </div>
                                <div className='pb-8 pt-4 flex justify-evenly'>
                                    <div>
                                        <Image src={bow} />
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


                            {/* Reviews Section  */}
                            <div className='mt-2'>
                                <h2 className='text-[18px] font-semibold text-[#484848] pb-2 tracking-[-0.48px]'>Aura User Reviews</h2>
                                <div className='md:w-full border border-[#C6C6C6]'>
                                    <p className='text-[16px] font-normal text-[#484848] tracking-[-0.32px] mx-3 mt-3 mb-1'>Hyundai Aura </p>
                                    <div className='flex pt-1 justify-between mx-3'>
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
                                            <div className='flex space-x-2 pt-[6px] md:pt-0 md:hidden'>
                                                <p className='text-[12px] font-normal text-[#484848] md:text-base'>17 Ratings & 25 Reviews</p>
                                                <p className='mt-[-2px] md:mt-0'>|</p>
                                                <Rating_Model />
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display: "-webkit-box" }} className='overflow-x-scroll space-x-3 m-3'>
                                        <div className='border border-[#C6C6C6] w-[20rem] px-4'>
                                            <div className='mb-5 mt-4'>
                                                <span className='bg-[#09809A] p-2 text-[12px] rounded-md text-white'>
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
                                                <span className='bg-[#09809A] p-2 text-[12px] rounded-md text-white'>
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
                                                <span className='bg-[#09809A] p-2 text-[12px] rounded-md text-white'>
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
                                                <span className='bg-[#09809A] p-2 text-[12px] rounded-md text-white'>
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
                                                <span className='bg-[#09809A] p-2 text-[12px] rounded-md text-white'>
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
                            </div>

                            {/* FAQ Section  */}
                            <div className='mt-3'>
                                <h2 className='text-[18px] px-4 font-semibold tracking-[-0.48px]'>FAQ&apos;s</h2>
                                <div className='my-3 md:w-[65rem]'>
                                    <Faq />
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


                    <div className='md:flex hidden'>
                        <div className='md:w-[74%]'>
                            <div className='w-full'>
                                <h2 className='md:text-[24px] py-2 text-[18px] text-[#484848] font-semibold tracking-[-0.48px]'>{"Hyundai"} {"Aura"} {"E"} Latest Updates</h2>
                                <div className='bg-[#f4f4f4] text-[#6F6F6F]  p-3'>
                                    <p>Hyundai Aura E Prices: The price of the Hyundai Aura E in New Delhi is Rs 6.33 Lakh (Ex-showroom). To know more about the Aura E Images, Reviews, Offers & other details, download the Get On road price App. Hyundai Aura E mileage : It returns a certified mileage of . <span className={`${show ? null : "hidden"}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, nobis culpa nesciunt temporibus vel consequatur consectetur, natus ab magnam adipisci incidunt nulla dolor et. Explicabo quos omnis magni voluptatum cum natus tenetur similique, magnam itaque aspernatur, harum dolor nesciunt vitae.</span> </p>

                                    <div onClick={() => show ? setShow(false) : setShow(true)} className='text-right pt-[1rem] cursor-pointer'>
                                        <span className='mx-[1rem] text-[#09809A] text-[16px] font-normal'>Read {show ? "Less" : "More"} <Image className='inline' src={down} alt="" /></span>
                                    </div>
                                </div>
                                <hr className='border-t-1 border-[#E1E1E1]' />
                                <div className='py-5'>
                                    <div className='w-full rounded-[2px] flex justify-between font-semibold text-[#484848] py-2'>
                                        <h2 className='md:text-[24px] text-[12px] font-semibold tracking-[-0.32px]'>Key Specs of Hyundai Aura E 1.2 Petrol</h2>
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
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>Petrol</p>
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
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>5</p>
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
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>Sedan</p>
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
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>Manual</p>
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
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>1490- 2000 CC</p>
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
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>24-30 /kmph</p>
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
                                <p className='text-[24px] text-[#484848] font-semibold tracking-[0.48px] mb-6'>{"Hyundai"} {"Aura"} {"E"} 1.2 Petrol Features & Specs</p>
                                <div className='md:w-full'>
                                    <div className='mx-3'>
                                        <p className='bg-[#F4F4F4] mb-1 text-[#484848] py-2 px-2 text-[18px] font-semibold tracking-[-0.32px]'>Specifications & Features</p>
                                        <div className='flex'>
                                            <div className='min-w-fit space-y-1 relative z-0'>
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
                                            <div className='text-center w-[80%]'>
                                                <div onScroll={(event) => {
                                                    setDistance(event.currentTarget.scrollTop)
                                                }} className={`h-[45rem] overflow-y-scroll text-left relative z-10`}>
                                                    <div className='border-t-[1px] py-2 border-r-[1px] border-[#C6C6C6] px-4'>
                                                        <p>Dimension</p>
                                                        <p className='text-[14px] font-normal pt-[10px] pb-[5px] text-[#6F6F6F] tracking-[-0.28px] leading-[1]'>Charging Time A C</p>
                                                        <p className='text-[12px] text-[#484848] font-bold pb-[5px] tracking-[-0.24px]'>9.5-10h</p>
                                                        <p className='text-[12px] text-[#484848]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias quas error animi exercitationem eum laborum at perferendis excepturi adipisci, harum quam quisquam ea a! Atque repellat officiis voluptate necessitatibus in iusto tempore, neque ipsa ducimus ratione sunt vero, itaque illo ullam ad aliquam minima rem officia? Ipsum ipsam repellendus id, magni architecto dolorem doloribus. Eveniet inventore aspernatur laudantium maxime aliquid, tempore, iste laborum, assumenda tenetur nisi error sint laboriosam magnam dolorum tempora repellat libero expedita quia optio asperiores blanditiis voluptates. Quod doloribus sit reiciendis obcaecati. Nulla repellendus veritatis ipsa, quis dolor accusantium ab autem blanditiis perferendis rerum. Velit, voluptatum.</p>
                                                    </div>
                                                    <div className='border-t-[1px] py-2 border-r-[1px] border-[#C6C6C6] px-4'>
                                                        <p>Dimension</p>
                                                        <p className='text-[14px] font-normal pt-[10px] pb-[5px] text-[#6F6F6F] tracking-[-0.28px] leading-[1]'>Charging Time A C</p>
                                                        <p className='text-[12px] text-[#484848] font-bold pb-[5px] tracking-[-0.24px]'>9.5-10h</p>
                                                        <p className='text-[12px] text-[#484848]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias quas error animi exercitationem eum laborum at perferendis excepturi adipisci, harum quam quisquam ea a! Atque repellat officiis voluptate necessitatibus in iusto tempore, neque ipsa ducimus ratione sunt vero, itaque illo ullam ad aliquam minima rem officia? Ipsum ipsam repellendus id, magni architecto dolorem doloribus. Eveniet inventore aspernatur laudantium maxime aliquid, tempore, iste laborum, assumenda tenetur nisi error sint laboriosam magnam dolorum tempora repellat libero expedita quia optio asperiores blanditiis voluptates. Quod doloribus sit reiciendis obcaecati. Nulla repellendus veritatis ipsa, quis dolor accusantium ab autem blanditiis perferendis rerum. Velit, voluptatum.</p>
                                                    </div>
                                                    <div className='border-t-[1px] py-2 border-r-[1px] border-[#C6C6C6] px-4'>
                                                        <p>Dimension</p>
                                                        <p className='text-[14px] font-normal pt-[10px] pb-[5px] text-[#6F6F6F] tracking-[-0.28px] leading-[1]'>Charging Time A C</p>
                                                        <p className='text-[12px] text-[#484848] font-bold pb-[5px] tracking-[-0.24px]'>9.5-10h</p>
                                                        <p className='text-[12px] text-[#484848]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias quas error animi exercitationem eum laborum at perferendis excepturi adipisci, harum quam quisquam ea a! Atque repellat officiis voluptate necessitatibus in iusto tempore, neque ipsa ducimus ratione sunt vero, itaque illo ullam ad aliquam minima rem officia? Ipsum ipsam repellendus id, magni architecto dolorem doloribus. Eveniet inventore aspernatur laudantium maxime aliquid, tempore, iste laborum, assumenda tenetur nisi error sint laboriosam magnam dolorum tempora repellat libero expedita quia optio asperiores blanditiis voluptates. Quod doloribus sit reiciendis obcaecati. Nulla repellendus veritatis ipsa, quis dolor accusantium ab autem blanditiis perferendis rerum. Velit, voluptatum.</p>
                                                    </div>
                                                    <div className='border-t-[1px] py-2 border-r-[1px] border-[#C6C6C6] px-4'>
                                                        <p>Dimension</p>
                                                        <p className='text-[14px] font-normal pt-[10px] pb-[5px] text-[#6F6F6F] tracking-[-0.28px] leading-[1]'>Charging Time A C</p>
                                                        <p className='text-[12px] text-[#484848] font-bold pb-[5px] tracking-[-0.24px]'>9.5-10h</p>
                                                        <p className='text-[12px] text-[#484848]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias quas error animi exercitationem eum laborum at perferendis excepturi adipisci, harum quam quisquam ea a! Atque repellat officiis voluptate necessitatibus in iusto tempore, neque ipsa ducimus ratione sunt vero, itaque illo ullam ad aliquam minima rem officia? Ipsum ipsam repellendus id, magni architecto dolorem doloribus. Eveniet inventore aspernatur laudantium maxime aliquid, tempore, iste laborum, assumenda tenetur nisi error sint laboriosam magnam dolorum tempora repellat libero expedita quia optio asperiores blanditiis voluptates. Quod doloribus sit reiciendis obcaecati. Nulla repellendus veritatis ipsa, quis dolor accusantium ab autem blanditiis perferendis rerum. Velit, voluptatum.</p>
                                                    </div>
                                                    <div className='border-t-[1px] py-2 border-r-[1px] border-[#C6C6C6] px-4'>
                                                        <p>Dimension</p>
                                                        <p className='text-[14px] font-normal pt-[10px] pb-[5px] text-[#6F6F6F] tracking-[-0.28px] leading-[1]'>Charging Time A C</p>
                                                        <p className='text-[12px] text-[#484848] font-bold pb-[5px] tracking-[-0.24px]'>9.5-10h</p>
                                                        <p className='text-[12px] text-[#484848]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias quas error animi exercitationem eum laborum at perferendis excepturi adipisci, harum quam quisquam ea a! Atque repellat officiis voluptate necessitatibus in iusto tempore, neque ipsa ducimus ratione sunt vero, itaque illo ullam ad aliquam minima rem officia? Ipsum ipsam repellendus id, magni architecto dolorem doloribus. Eveniet inventore aspernatur laudantium maxime aliquid, tempore, iste laborum, assumenda tenetur nisi error sint laboriosam magnam dolorum tempora repellat libero expedita quia optio asperiores blanditiis voluptates. Quod doloribus sit reiciendis obcaecati. Nulla repellendus veritatis ipsa, quis dolor accusantium ab autem blanditiis perferendis rerum. Velit, voluptatum.</p>
                                                    </div>
                                                    v
                                                    <div className='border-t-[1px] py-2 border-r-[1px] border-[#C6C6C6] px-4'>
                                                        <p>Dimension</p>
                                                        <p className='text-[14px] font-normal pt-[10px] pb-[5px] text-[#6F6F6F] tracking-[-0.28px] leading-[1]'>Charging Time A C</p>
                                                        <p className='text-[12px] text-[#484848] font-bold pb-[5px] tracking-[-0.24px]'>9.5-10h</p>
                                                        <p className='text-[12px] text-[#484848]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias quas error animi exercitationem eum laborum at perferendis excepturi adipisci, harum quam quisquam ea a! Atque repellat officiis voluptate necessitatibus in iusto tempore, neque ipsa ducimus ratione sunt vero, itaque illo ullam ad aliquam minima rem officia? Ipsum ipsam repellendus id, magni architecto dolorem doloribus. Eveniet inventore aspernatur laudantium maxime aliquid, tempore, iste laborum, assumenda tenetur nisi error sint laboriosam magnam dolorum tempora repellat libero expedita quia optio asperiores blanditiis voluptates. Quod doloribus sit reiciendis obcaecati. Nulla repellendus veritatis ipsa, quis dolor accusantium ab autem blanditiis perferendis rerum. Velit, voluptatum.</p>
                                                    </div>
                                                    <div className='border-t-[1px] py-2 border-r-[1px] border-[#C6C6C6] px-4'>
                                                        <p>Dimension</p>
                                                        <p className='text-[14px] font-normal pt-[10px] pb-[5px] text-[#6F6F6F] tracking-[-0.28px] leading-[1]'>Charging Time A C</p>
                                                        <p className='text-[12px] text-[#484848] font-bold pb-[5px] tracking-[-0.24px]'>9.5-10h</p>
                                                        <p className='text-[12px] text-[#484848]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias quas error animi exercitationem eum laborum at perferendis excepturi adipisci, harum quam quisquam ea a! Atque repellat officiis voluptate necessitatibus in iusto tempore, neque ipsa ducimus ratione sunt vero, itaque illo ullam ad aliquam minima rem officia? Ipsum ipsam repellendus id, magni architecto dolorem doloribus. Eveniet inventore aspernatur laudantium maxime aliquid, tempore, iste laborum, assumenda tenetur nisi error sint laboriosam magnam dolorum tempora repellat libero expedita quia optio asperiores blanditiis voluptates. Quod doloribus sit reiciendis obcaecati. Nulla repellendus veritatis ipsa, quis dolor accusantium ab autem blanditiis perferendis rerum. Velit, voluptatum.</p>
                                                    </div>
                                                    <div className='border-t-[1px] py-2 border-r-[1px] border-[#C6C6C6] px-4'>
                                                        <p>Dimension</p>
                                                        <p className='text-[14px] font-normal pt-[10px] pb-[5px] text-[#6F6F6F] tracking-[-0.28px] leading-[1]'>Charging Time A C</p>
                                                        <p className='text-[12px] text-[#484848] font-bold pb-[5px] tracking-[-0.24px]'>9.5-10h</p>
                                                        <p className='text-[12px] text-[#484848]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias quas error animi exercitationem eum laborum at perferendis excepturi adipisci, harum quam quisquam ea a! Atque repellat officiis voluptate necessitatibus in iusto tempore, neque ipsa ducimus ratione sunt vero, itaque illo ullam ad aliquam minima rem officia? Ipsum ipsam repellendus id, magni architecto dolorem doloribus. Eveniet inventore aspernatur laudantium maxime aliquid, tempore, iste laborum, assumenda tenetur nisi error sint laboriosam magnam dolorum tempora repellat libero expedita quia optio asperiores blanditiis voluptates. Quod doloribus sit reiciendis obcaecati. Nulla repellendus veritatis ipsa, quis dolor accusantium ab autem blanditiis perferendis rerum. Velit, voluptatum.</p>
                                                    </div>
                                                    <div className='border-t-[1px] py-2 border-r-[1px] border-[#C6C6C6] px-4'>
                                                        <p>Dimension</p>
                                                        <p className='text-[14px] font-normal pt-[10px] pb-[5px] text-[#6F6F6F] tracking-[-0.28px] leading-[1]'>Charging Time A C</p>
                                                        <p className='text-[12px] text-[#484848] font-bold pb-[5px] tracking-[-0.24px]'>9.5-10h</p>
                                                        <p className='text-[12px] text-[#484848]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias quas error animi exercitationem eum laborum at perferendis excepturi adipisci, harum quam quisquam ea a! Atque repellat officiis voluptate necessitatibus in iusto tempore, neque ipsa ducimus ratione sunt vero, itaque illo ullam ad aliquam minima rem officia? Ipsum ipsam repellendus id, magni architecto dolorem doloribus. Eveniet inventore aspernatur laudantium maxime aliquid, tempore, iste laborum, assumenda tenetur nisi error sint laboriosam magnam dolorum tempora repellat libero expedita quia optio asperiores blanditiis voluptates. Quod doloribus sit reiciendis obcaecati. Nulla repellendus veritatis ipsa, quis dolor accusantium ab autem blanditiis perferendis rerum. Velit, voluptatum.</p>
                                                    </div>
                                                    <div className='border-t-[1px] py-2 border-r-[1px] border-[#C6C6C6] px-4'>
                                                        <p>Dimension</p>
                                                        <p className='text-[14px] font-normal pt-[10px] pb-[5px] text-[#6F6F6F] tracking-[-0.28px] leading-[1]'>Charging Time A C</p>
                                                        <p className='text-[12px] text-[#484848] font-bold pb-[5px] tracking-[-0.24px]'>9.5-10h</p>
                                                        <p className='text-[12px] text-[#484848]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestias quas error animi exercitationem eum laborum at perferendis excepturi adipisci, harum quam quisquam ea a! Atque repellat officiis voluptate necessitatibus in iusto tempore, neque ipsa ducimus ratione sunt vero, itaque illo ullam ad aliquam minima rem officia? Ipsum ipsam repellendus id, magni architecto dolorem doloribus.</p>
                                                    </div>
                                                    <div className='text-center my-4'>
                                                        <button className='text-[13px] bg-[#09809A] font-extralight py-2.5 px-14 rounded-sm text-white'>Download Brochure</button>
                                                    </div>
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
                                        <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                                            <div className='w-[10rem]'>
                                                <p className='text-[18px] mb-1 text-[#484848] font-semibold tracking-[-0.36px]'>Aura E</p>
                                                <span className='text-[14px] text-[#6F6F6F] font-normal tracking-[-0.28px]'>1400 cc, Manual, Petrol </span>
                                            </div>
                                            <div>
                                                <p className='text-[18px] text-[#484848] font-semibold tracking-[-0.36px]'>₹ 6,95,860</p>
                                                <div className='pb-[1rem]'>
                                                    <input className='mx-1' type="checkbox"></input>
                                                    <span className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-[16px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                                            <div className='w-[10rem]'>
                                                <p className='text-[18px] mb-1 text-[#484848] font-semibold tracking-[-0.36px]'>Aura E</p>
                                                <span className='text-[14px] text-[#6F6F6F] font-normal tracking-[-0.28px]'>1400 cc, Manual, Petrol </span>
                                            </div>
                                            <div>
                                                <p className='text-[18px] text-[#484848] font-semibold tracking-[-0.36px]'>₹ 6,95,860</p>
                                                <div className='pb-[1rem]'>
                                                    <input className='mx-1' type="checkbox"></input>
                                                    <span className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-[16px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                                            <div className='w-[10rem]'>
                                                <p className='text-[18px] mb-1 text-[#484848] font-semibold tracking-[-0.36px]'>Aura E</p>
                                                <span className='text-[14px] text-[#6F6F6F] font-normal tracking-[-0.28px]'>1400 cc, Manual, Petrol </span>
                                            </div>
                                            <div>
                                                <p className='text-[18px] text-[#484848] font-semibold tracking-[-0.36px]'>₹ 6,95,860</p>
                                                <div className='pb-[1rem]'>
                                                    <input className='mx-1' type="checkbox"></input>
                                                    <span className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-[16px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                                            <div className='w-[10rem]'>
                                                <p className='text-[18px] mb-1 text-[#484848] font-semibold tracking-[-0.36px]'>Aura E</p>
                                                <span className='text-[14px] text-[#6F6F6F] font-normal tracking-[-0.28px]'>1400 cc, Manual, Petrol </span>
                                            </div>
                                            <div>
                                                <p className='text-[18px] text-[#484848] font-semibold tracking-[-0.36px]'>₹ 6,95,860</p>
                                                <div className='pb-[1rem]'>
                                                    <input className='mx-1' type="checkbox"></input>
                                                    <span className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-[16px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                                            <div className='w-[10rem]'>
                                                <p className='text-[18px] mb-1 text-[#484848] font-semibold tracking-[-0.36px]'>Aura E</p>
                                                <span className='text-[14px] text-[#6F6F6F] font-normal tracking-[-0.28px]'>1400 cc, Manual, Petrol </span>
                                            </div>
                                            <div>
                                                <p className='text-[18px] text-[#484848] font-semibold tracking-[-0.36px]'>₹ 6,95,860</p>
                                                <div className='pb-[1rem]'>
                                                    <input className='mx-1' type="checkbox"></input>
                                                    <span className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-[16px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                                            <div className='w-[10rem]'>
                                                <p className='text-[18px] mb-1 text-[#484848] font-semibold tracking-[-0.36px]'>Aura E</p>
                                                <span className='text-[14px] text-[#6F6F6F] font-normal tracking-[-0.28px]'>1400 cc, Manual, Petrol </span>
                                            </div>
                                            <div>
                                                <p className='text-[18px] text-[#484848] font-semibold tracking-[-0.36px]'>₹ 6,95,860</p>
                                                <div className='pb-[1rem]'>
                                                    <input className='mx-1' type="checkbox"></input>
                                                    <span className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-[16px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                                            <div className='w-[10rem]'>
                                                <p className='text-[18px] mb-1 text-[#484848] font-semibold tracking-[-0.36px]'>Aura E</p>
                                                <span className='text-[14px] text-[#6F6F6F] font-normal tracking-[-0.28px]'>1400 cc, Manual, Petrol </span>
                                            </div>
                                            <div>
                                                <p className='text-[18px] text-[#484848] font-semibold tracking-[-0.36px]'>₹ 6,95,860</p>
                                                <div className='pb-[1rem]'>
                                                    <input className='mx-1' type="checkbox"></input>
                                                    <span className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-[16px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                                            <div className='w-[10rem]'>
                                                <p className='text-[18px] mb-1 text-[#484848] font-semibold tracking-[-0.36px]'>Aura E</p>
                                                <span className='text-[14px] text-[#6F6F6F] font-normal tracking-[-0.28px]'>1400 cc, Manual, Petrol </span>
                                            </div>
                                            <div>
                                                <p className='text-[18px] text-[#484848] font-semibold tracking-[-0.36px]'>₹ 6,95,860</p>
                                                <div className='pb-[1rem]'>
                                                    <input className='mx-1' type="checkbox"></input>
                                                    <span className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-[16px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</p>
                                            </div>
                                        </div>
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
                                <p className='lg:text-[24px] text-[#484848] text-[16px] my-4 font-semibold tracking-[-0.48px]'>Hyundai Aura Colors</p>
                                <div className='border-[1px] border-[#C6C6C6]'>
                                    <Color url={url} brand={"Hyundai"} model={"Aura"} />
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

                            <div className='lg:flex'>
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
                            </div>


                            {/* City Prices  */}
                            <div className='my-10 md:w-full'>
                                <p className='md:text-[24px] text-[16px] mx-2 md:mx-0 font-semibold tracking-[-0.48px]'>Aura E 1.2 Petrol Price in cities near New Delhi</p>
                                <table className='w-full my-2 md:my-5'>
                                    <thead>
                                        <tr className='bg-[#09809A]'>
                                            <th className='text-left p-2 text-white text-[16px] font-normal tracking-[-0.32px]'>City</th>
                                            <th className='text-right px-6 py-2 text-white text-[16px] font-normal tracking-[-0.32px]'>On Road Price</th>
                                            <th className='text-right px-6 py-2 text-white text-[16px] font-normal tracking-[-0.32px]'>Price Breakup</th>
                                        </tr>
                                    </thead>
                                    <tbody>
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
                                    </tbody>
                                </table>
                            </div>

                            {/* Compare Cars  */}
                            <div className='my-10'>
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
                            </div>

                            {/* Reviews Section  */}
                            <div className='my-10'>
                                <p className='text-[24px] font-semibold text-[#484848] pb-2 tracking-[-0.48px]'>Aura E User Reviews</p>
                                <div className='md:w-full border border-[#C6C6C6]'>
                                    <p className='text-[16px] font-normal text-[#484848] tracking-[-0.32px] m-3'>{"Hyundai"} {"Aura"} {"E"} 1.2 Petrol</p>
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
                            </div>

                            {/* FAQ Section  */}
                            <div className='my-10'>
                                <p className='text-[24px] text-[#484848] font-semibold tracking-[-0.48px]'>FAQ&apos;s</p>
                                <div className='my-3 md:w-[65rem]'>
                                    <Faq />
                                </div>
                            </div>
                        </div>


                        <div className='md:w-[26%] mx-[1rem]'>
                            <Right url={url} uid={"218"} brand={"Hyundai"} model={"Aura"} version={"E"} />
                        </div>
                    </div>




                </div>
            </div>

            <Footer />
        </>
    )
}


