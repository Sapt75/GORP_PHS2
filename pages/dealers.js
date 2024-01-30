import React, { useEffect, useRef, useState } from 'react'
import style from "../styles/varient.module.css"
import ImageSlider from '../components/carousel'
import Faq from '../components/faq';
import Image from 'next/image';
import Color from "../components/color"
import DoneIcon from '@mui/icons-material/Done';
import advert from "../public/images/advert.png"
import logo from "../public/images/logo.png"
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
import edit from "../public/images/edit.svg"
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
import Brand_Modal from '../components/brand_modal';
import CustomSeparator from '../components/breadcrumbs';




const Dealers = () => {

    const [update, setUpdate] = useState(false)
    const [show, setShow] = useState(false)
    const top_bar = useRef(null)
    const top_shift = useRef(null)
    const tab_change = useRef(null)
    let [distance, setDistance] = useState(0)
    const white = useRef(null)


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
        // document.getElementById("boom").addEventListener("wheel", ()=> console.log("Hello"))
        // tab_change.current.addEventListner = function () {return console.log("Hello")}
        window.onscroll = function () { scrollFunction() };
    }, [])




    return (
        <>
            <Navbar />
            <div className='mx-2 md:mx-0'>
                <div ref={top_bar} className={`${style["top-scroll"]} hidden md:block`}>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <ul className='whitespace-nowrap text-gray-800 md:whitespace-normal md:overflow-x-auto md:mx-[2rem] overflow-x-scroll mx-[1rem] my-[1rem] flex space-x-10 2xl:space-x-[2rem] text-[16px] font-normal tracking-[-0.32px]'>
                                <li><Image width={200} height={60} src={logo} /></li>
                                <li className='font-semibold text-[#484848]'>Hyundai <Image className='inline' src={edit} alt='edit' /></li>
                                <li className='hover:text-[#09809A] invisible hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold text-[#484848]'>Features & Specifications</li>
                                <li className='hover:text-[#09809A] invisible hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold text-[#484848]'>Variant</li>
                            </ul>
                        </div>
                        <div className='flex w-[25%] border-x border-[#E1E1E1]'>
                            <div className='px-4 w-1/2 py-[0.5rem] border-r justify-between border-[#E1E1E1] flex'>
                                <div className='pt-2'>
                                    <p className='text-[16px] text-[#6F6F6F]'>Brand</p>
                                    <p className='text-[13px] font-semibold text-[#484848]'>Hyundai</p>
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

                    <Image className='mx-auto' src={advert} />

                    <div className='md:hidden'>
                        <div className='md:w-[74%]'>
                            <div className='w-full'>
                                <h2 className='md:text-[24px] text-[#484848] mb-2 mt-6 text-[18px] font-semibold tracking-[-0.48px]'>Hyundai Car Dealers & Showrooms in Mumbai</h2>
                                <div className='bg-[#f4f4f4] text-[#6F6F6F] p-3'>
                                    <p>Hyundai Aura E Prices: The price of the Hyundai Aura E in New Delhi is Rs 6.33 Lakh (Ex-showroom). To know more about the Aura E Images, Reviews, Offers & other details, download the Get On road price App. Hyundai Aura E mileage : It returns a certified mileage of . <span className={`${update ? null : "hidden"}`}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, repellat tempore quasi doloribus possimus laudantium. Exercitationem commodi nobis dolore assumenda neque repudiandae, sit dolores, quae eaque soluta maiores! Corporis quis ipsa perferendis, repellendus odio eligendi accusamus impedit quia animi eius.
                                    </span></p>

                                    <div onClick={() => update ? setUpdate(false) : setUpdate(true)} className='text-right cursor-pointer pt-[1rem]'>
                                        <span className='mx-[1rem] text-[#09809A] text-[14px] font-normal'>Read More <Image className='inline' src={down} alt="" /></span>
                                    </div>
                                </div>
                                <hr className='border-t-1 border-[#E1E1E1]' />
                                <div className={`flex space-x-2 w-full my-2`}>
                                    <Brand_Modal />
                                    <City_Modal />
                                </div>


                                {/* Dealers Section  */}
                                <div className='mt-6'>
                                    <h2 className='md:text-[24px] text-[18px] text-[#484848] font-semibold mb-2'>Authorised Hyundai Dealers in Mumbai</h2>
                                    <div className='space-y-4'>
                                        <div className='border border-[#C6C6C6] px-4'>
                                            <p className='font-semibold text-[15px] text-[#484848] md:text-base py-2'>Shreenath Hyundai Andheri, Mumbai</p>
                                            <p className='mb-4 text-[14px] md:text-base text-[#6F6F6F]'>Grd Flr Morya Estate New link road Opp. Infinity Mall Andheri West, Mumbai, Maharashtra 400053</p>
                                            <div className='flex space-x-4 mb-6'>
                                                <p><img className='inline' src="./images/phone.svg" alt="" /><span className='text-[14px] md:text-base text-[#6F6F6F]'>9769900531</span></p>
                                                <button className='bg-[#09809A] py-1 px-2 text-white rounded-md'>Contact Dealer</button>
                                            </div>
                                        </div>
                                        <div className='border border-[#C6C6C6] px-4'>
                                            <p className='font-semibold text-[15px] text-[#484848] md:text-base py-2'>Shreenath Hyundai Andheri, Mumbai</p>
                                            <p className='mb-4 text-[14px] md:text-base text-[#6F6F6F]'>Grd Flr Morya Estate New link road Opp. Infinity Mall Andheri West, Mumbai, Maharashtra 400053</p>
                                            <div className='flex space-x-4 mb-6'>
                                                <p><img className='inline' src="./images/phone.svg" alt="" /><span className='text-[14px] md:text-base text-[#6F6F6F]'>9769900531</span></p>
                                                <button className='bg-[#09809A] py-1 px-2 text-white rounded-md'>Contact Dealer</button>
                                            </div>
                                        </div>
                                        <div className='border border-[#C6C6C6] px-4'>
                                            <p className='font-semibold text-[15px] text-[#484848] md:text-base py-2'>Shreenath Hyundai Andheri, Mumbai</p>
                                            <p className='mb-4 text-[14px] md:text-base text-[#6F6F6F]'>Grd Flr Morya Estate New link road Opp. Infinity Mall Andheri West, Mumbai, Maharashtra 400053</p>
                                            <div className='flex space-x-4 mb-6'>
                                                <p><img className='inline' src="./images/phone.svg" alt="" /><span className='text-[14px] md:text-base text-[#6F6F6F]'>9769900531</span></p>
                                                <button className='bg-[#09809A] py-1 px-2 text-white rounded-md'>Contact Dealer</button>
                                            </div>
                                        </div>
                                        <div className='border border-[#C6C6C6] px-4'>
                                            <p className='font-semibold text-[15px] text-[#484848] md:text-base py-2'>Shreenath Hyundai Andheri, Mumbai</p>
                                            <p className='mb-4 text-[14px] md:text-base text-[#6F6F6F]'>Grd Flr Morya Estate New link road Opp. Infinity Mall Andheri West, Mumbai, Maharashtra 400053</p>
                                            <div className='flex space-x-4 mb-6'>
                                                <p><img className='inline' src="./images/phone.svg" alt="" /><span className='text-[14px] md:text-base text-[#6F6F6F]'>9769900531</span></p>
                                                <button className='bg-[#09809A] py-1 px-2 text-white rounded-md'>Contact Dealer</button>
                                            </div>
                                        </div>
                                        <div className='border border-[#C6C6C6] px-4'>
                                            <p className='font-semibold text-[15px] text-[#484848] md:text-base py-2'>Shreenath Hyundai Andheri, Mumbai</p>
                                            <p className='mb-4 text-[14px] md:text-base text-[#6F6F6F]'>Grd Flr Morya Estate New link road Opp. Infinity Mall Andheri West, Mumbai, Maharashtra 400053</p>
                                            <div className='flex space-x-4 mb-6'>
                                                <p><img className='inline' src="./images/phone.svg" alt="" /><span className='text-[14px] md:text-base text-[#6F6F6F]'>9769900531</span></p>
                                                <button className='bg-[#09809A] py-1 px-2 text-white rounded-md'>Contact Dealer</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>





                                {/* Brands Listing */}
                                <div className='w-full my-6'>
                                    <p className='md:text-[24px] text-[18px] text-[#484848] font-semibold mb-2'>Top Brands</p>
                                    <div className='grid grid-cols-3 gap-y-8 border border-[#E1E1E1] py-12'>
                                        <div className='text-center'>
                                            <Image className='mx-auto' width={70} height={40} src={"https://ik.imagekit.io/GORP/Logos/Maruti.jpg?updatedAt=1693313074421"} />
                                            <p className='text-[16px] text-[#484848] font-semibold my-3'>Maruti</p>
                                        </div>
                                        <div className='text-center'>
                                            <Image className='mx-auto' width={70} height={40} src={"https://ik.imagekit.io/GORP/Logos/Hyundai.jpg?updatedAt=1693313074421"} />
                                            <p className='text-[16px] text-[#484848] font-semibold my-3'>Hyundai</p>
                                        </div>
                                        <div className='text-center'>
                                            <Image className='mx-auto' width={70} height={40} src={"https://ik.imagekit.io/GORP/Logos/Tata.jpg?updatedAt=1693313074421"} />
                                            <p className='text-[16px] text-[#484848] font-semibold my-3'>Tata</p>
                                        </div>
                                        <div className='text-center'>
                                            <Image className='mx-auto' width={70} height={40} src={"https://ik.imagekit.io/GORP/Logos/Mahindra.jpg?updatedAt=1693313074421"} />
                                            <p className='text-[16px] text-[#484848] font-semibold my-3'>Mahindra</p>
                                        </div>
                                        <div className='text-center'>
                                            <Image className='mx-auto' width={70} height={40} src={"https://ik.imagekit.io/GORP/Logos/Kia.jpg?updatedAt=1693313074421"} />
                                            <p className='text-[16px] text-[#484848] font-semibold my-3'>Kia</p>
                                        </div>
                                        <div className='text-center'>
                                            <Image className='mx-auto' width={70} height={40} src={"https://ik.imagekit.io/GORP/Logos/Skoda.jpg?updatedAt=1693313074421"} />
                                            <p className='text-[16px] text-[#484848] font-semibold my-3'>Skoda</p>
                                        </div>
                                    </div>

                                </div>


                                <div className='md:p-4 py-1.5'>
                                <CustomSeparator />
                                    <p className='my-4 text-[#6F6F6F]'>Disclaimer: While we do our best to ensure that these prices are accurate, we suggest to please contact your nearest dealer for current on road prices and offers.</p>
                                </div>

                            </div>




                        </div>
                    </div>


                    <div className='md:flex hidden'>
                        <div className='md:w-[74%]'>
                            <div className='w-full'>
                                <h2 className='md:text-[24px] py-2 text-[18px] text-[#484848] font-semibold tracking-[-0.48px]'>Hyundai Car Dealers & Showrooms in Mumbai</h2>
                                <div className='flex'>
                                    <div className='bg-[#f4f4f4] text-[#6F6F6F]  p-3'>
                                        <p>Hyundai Aura E Prices: The price of the Hyundai Aura E in New Delhi is Rs 6.33 Lakh (Ex-showroom). To know more about the Aura E Images, Reviews, Offers & other details, download the Get On road price App. Hyundai Aura E mileage : It returns a certified mileage of . <span className={`${show ? "" : "hidden"}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, nobis culpa nesciunt temporibus vel consequatur consectetur, natus ab magnam adipisci incidunt nulla dolor et. Explicabo quos omnis magni voluptatum cum natus tenetur similique, magnam itaque aspernatur, harum dolor nesciunt vitae.</span> </p>
                                        <div onClick={() => show ? setShow(false) : setShow(true)} className='text-right pt-[1rem] cursor-pointer'>
                                            <span className='mx-[1rem] text-[#09809A] text-[16px] font-normal'>Read {show ? "Less" : "More"} <Image className='inline' src={down} alt="" /></span>
                                        </div>
                                    </div>
                                    <div className={`${show ? "w-full" : "w-[45%]"} ${style.full} ${style.full3} mx-1`}>
                                        <Brand_Modal />
                                        <City_Modal />
                                    </div>
                                </div>
                            </div>


                            {/* Dealers Section  */}
                            <div className='mt-10'>
                                <p className='md:text-[24px] md:ml-0 md:mx-0 text-[18px] font-semibold text-[#484848] pb-2 tracking-[-0.48px]'>Authorized Hyundai Dealers in Mumbai</p>
                                <div className='md:w-full'>
                                    <div style={{ display: "-webkit-box" }} className='overflow-x-scroll md:mx-0 space-x-3 md:m-3'>
                                        <div className='border border-[#C6C6C6] w-[18rem] px-4'>
                                            <p className='font-semibold text-[15px] text-[#484848] md:text-base py-2'>Shreenath Hyundai Andheri, Mumbai</p>
                                            <p className='mb-4 text-[14px] md:text-base text-[#6F6F6F]'>Grd Flr Morya Estate New link road Opp. Infinity Mall Andheri West, Mumbai, Maharashtra 400053</p>
                                            <p><img className='inline' src="./images/phone.svg" alt="" /><span className='text-[14px] md:text-base text-[#6F6F6F]'>9769900531</span></p>
                                            <button className='bg-[#09809A] py-1 px-2 text-white rounded-md w-full mt-2 mb-6'>Contact Dealer</button>
                                        </div>
                                        <div className='border border-[#C6C6C6] w-[18rem] px-4'>
                                            <p className='font-semibold text-[15px] text-[#484848] md:text-base py-2'>Shreenath Hyundai Andheri, Mumbai</p>
                                            <p className='mb-4 text-[14px] md:text-base text-[#6F6F6F]'>Grd Flr Morya Estate New link road Opp. Infinity Mall Andheri West, Mumbai, Maharashtra 400053</p>
                                            <p><img className='inline' src="./images/phone.svg" alt="" /><span className='text-[14px] md:text-base text-[#6F6F6F]'>9769900531</span></p>
                                            <button className='bg-[#09809A] py-1 px-2 text-white rounded-md w-full mt-2 mb-6'>Contact Dealer</button>
                                        </div>
                                        <div className='border border-[#C6C6C6] w-[18rem] px-4'>
                                            <p className='font-semibold text-[15px] text-[#484848] md:text-base py-2'>Shreenath Hyundai Andheri, Mumbai</p>
                                            <p className='mb-4 text-[14px] md:text-base text-[#6F6F6F]'>Grd Flr Morya Estate New link road Opp. Infinity Mall Andheri West, Mumbai, Maharashtra 400053</p>
                                            <p><img className='inline' src="./images/phone.svg" alt="" /><span className='text-[14px] md:text-base text-[#6F6F6F]'>9769900531</span></p>
                                            <button className='bg-[#09809A] py-1 px-2 text-white rounded-md w-full mt-2 mb-6'>Contact Dealer</button>
                                        </div>
                                        <div className='border border-[#C6C6C6] w-[18rem] px-4'>
                                            <p className='font-semibold text-[15px] text-[#484848] md:text-base py-2'>Shreenath Hyundai Andheri, Mumbai</p>
                                            <p className='mb-4 text-[14px] md:text-base text-[#6F6F6F]'>Grd Flr Morya Estate New link road Opp. Infinity Mall Andheri West, Mumbai, Maharashtra 400053</p>
                                            <p><img className='inline' src="./images/phone.svg" alt="" /><span className='text-[14px] md:text-base text-[#6F6F6F]'>9769900531</span></p>
                                            <button className='bg-[#09809A] py-1 px-2 text-white rounded-md w-full mt-2 mb-6'>Contact Dealer</button>
                                        </div>
                                        <div className='border border-[#C6C6C6] w-[18rem] px-4'>
                                            <p className='font-semibold text-[15px] text-[#484848] md:text-base py-2'>Shreenath Hyundai Andheri, Mumbai</p>
                                            <p className='mb-4 text-[14px] md:text-base text-[#6F6F6F]'>Grd Flr Morya Estate New link road Opp. Infinity Mall Andheri West, Mumbai, Maharashtra 400053</p>
                                            <p><img className='inline' src="./images/phone.svg" alt="" /><span className='text-[14px] md:text-base text-[#6F6F6F]'>9769900531</span></p>
                                            <button className='bg-[#09809A] py-1 px-2 text-white rounded-md w-full mt-2 mb-6'>Contact Dealer</button>
                                        </div>
                                        <div className='border border-[#C6C6C6] w-[18rem] px-4'>
                                            <p className='font-semibold text-[15px] text-[#484848] md:text-base py-2'>Shreenath Hyundai Andheri, Mumbai</p>
                                            <p className='mb-4 text-[14px] md:text-base text-[#6F6F6F]'>Grd Flr Morya Estate New link road Opp. Infinity Mall Andheri West, Mumbai, Maharashtra 400053</p>
                                            <p><img className='inline' src="./images/phone.svg" alt="" /><span className='text-[14px] md:text-base text-[#6F6F6F]'>9769900531</span></p>
                                            <button className='bg-[#09809A] py-1 px-2 text-white rounded-md w-full mt-2 mb-6'>Contact Dealer</button>
                                        </div>
                                        <div className='border border-[#C6C6C6] w-[18rem] px-4'>
                                            <p className='font-semibold text-[15px] text-[#484848] md:text-base py-2'>Shreenath Hyundai Andheri, Mumbai</p>
                                            <p className='mb-4 text-[14px] md:text-base text-[#6F6F6F]'>Grd Flr Morya Estate New link road Opp. Infinity Mall Andheri West, Mumbai, Maharashtra 400053</p>
                                            <p><img className='inline' src="./images/phone.svg" alt="" /><span className='text-[14px] md:text-base text-[#6F6F6F]'>9769900531</span></p>
                                            <button className='bg-[#09809A] py-1 px-2 text-white rounded-md w-full mt-2 mb-6'>Contact Dealer</button>
                                        </div>
                                        <div className='border border-[#C6C6C6] w-[18rem] px-4'>
                                            <p className='font-semibold text-[15px] text-[#484848] md:text-base py-2'>Shreenath Hyundai Andheri, Mumbai</p>
                                            <p className='mb-4 text-[14px] md:text-base text-[#6F6F6F]'>Grd Flr Morya Estate New link road Opp. Infinity Mall Andheri West, Mumbai, Maharashtra 400053</p>
                                            <p><img className='inline' src="./images/phone.svg" alt="" /><span className='text-[14px] md:text-base text-[#6F6F6F]'>9769900531</span></p>
                                            <button className='bg-[#09809A] py-1 px-2 text-white rounded-md w-full mt-2 mb-6'>Contact Dealer</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Dealers Section  */}
                            <div className='mt-[3rem]'>
                                <div className='md:w-full'>
                                    <div style={{ display: "-webkit-box" }} className='overflow-x-scroll md:mx-0 space-x-3 md:m-3'>
                                        <div className='border border-[#C6C6C6] w-[18rem] px-4'>
                                            <p className='font-semibold text-[15px] text-[#484848] md:text-base py-2'>Shreenath Hyundai Andheri, Mumbai</p>
                                            <p className='mb-4 text-[14px] md:text-base text-[#6F6F6F]'>Grd Flr Morya Estate New link road Opp. Infinity Mall Andheri West, Mumbai, Maharashtra 400053</p>
                                            <p><img className='inline' src="./images/phone.svg" alt="" /><span className='text-[14px] md:text-base text-[#6F6F6F]'>9769900531</span></p>
                                            <button className='bg-[#09809A] py-1 px-2 text-white rounded-md w-full mt-2 mb-6'>Contact Dealer</button>
                                        </div>
                                        <div className='border border-[#C6C6C6] w-[18rem] px-4'>
                                            <p className='font-semibold text-[15px] text-[#484848] md:text-base py-2'>Shreenath Hyundai Andheri, Mumbai</p>
                                            <p className='mb-4 text-[14px] md:text-base text-[#6F6F6F]'>Grd Flr Morya Estate New link road Opp. Infinity Mall Andheri West, Mumbai, Maharashtra 400053</p>
                                            <p><img className='inline' src="./images/phone.svg" alt="" /><span className='text-[14px] md:text-base text-[#6F6F6F]'>9769900531</span></p>
                                            <button className='bg-[#09809A] py-1 px-2 text-white rounded-md w-full mt-2 mb-6'>Contact Dealer</button>
                                        </div>
                                        <div className='border border-[#C6C6C6] w-[18rem] px-4'>
                                            <p className='font-semibold text-[15px] text-[#484848] md:text-base py-2'>Shreenath Hyundai Andheri, Mumbai</p>
                                            <p className='mb-4 text-[14px] md:text-base text-[#6F6F6F]'>Grd Flr Morya Estate New link road Opp. Infinity Mall Andheri West, Mumbai, Maharashtra 400053</p>
                                            <p><img className='inline' src="./images/phone.svg" alt="" /><span className='text-[14px] md:text-base text-[#6F6F6F]'>9769900531</span></p>
                                            <button className='bg-[#09809A] py-1 px-2 text-white rounded-md w-full mt-2 mb-6'>Contact Dealer</button>
                                        </div>
                                        <div className='border border-[#C6C6C6] w-[18rem] px-4'>
                                            <p className='font-semibold text-[15px] text-[#484848] md:text-base py-2'>Shreenath Hyundai Andheri, Mumbai</p>
                                            <p className='mb-4 text-[14px] md:text-base text-[#6F6F6F]'>Grd Flr Morya Estate New link road Opp. Infinity Mall Andheri West, Mumbai, Maharashtra 400053</p>
                                            <p><img className='inline' src="./images/phone.svg" alt="" /><span className='text-[14px] md:text-base text-[#6F6F6F]'>9769900531</span></p>
                                            <button className='bg-[#09809A] py-1 px-2 text-white rounded-md w-full mt-2 mb-6'>Contact Dealer</button>
                                        </div>
                                        <div className='border border-[#C6C6C6] w-[18rem] px-4'>
                                            <p className='font-semibold text-[15px] text-[#484848] md:text-base py-2'>Shreenath Hyundai Andheri, Mumbai</p>
                                            <p className='mb-4 text-[14px] md:text-base text-[#6F6F6F]'>Grd Flr Morya Estate New link road Opp. Infinity Mall Andheri West, Mumbai, Maharashtra 400053</p>
                                            <p><img className='inline' src="./images/phone.svg" alt="" /><span className='text-[14px] md:text-base text-[#6F6F6F]'>9769900531</span></p>
                                            <button className='bg-[#09809A] py-1 px-2 text-white rounded-md w-full mt-2 mb-6'>Contact Dealer</button>
                                        </div>
                                        <div className='border border-[#C6C6C6] w-[18rem] px-4'>
                                            <p className='font-semibold text-[15px] text-[#484848] md:text-base py-2'>Shreenath Hyundai Andheri, Mumbai</p>
                                            <p className='mb-4 text-[14px] md:text-base text-[#6F6F6F]'>Grd Flr Morya Estate New link road Opp. Infinity Mall Andheri West, Mumbai, Maharashtra 400053</p>
                                            <p><img className='inline' src="./images/phone.svg" alt="" /><span className='text-[14px] md:text-base text-[#6F6F6F]'>9769900531</span></p>
                                            <button className='bg-[#09809A] py-1 px-2 text-white rounded-md w-full mt-2 mb-6'>Contact Dealer</button>
                                        </div>
                                        <div className='border border-[#C6C6C6] w-[18rem] px-4'>
                                            <p className='font-semibold text-[15px] text-[#484848] md:text-base py-2'>Shreenath Hyundai Andheri, Mumbai</p>
                                            <p className='mb-4 text-[14px] md:text-base text-[#6F6F6F]'>Grd Flr Morya Estate New link road Opp. Infinity Mall Andheri West, Mumbai, Maharashtra 400053</p>
                                            <p><img className='inline' src="./images/phone.svg" alt="" /><span className='text-[14px] md:text-base text-[#6F6F6F]'>9769900531</span></p>
                                            <button className='bg-[#09809A] py-1 px-2 text-white rounded-md w-full mt-2 mb-6'>Contact Dealer</button>
                                        </div>
                                        <div className='border border-[#C6C6C6] w-[18rem] px-4'>
                                            <p className='font-semibold text-[15px] text-[#484848] md:text-base py-2'>Shreenath Hyundai Andheri, Mumbai</p>
                                            <p className='mb-4 text-[14px] md:text-base text-[#6F6F6F]'>Grd Flr Morya Estate New link road Opp. Infinity Mall Andheri West, Mumbai, Maharashtra 400053</p>
                                            <p><img className='inline' src="./images/phone.svg" alt="" /><span className='text-[14px] md:text-base text-[#6F6F6F]'>9769900531</span></p>
                                            <button className='bg-[#09809A] py-1 px-2 text-white rounded-md w-full mt-2 mb-6'>Contact Dealer</button>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* Brands Listing */}
                            <div className='w-full mt-10'>
                                <p className='md:text-[24px] text-[18px] text-[#484848] font-semibold my-6'>Showrooms of Other Brands in Mumbai</p>
                                <div className='grid grid-cols-4 gap-y-8 border border-[#E1E1E1] py-12'>
                                    <div className='text-center'>
                                        <Image className='mx-auto' width={100} height={70} src={"https://ik.imagekit.io/GORP/Logos/Maruti.jpg?updatedAt=1693313074421"} />
                                        <p className='text-xl text-[#484848] font-semibold my-3'>Maruti</p>
                                    </div>
                                    <div className='text-center'>
                                        <Image className='mx-auto' width={100} height={70} src={"https://ik.imagekit.io/GORP/Logos/Hyundai.jpg?updatedAt=1693313074421"} />
                                        <p className='text-xl text-[#484848] font-semibold my-3'>Hyundai</p>
                                    </div>
                                    <div className='text-center'>
                                        <Image className='mx-auto' width={100} height={70} src={"https://ik.imagekit.io/GORP/Logos/Tata.jpg?updatedAt=1693313074421"} />
                                        <p className='text-xl text-[#484848] font-semibold my-3'>Tata</p>
                                    </div>
                                    <div className='text-center'>
                                        <Image className='mx-auto' width={100} height={70} src={"https://ik.imagekit.io/GORP/Logos/Mahindra.jpg?updatedAt=1693313074421"} />
                                        <p className='text-xl text-[#484848] font-semibold my-3'>Mahindra</p>
                                    </div>
                                    <div className='text-center'>
                                        <Image className='mx-auto' width={100} height={70} src={"https://ik.imagekit.io/GORP/Logos/Kia.jpg?updatedAt=1693313074421"} />
                                        <p className='text-xl text-[#484848] font-semibold my-3'>Kia</p>
                                    </div>
                                    <div className='text-center'>
                                        <Image className='mx-auto' width={100} height={70} src={"https://ik.imagekit.io/GORP/Logos/Skoda.jpg?updatedAt=1693313074421"} />
                                        <p className='text-xl text-[#484848] font-semibold my-3'>Skoda</p>
                                    </div>
                                    <div className='text-center'>
                                        <Image className='mx-auto' width={100} height={70} src={"https://ik.imagekit.io/GORP/Logos/Renault.jpg?updatedAt=1693313074421"} />
                                        <p className='text-xl text-[#484848] font-semibold my-3'>Renault</p>
                                    </div>
                                    <div className='text-center'>
                                        <Image className='mx-auto' width={100} height={70} src={"https://ik.imagekit.io/GORP/Logos/Volkswagen.jpg?updatedAt=1693313074421"} />
                                        <p className='text-xl text-[#484848] font-semibold my-3'>Volkswagen</p>
                                    </div>
                                </div>
                                <div className='text-center my-4'>
                                    <button className='px-16 rounded-md'><span className='text-[16px] font-normal tracking-[-0.24px] text-[#09809A]'>
                                        View All Versions
                                    </span></button>
                                </div>
                            </div>

                            <div className='md:p-4 p-1.5 mt-8'>
                            <CustomSeparator />
                                <p className='my-4 text-[#6F6F6F]'><span className='text-[#484848]'>Disclaimer:</span> While we do our best to ensure that these prices are accurate, we suggest to please contact your nearest dealer for current on road prices and offers.</p>
                            </div>


                        </div>


                        <div className='md:w-[26%] mx-[1rem]'>
                            <>

                                {/* City Prices  */}
                                <div className='w-full ml-[2.5rem] hidden md:inline'>
                                    <div className='my-[2rem]'>
                                        <div className='mt-2 md:mt-5'>
                                            <p className='bg-[#f4f4f4] text-left p-2 text-[#484848] font-semibold text-[16px] tracking-[-0.32px]'>
                                                Hyundai Dealers in Cities Nearby
                                            </p>
                                            <table className='w-full'>
                                            <tbody>
                                                <tr className='border border-[#C6C6C6]'>
                                                    <td className='text-[16px] text-[#09809A] font-normal p-2'>Noida</td>
                                                    <td className='text-right px-2 py-3'>
                                                        <ChevronRight sx={{ color: "#09809A" }} />
                                                    </td>
                                                </tr>
                                                <tr className='border border-[#C6C6C6]'>
                                                    <td className='text-[16px] text-[#09809A] font-normal p-2'>Gaziabad</td>
                                                    <td className='text-right px-2 py-3'>
                                                        <ChevronRight sx={{ color: "#09809A" }} />
                                                    </td>
                                                </tr>
                                                <tr className='border border-[#C6C6C6]'>
                                                    <td className='text-[16px] text-[#09809A] font-normal p-2'>Gurugram</td>
                                                    <td className='text-right px-2 py-3'>
                                                        <ChevronRight sx={{ color: "#09809A" }} />
                                                    </td>
                                                </tr>
                                                <tr className='border border-[#C6C6C6]'>
                                                    <td className='text-[16px] text-[#09809A] font-normal p-2'>Haridwar</td>
                                                    <td className='text-right px-2 py-3'>
                                                        <ChevronRight sx={{ color: "#09809A" }} />
                                                    </td>
                                                </tr>

                                            </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>


                                {/* Brocher */}
                                <div className='relative mt-[2rem]'>
                                    <div className='md:w-full p-3 md:p-0 bg-[#CE4327] md:absolute md:top-1/3 rounded-sm'>
                                        <p className='md:text-[28px] mx-4 text-[18px] text-white font-semibold tracking-[-0.56px] md:py-2'> Hyundai Aura</p>
                                        <Image className='md:mx-auto w-[90%] inline md:block' src={brochure} alt="" />
                                        <div className='text-center'>
                                            <Image className='mx-2 md:py-4 inline w-4 md:w-6' src={brochure2} alt="" />
                                            <span className='md:text-[22px] text-[14px] inline mr-2 text-white font-medium tracking-[-0.44px]'>Download Brochure</span>
                                            <Image className='mx-2 md:py-4 inline w-4 md:w-6' src={download} alt="" />
                                        </div>
                                    </div>
                                </div>


                                {/* Sponsored ADV  */}
                                <div className='mt-[15rem]'>
                                    <div className='md:mt-[3rem] mt-[1rem]'>
                                        <div style={{ verticalAlign: "middle", display: "table-cell" }} className='md:w-[20rem] w-[24rem] rounded-sm h-[15rem] bg-[#CE4327]  text-center'>
                                            <p className='text-[24px] font-semibold tracking-[-0.48px] text-white'>Sponsor ADv</p>
                                        </div>
                                    </div>
                                </div>


                                {/* Connect Section  */}

                                <div className='bg-[#c2e6ee] mt-10'>
                                    <div className='text-center pt-6'>
                                        <Image className='mx-auto' src={connect} alt="" />
                                        <p className='text-[24px] font-semibold tracking-[-0.48px]'>Connect</p>
                                        <p className='text-[20px] font-semibold tracking-[-0.4px] my-2'>Hyundai Authorized</p>
                                        <p className='text-[20px] font-semibold tracking-[-0.4px] my-2'>Dealers in your city</p>
                                        <div className='text-center my-4 pb-4'>
                                            <button className='bg-[#09809a] w-[90%] py-2 rounded-md'><span className='text-[20px] font-medium tracking-[-0.24px] text-white'>
                                                Locate Dealer
                                            </span></button>
                                        </div>
                                    </div>
                                </div>


                                {/* Car Loan  */}
                                <div className='bg-[#F4F4F4] p-4'>
                                    <p className='text-[#f80a1a] text-[32px] font-semibold leading-[1]'>Car Loan</p>
                                    <p className='text-[#1db876] text-[30px] font-semibold leading-[1]'>Lowest EMI</p>
                                    <Image src={promo} alt="" />
                                    <div className='text-center py-3'>
                                        <button className='bg-[#ff3209] text-white text-[18px] font-medium px-4 rounded-md'>GET THE BEST OFFERS</button>
                                    </div>
                                </div>

                            </>
                        </div>
                    </div>



                </div>
            </div>
            <Footer />
        </>
    )
}

export default Dealers