import React, { useEffect, useRef, useState } from 'react'
import style from "../styles/varient.module.css"
import ImageSlider from '../components/carousel'
import Color from "../components/color"
import Faq from '../components/faq';
import Image from 'next/image';
import logo from "../public/images/logo.png"
import bow from "../public/images/bow.svg"
import advert from "../public/images/advert.png"
import star from "../public/images/star.svg"
import color from "../public/images/color.svg"
import image from "../public/images/image.png"
import down from "../public/images/down.svg"
import arai from "../public/images/arai.svg"
import engine from "../public/images/engine.svg"
import fuel from "../public/images/fuel.svg"
import seat from "../public/images/seat.svg"
import transmission from "../public/images/transmission.svg"
import body from "../public/images/body.svg"
import advert2 from "../public/images/advert2.png"
import model_car from "../public/images/model_car.png"
import price_tag from "../public/images/price_tag.svg"
import model_yt from "../public/images/model_yt.png"
import car1 from "../public/images/car1.png"
import car2 from "../public/images/car2.png"
import car3 from "../public/images/car3.png"
import compare from "../public/images/compare.svg"
import edit from "../public/images/edit.svg"
import car5 from "../public/images/car5.png"
import car4 from "../public/images/car4.png"
import compare_white from "../public/images/compare-white.svg"
import brochure from "../public/images/brocher.jpg"
import brochure2 from "../public/images/brochure.svg"
import download from "../public/images/download.svg"
import thumbs_up from "../public/images/thumbs_up.svg"
import thumbs_down from "../public/images/thumbs_down.svg"
import connect from "../public/images/connect.svg"
import promo from "../public/images/promo.png"
import last_adv from "../public/images/last_adv.png"
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import City_Modal from '../components/city_modal';
import Version_Modal from '../components/version_modal';
import { ChevronRight } from '@mui/icons-material';
import DoneIcon from '@mui/icons-material/Done';
import Right from '../components/right';
import Rating_Model from '../components/rating_modal';
import Emi_Modal from '../components/emi';






