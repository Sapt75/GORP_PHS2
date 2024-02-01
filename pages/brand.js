import React, { useEffect, useRef, useState } from 'react'
import style from "../styles/varient.module.css"
import Faq from '../components/faq';
import Image from 'next/image';
import logo from "../public/images/logo.png"
import advert from "../public/images/advert.png"
import star from "../public/images/star.svg"
import down from "../public/images/down.svg"
import arai from "../public/images/arai.svg"
import engine from "../public/images/engine.svg"
import fuel from "../public/images/fuel.svg"
import seat from "../public/images/seat.svg"
import transmission from "../public/images/transmission.svg"
import body from "../public/images/body.svg"
import advert2 from "../public/images/advert2.png"
import model_yt from "../public/images/model_yt.png"
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
import thumbs_up from "../public/images/thumbs_up.svg"
import thumbs_down from "../public/images/thumbs_down.svg"
import connect from "../public/images/connect.svg"
import promo from "../public/images/promo.png"
import last_adv from "../public/images/last_adv.png"
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import edit from "../public/images/edit.svg"
import ahmedabad from "../public/images/ahemdabad.png"
import bangalore from "../public/images/bangalore.png"
import chennai from "../public/images/chennai.png"
import delhi from "../public/images/delhi.png"
import hyderabad from "../public/images/hyderabad.png"
import jaipur from "../public/images/jaipur.png"
import kolkata from "../public/images/kolkata.png"
import lucknow from "../public/images/lucknow.png"
import mumbai from "../public/images/mumbai.png"
import pune from "../public/images/pune.png"
import { ChevronRight } from '@mui/icons-material';
import Rating_Model from '../components/rating_modal';
import Emi_Modal from '../components/emi';







