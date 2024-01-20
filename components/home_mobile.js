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




export default function Home_Mobile({ bresponse, query, head }) {

    const top_bar = useRef(null)
    const top_shift = useRef(null)
    const white = useRef(null)
    const [change, setChange] = useState("budget")
    const [body, setBody] = useState(false)

    const [brand, setBrand] = useState(bresponse)


    useEffect(() => {
        console.log(bresponse)
        setBrand(bresponse)
    }, [])







    return (
        <>
            <Navbar />
            <div className={`w-full ${style["h-banner"]} text-center h-[30rem] md:mt-[-1.5rem] relative`}>
                <div className='w-full bg-[#1f232f] bg-opacity-70 py-8 absolute bottom-0'>
                    <div className='md:w-2/5 md:mx-auto text-left relative mx-4'>
                        <input className='py-2 px-3 w-full text-[#6F6F6F] rounded-md' placeholder='Type car name to view details' type="text" />
                        <div className='bg-[#09809A] inline pt-1 pb-1.5 pl-2 pr-[0.45rem] rounded-md absolute right-[2px] top-[2px]'>
                            <SearchOutlined sx={{ color: "white" }} />
                        </div>
                        <p className='text-white text-[14px] py-1'>e.g. Tata Nexon</p>
                    </div>
                </div>
            </div>
            <div className='mx-2 md:mx-0'>

                <div className='lg:mx-[5rem]'>


                    <div className='md:hidden'>
                        <div className='md:w-[74%]'>

                            {/* New Cars  */}

                            {/* <div className='lg:flex'>
                                <div className='lg:w-full md:mx-0'>
                                    <p className='text-[18px] text-[#484848] font-semibold tracking-[-0.48px]'>New Cars Trending</p>
                                    <ul className='flex space-x-5 my-2'>
                                        <li className={`hover:text-[#09809A] text-[14px]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A]  pb-2 cursor-pointer font-semibold`}>Trending</li>
                                        <li className={`hover:text-[#09809A] text-[14px]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A]  pb-2 cursor-pointer font-semibold`}>Recently Launched</li>
                                        <li className={`hover:text-[#09809A] text-[14px]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Upcoming</li>
                                    </ul>
                                    <div className='flex'>
                                        <div style={{ whiteSpace: "nowrap", overflow: "scroll", display: "flow" }} className='space-x-3'>
                                            <div className='w-[20rem] inline-block border border-[#C6C6C6]'>
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
                                            <div className='w-[20rem] inline-block border border-[#C6C6C6]'>
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
                                            <div className='w-[20rem] inline-block border border-[#C6C6C6]'>
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
                                            <div className='w-[20rem] inline-block border border-[#C6C6C6]'>
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
                                            <div className='w-[20rem] inline-block border border-[#C6C6C6]'>
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
                                <div className='lg:w-full md:mx-0'>
                                    <p className='text-[18px] text-[#484848] font-semibold tracking-[-0.48px]'>Electric Cars</p>
                                    <ul className='flex space-x-5 my-2'>
                                        <li className={`hover:text-[#09809A]  text-[14px] text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Trending</li>
                                        <li className={`hover:text-[#09809A] text-[14px]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Recently Launched</li>
                                        <li className={`hover:text-[#09809A] text-[14px]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Upcoming</li>
                                    </ul>
                                    <div className='flex'>
                                        <div style={{ whiteSpace: "nowrap", overflow: "scroll", display: "flow" }} className='space-x-3'>
                                            <div className='w-[20rem] inline-block border border-[#C6C6C6]'>
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
                                            <div className='w-[20rem] inline-block border border-[#C6C6C6]'>
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
                                            <div className='w-[20rem] inline-block border border-[#C6C6C6]'>
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
                                            <div className='w-[20rem] inline-block border border-[#C6C6C6]'>
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
                                            <div className='w-[20rem] inline-block border border-[#C6C6C6]'>
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
                            <div className='w-full mt-10'>
                                <h2 className='md:text-[24px] text-[18px] text-[#484848] font-semibold my-2'>Find the Perfect Cars for You!</h2>
                                <ul className='flex space-x-5 my-3'>
                                    <li className={`hover:text-[#09809A] text-[14px]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>By Brand</li>
                                    <li className={`hover:text-[#09809A] text-[14px]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>By Body Type</li>
                                </ul>
                                <div className='grid grid-cols-3 gap-y-10 border border-[#E1E1E1] py-12'>
                                    {brand.length > 0 ? brand.map((item, index) => {
                                        return (<Link key={index} href={`/new-cars/${item.brand.split(" ").join("-").toLowerCase()}`}>
                                            <div key={index} className='text-center'>
                                                <Image className='mx-auto' width={100} height={70} src={`https://ik.imagekit.io/GORP/Logos/${item.brand}.jpg?updatedAt=1693313074421`} />
                                                <p className='text-xl text-[#484848] font-semibold my-3'>{item.brand}</p>
                                            </div>
                                        </Link>)

                                    }) : null}
                                </div>
                                <div className='text-center my-4'>
                                    <button className='px-16 rounded-md'><span className='text-[16px] font-normal tracking-[-0.24px] text-[#09809A]'>
                                        View All Brands
                                    </span></button>
                                </div>
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
{/* 
                            <div className='lg:flex mt-10'>
                                <div className='lg:w-full md:mx-0'>
                                    <p className='text-[18px] text-[#484848] font-semibold tracking-[-0.48px]'>Upcoming Cars</p>
                                    <ul className='flex space-x-5 my-2'>
                                        <li className={`hover:text-[#09809A] text-[14px]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>SUV</li>
                                        <li className={`hover:text-[#09809A] text-[14px]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Hatchback</li>
                                        <li className={`hover:text-[#09809A] text-[14px]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Sedan</li>
                                        <li className={`hover:text-[#09809A] text-[14px]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>MUV</li>
                                        <li className={`hover:text-[#09809A] text-[14px]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Luxury</li>
                                    </ul>
                                    <div className='flex'>
                                        <div style={{ whiteSpace: "nowrap", overflow: "scroll", display: "flow" }} className='space-x-3'>
                                            <div className='w-[20rem] inline-block border border-[#C6C6C6]'>
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
                                            <div className='w-[20rem] inline-block border border-[#C6C6C6]'>
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
                                            <div className='w-[20rem] inline-block border border-[#C6C6C6]'>
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
                                            <div className='w-[20rem] inline-block border border-[#C6C6C6]'>
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
                                            <div className='w-[20rem] inline-block border border-[#C6C6C6]'>
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


                            {/* Compare Cars  */}
                            <div className='my-10'>
                                <p className='text-[18px] text-[#484848] font-semibold tracking-[-0.48px]'>Most Compared Cars</p>
                                <ul className='flex space-x-5 my-2'>
                                    <li className={`hover:text-[#09809A] text-[14px]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>SUV</li>
                                    <li className={`hover:text-[#09809A] text-[14px]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Hatchback</li>
                                    <li className={`hover:text-[#09809A] text-[14px]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Sedan</li>
                                    <li className={`hover:text-[#09809A] text-[14px]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>MUV</li>
                                    <li className={`hover:text-[#09809A] text-[14px]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Luxury</li>
                                </ul>
                                <div className='flex overflow-x-scroll space-x-3'>
                                    <div>
                                        <div className='flex w-[20rem]'>
                                            <div className='border border-[#C6C6C6] text-center'>
                                                <Image className='mx-auto' src={car5} alt="" />
                                            </div>
                                            {/* <div className='relative z-20'>
                                                <div className={`${style.box} absolute left-[-35px] md:left-[-45px] top-[90px] md:top-[100px]`}>
                                                    <div className={`${style["v-s"]}`}>
                                                        <div className={`${style["overlap-group"]}`}>
                                                            <div className={`${style.ellipse}`}></div>
                                                            <div className={`${style["text-wrapper"]}`}>V/s</div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div> */}

                                            <div className='border-y border-r border-[#C6C6C6] text-center'>
                                                <Image className='mx-auto' src={car5} alt="" />
                                            </div>
                                        </div>
                                        <div className='w-full flex justify-between bg-[#f4f4f4] px-4 py-4'>
                                            <div className='text-left'>
                                                <p className='text-[14px] font-medium tracking-[-0.4px]'>Hyundai Aura</p>
                                                <p className='text-[12px] font-semibold'>₹ 6.00 Lakhs Onwards</p>
                                            </div>
                                            <div className='text-left'>
                                                <p className='text-[14px] font-medium tracking-[-0.4px]'>Tata Punch</p>
                                                <p className='text-[12px] font-semibold '>₹ 7.00 Lakhs Onwards</p>
                                            </div>
                                        </div>
                                        <div className='bg-[#f4f4f4] w-full text-center'>
                                            <div>
                                                <button className='bg-[#09809A] rounded-md w-1/2 mb-4 py-2 text-white text-[12px] font-normal'><Image className='inline mr-2' src={compare_white} alt="" /><span>Compare Now</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex w-[20rem]'>
                                            <div className='border border-[#C6C6C6] text-center'>
                                                <Image className='mx-auto' src={car5} alt="" />
                                            </div>
                                            {/* <div className='relative z-20'>
                                                <div className={`${style.box} absolute left-[-35px] md:left-[-45px] top-[90px] md:top-[100px]`}>
                                                    <div className={`${style["v-s"]}`}>
                                                        <div className={`${style["overlap-group"]}`}>
                                                            <div className={`${style.ellipse}`}></div>
                                                            <div className={`${style["text-wrapper"]}`}>V/s</div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div> */}

                                            <div className='border-y border-r border-[#C6C6C6] text-center'>
                                                <Image className='mx-auto' src={car5} alt="" />
                                            </div>
                                        </div>
                                        <div className='w-full flex justify-between bg-[#f4f4f4] px-4 py-4'>
                                            <div className='text-left'>
                                                <p className='text-[14px] font-medium tracking-[-0.4px]'>Hyundai Aura</p>
                                                <p className='text-[12px] font-semibold'>₹ 6.00 Lakhs Onwards</p>
                                            </div>
                                            <div className='text-left'>
                                                <p className='text-[14px] font-medium tracking-[-0.4px]'>Tata Punch</p>
                                                <p className='text-[12px] font-semibold '>₹ 7.00 Lakhs Onwards</p>
                                            </div>
                                        </div>
                                        <div className='bg-[#f4f4f4] w-full text-center'>
                                            <div>
                                                <button className='bg-[#09809A] rounded-md w-1/2 mb-4 py-2 text-white text-[12px] font-normal'><Image className='inline mr-2' src={compare_white} alt="" /><span>Compare Now</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex w-[20rem]'>
                                            <div className='border border-[#C6C6C6] text-center'>
                                                <Image className='mx-auto' src={car5} alt="" />
                                            </div>
                                            {/* <div className='relative z-20'>
                                                <div className={`${style.box} absolute left-[-35px] md:left-[-45px] top-[90px] md:top-[100px]`}>
                                                    <div className={`${style["v-s"]}`}>
                                                        <div className={`${style["overlap-group"]}`}>
                                                            <div className={`${style.ellipse}`}></div>
                                                            <div className={`${style["text-wrapper"]}`}>V/s</div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div> */}

                                            <div className='border-y border-r border-[#C6C6C6] text-center'>
                                                <Image className='mx-auto' src={car5} alt="" />
                                            </div>
                                        </div>
                                        <div className='w-full flex justify-between bg-[#f4f4f4] px-4 py-4'>
                                            <div className='text-left'>
                                                <p className='text-[14px] font-medium tracking-[-0.4px]'>Hyundai Aura</p>
                                                <p className='text-[12px] font-semibold'>₹ 6.00 Lakhs Onwards</p>
                                            </div>
                                            <div className='text-left'>
                                                <p className='text-[14px] font-medium tracking-[-0.4px]'>Tata Punch</p>
                                                <p className='text-[12px] font-semibold '>₹ 7.00 Lakhs Onwards</p>
                                            </div>
                                        </div>
                                        <div className='bg-[#f4f4f4] w-full text-center'>
                                            <div>
                                                <button className='bg-[#09809A] rounded-md w-1/2 mb-4 py-2 text-white text-[12px] font-normal'><Image className='inline mr-2' src={compare_white} alt="" /><span>Compare Now</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            {/* FAQ Section  */}
                            {/* <div className='mt-3'>
                                <h2 className='text-[18px] px-4 font-semibold tracking-[-0.48px]'>FAQ&apos;s</h2>
                                <div className='my-3 md:w-[65rem]'>
                                    <Faq />
                                </div>
                            </div> */}


                            {/* SPonsored adv  */}
                            <div className='mb-8'>
                                <p className='text-[12px] text-[#484848] mb-2 underline'>Sponsored</p>
                                <div className='w-full bg-[#E1E1E1] h-[15rem]'>

                                </div>
                            </div>


                            <div className='md:p-4 p-1.5 mt-8'>
                                <p>Home &gt; Hyundai &gt; Aura</p>
                                <p className='my-4 text-[#6F6F6F]'><span className='text-[#484848]'>Disclaimer:</span> While we do our best to ensure that these prices are accurate, we suggest to please contact your nearest dealer for current on road prices and offers.</p>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