const Model = () => {

    const [update, setUpdate] = useState(false)
    const [show, setShow] = useState(false)
    const top_bar = useRef(null)
    const top_shift = useRef(null)

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            top_bar.current.classList.add(style.scrolling);
            top_shift.current.classList.add("mt-[-4rem]")
        } else {
            top_bar.current.classList.remove(style.scrolling);
            top_shift.current.classList.remove("mt-[-4rem]")
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
                                <li className='font-semibold text-[#484848]'>Aura <Image className='inline' src={edit} alt='edit' /></li>
                                <li className='hover:text-[#09809A] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold text-[#484848]'>Features & Specifications</li>
                                <li className='hover:text-[#09809A] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold text-[#484848]'>Variant</li>
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
                        <div className='h-[2rem] md:h-auto'>
                            <ul ref={top_shift} className={`flex ${style["top-top"]} fixed top-top z-[9999] bg-white w-full md:hidden whitespace-nowrap overflow-x-scroll md:whitespace-normal space-x-8 md:space-x-[5rem] text-[16px] border-y border-[#E1E1E1] font-normal tracking-[-0.32px] px-2`}>
                                <li className='font-semibold text-[#484848] text-[14px] my-2'>Aura <Image className='inline' src={edit} alt='edit' /></li>
                                <li className='hover:text-[#09809A] text-[14px] text-[#484848] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold my-2'>Overview</li>
                                <li className='hover:text-[#09809A] text-[14px] text-[#484848] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold my-2'>Variant</li>
                                <li className='hover:text-[#09809A] text-[14px] text-[#484848] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold my-2'>Colors</li>
                                <li className='hover:text-[#09809A] text-[14px] text-[#484848] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold my-2'>Performance [mileage]</li>
                                <li className='hover:text-[#09809A] text-[14px] text-[#484848] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold my-2'>Similar Car</li>
                                <li className='hover:text-[#09809A] text-[14px] text-[#484848] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold my-2'>FAQ&apos;s</li>
                                <li className='hover:text-[#09809A] text-[14px] text-[#484848] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold my-2'>Download Brochure</li>
                                <li className='my-1.5'>
                                    <button className='text-white text-[14px] px-4 bg-[#CE4327] font-semibold pb-1 rounded-md'>Get Offer</button>
                                </li>
                            </ul>
                        </div>
                        {/* <Image className='mx-auto' src={advert} alt="" /> */}
                        <div className='mt-[2rem] mb-[1rem]'>
                            <h1 className='text-[24px] text-[#484848] font-semibold tracking-[-0.4px]'>Hyundai Aura <Image className='inline' src={edit} alt='edit' /> </h1>
                            <div className='flex py-3 justify-between'>
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
                                        <p className='text-[11px] font-normal text-[#484848] md:text-base'>17 Ratings & 25 Reviews</p>
                                        <p className='mt-[-4px] md:mt-0'>|</p>
                                        <Rating_Model />
                                    </div>
                                </div>
                                <div className=''>
                                    <input className='mx-1' type="checkbox"></input>
                                    <span className='text-[#484848] md:text-[16px] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
                                </div>
                            </div>
                            <div className='md:hidden'>
                                <span className='text-[22px] text-[#484848] font-semibold tracking-[-0.48px]'>₹ 7.51 Lakh - ₹ 8.95 Lakh</span>
                                <p className='text-[12px] text-[#6F6F6F] space-x-2'>Ex-showroom price in <span className='text-[#09809A] underline'>New Delhi</span> <span>|</span> <span className='text-[#CE4327]'>Get on road price</span></p>
                            </div>
                            {/* <hr className='border-t-1 border-[#E1E1E1]' /> */}
                        </div>

                        <ul className='whitespace-nowrap hidden md:flex md:whitespace-normal md:overflow-x-auto md:mx-0 overflow-x-scroll mx-[1rem] my-[1rem] space-x-5 md:space-x-[5rem] text-[16px] font-normal tracking-[-0.32px]'>
                            <li className='font-semibold text-[#484848]'>Aura  <Image className='inline' src={edit} alt='edit' /></li>
                            <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Overview</li>
                            <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Variant</li>
                            <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Colors</li>
                            <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Performance [mileage]</li>
                            <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Similar Car</li>
                            <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>FAQ&apos;s</li>
                            <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Download Brochure</li>
                        </ul>
                        <hr className='border-t-1 border-[#E1E1E1]' />
                        <div className='md:flex xl:space-x-[6rem] my-[1rem] py-[1rem] md:border md:border-[#E1E1E1]'>
                            <div className='md:w-[50%] text-center'>
                                {/* <ImageSlider /> */}
                                <span className='mx-[2rem] text-[14px] font-normal tracking-[-0.28px] text-[#09809A]'><Image className='inline' src={color} alt="" /> Colors</span>
                                <span className='mx-[2rem] text-[14px] font-normal tracking-[-0.28px] text-[#09809A]'><Image className='inline' src={image} alt="" /> Images</span>
                            </div>
                            <div className='bg-[#f4f4f4] md:hidden mt-[1rem] text-[#6F6F6F] p-3'>
                                <p>Hyundai Aura Prices: The price of the Hyundai Aura in New Delhi is Rs 6.33 Lakh (Ex-showroom). To know more about the Aura Images, Reviews, Offers & other details, download the Get On road price App. Hyundai Aura mileage : It returns a certified mileage of . <span className={`${update ? null : "hidden"}`}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, repellat tempore quasi doloribus possimus laudantium. Exercitationem commodi nobis dolore assumenda neque repudiandae, sit dolores, quae eaque soluta maiores! Corporis quis ipsa perferendis, repellendus odio eligendi accusamus impedit quia animi eius.
                                </span></p>

                                <div onClick={() => update ? setUpdate(false) : setUpdate(true)} className='text-right cursor-pointer pt-[1rem]'>
                                    <span className='mx-[1rem] text-[#09809A] text-[16px] font-normal'>Read More <Image className='inline' src={down} alt="" /></span>
                                </div>
                            </div>
                            <div className='md:w-[40%]'>
                                <div className='hidden md:flex space-x-1'>
                                    <Version_Modal />
                                    <City_Modal />
                                </div>
                                <div>
                                    <div className='hidden md:block'>
                                        <div className='pt-[1.5rem] space-x-[1.6rem]'>
                                            <span className='text-[22px] text-[#484848] font-semibold tracking-[-0.48px]'>₹ 7.51 Lakh - ₹ 8.95 Lakh</span>
                                            <span className='text-[16px] text-[#CE4327] font-semibold underline'>View Price Breakup</span>
                                        </div>
                                        <span className='text-[14px] font-thin tracking-[-0.28px] text-[#484848]'>On-Road Price New Delhi</span>
                                    </div>
                                    <div className='flex justify-between w-100 mt-[2rem] md:mt-0 bg-[#F4F4F4] py-[0.5rem]'>
                                        <div className='px-2 pb-1'>
                                            <p className='text-[16px] text-[#484848] font-medium pb-0.5 tracking-[-0.28px]'>EMI Starts  at 12550/Month</p>
                                            <Emi_Modal />
                                        </div>
                                        <div>
                                            <button className='px-[1rem] hover:bg-[#09809A] bg-[#09809A] py-[0.1rem] mx-[1rem] mt-[0.5rem] rounded-[5px] text-white text-[14px] font-medium tracking-[-0.24px]'>View Offers</button>
                                        </div>
                                    </div>
                                    <button className='text-[14px] hidden md:block my-[1rem] py-[0.5rem] rounded-[2px] bg-[#09809A] font-medium tracking-[-0.28px] text-white w-full md:w-3/5'>Get The Best Deal</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='md:hidden'>
                        <div className='md:w-[74%]'>
                            <div className='md:mb-[2rem] w-full'>
                                <h2 className='md:text-[24px] hidden md:block text-[#484848] text-[18px] font-semibold tracking-[-0.48px]'>Hyundai Aura Latest Updates</h2>
                                <div className='bg-[#f4f4f4] hidden md:block text-[#6F6F6F] p-3'>
                                    <p>Hyundai Aura Prices: The price of the Hyundai Aura in New Delhi is Rs 6.33 Lakh (Ex-showroom). To know more about the Aura Images, Reviews, Offers & other details, download the Get On road price App. Hyundai Aura mileage : It returns a certified mileage of . <span className={`${update ? null : "hidden"}`}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, repellat tempore quasi doloribus possimus laudantium. Exercitationem commodi nobis dolore assumenda neque repudiandae, sit dolores, quae eaque soluta maiores! Corporis quis ipsa perferendis, repellendus odio eligendi accusamus impedit quia animi eius.
                                    </span></p>

                                    <div onClick={() => update ? setUpdate(false) : setUpdate(true)} className='text-right cursor-pointer pt-[1rem]'>
                                        <span className='mx-[1rem] text-[#09809A] text-[16px] font-normal'>Read More <Image className='inline' src={down} alt="" /></span>
                                    </div>
                                </div>
                                <hr className='border-t-1 hidden md:block border-[#E1E1E1]' />

                                <p className='text-[18px] font-semibold pb-2 text-[#484848]'>Hyundai Aura Review</p>
                                <div className='flex md:hidden space-x-[1rem] text-[14px] font-light'>
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

                                <div className='py-5'>
                                    <div className='w-full rounded-[2px] flex justify-between text-[#484848] py-2 md:px-4'>
                                        <h2 className='text-[18px] font-semibold tracking-[-0.32px]'>Key Specs of Hyundai Aura </h2>
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
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>1000-1500 CC</p>
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
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>21-24 /kmph</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Sponsored Adv  */}
                            <div>
                                <p className='text-[12px] text-[#484848] mb-2 underline'>Sponsored</p>
                                <div className='w-full bg-[#E1E1E1] h-[15rem]'>

                                </div>
                            </div>


                            {/* Car Versions Listing  */}

                            <div className='lg:w-full'>
                                <h2 className='text-[18px] text-[#484848] my-4 font-semibold tracking-[-0.48px]'>Hyundai Aura Versions 2023</h2>
                                <div className='flex md:hidden space-x-1'>
                                    <Version_Modal />
                                    <City_Modal />
                                </div>
                                <div className='bg-[#f4f4f4] md:hidden mt-4 text-[#6F6F6F] p-3'>
                                    <p>Hyundai Aura Prices: The price of the Hyundai Aura in New Delhi is Rs 6.33 Lakh (Ex-showroom). To know more about the Aura Images, Reviews, Offers & other details, download the Get On road price App. Hyundai Aura mileage : It returns a certified mileage of . <span className={`${update ? null : "hidden"}`}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, repellat tempore quasi doloribus possimus laudantium. Exercitationem commodi nobis dolore assumenda neque repudiandae, sit dolores, quae eaque soluta maiores! Corporis quis ipsa perferendis, repellendus odio eligendi accusamus impedit quia animi eius.
                                    </span></p>

                                    <div onClick={() => update ? setUpdate(false) : setUpdate(true)} className='text-right cursor-pointer pt-[1rem]'>
                                        <span className='mx-[1rem] text-[#09809A] text-[16px] font-normal'>Read More <Image className='inline' src={down} alt="" /></span>
                                    </div>
                                </div>
                                <div>
                                    <ul className='flex space-x-8 px-4 py-3 text-[#484848] font-semibold'>
                                        <li className='hover:text-[#09809A] hover:border-b-[3px] border-[#09809A] cursor-pointer'>Petrol</li>
                                        <li className='hover:text-[#09809A] hover:border-b-[3px] border-[#09809A] cursor-pointer'>CNG</li>
                                        <li className='hover:text-[#09809A] hover:border-b-[3px] border-[#09809A] cursor-pointer'>Manual</li>
                                        <li className='hover:text-[#09809A] hover:border-b-[3px] border-[#09809A] cursor-pointer'>Automatic</li>
                                    </ul>
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
                                                <div className='pb-[1rem]'>
                                                    <input className='mx-1' type="checkbox"></input>
                                                    <span className='text-[#6F6F6F] text-[14px] font-medium tracking-[-0.32px]'>Compare</span>
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
                                                <div className='pb-[1rem]'>
                                                    <input className='mx-1' type="checkbox"></input>
                                                    <span className='text-[#6F6F6F] text-[14px] font-medium tracking-[-0.32px]'>Compare</span>
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
                                                <div className='pb-[1rem]'>
                                                    <input className='mx-1' type="checkbox"></input>
                                                    <span className='text-[#6F6F6F] text-[14px] font-medium tracking-[-0.32px]'>Compare</span>
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
                                                <div className='pb-[1rem]'>
                                                    <input className='mx-1' type="checkbox"></input>
                                                    <span className='text-[#6F6F6F] text-[14px] font-medium tracking-[-0.32px]'>Compare</span>
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
                                                <div className='pb-[1rem]'>
                                                    <input className='mx-1' type="checkbox"></input>
                                                    <span className='text-[#6F6F6F] text-[14px] font-medium tracking-[-0.32px]'>Compare</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='text-center my-4'>
                                        <button className='border hover:border-[#09809A] border-[#09809A] px-16 rounded-md'><span className='text-[12px] font-semibold tracking-[-0.24px] text-[#09809A]'>
                                            View All Versions
                                        </span></button>
                                    </div>
                                </div>
                            </div>


                            {/* Sponsored Adv  */}
                            <div>
                                <p className='text-[12px] text-[#484848] mb-2 underline'>Sponsored</p>
                                <div className='w-full bg-[#E1E1E1] h-[15rem]'>

                                </div>
                            </div>


                            {/* Color Listing  */}
                            <div className='lg:w-full md:mt-[6rem] mb-[1rem] md:mb-[3rem]'>
                                <h2 className='text-[18px] text-[#484848] mt-4 mb-2 font-semibold tracking-[-0.48px]'>Hyundai Aura Colors</h2>
                                <div className='border-[1px] border-[#C6C6C6]'>
                                    <Color />
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

                            {/* Mileage Lisitin  */}
                            <div className='md:mb-[2rem] w-full'>
                                <h2 className='text-[18px] mt-4 mb-2 text-[#484848] font-semibold tracking-[-0.48px]'>Hyundai Aura Mileage</h2>
                                <div className='bg-[#f4f4f4] text-[#6F6F6F]  p-3'>
                                    <p>Hyundai Aura Prices: The price of the Hyundai Aura in New Delhi is Rs 6.33 Lakh (Ex-showroom). To know more about the Aura Images, Reviews, Offers & other details, download the Get On road price App. Hyundai Aura mileage : It returns a certified mileage of . <span className={`${show ? null : "hidden"}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, nobis culpa nesciunt temporibus vel consequatur consectetur, natus ab magnam adipisci incidunt nulla dolor et. Explicabo quos omnis magni voluptatum cum natus tenetur similique, magnam itaque aspernatur, harum dolor nesciunt vitae.</span> </p>

                                    <div onClick={() => show ? setShow(false) : setShow(true)} className='text-right pt-[1rem] cursor-pointer'>
                                        <span className='mx-[1rem] text-[#09809A] text-[16px] font-normal'>Read {show ? "Less" : "More"} <Image className='inline' src={down} alt="" /></span>
                                    </div>
                                </div>
                                <hr className='border-t-1 border-[#E1E1E1]' />

                                <div className='my-6 md:w-full'>
                                    <ul className='bg-[#f4f4f4] flex justify-between py-3 mb-3 px-4'>
                                        <li className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px]'>Varient</li>
                                        <li className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px]'>Transmission</li>
                                        <li className='pr-2 text-[16px] text-[#484848] font-semibold tracking-[-0.32px]'>Mileage</li>
                                    </ul>
                                    <ul className='border px-4 border-[#C6C6C6] flex justify-between mb-3'>
                                        <li className='font-normal py-2'>
                                            <p className='text-[#484848] font-semibold text-[16px]'>CNG</p>
                                            <p className='text-[13px] text-[#6F6F6F]'>1197 cc</p>
                                        </li>
                                        <li className=' pt-6 text-[16px] text-[#6F6F6F] leading-[5px] tracking-[-0.32px]'>
                                            Manual
                                        </li>
                                        <li className=' pt-4 text-[16px] text-[#484848] font-semibold tracking-[-0.2px]'>
                                            28.0 KMPL
                                        </li>
                                    </ul>
                                    <ul className='border px-4 border-[#C6C6C6] flex justify-between mb-3'>
                                        <li className='font-normal py-2'>
                                            <p className='text-[#484848] font-semibold text-[16px]'>CNG</p>
                                            <p className='text-[13px] text-[#6F6F6F]'>1197 cc</p>
                                        </li>
                                        <li className=' pt-6 text-[16px] text-[#6F6F6F] leading-[5px] tracking-[-0.32px]'>
                                            Manual
                                        </li>
                                        <li className=' pt-4 text-[16px] text-[#484848] font-semibold tracking-[-0.2px]'>
                                            28.0 KMPL
                                        </li>
                                    </ul>
                                    <ul className='border px-4 border-[#C6C6C6] flex justify-between mb-3'>
                                        <li className='font-normal py-2'>
                                            <p className='text-[#484848] font-semibold text-[16px]'>CNG</p>
                                            <p className='text-[13px] text-[#6F6F6F]'>1197 cc</p>
                                        </li>
                                        <li className=' pt-6 text-[16px] ml-[15px] text-[#6F6F6F] leading-[5px] tracking-[-0.32px]'>
                                            Automatic
                                        </li>
                                        <li className=' pt-4 text-[16px] text-[#484848] font-semibold tracking-[-0.2px]'>
                                            28.0 KMPL
                                        </li>
                                    </ul>
                                </div>
                            </div>


                            {/* City Prices  */}
                            <div className='my-5 md:my-10 md:w-full'>
                                <h2 className='md:text-[24px] text-[18px] text-[#484848] mx-2 md:mx-0 font-semibold tracking-[-0.48px]'>Aura Price in cities near New Delhi</h2>
                                <table className='w-full my-2 md:my-5'>
                                    <tr className='bg-[#f4f4f4]'>
                                        <th className='text-left p-2 text-[16px] font-normal tracking-[-0.32px]'>City</th>
                                        <th className='text-right mx-4 py-2 px-2 text-[16px] font-normal tracking-[-0.32px]'>On Road Price</th>
                                    </tr>
                                    <tr className='border border-[#C6C6C6]'>
                                        <td className='text-[16px] text-[#09809A] font-normal p-2'>Noida</td>
                                        <td className='text-right p-2'>
                                            <p className='text-[16px] pb-1 leading-[5px] pt-2 font-semibold tracking-[-0.32px]'>₹ 6.09 Lakh</p>
                                            <span className='text-[12px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</span>
                                        </td>
                                    </tr>
                                    <tr className='border border-[#C6C6C6]'>
                                        <td className='text-[16px] text-[#09809A] font-normal p-2'>Gaziabad</td>
                                        <td className='text-right p-2'>
                                            <p className='text-[16px] pb-1 leading-[5px] pt-2 font-semibold tracking-[-0.32px]'>₹ 6.09 Lakh</p>
                                            <span className='text-[12px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</span>
                                        </td>
                                    </tr>
                                    <tr className='border border-[#C6C6C6]'>
                                        <td className='text-[16px] text-[#09809A] font-normal p-2'>Gurugram</td>
                                        <td className='text-right p-2'>
                                            <p className='text-[16px] pb-1 leading-[5px] pt-2 font-semibold tracking-[-0.32px]'>₹ 6.09 Lakh</p>
                                            <span className='text-[12px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</span>
                                        </td>
                                    </tr>
                                    <tr className='border border-[#C6C6C6]'>
                                        <td className='text-[16px] text-[#09809A] font-normal p-2'>Haridwar</td>
                                        <td className='text-right p-2'>
                                            <p className='text-[16px] pb-1 leading-[5px] pt-2 font-semibold tracking-[-0.32px]'>₹ 6.09 Lakh</p>
                                            <span className='text-[12px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</span>
                                        </td>
                                    </tr>
                                </table>
                            </div>


                            {/* Similar Cars  */}

                            <div className='lg:flex'>
                                <div className='lg:w-full md:mx-0'>
                                    <h2 className='text-[18px] text-[#484848] font-semibold tracking-[-0.48px]'>Similar Cars</h2>
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

                            {/* Dream Car  */}
                            <div className='w-full mt-3 bg-[#065465]'>
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


                            {/* Compare Cars  */}
                            <div className='md:my-10 my-5'>
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
                                                <button className='bg-[#09809A] w-full py-3 text-white text-[14px] font-normal'><Image className='inline mr-2' src={compare_white} alt="" />Add to Compare</button>
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
                                                <button className='bg-[#09809A] w-full py-3 text-white text-[14px] font-normal'><Image className='inline mr-2' src={compare_white} alt="" />Add to Compare</button>
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
                                                <button className='bg-[#09809A] w-full py-3 text-white text-[14px] font-normal'><Image className='inline mr-2' src={compare_white} alt="" />Add to Compare</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Sponsored Adv  */}
                            <div>
                                <p className='text-[12px] text-[#484848] mb-2 underline'>Sponsored</p>
                                <div className='w-full bg-[#E1E1E1] h-[15rem]'>

                                </div>
                            </div>


                            {/* Reviews Section  */}
                            <div className='my-10'>
                                <h2 className='text-[18px] font-semibold text-[#484848] pb-2 tracking-[-0.48px]'>Aura User Reviews</h2>
                                <div className='md:w-full border border-[#C6C6C6]'>
                                    <p className='text-[16px] font-normal text-[#484848] tracking-[-0.32px] m-3'>Hyundai Aura </p>
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


                            {/* Pros & Cons  */}
                            <div className='lg:w-full'>
                                <h2 className='text-[18px] text-[#484848] font-semibold tracking-[-0.48px] mb-8'>Hyundai Aura Expert Tips</h2>
                                <div className='w-full border border-[#09809A] rounded-lg p-10 relative'>
                                    <div className='absolute top-[-26px] left-[46%]'>
                                        <div className="w-[50px] h-[50px] relative bg-white rounded-full border-2 border-[#09809A]">
                                            <Image className='absolute top-[14%] left-[20%]' src={thumbs_up} />
                                        </div>
                                    </div>
                                    <ul className='space-y-5 pb-8' style={{ listStyle: "initial" }}>
                                        <li>Recently face lifted - Refreshed styling - inside and out, more features, premium quality</li>
                                        <li>Spacious and airy - As per compact sedan standard, further aided by large seats/windows</li>
                                        <li>Spacious and airy - As per compact sedan standard, further aided by large seats/windows</li>
                                    </ul>
                                </div>

                                <div className='w-full border border-[#CE4327] rounded-lg p-10 relative mt-20 mb-10'>
                                    <div className='absolute top-[-26px] left-[46%]'>
                                        <div className="w-[50px] h-[50px] relative bg-white rounded-full border-2 border-[#CE4327]">
                                            <Image className='absolute top-[24%] left-[20%]' src={thumbs_down} />
                                        </div>
                                    </div>
                                    <ul className='space-y-5 pb-8' style={{ listStyle: "initial" }}>
                                        <li>Recently face lifted - Refreshed styling - inside and out, more features, premium quality</li>
                                        <li>Spacious and airy - As per compact sedan standard, further aided by large seats/windows</li>
                                        <li>Spacious and airy - As per compact sedan standard, further aided by large seats/windows</li>
                                    </ul>
                                </div>
                            </div>


                            {/* FAQ Section  */}
                            <div className='my-10'>
                                <h2 className='text-[18px] font-semibold text-[#484848] px-3 tracking-[-0.48px]'>FAQ&apos;s</h2>
                                <div className='my-3 md:w-[65rem]'>
                                    <Faq />
                                </div>
                            </div>



                            {/* Youtube Section */}
                            <div className='lg:w-full my-4'>
                                <h2 className='font-semibold text-[#484848] mb-2 text-[18px]'>Hyundai Aura Videos</h2>
                                <div className='w-full flex whitespace-nowrap overflow-x-scroll space-x-2'>
                                    <Image src={model_yt} />
                                    <Image src={model_yt} />
                                    <Image src={model_yt} />
                                </div>
                            </div>


                        </div>
                    </div>


                    <div className='md:flex hidden'>
                        <div className='md:w-[74%]'>
                            <div className='mb-[1rem] w-full'>
                                <h2 className='md:text-[24px] py-2 text-[18px] text-[#484848] font-semibold tracking-[-0.48px]'>Hyundai Aura Latest Updates</h2>
                                <div className='bg-[#f4f4f4] text-[#6F6F6F]  p-3'>
                                    <p>Hyundai Aura Prices: The price of the Hyundai Aura in New Delhi is Rs 6.33 Lakh (Ex-showroom). To know more about the Aura Images, Reviews, Offers & other details, download the Get On road price App. Hyundai Aura mileage : It returns a certified mileage of . <span className={`${show ? null : "hidden"}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, nobis culpa nesciunt temporibus vel consequatur consectetur, natus ab magnam adipisci incidunt nulla dolor et. Explicabo quos omnis magni voluptatum cum natus tenetur similique, magnam itaque aspernatur, harum dolor nesciunt vitae.</span> </p>

                                    <div onClick={() => show ? setShow(false) : setShow(true)} className='text-right pt-[1rem] cursor-pointer'>
                                        <span className='mx-[1rem] text-[#09809A] text-[16px] font-normal'>Read {show ? "Less" : "More"} <Image className='inline' src={down} alt="" /></span>
                                    </div>
                                </div>
                                <hr className='border-t-1 border-[#E1E1E1]' />
                                <div className='py-5'>
                                    <div className='w-full rounded-[2px] flex justify-between font-semibold text-[#484848] py-2'>
                                        <p className='md:text-[24px] text-[12px] font-semibold tracking-[-0.32px]'>Key Specs of Hyundai Aura </p>
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
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>1000-1500 CC</p>
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
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>21-24 /kmph</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='pt-[2rem]'>
                                        <Image src={advert2} alt="" />
                                    </div>
                                </div>
                            </div>





                            {/* Car Versions Listing  */}

                            <div className='lg:w-full'>
                                <p className='lg:text-[24px] text-[#484848] text-[16px] my-4 font-semibold tracking-[-0.48px]'>Hyundai Aura Versions 2023</p>
                                <div>
                                    <ul className='flex space-x-8 px-4 py-3 border-t text-[#484848] border-x font-semibold border-[#C6C6C6]'>
                                        <li className='hover:text-[#09809A] hover:border-b-[3px] border-[#09809A] cursor-pointer'>Petrol</li>
                                        <li className='hover:text-[#09809A] hover:border-b-[3px] border-[#09809A] cursor-pointer'>CNG</li>
                                        <li className='hover:text-[#09809A] hover:border-b-[3px] border-[#09809A] cursor-pointer'>Manual</li>
                                        <li className='hover:text-[#09809A] hover:border-b-[3px] border-[#09809A] cursor-pointer'>Automatic</li>
                                    </ul>
                                    <div className='flex justify-between bg-[#F4F4F4] py-3 px-4 border-t border-x border-[#C6C6C6]'>
                                        <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px]'>Versions</p>
                                        <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px] ml-[3.5rem]'>On Road Price</p>
                                        <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px]'>Price Breakup</p>
                                    </div>

                                    {/* Versions  */}
                                    <div>
                                        <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                                            <div>
                                                <p className='text-[18px] mb-1 text-[#484848] font-semibold tracking-[-0.36px]'>Aura E</p>
                                                <span className='text-[14px] text-[#6F6F6F] font-normal tracking-[-0.28px]'>1197 cc, Manual, Petrol </span>
                                            </div>
                                            <div>
                                                <p className='text-[18px] text-[#484848] font-semibold tracking-[-0.36px]'>₹ 6.09 Lakh</p>
                                                <div className='pb-[1rem]'>
                                                    <input className='mx-1' type="checkbox"></input>
                                                    <span className='text-[#484848] md:text-[16px] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-[16px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                                            <div>
                                                <p className='text-[18px] mb-1 text-[#484848] font-semibold tracking-[-0.36px]'>Aura S</p>
                                                <span className='text-[14px] text-[#6F6F6F] font-normal tracking-[-0.28px]'>1197 cc, Manual, Petrol </span>
                                            </div>
                                            <div>
                                                <p className='text-[18px] text-[#484848] font-semibold tracking-[-0.36px]'>₹ 7.18 Lakh</p>
                                                <div className='pb-[1rem]'>
                                                    <input className='mx-1' type="checkbox"></input>
                                                    <span className='text-[#484848] md:text-[16px] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-[16px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                                            <div>
                                                <p className='text-[18px] mb-1 text-[#484848] font-semibold tracking-[-0.36px]'>Aura SX</p>
                                                <span className='text-[14px] text-[#6F6F6F] font-normal tracking-[-0.28px]'>1197 cc, Manual, Petrol </span>
                                            </div>
                                            <div>
                                                <p className='text-[18px] text-[#484848] font-semibold tracking-[-0.36px]'>₹ 7.95 Lakh</p>
                                                <div className='pb-[1rem]'>
                                                    <input className='mx-1' type="checkbox"></input>
                                                    <span className='text-[#484848] md:text-[16px] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-[16px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                                            <div>
                                                <p className='text-[18px] mb-1 text-[#484848] font-semibold tracking-[-0.36px]'>Aura S CNG</p>
                                                <span className='text-[14px] text-[#6F6F6F] font-normal tracking-[-0.28px]'>1197 cc, Manual, Petrol </span>
                                            </div>
                                            <div>
                                                <p className='text-[18px] text-[#484848] font-semibold tracking-[-0.36px]'>₹ 8.13 Lakh</p>
                                                <div className='pb-[1rem]'>
                                                    <input className='mx-1' type="checkbox"></input>
                                                    <span className='text-[#484848] md:text-[16px] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-[16px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                                            <div>
                                                <p className='text-[18px] mb-1 text-[#484848] font-semibold tracking-[-0.36px]'>Aura SX Option</p>
                                                <span className='text-[14px] text-[#6F6F6F] font-normal tracking-[-0.28px]'>1197 cc, Manual, Petrol </span>
                                            </div>
                                            <div>
                                                <p className='text-[18px] text-[#484848] font-semibold tracking-[-0.36px]'>₹ 8.61 Lakh</p>
                                                <div className='pb-[1rem]'>
                                                    <input className='mx-1' type="checkbox"></input>
                                                    <span className='text-[#484848] md:text-[16px] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
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
                            <div className='lg:w-full mt-[2rem] mb-[3rem]'>
                                <p className='lg:text-[24px] text-[#484848] text-[16px] my-4 font-semibold tracking-[-0.48px]'>Hyundai Aura Colors</p>
                                <div className='border-[1px] border-[#C6C6C6]'>
                                    <Color />
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



                            {/* Mileage Lisitin  */}
                            <div className='mb-[2rem] w-full'>
                                <h2 className='md:text-[24px] text-[18px] text-[#484848] font-semibold tracking-[-0.48px]'>Hyundai Aura Mileage</h2>
                                <div className='bg-[#f4f4f4] text-[#6F6F6F]  p-3'>
                                    <p>Hyundai Aura Prices: The price of the Hyundai Aura in New Delhi is Rs 6.33 Lakh (Ex-showroom). To know more about the Aura Images, Reviews, Offers & other details, download the Get On road price App. Hyundai Aura mileage : It returns a certified mileage of . <span className={`${show ? null : "hidden"}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, nobis culpa nesciunt temporibus vel consequatur consectetur, natus ab magnam adipisci incidunt nulla dolor et. Explicabo quos omnis magni voluptatum cum natus tenetur similique, magnam itaque aspernatur, harum dolor nesciunt vitae.</span> </p>

                                    <div onClick={() => show ? setShow(false) : setShow(true)} className='text-right pt-[1rem] cursor-pointer'>
                                        <span className='mx-[1rem] text-[#09809A] text-[16px] font-normal'>Read {show ? "Less" : "More"} <Image className='inline' src={down} alt="" /></span>
                                    </div>
                                </div>
                                <hr className='border-t-1 border-[#E1E1E1]' />

                                <div className='my-2 md:w-full'>
                                    <ul className='bg-[#09809A] flex justify-between py-3 mb-3 px-4'>
                                        <li className='text-white text-[16px] font-semibold tracking-[-0.32px]'>Varient</li>
                                        <li className='text-white text-[16px] font-semibold tracking-[-0.32px]'>Transmission</li>
                                        <li className='text-white pr-2 text-[16px] font-semibold tracking-[-0.32px]'>Mileage</li>
                                    </ul>
                                    <ul className='border px-4 border-[#C6C6C6] flex justify-between mb-3'>
                                        <li className='font-normal py-2'>
                                            <p className='text-[#484848] font-semibold text-[18px]'>CNG</p>
                                            <p className='text-[14px] text-[#6F6F6F]'>1197 cc</p>
                                        </li>
                                        <li className=' pt-6 text-[17px] text-[#6F6F6F] leading-[5px] tracking-[-0.32px]'>
                                            Manual
                                        </li>
                                        <li className=' pt-4 text-[18px] text-[#484848] font-semibold tracking-[-0.2px]'>
                                            28.0 KMPL
                                        </li>
                                    </ul>
                                    <ul className='border px-4 border-[#C6C6C6] flex justify-between mb-3'>
                                        <li className='font-normal py-2'>
                                            <p className='text-[#484848] font-semibold text-[18px]'>CNG</p>
                                            <p className='text-[14px] text-[#6F6F6F]'>1197 cc</p>
                                        </li>
                                        <li className=' pt-6 text-[17px] text-[#6F6F6F] leading-[5px] tracking-[-0.32px]'>
                                            Manual
                                        </li>
                                        <li className=' pt-4 text-[18px] text-[#484848] font-semibold tracking-[-0.2px]'>
                                            28.0 KMPL
                                        </li>
                                    </ul>
                                    <ul className='border px-4 border-[#C6C6C6] flex justify-between mb-3'>
                                        <li className='font-normal py-2'>
                                            <p className='text-[#484848] font-semibold text-[18px]'>CNG</p>
                                            <p className='text-[14px] text-[#6F6F6F]'>1197 cc</p>
                                        </li>
                                        <li className=' pt-6 text-[17px] ml-[15px] text-[#6F6F6F] leading-[5px] tracking-[-0.32px]'>
                                            Automatic
                                        </li>
                                        <li className=' pt-4 text-[18px] text-[#484848] font-semibold tracking-[-0.2px]'>
                                            28.0 KMPL
                                        </li>
                                    </ul>
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


                            {/* Advert Model  */}
                            <div className='lg:w-full flex space-x-2 my-4'>
                                <div className='w-1/2'>
                                    <div className='w-full bg-[#09809A] px-5 max-h-fit h-fit'>
                                        <p className='text-white text-[32px] font-bold'>Hyundai Aura Brochure</p>
                                        <p className='text-white text-[22px] w-3/4'>Download the brochure to view detailed price, specs, and features</p>
                                        <div className='flex space-x-6 pt-4'>
                                            <p className='text-white text-[22px] mt-[3rem]'>Download Brochure <Image width={22} className='inline' src={download} /></p>
                                            <Image src={model_car} />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-1/2'>
                                    <div className='w-full bg-[#F4F4F4] px-5 max-h-fit h-fit'>
                                        <p className='text-3xl font-semibold pt-2'>Contact Hyundai Dealer</p>
                                        <p className='text-[22px] w-4/5 pt-2'>Get in touch for the best buying option from your authorized dealer</p>
                                        <div className='pt-6'>
                                            <Image className='inline' src={price_tag} />
                                            <button className='bg-black py-2 w-3/4 rounded-md mx-4 text-white'>Locate the dealer near you</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* City Prices  */}
                            {/* <div className='my-10 md:w-full'>
                                <p className='md:text-[24px] text-[16px] mx-2 md:mx-0 font-semibold tracking-[-0.48px]'>Aura 1.2 Petrol Price in cities near New Delhi</p>
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
                                <p className='text-[24px] font-semibold text-[#484848] pb-2 tracking-[-0.48px]'>Aura User Reviews</p>
                                <div className='md:w-full border border-[#C6C6C6]'>
                                    <p className='text-[16px] font-normal text-[#484848] tracking-[-0.32px] m-3'>Hyundai Aura E 1.2 Petrol</p>
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


                            {/* Pros & Cons  */}
                            <div className='lg:w-full'>
                                <h2 className='text-[24px] font-semibold text-[#484848] tracking-[-0.48px] mb-8'>Hyundai Aura Expert Tips</h2>
                                <div className='w-full border border-[#09809A] rounded-lg p-10 relative'>
                                    <div className='absolute top-[-26px] left-[46%]'>
                                        <div className="w-[50px] h-[50px] relative bg-white rounded-full border-2 border-[#09809A]">
                                            <Image className='absolute top-[14%] left-[20%]' src={thumbs_up} />
                                        </div>
                                    </div>
                                    <ul className='space-y-5 pb-8' style={{ listStyle: "initial" }}>
                                        <li>Recently face lifted - Refreshed styling - inside and out, more features, premium quality</li>
                                        <li>Spacious and airy - As per compact sedan standard, further aided by large seats/windows</li>
                                        <li>Spacious and airy - As per compact sedan standard, further aided by large seats/windows</li>
                                    </ul>
                                </div>

                                <div className='w-full border border-[#CE4327] rounded-lg p-10 relative mt-20 mb-10'>
                                    <div className='absolute top-[-26px] left-[46%]'>
                                        <div className="w-[50px] h-[50px] relative bg-white rounded-full border-2 border-[#CE4327]">
                                            <Image className='absolute top-[24%] left-[20%]' src={thumbs_down} />
                                        </div>
                                    </div>
                                    <ul className='space-y-5 pb-8' style={{ listStyle: "initial" }}>
                                        <li>Recently face lifted - Refreshed styling - inside and out, more features, premium quality</li>
                                        <li>Spacious and airy - As per compact sedan standard, further aided by large seats/windows</li>
                                        <li>Spacious and airy - As per compact sedan standard, further aided by large seats/windows</li>
                                    </ul>
                                </div>
                            </div>


                            {/* FAQ Section  */}
                            <div className='my-10'>
                                <h2 className='text-[24px] text-[#484848] font-semibold tracking-[-0.48px]'>FAQ&apos;s</h2>
                                <div className='my-3 md:w-[65rem]'>
                                    <Faq />
                                </div>
                            </div>



                            {/* Youtube Section */}
                            <div className='lg:w-full my-4'>
                                <h2 className='font-semibold mb-4 text-[#484848] text-2xl'>Hyundai Aura Videos</h2>
                                <div className='w-full flex space-x-2'>
                                    <Image src={model_yt} />
                                    <Image src={model_yt} />
                                    <Image src={model_yt} />
                                </div>
                            </div>

                            {/* LAst Advert  */}
                            <div className='lg:w-full my-6'>
                                <div className='w-full h-[15rem] bg-[#09809A]'>
                                    <p className='text-white text-3xl p-10'>
                                        Sponsored Adv
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className='md:w-[26%] mx-[1rem]'>
                            <Right />
                        </div>
                    </div>

                    <div className='pb-4'>
                        <p>Home &gt; Hyundai &gt; Aura</p>
                    </div>


                </div>
            </div>
            <Footer />
        </>
    )
}

export default Model