const Brand = () => {

    const [update, setUpdate] = useState(false)
    const [show, setShow] = useState(false)
    const top_bar = useRef(null)


    function scrollFunction() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            top_bar.current.classList.add(style.scrolling);
        } else {
            top_bar.current.classList.remove(style.scrolling);
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
                                <li className='font-semibold text-[#484848]'>Hyundai <Image className='inline' src={edit} alt='edit' /></li>
                                <li className='hover:text-[#09809A] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold text-[#484848]'>Find Dealers</li>
                                <li className='hover:text-[#09809A] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold text-[#484848]'>FAQ&apos;s</li>
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

                    <div className='mb-[2rem]'>
                        <Image className='mx-auto' src={advert} alt="" />
                    </div>


                    <div className='md:hidden'>
                        <div className='md:w-[74%]'>
                            <div className='mb-[2rem] w-full'>
                                <h1 className='md:text-[24px] text-[#484848] mb-3 text-[20px] font-semibold tracking-[-0.48px]'>Hyundai Cars</h1>
                                <div className='bg-[#f4f4f4] text-[#6F6F6F] p-3'>
                                    <p>Hyundai Aura Prices: The price of the Hyundai Aura in New Delhi is Rs 6.33 Lakh (Ex-showroom). To know more about the Aura Images, Reviews, Offers & other details, download the Get On road price App. Hyundai Aura mileage : It returns a certified mileage of . <span className={`${update ? null : "hidden"}`}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, repellat tempore quasi doloribus possimus laudantium. Exercitationem commodi nobis dolore assumenda neque repudiandae, sit dolores, quae eaque soluta maiores! Corporis quis ipsa perferendis, repellendus odio eligendi accusamus impedit quia animi eius.
                                    </span></p>

                                    <div onClick={() => update ? setUpdate(false) : setUpdate(true)} className='text-right cursor-pointer pt-[1rem]'>
                                        <span className='mx-[1rem] text-[#0B9DBC] text-[16px] font-normal'>Read More <Image className='inline' src={down} alt="" /></span>
                                    </div>
                                </div>
                                <hr className='border-t-1 border-[#E1E1E1]' />
                            </div>



                            {/* Car Models  */}
                            <div className='w-full'>
                                <div className='flex justify-between my-2 border py-8 border-[#E1E1E1]'>
                                    <div className='w-[8rem]'>
                                        <Image src={car1} />
                                    </div>
                                    <div className='space-y-0.5'>
                                        <p className='text-[16px] font-semibold text-[#484848]'>Hyundai Exter</p>
                                        <span className='text-[#6F6F6F] text-[12px] font-normal'>Petrol | Diesel | Manual | Automatic</span>
                                        <p className='text-[16px] font-semibold text-[#484848]'>₹ 6.33 - ₹ 8.90 Lakh</p>
                                        <p className='text-[12px] text-[#6F6F6F] font-normal'>Ex-Showroom Price in Mumbai</p>
                                        <button className="text-[#CE4327] text-[16px] font-semibold ">Get Latest Offers</button>
                                    </div>
                                    <div className='mr-2'>
                                        <span className='bg-[#0B9DBC] px-[0.6rem] py-[4px] flex text-[10px] font-semibold rounded-md text-white'>
                                            4.5
                                            <Image width={15} className='pl-[4px]' src={star} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className='flex justify-between my-2 border py-8 border-[#E1E1E1]'>
                                    <div className='w-[8rem]'>
                                        <Image src={car3} />
                                    </div>
                                    <div className='space-y-0.5'>
                                        <p className='text-[16px] font-semibold text-[#484848]'>Hyundai Exter</p>
                                        <span className='text-[#6F6F6F] text-[12px] font-normal'>Petrol | Diesel | Manual | Automatic</span>
                                        <p className='text-[16px] font-semibold text-[#484848]'>₹ 6.33 - ₹ 8.90 Lakh</p>
                                        <p className='text-[12px] text-[#6F6F6F] font-normal'>Ex-Showroom Price in Mumbai</p>
                                        <button className="text-[#CE4327] text-[16px] font-semibold ">Get Latest Offers</button>
                                    </div>
                                    <div className='mr-2'>
                                        <span className='bg-[#0B9DBC] px-[0.6rem] py-[4px] flex text-[10px] font-semibold rounded-md text-white'>
                                            4.5
                                            <Image width={15} className='pl-[4px]' src={star} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className='flex justify-between my-2 border py-8 border-[#E1E1E1]'>
                                    <div className='w-[8rem]'>
                                        <Image src={car1} />
                                    </div>
                                    <div className='space-y-0.5'>
                                        <p className='text-[16px] font-semibold text-[#484848]'>Hyundai Exter</p>
                                        <span className='text-[#6F6F6F] text-[12px] font-normal'>Petrol | Diesel | Manual | Automatic</span>
                                        <p className='text-[16px] font-semibold text-[#484848]'>₹ 6.33 - ₹ 8.90 Lakh</p>
                                        <p className='text-[12px] text-[#6F6F6F] font-normal'>Ex-Showroom Price in Mumbai</p>
                                        <button className="text-[#CE4327] text-[16px] font-semibold ">Get Latest Offers</button>
                                    </div>
                                    <div className='mr-2'>
                                        <span className='bg-[#0B9DBC] px-[0.6rem] py-[4px] flex text-[10px] font-semibold rounded-md text-white'>
                                            4.5
                                            <Image width={15} className='pl-[4px]' src={star} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className='flex justify-between my-2 border py-8 border-[#E1E1E1]'>
                                    <div className='w-[8rem]'>
                                        <Image src={car2} />
                                    </div>
                                    <div className='space-y-0.5'>
                                        <p className='text-[16px] font-semibold text-[#484848]'>Hyundai Exter</p>
                                        <span className='text-[#6F6F6F] text-[12px] font-normal'>Petrol | Diesel | Manual | Automatic</span>
                                        <p className='text-[16px] font-semibold text-[#484848]'>₹ 6.33 - ₹ 8.90 Lakh</p>
                                        <p className='text-[12px] text-[#6F6F6F] font-normal'>Ex-Showroom Price in Mumbai</p>
                                        <button className="text-[#CE4327] text-[16px] font-semibold ">Get Latest Offers</button>
                                    </div>
                                    <div className='mr-2'>
                                        <span className='bg-[#0B9DBC] px-[0.6rem] py-[4px] flex text-[10px] font-semibold rounded-md text-white'>
                                            4.5
                                            <Image width={15} className='pl-[4px]' src={star} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className='flex justify-between my-2 border py-8 border-[#E1E1E1]'>
                                    <div className='w-[8rem]'>
                                        <Image src={car3} />
                                    </div>
                                    <div className='space-y-0.5'>
                                        <p className='text-[16px] font-semibold text-[#484848]'>Hyundai Exter</p>
                                        <span className='text-[#6F6F6F] text-[12px] font-normal'>Petrol | Diesel | Manual | Automatic</span>
                                        <p className='text-[16px] font-semibold text-[#484848]'>₹ 6.33 - ₹ 8.90 Lakh</p>
                                        <p className='text-[12px] text-[#6F6F6F] font-normal'>Ex-Showroom Price in Mumbai</p>
                                        <button className="text-[#CE4327] text-[16px] font-semibold ">Get Latest Offers</button>
                                    </div>
                                    <div className='mr-2'>
                                        <span className='bg-[#0B9DBC] px-[0.6rem] py-[4px] flex text-[10px] font-semibold rounded-md text-white'>
                                            4.5
                                            <Image width={15} className='pl-[4px]' src={star} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className='flex justify-between my-2 border py-8 border-[#E1E1E1]'>
                                    <div className='w-[8rem]'>
                                        <Image src={car1} />
                                    </div>
                                    <div className='space-y-0.5'>
                                        <p className='text-[16px] font-semibold text-[#484848]'>Hyundai Exter</p>
                                        <span className='text-[#6F6F6F] text-[12px] font-normal'>Petrol | Diesel | Manual | Automatic</span>
                                        <p className='text-[16px] font-semibold text-[#484848]'>₹ 6.33 - ₹ 8.90 Lakh</p>
                                        <p className='text-[12px] text-[#6F6F6F] font-normal'>Ex-Showroom Price in Mumbai</p>
                                        <button className="text-[#CE4327] text-[16px] font-semibold ">Get Latest Offers</button>
                                    </div>
                                    <div className='mr-2'>
                                        <span className='bg-[#0B9DBC] px-[0.6rem] py-[4px] flex text-[10px] font-semibold rounded-md text-white'>
                                            4.5
                                            <Image width={15} className='pl-[4px]' src={star} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-yellow-400 p-4 flex justify-evenly my-4">
                                    <div>
                                        <p className="text-[16px] font-semibold">EMI Starts  at 12550/Month</p>
                                        <Emi_Modal />
                                    </div>
                                    <div>
                                        <button className="px-4 py-1 bg-[#CE4327] text-white text-[16px] font-semibold rounded-[10px]">GET OFFERS</button>
                                    </div>
                                </div>
                            </div>

                            {/* Brands Listing */}
                            <div className='w-full my-4'>
                                <p className='md:text-[24px] text-[18px] text-[#484848] font-semibold mt-6 mb-3'>Top Brands</p>
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


                            {/* Highlights  */}
                            <div className='w-full my-6'>
                                <p className='text-[18px] text-[#484848] font-semibold mb-3'>Key Highlights of Hyundai Cars</p>
                                <div className="relative overflow-x-auto">
                                    <table className="w-full text-left">
                                        <tbody>
                                            <tr className="bg-white border dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" className="px-4 text-[16px] font-semibold text-[#484848] py-4 whitespace-nowrap dark:text-white">
                                                    Popular Models
                                                </th>
                                                <td className="text-[16px] text-[#6F6F6F] py-4 font-normal">
                                                    Extra, Creta, Venu
                                                </td>
                                            </tr>
                                            <tr className="bg-white border dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" className="px-4 text-[16px] font-semibold text-[#484848] py-4 whitespace-nowrap dark:text-white">
                                                    Affordable Model
                                                </th>
                                                <td className="text-[16px] py-4 text-[#6F6F6F] font-normal">
                                                    Tata Tiago(Rs. 5.60 Lakh)
                                                </td>
                                            </tr>
                                            <tr className="bg-white border dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" className="px-4 text-[16px] font-semibold text-[#484848] py-4 whitespace-nowrap dark:text-white">
                                                    Most Expensive
                                                </th>
                                                <td className="text-[16px] text-[#6F6F6F] py-4 font-normal">
                                                    Tata Safari(Rs. 15.85 Lakh)
                                                </td>
                                            </tr>
                                            <tr className="bg-white border dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" className="px-4 text-[16px] font-semibold text-[#484848] py-4 whitespace-nowrap dark:text-white">
                                                    Number of Cars
                                                </th>
                                                <td className="text-[16px] text-[#6F6F6F] py-4 font-normal">
                                                    17 (3 Compact SUV, 9 SUV, 3 Hatchback, 1 Sedan, 1 Compact Sedan)
                                                </td>
                                            </tr>
                                            <tr className="bg-white border dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" className="px-4 text-[16px] font-semibold text-[#484848] py-4 whitespace-nowrap dark:text-white">
                                                    Upcoming Models
                                                </th>
                                                <td className="text-[16px] text-[#6F6F6F] py-4 font-normal">
                                                    Tata Harrier 2023, Tata Altroz Racer, Tata Curvv EV, Tata Curvv, Tata Avinya
                                                </td>
                                            </tr>
                                            <tr className="bg-white border dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" className="px-4 text-[16px] font-semibold text-[#484848] py-4 whitespace-nowrap dark:text-white">
                                                    Dealer Showrooms
                                                </th>
                                                <td className="text-[16px] text-[#6F6F6F] py-4 font-normal">
                                                    1620 Showrooms
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>


                            {/* Top cities  */}
                            <div className='w-full'>
                                <p className='text-[18px] text-[#484848] font-semibold mt-5 mb-3'>Find Hyundai Car Dealers in top Cities</p>
                                <div className='grid grid-cols-3 gap-y-8 border border-[#E1E1E1] py-12'>
                                    <div className='text-center'>
                                        <Image className='mx-auto' width={70} src={ahmedabad} />
                                        <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Ahmedabad</p>
                                    </div>
                                    <div className='text-center'>
                                        <Image className='mx-auto' width={70} src={bangalore} />
                                        <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Bangalore</p>
                                    </div>
                                    <div className='text-center'>
                                        <Image className='mx-auto' width={70} src={chennai} />
                                        <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Chennai</p>
                                    </div>
                                    <div className='text-center'>
                                        <Image className='mx-auto' width={70} src={delhi} />
                                        <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Delhi</p>
                                    </div>
                                    <div className='text-center'>
                                        <Image className='mx-auto' width={70} src={hyderabad} />
                                        <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Hyderabad</p>
                                    </div>
                                    <div className='text-center'>
                                        <Image className='mx-auto' width={70} src={jaipur} />
                                        <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Jaipur</p>
                                    </div>
                                    <div className='text-center'>
                                        <Image className='mx-auto' width={70} src={kolkata} />
                                        <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Kolkata</p>
                                    </div>
                                    <div className='text-center'>
                                        <Image className='mx-auto' width={70} src={lucknow} />
                                        <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Lucknow</p>
                                    </div>
                                    <div className='text-center'>
                                        <Image className='mx-auto' width={70} src={mumbai} />
                                        <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Mumbai</p>
                                    </div>
                                </div>
                            </div>


                            {/* Reviews Section  */}
                            <div className='mt-5'>
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
                            <div className='mt-5'>
                                <h2 className='text-[18px] text-[#484848] px-4 font-semibold tracking-[-0.48px]'>FAQ&apos;s</h2>
                                <div className='my-3 md:w-[65rem]'>
                                    <Faq />
                                </div>
                            </div>


                            {/* Sponsored Adv  */}
                            <div className='mt-5 mb-10'>
                                <p className='text-[12px] text-[#484848] mb-2 underline'>Sponsored</p>
                                <div className='w-full bg-[#E1E1E1] h-[15rem]'>

                                </div>
                            </div>


                        </div>
                    </div>


                    <div className='md:flex hidden'>
                        <div className='md:w-[74%]'>
                            <div className='mb-[2rem] w-full'>
                                <h1 className='md:text-[24px] mb-3 text-[18px] text-[#484848] font-semibold tracking-[-0.48px]'>Hyundai Cars</h1>
                                <div className='bg-[#f4f4f4] text-[#6F6F6F]  p-3'>
                                    <p>Hyundai Aura Prices: The price of the Hyundai Aura in New Delhi is Rs 6.33 Lakh (Ex-showroom). To know more about the Aura Images, Reviews, Offers & other details, download the Get On road price App. Hyundai Aura mileage : It returns a certified mileage of . <span className={`${show ? null : "hidden"}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, nobis culpa nesciunt temporibus vel consequatur consectetur, natus ab magnam adipisci incidunt nulla dolor et. Explicabo quos omnis magni voluptatum cum natus tenetur similique, magnam itaque aspernatur, harum dolor nesciunt vitae.</span> </p>

                                    <div onClick={() => show ? setShow(false) : setShow(true)} className='text-right pt-[1rem] cursor-pointer'>
                                        <span className='mx-[1rem] text-[#0B9DBC] text-[16px] font-normal'>Read {show ? "Less" : "More"} <Image className='inline' src={down} alt="" /></span>
                                    </div>
                                </div>
                                <hr className='border-t-1 border-[#E1E1E1]' />
                            </div>


                            {/* Car Models  */}
                            <div className='w-full'>
                                <div className='flex justify-between my-2 px-10 border py-8 border-[#E1E1E1]'>
                                    <div className='w-[15rem]'>
                                        <Image src={car1} />
                                    </div>
                                    <div className='space-y-0.5'>
                                        <p className='text-[22px] font-semibold text-[#484848]'>Hyundai Exter</p>
                                        <span className='text-[#6F6F6F] text-[14px] font-normal'>Petrol | Diesel | Manual | Automatic</span>
                                        <p className='text-[22px] font-semibold text-[#484848]'>₹ 6.33 - ₹ 8.90 Lakh</p>
                                        <p className='text-[14px] text-[#6F6F6F] font-normal'>Ex-Showroom Price in Mumbai</p>
                                        <button className="text-[#CE4327] text-[16px] font-semibold ">Get Latest Offers</button>
                                    </div>
                                    <div>
                                        <span className='bg-[#0B9DBC] px-[0.6rem] py-[4px] flex text-[14px] font-semibold rounded-md text-white'>
                                            4.5
                                            <Image width={20} className='pl-[4px]' src={star} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className='flex justify-between my-2 px-10 border py-8 border-[#E1E1E1]'>
                                    <div className='w-[15rem]'>
                                        <Image src={car3} />
                                    </div>
                                    <div className='space-y-0.5'>
                                        <p className='text-[22px] font-semibold text-[#484848]'>Hyundai Exter</p>
                                        <span className='text-[#6F6F6F] text-[14px] font-normal'>Petrol | Diesel | Manual | Automatic</span>
                                        <p className='text-[22px] font-semibold text-[#484848]'>₹ 6.33 - ₹ 8.90 Lakh</p>
                                        <p className='text-[14px] text-[#6F6F6F] font-normal'>Ex-Showroom Price in Mumbai</p>
                                        <button className="text-[#CE4327] text-[16px] font-semibold ">Get Latest Offers</button>
                                    </div>
                                    <div>
                                        <span className='bg-[#0B9DBC] px-[0.6rem] py-[4px] flex text-[14px] font-semibold rounded-md text-white'>
                                            4.5
                                            <Image width={20} className='pl-[4px]' src={star} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className='flex justify-between my-2 px-10 border py-8 border-[#E1E1E1]'>
                                    <div className='w-[15rem]'>
                                        <Image src={car1} />
                                    </div>
                                    <div className='space-y-0.5'>
                                        <p className='text-[22px] font-semibold text-[#484848]'>Hyundai Exter</p>
                                        <span className='text-[#6F6F6F] text-[14px] font-normal'>Petrol | Diesel | Manual | Automatic</span>
                                        <p className='text-[22px] font-semibold text-[#484848]'>₹ 6.33 - ₹ 8.90 Lakh</p>
                                        <p className='text-[14px] text-[#6F6F6F] font-normal'>Ex-Showroom Price in Mumbai</p>
                                        <button className="text-[#CE4327] text-[16px] font-semibold ">Get Latest Offers</button>
                                    </div>
                                    <div>
                                        <span className='bg-[#0B9DBC] px-[0.6rem] py-[4px] flex text-[14px] font-semibold rounded-md text-white'>
                                            4.5
                                            <Image width={20} className='pl-[4px]' src={star} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className='flex justify-between my-2 px-10 border py-8 border-[#E1E1E1]'>
                                    <div className='w-[15rem]'>
                                        <Image src={car2} />
                                    </div>
                                    <div className='space-y-0.5'>
                                        <p className='text-[22px] font-semibold text-[#484848]'>Hyundai Exter</p>
                                        <span className='text-[#6F6F6F] text-[14px] font-normal'>Petrol | Diesel | Manual | Automatic</span>
                                        <p className='text-[22px] font-semibold text-[#484848]'>₹ 6.33 - ₹ 8.90 Lakh</p>
                                        <p className='text-[14px] text-[#6F6F6F] font-normal'>Ex-Showroom Price in Mumbai</p>
                                        <button className="text-[#CE4327] text-[16px] font-semibold ">Get Latest Offers</button>
                                    </div>
                                    <div>
                                        <span className='bg-[#0B9DBC] px-[0.6rem] py-[4px] flex text-[14px] font-semibold rounded-md text-white'>
                                            4.5
                                            <Image width={20} className='pl-[4px]' src={star} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className='flex justify-between my-2 px-10 border py-8 border-[#E1E1E1]'>
                                    <div className='w-[15rem]'>
                                        <Image src={car3} />
                                    </div>
                                    <div className='space-y-0.5'>
                                        <p className='text-[22px] font-semibold text-[#484848]'>Hyundai Exter</p>
                                        <span className='text-[#6F6F6F] text-[14px] font-normal'>Petrol | Diesel | Manual | Automatic</span>
                                        <p className='text-[22px] font-semibold text-[#484848]'>₹ 6.33 - ₹ 8.90 Lakh</p>
                                        <p className='text-[14px] text-[#6F6F6F] font-normal'>Ex-Showroom Price in Mumbai</p>
                                        <button className="text-[#CE4327] text-[16px] font-semibold ">Get Latest Offers</button>
                                    </div>
                                    <div>
                                        <span className='bg-[#0B9DBC] px-[0.6rem] py-[4px] flex text-[14px] font-semibold rounded-md text-white'>
                                            4.5
                                            <Image width={20} className='pl-[4px]' src={star} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className='flex justify-between my-2 px-10 border py-8 border-[#E1E1E1]'>
                                    <div className='w-[15rem]'>
                                        <Image src={car1} />
                                    </div>
                                    <div className='space-y-0.5'>
                                        <p className='text-[22px] font-semibold text-[#484848]'>Hyundai Exter</p>
                                        <span className='text-[#6F6F6F] text-[14px] font-normal'>Petrol | Diesel | Manual | Automatic</span>
                                        <p className='text-[22px] font-semibold text-[#484848]'>₹ 6.33 - ₹ 8.90 Lakh</p>
                                        <p className='text-[14px] text-[#6F6F6F] font-normal'>Ex-Showroom Price in Mumbai</p>
                                        <button className="text-[#CE4327] text-[16px] font-semibold ">Get Latest Offers</button>
                                    </div>
                                    <div>
                                        <span className='bg-[#0B9DBC] px-[0.6rem] py-[4px] flex text-[14px] font-semibold rounded-md text-white'>
                                            4.5
                                            <Image width={20} className='pl-[4px]' src={star} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-yellow-400 p-4 flex justify-evenly my-4">
                                    <div>
                                        <p className="text-2xl font-semibold">EMI Starts  at 12550/Month</p>
                                        <Emi_Modal />
                                    </div>
                                    <div>
                                        <button className="px-10 py-1.5 bg-[#CE4327] text-white text-xl font-semibold rounded-[10px]">GET OFFERS</button>
                                    </div>
                                </div>
                            </div>


                            {/* Brands Listing */}
                            <div className='w-full my-4'>
                                <p className='md:text-[24px] text-[18px] text-[#484848] font-semibold my-6'>Top Brands</p>
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


                            {/* Highlights  */}
                            <div className='w-full my-6'>

                                <p className='text-[24px] text-[#484848] font-semibold mb-3'>Key Highlights of Hyundai Cars</p>
                                <div className="relative overflow-x-auto">
                                    <table className="w-full text-left">
                                        <tbody>
                                            <tr className="bg-white border dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" className="px-6 font-semibold text-[#484848] py-4 whitespace-nowrap dark:text-white">
                                                    Popular Models
                                                </th>
                                                <td className="pl-[15rem] text-[#6F6F6F] py-4 font-normal">
                                                    Extra, Creta, Venu
                                                </td>
                                            </tr>
                                            <tr className="bg-white border dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" className="px-6 font-semibold text-[#484848] py-4 whitespace-nowrap dark:text-white">
                                                    Affordable Model
                                                </th>
                                                <td className="pl-[15rem] py-4 text-[#6F6F6F] font-normal">
                                                    Tata Tiago(Rs. 5.60 Lakh)
                                                </td>
                                            </tr>
                                            <tr className="bg-white border dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" className="px-6 font-semibold text-[#484848] py-4 whitespace-nowrap dark:text-white">
                                                    Most Expensive
                                                </th>
                                                <td className="pl-[15rem] text-[#6F6F6F] py-4 font-normal">
                                                    Tata Safari(Rs. 15.85 Lakh)
                                                </td>
                                            </tr>
                                            <tr className="bg-white border dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" className="px-6 font-semibold text-[#484848] py-4 whitespace-nowrap dark:text-white">
                                                    Number of Cars
                                                </th>
                                                <td className="pl-[15rem] text-[#6F6F6F] py-4 font-normal">
                                                    17 (3 Compact SUV, 9 SUV, 3 Hatchback, 1 Sedan, 1 Compact Sedan)
                                                </td>
                                            </tr>
                                            <tr className="bg-white border dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" className="px-6 font-semibold text-[#484848] py-4 whitespace-nowrap dark:text-white">
                                                    Upcoming Models
                                                </th>
                                                <td className="pl-[15rem] text-[#6F6F6F] py-4 font-normal">
                                                    Tata Harrier 2023, Tata Altroz Racer, Tata Curvv EV, Tata Curvv, Tata Avinya
                                                </td>
                                            </tr>
                                            <tr className="bg-white border dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" className="px-6 font-semibold text-[#484848] py-4 whitespace-nowrap dark:text-white">
                                                    Dealer Showrooms
                                                </th>
                                                <td className="pl-[15rem] text-[#6F6F6F] py-4 font-normal">
                                                    1620 Showrooms
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>



                            {/* Top cities  */}
                            <div className='w-full'>
                                <p className='text-[24px] text-[#484848] font-semibold my-4'>Find Hyundai Car Dealers in top Cities</p>
                                <div className='grid grid-cols-5 gap-y-8 border border-[#E1E1E1] py-12'>
                                    <div className='text-center'>
                                        <Image width={100} className='mx-auto' src={ahmedabad} />
                                        <p className='text-xl text-[#6F6F6F] font-normal my-1'>Ahmedabad</p>
                                    </div>
                                    <div className='text-center'>
                                        <Image width={100} className='mx-auto' src={bangalore} />
                                        <p className='text-xl text-[#6F6F6F] font-normal my-1'>Bangalore</p>
                                    </div>
                                    <div className='text-center'>
                                        <Image width={100} className='mx-auto' src={chennai} />
                                        <p className='text-xl text-[#6F6F6F] font-normal my-1'>Chennai</p>
                                    </div>
                                    <div className='text-center'>
                                        <Image width={100} className='mx-auto' src={delhi} />
                                        <p className='text-xl text-[#6F6F6F] font-normal my-1'>Delhi</p>
                                    </div>
                                    <div className='text-center'>
                                        <Image width={100} className='mx-auto' src={hyderabad} />
                                        <p className='text-xl text-[#6F6F6F] font-normal my-1'>Hyderabad</p>
                                    </div>
                                    <div className='text-center'>
                                        <Image width={100} className='mx-auto' src={jaipur} />
                                        <p className='text-xl text-[#6F6F6F] font-normal my-1'>Jaipur</p>
                                    </div>
                                    <div className='text-center'>
                                        <Image width={100} className='mx-auto' src={kolkata} />
                                        <p className='text-xl text-[#6F6F6F] font-normal my-1'>Kolkata</p>
                                    </div>
                                    <div className='text-center'>
                                        <Image width={100} className='mx-auto' src={lucknow} />
                                        <p className='text-xl text-[#6F6F6F] font-normal my-1'>Lucknow</p>
                                    </div>
                                    <div className='text-center'>
                                        <Image width={100} className='mx-auto' src={mumbai} />
                                        <p className='text-xl text-[#6F6F6F] font-normal my-1'>Mumbai</p>
                                    </div>
                                    <div className='text-center'>
                                        <Image width={100} className='mx-auto' src={pune} />
                                        <p className='text-xl text-[#6F6F6F] font-normal my-1'>Pune</p>
                                    </div>
                                </div>
                            </div>


                            {/* Reviews Section  */}
                            <div className='my-10'>
                                <p className='text-[24px] font-semibold text-[#484848] pb-2 tracking-[-0.48px]'>Aura E User Reviews</p>
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

                            {/* FAQ Section  */}
                            <div className='my-10'>
                                <p className='text-[24px] text-[#484848] font-semibold tracking-[-0.48px]'>FAQ&apos;s</p>
                                <div className='my-3 md:w-[65rem]'>
                                    <Faq />
                                </div>
                            </div>


                            {/* LAst Advert  */}
                            <div className='lg:w-full my-6'>
                                <div className='w-full h-[15rem] bg-[#0B9DBC]'>
                                    <p className='text-white text-3xl p-10'>
                                        Sponsored Adv
                                    </p>
                                </div>
                            </div>

                        </div>


                        <div className='md:w-[26%] mx-[1rem]'>

                            {/* Sponsored ADV  */}
                            <div>
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


                            {/* LAst Adv  */}
                            <div className='my-4'>
                                <Image src={last_adv} alt="" />
                            </div>

                        </div>
                    </div>


                </div>
            </div>
            <Footer />
        </>
    )
}

export default Brand