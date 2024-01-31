import React, { useEffect, useRef, useState } from 'react'
import style from "../styles/varient.module.css"
import ImageSlider from '../components/carousel'
import Faq from '../components/faq';
import Image from 'next/image';
import Color from "../components/color"
import DoneIcon from '@mui/icons-material/Done';
import advert from "../public/images/advert.png"
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
import { ChevronRight, SearchOutlined } from '@mui/icons-material';
import Right from '../components/right';
import Brand_Modal from '../components/brand_modal';
import Price_Filter from '../components/price_filter';
import Transmission_Filter from '../components/transmission_filter';
import Fuel_Filter from '../components/fuel_filter';
import Body_Filter from '../components/body_type';
import Link from 'next/link';
import Home_Mobile from '../components/home_mobile';
import Head from 'next/head';
import { useRouter } from 'next/router';




export default function Home({ bresponse, query, head }) {

    const top_bar = useRef(null)
    const top_shift = useRef(null)
    const white = useRef(null)
    const [change, setChange] = useState("budget")
    const [body, setBody] = useState(false)

    const [brand, setBrand] = useState(bresponse)
    const [width, setWidth] = useState()
    const [show, setShow] = useState([])
    const [view, setView] = useState(false)
    const brnd = useRef(null)

    const route = useRouter()


    const url = "https://inquisitive-knickers-fish.cyclic.app"


    async function handleInput(e) {
        let data = await fetch(`https://inquisitive-knickers-fish.cyclic.app/car-search/${e.target.value}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        let res = await data.json()
        // res.unshift(`All ${res[0].brand} Cars`)
        console.log(e.target.value)
        setShow(res)
    }








    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        })

        sessionStorage.setItem("host", JSON.stringify(head))
        setWidth(window.innerWidth)
        setBrand(bresponse)


        console.log(document.getElementById("brands"))

        if (sessionStorage.getItem("scroll")) {
            brnd.current ? brnd.current.scrollIntoView({ behavior: 'smooth' }) : null
            sessionStorage.removeItem("scroll")
        }

    }, [bresponse, query, head, brnd])







    return (
        <>
            <Head>
                <title itemprop="name">New Cars, Used Cars, Buy a Car, Sell Your Car - GetOnRoadPrice</title>
            </Head>
            {width > 800 ? <div>
                <div className={`w-full ${style["h-banner"]} text-center h-[30rem] md:mt-[-1.5rem] relative`}>
                    <div className='w-full bg-[#1f232f] bg-opacity-70 py-8 absolute bottom-0'>
                        <div className='md:w-2/5 md:mx-auto text-left relative mx-4'>
                            <div>
                                <input autoComplete='false' onChange={handleInput} id="form1" className='py-2 px-3 w-full text-[#6F6F6F] rounded-md' placeholder='Type car name to view details' type="text" />
                                <ul className={`${show.length <= 0 ? "hidden" : null} absolute w-full h-[15rem] px-4 overflow-y-scroll top-1/2 bg-white pt-1`}>
                                    {show.length > 0 ? show.map((element, index) => {
                                        if (typeof (element) !== "string") {
                                            return (<Link key={index} href={`/new-cars/${element.brand.toLowerCase().split(" ").join("-")}/${element.model_name.toLowerCase().split(" ").join("-")}`} >
                                                <li className='py-1 text-[#6f6f6f]'>{element.brand}&nbsp;{element.model_name}</li>
                                            </Link>)
                                        } else {
                                            return (<Link key={index} href={`/new-cars/${element.split(" ")[1].toLowerCase()}`} >
                                                <li className='py-1 text-[#6f6f6f]'>{element}</li>
                                            </Link>)
                                        }

                                    }) : null}
                                </ul>
                            </div>
                            <div className='bg-[#09809A] inline pt-1 pb-1.5 pl-2 pr-[0.45rem] rounded-md absolute right-[2px] top-[2px]'>
                                <SearchOutlined sx={{ color: "white" }} />
                            </div>
                            <p className='text-white text-[14px] py-1'>e.g. Tata Nexon</p>
                        </div>
                    </div>
                </div>
                <div className='mx-2 md:mx-0'>

                    <div className='lg:mx-[5rem]'>


                        <div className='md:flex hidden'>
                            <div className='md:w-full'>

                                {/* New Cars  */}

                                {/* <div className='lg:flex my-10'>
                                <div className='lg:w-full mx-3 md:mx-0'>
                                    <p className='text-[24px] text-[#484848] font-semibold tracking-[-0.48px]'>New Cars Trending</p>
                                    <ul className='flex space-x-5 my-2'>
                                        <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Trending</li>
                                        <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Recently Launched</li>
                                        <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Upcoming</li>
                                    </ul>
                                    <div className='flex'>
                                        <div style={{ whiteSpace: "nowrap", overflow: "scroll", display: "flow" }} className='space-x-3'>
                                            <div className='w-[22rem] inline-block border border-[#C6C6C6]'>
                                                <div className='h-[10rem]'>
                                                    <Image width={200} className='mx-auto' src={car1} alt="" />
                                                </div>
                                                <div className='bg-[#f4f4f4] p-3'>
                                                    <p className='text-[16px] text-[#484848] font-normal leading-[24px] capitalize'>Hyundai Exter</p>
                                                    <span className='mr-3 text-[14px] text-[#484848] font-semibold leading-[24px] capitalize'>₹ 6.00 Lakh Onwards</span>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize py-[4px]'>On-Road Price New Delhi</p>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize'>Petrol, Manual, 22.05 KMPL</p>
                                                </div>
                                            </div>
                                            <div className='w-[22rem] inline-block border border-[#C6C6C6]'>
                                                <div className='h-[10rem]'>
                                                    <Image width={200} className='mx-auto' src={car2} alt="" />
                                                </div>
                                                <div className='bg-[#f4f4f4] p-3'>
                                                    <p className='text-[16px] text-[#484848] font-normal leading-[24px] capitalize'>Tata Punch</p>
                                                    <span className='mr-3 text-[14px] text-[#484848] font-semibold leading-[24px] capitalize'>₹ 7.15 Lakh Onwards</span>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize py-[4px]'>On-Road Price New Delhi</p>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize'>Petrol, Manual, 20.05 KMPL</p>
                                                </div>
                                            </div>
                                            <div className='w-[22rem] inline-block border border-[#C6C6C6]'>
                                                <div className='h-[10rem]'>
                                                    <Image width={200} className='mx-auto' src={car3} alt="" />
                                                </div>
                                                <div className='bg-[#f4f4f4] p-3'>
                                                    <p className='text-[16px] text-[#484848] font-normal leading-[24px] capitalize'>Maruti Brezza</p>
                                                    <span className='mr-3 text-[14px] text-[#484848] font-semibold leading-[24px] capitalize'>₹ 8.69 Lakh Onwards</span>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize py-[4px]'>On-Road Price New Delhi</p>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize'>Petrol, Manual, 20.05 KMPL</p>
                                                </div>
                                            </div>
                                            <div className='w-[22rem] inline-block border border-[#C6C6C6]'>
                                                <div className='h-[10rem]'>
                                                    <Image width={200} className='mx-auto' src={car2} alt="" />
                                                </div>
                                                <div className='bg-[#f4f4f4] p-3'>
                                                    <p className='text-[16px] text-[#484848] font-normal leading-[24px] capitalize'>KIA Sonet</p>
                                                    <span className='mr-3 text-[14px] text-[#484848] font-semibold leading-[24px] capitalize'>₹ 10.29 Lakh Onwards</span>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize py-[4px]'>On-Road Price New Delhi</p>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize'>Petrol, Manual, 20.05 KMPL</p>
                                                </div>
                                            </div>
                                            <div className='w-[22rem] inline-block border border-[#C6C6C6]'>
                                                <div className='h-[10rem]'>
                                                    <Image width={200} className='mx-auto' src={car1} alt="" />
                                                </div>
                                                <div className='bg-[#f4f4f4] p-3'>
                                                    <p className='text-[16px] font-normal text-[#484848] leading-[24px] capitalize'>Maruti Brezza</p>
                                                    <span className='mr-3 text-[14px] font-semibold text-[#484848] leading-[24px] capitalize'>₹ 8.69 Lakh Onwards</span>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize py-[4px]'>On-Road Price New Delhi</p>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize'>Petrol, Manual, 20.05 KMPL</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}


                                {/* Electric Cars  */}

                                {/* <div className='lg:flex mt-10'>
                                <div className='lg:w-full mx-3 md:mx-0'>
                                    <p className='text-[24px] text-[#484848] font-semibold tracking-[-0.48px]'>Electric Cars</p>
                                    <ul className='flex space-x-5 my-2'>
                                        <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Trending</li>
                                        <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Recently Launched</li>
                                        <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Upcoming</li>
                                    </ul>
                                    <div className='flex'>
                                        <div style={{ whiteSpace: "nowrap", overflow: "scroll", display: "flow" }} className='space-x-3'>
                                            <div className='w-[22rem] inline-block border border-[#C6C6C6]'>
                                                <div className='h-[10rem]'>
                                                    <Image width={200} className='mx-auto' src={car1} alt="" />
                                                </div>
                                                <div className='bg-[#f4f4f4] p-3'>
                                                    <p className='text-[16px] text-[#484848] font-normal leading-[24px] capitalize'>Hyundai Exter</p>
                                                    <span className='mr-3 text-[14px] text-[#484848] font-semibold leading-[24px] capitalize'>₹ 6.00 Lakh Onwards</span>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize py-[4px]'>On-Road Price New Delhi</p>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize'>Petrol, Manual, 22.05 KMPL</p>
                                                </div>
                                            </div>
                                            <div className='w-[22rem] inline-block border border-[#C6C6C6]'>
                                                <div className='h-[10rem]'>
                                                    <Image width={200} className='mx-auto' src={car2} alt="" />
                                                </div>
                                                <div className='bg-[#f4f4f4] p-3'>
                                                    <p className='text-[16px] text-[#484848] font-normal leading-[24px] capitalize'>Tata Punch</p>
                                                    <span className='mr-3 text-[14px] text-[#484848] font-semibold leading-[24px] capitalize'>₹ 7.15 Lakh Onwards</span>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize py-[4px]'>On-Road Price New Delhi</p>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize'>Petrol, Manual, 20.05 KMPL</p>
                                                </div>
                                            </div>
                                            <div className='w-[22rem] inline-block border border-[#C6C6C6]'>
                                                <div className='h-[10rem]'>
                                                    <Image width={200} className='mx-auto' src={car3} alt="" />
                                                </div>
                                                <div className='bg-[#f4f4f4] p-3'>
                                                    <p className='text-[16px] text-[#484848] font-normal leading-[24px] capitalize'>Maruti Brezza</p>
                                                    <span className='mr-3 text-[14px] text-[#484848] font-semibold leading-[24px] capitalize'>₹ 8.69 Lakh Onwards</span>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize py-[4px]'>On-Road Price New Delhi</p>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize'>Petrol, Manual, 20.05 KMPL</p>
                                                </div>
                                            </div>
                                            <div className='w-[22rem] inline-block border border-[#C6C6C6]'>
                                                <div className='h-[10rem]'>
                                                    <Image width={200} className='mx-auto' src={car2} alt="" />
                                                </div>
                                                <div className='bg-[#f4f4f4] p-3'>
                                                    <p className='text-[16px] text-[#484848] font-normal leading-[24px] capitalize'>KIA Sonet</p>
                                                    <span className='mr-3 text-[14px] text-[#484848] font-semibold leading-[24px] capitalize'>₹ 10.29 Lakh Onwards</span>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize py-[4px]'>On-Road Price New Delhi</p>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize'>Petrol, Manual, 20.05 KMPL</p>
                                                </div>
                                            </div>
                                            <div className='w-[22rem] inline-block border border-[#C6C6C6]'>
                                                <div className='h-[10rem]'>
                                                    <Image width={200} className='mx-auto' src={car1} alt="" />
                                                </div>
                                                <div className='bg-[#f4f4f4] p-3'>
                                                    <p className='text-[16px] font-normal text-[#484848] leading-[24px] capitalize'>Maruti Brezza</p>
                                                    <span className='mr-3 text-[14px] font-semibold text-[#484848] leading-[24px] capitalize'>₹ 8.69 Lakh Onwards</span>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize py-[4px]'>On-Road Price New Delhi</p>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize'>Petrol, Manual, 20.05 KMPL</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}




                                {/* Brands Listing */}
                                <div ref={brnd} className='w-full mt-10'>
                                    <h2 className='md:text-[24px] text-[18px] text-[#484848] font-semibold my-2'>Find the Perfect Cars for You!</h2>
                                    <ul className='flex space-x-5 my-3'>
                                        <li onClick={() => setBody(false)} className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>By Brand</li>
                                        <li onClick={() => setBody(true)} className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>By Body Type</li>
                                    </ul>
                                    {body ? <Body_Filter /> : <div>
                                        <div className='grid grid-cols-6 gap-y-10 border border-[#E1E1E1] py-12'>
                                            {brand.length > 0 ? brand.map((item, index) => {
                                                return (<Link className={`${view ? null : index >= 12 ? "hidden" : null}`} key={index} href={`/new-cars/${item.brand.split(" ").join("-").toLowerCase()}`}>
                                                    <div key={index} className='text-center'>
                                                        <Image className='mx-auto' width={100} height={70} src={`https://ik.imagekit.io/GORP/Logos/${item.brand}.jpg?updatedAt=1693313074421`} />
                                                        <p className='text-xl text-[#484848] font-semibold my-3'>{item.brand}</p>
                                                    </div>
                                                </Link>)

                                            }) : null}
                                        </div>
                                        <div className='text-center my-4'>
                                            <button onClick={() => view ? setView(false) : setView(true)} className='px-16 rounded-md'><span className='text-[16px] font-normal tracking-[-0.24px] text-[#09809A]'>
                                                View All Brands
                                            </span></button>
                                        </div>
                                    </div>}
                                </div>


                                {/* Price Listing */}
                                <div className='w-full mt-10'>
                                    <h2 className='md:text-[24px] text-[18px] text-[#484848] font-semibold my-2'>Find the Perfect Cars for You!</h2>
                                    <ul className='flex space-x-5 my-2'>
                                        <li onClick={() => setChange("budget")} className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>By Budget</li>
                                        <li onClick={() => setChange("fuel")} className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>By Fuel Type</li>
                                        <li onClick={() => setChange("transmission")} className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>By Transmission Type</li>
                                    </ul>
                                    {change === "budget" ? <Price_Filter /> : null}
                                    {change === "transmission" ? <Transmission_Filter /> : null}
                                    {change === "fuel" ? <Fuel_Filter /> : null}
                                </div>




                                {/* Upcoming Cars  */}

                                {/* <div className='lg:flex mt-10'>
                                <div className='lg:w-full mx-3 md:mx-0'>
                                    <p className='text-[24px] text-[#484848] font-semibold tracking-[-0.48px]'>Upcoming Cars</p>
                                    <ul className='flex space-x-5 my-2'>
                                        <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>SUV</li>
                                        <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Hatchback</li>
                                        <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Sedan</li>
                                        <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>MUV</li>
                                        <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Luxury</li>
                                    </ul>
                                    <div className='flex'>
                                        <div style={{ whiteSpace: "nowrap", overflow: "scroll", display: "flow" }} className='space-x-3'>
                                            <div className='w-[22rem] inline-block border border-[#C6C6C6]'>
                                                <div className='h-[10rem]'>
                                                    <Image width={200} className='mx-auto' src={car1} alt="" />
                                                </div>
                                                <div className='bg-[#f4f4f4] p-3'>
                                                    <p className='text-[16px] text-[#484848] font-normal leading-[24px] capitalize'>Hyundai Exter</p>
                                                    <span className='mr-3 text-[14px] text-[#484848] font-semibold leading-[24px] capitalize'>₹ 6.00 Lakh Onwards</span>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize py-[4px]'>On-Road Price New Delhi</p>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize'>Petrol, Manual, 22.05 KMPL</p>
                                                    <p className='text-[#ce4327] font-semibold leading-[17px] text-[12px] pt-4'>Notify Me on Launch!</p>
                                                </div>
                                            </div>
                                            <div className='w-[22rem] inline-block border border-[#C6C6C6]'>
                                                <div className='h-[10rem]'>
                                                    <Image width={200} className='mx-auto' src={car2} alt="" />
                                                </div>
                                                <div className='bg-[#f4f4f4] p-3'>
                                                    <p className='text-[16px] text-[#484848] font-normal leading-[24px] capitalize'>Tata Punch</p>
                                                    <span className='mr-3 text-[14px] text-[#484848] font-semibold leading-[24px] capitalize'>₹ 7.15 Lakh Onwards</span>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize py-[4px]'>On-Road Price New Delhi</p>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize'>Petrol, Manual, 20.05 KMPL</p>
                                                    <p className='text-[#ce4327] font-semibold leading-[17px] text-[12px] pt-4'>Notify Me on Launch!</p>
                                                </div>
                                            </div>
                                            <div className='w-[22rem] inline-block border border-[#C6C6C6]'>
                                                <div className='h-[10rem]'>
                                                    <Image width={200} className='mx-auto' src={car3} alt="" />
                                                </div>
                                                <div className='bg-[#f4f4f4] p-3'>
                                                    <p className='text-[16px] text-[#484848] font-normal leading-[24px] capitalize'>Maruti Brezza</p>
                                                    <span className='mr-3 text-[14px] text-[#484848] font-semibold leading-[24px] capitalize'>₹ 8.69 Lakh Onwards</span>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize py-[4px]'>On-Road Price New Delhi</p>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize'>Petrol, Manual, 20.05 KMPL</p>
                                                    <p className='text-[#ce4327] font-semibold leading-[17px] text-[12px] pt-4'>Notify Me on Launch!</p>
                                                </div>
                                            </div>
                                            <div className='w-[22rem] inline-block border border-[#C6C6C6]'>
                                                <div className='h-[10rem]'>
                                                    <Image width={200} className='mx-auto' src={car2} alt="" />
                                                </div>
                                                <div className='bg-[#f4f4f4] p-3'>
                                                    <p className='text-[16px] text-[#484848] font-normal leading-[24px] capitalize'>KIA Sonet</p>
                                                    <span className='mr-3 text-[14px] text-[#484848] font-semibold leading-[24px] capitalize'>₹ 10.29 Lakh Onwards</span>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize py-[4px]'>On-Road Price New Delhi</p>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize'>Petrol, Manual, 20.05 KMPL</p>
                                                    <p className='text-[#ce4327] font-semibold leading-[17px] text-[12px] pt-4'>Notify Me on Launch!</p>
                                                </div>
                                            </div>
                                            <div className='w-[22rem] inline-block border border-[#C6C6C6]'>
                                                <div className='h-[10rem]'>
                                                    <Image width={200} className='mx-auto' src={car1} alt="" />
                                                </div>
                                                <div className='bg-[#f4f4f4] p-3'>
                                                    <p className='text-[16px] font-normal text-[#484848] leading-[24px] capitalize'>Maruti Brezza</p>
                                                    <span className='mr-3 text-[14px] font-semibold text-[#484848] leading-[24px] capitalize'>₹ 8.69 Lakh Onwards</span>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize py-[4px]'>On-Road Price New Delhi</p>
                                                    <p className='text-[12px] text-[#6F6F6F] font-normal leading-[17px] capitalize'>Petrol, Manual, 20.05 KMPL</p>
                                                    <p className='text-[#ce4327] font-semibold leading-[17px] text-[12px] pt-4'>Notify Me on Launch!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}



                                {/* Compare Cars  */}
                                {/* <div className='my-10'>
                                <p className='text-[24px] text-[#484848] font-semibold tracking-[-0.48px]'>Most Compared Cars</p>
                                <ul className='flex space-x-5 my-2'>
                                    <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>SUV</li>
                                    <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Hatchback</li>
                                    <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Sedan</li>
                                    <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>MUV</li>
                                    <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Luxury</li>
                                </ul>
                                <div className='flex overflow-x-scroll space-x-3'>
                                    <div>
                                        <div className='flex'>
                                            <div className='border border-[#C6C6C6] h-[15rem] lg:w-[25rem] text-center'>
                                                <Image className='mx-auto' src={car5} alt="" />
                                            </div>
                                            <div className='relative z-20'>
                                                <div className={`${style.box} absolute left-[-45px] top-[70px]`}>
                                                    <div className={`${style["v-s"]}`}>
                                                        <div className={`${style["overlap-group"]}`}>
                                                            <div className={`${style.ellipse}`}></div>
                                                            <div className={`${style["text-wrapper"]}`}>V/s</div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                            <div className='border-y border-r border-[#C6C6C6] h-[15rem] lg:w-[25rem] text-center'>
                                                <Image className='mx-auto' src={car5} alt="" />
                                            </div>
                                        </div>
                                        <div className='w-full flex justify-between bg-[#f4f4f4] px-[4rem] py-4'>
                                            <div className='text-center w-[20rem]'>
                                                <p className='text-[20px] font-medium tracking-[-0.4px]'>Hyundai Aura</p>
                                                <p className='text-[18px] font-semibold'>₹ 6.00 Lakhs Onwards</p>
                                            </div>
                                            <div className='text-center w-[20rem]'>
                                                <p className='text-[20px] font-medium tracking-[-0.4px]'>Tata Punch</p>
                                                <p className='text-[18px] font-semibold '>₹ 7.00 Lakhs Onwards</p>
                                            </div>
                                        </div>
                                        <div className='bg-[#f4f4f4] w-full text-center'>
                                            <div>
                                                <button className='bg-[#09809A] rounded-md w-1/3 mb-4 py-2 text-white text-[18px] font-normal'><Image className='inline mr-2' src={compare_white} alt="" /><span>Compare Now</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex'>
                                            <div className='border border-[#C6C6C6] h-[15rem] lg:w-[25rem] text-center'>
                                                <Image className='mx-auto' src={car5} alt="" />
                                            </div>
                                            <div className='relative z-20'>
                                                <div className={`${style.box} absolute left-[-45px] top-[70px]`}>
                                                    <div className={`${style["v-s"]}`}>
                                                        <div className={`${style["overlap-group"]}`}>
                                                            <div className={`${style.ellipse}`}></div>
                                                            <div className={`${style["text-wrapper"]}`}>V/s</div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                            <div className='border-y border-r border-[#C6C6C6] h-[15rem] lg:w-[25rem] text-center'>
                                                <Image className='mx-auto' src={car5} alt="" />
                                            </div>
                                        </div>
                                        <div className='w-full flex justify-between bg-[#f4f4f4] px-[4rem] py-4'>
                                            <div className='text-center w-[20rem]'>
                                                <p className='text-[20px] font-medium tracking-[-0.4px]'>Hyundai Aura</p>
                                                <p className='text-[18px] font-semibold'>₹ 6.00 Lakhs Onwards</p>
                                            </div>
                                            <div className='text-center w-[20rem]'>
                                                <p className='text-[20px] font-medium tracking-[-0.4px]'>Tata Punch</p>
                                                <p className='text-[18px] font-semibold '>₹ 7.00 Lakhs Onwards</p>
                                            </div>
                                        </div>
                                        <div className='bg-[#f4f4f4] w-full text-center'>
                                            <div>
                                                <button className='bg-[#09809A] rounded-md w-1/3 mb-4 py-2 text-white text-[18px] font-normal'><Image className='inline mr-2' src={compare_white} alt="" /><span>Compare Now</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex'>
                                            <div className='border border-[#C6C6C6] h-[15rem] lg:w-[25rem] text-center'>
                                                <Image className='mx-auto' src={car5} alt="" />
                                            </div>
                                            <div className='relative z-20'>
                                                <div className={`${style.box} absolute left-[-45px] top-[70px]`}>
                                                    <div className={`${style["v-s"]}`}>
                                                        <div className={`${style["overlap-group"]}`}>
                                                            <div className={`${style.ellipse}`}></div>
                                                            <div className={`${style["text-wrapper"]}`}>V/s</div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                            <div className='border-y border-r border-[#C6C6C6] h-[15rem] lg:w-[25rem] text-center'>
                                                <Image className='mx-auto' src={car5} alt="" />
                                            </div>
                                        </div>
                                        <div className='w-full flex justify-between bg-[#f4f4f4] px-[4rem] py-4'>
                                            <div className='text-center w-[20rem]'>
                                                <p className='text-[20px] font-medium tracking-[-0.4px]'>Hyundai Aura</p>
                                                <p className='text-[18px] font-semibold'>₹ 6.00 Lakhs Onwards</p>
                                            </div>
                                            <div className='text-center w-[20rem]'>
                                                <p className='text-[20px] font-medium tracking-[-0.4px]'>Tata Punch</p>
                                                <p className='text-[18px] font-semibold '>₹ 7.00 Lakhs Onwards</p>
                                            </div>
                                        </div>
                                        <div className='bg-[#f4f4f4] w-full text-center'>
                                            <div>
                                                <button className='bg-[#09809A] rounded-md w-1/3 mb-4 py-2 text-white text-[18px] font-normal'><Image className='inline mr-2' src={compare_white} alt="" /><span>Compare Now</span></button>
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



                                <div className='md:p-4 p-1.5 mt-8'>
                                    <p className='my-4 text-[#6F6F6F] text-[14px]'><span className='text-[#484848]'>Disclaimer:</span> While we do our best to ensure that these prices are accurate, we suggest to please contact your nearest dealer for current on road prices and offers.</p>
                                </div>


                            </div>



                        </div>



                    </div>
                </div>
            </div> : <Home_Mobile bresponse={bresponse} query={query} head={head} />}
        </>
    )
}





Home.getInitialProps = async (context) => {

    const { query, req } = context;
    const url = "https://inquisitive-knickers-fish.cyclic.app"
    // https://inquisitive-knickers-fish.cyclic.app

    const head = req ? req.headers : sessionStorage.getItem("host")



    let data = await fetch(`${url}/all_brands`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    let bresponse = await data.json()


    return {
        bresponse,
        query,
        head
    }
}

