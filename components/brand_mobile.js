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
import { useRouter } from 'next/router';
import Link from 'next/link';







export default function Brand_Mobile({ data, pricedata, query, tdata, bres, dres, head }) {

    const [update, setUpdate] = useState(false)
    const [show, setShow] = useState(false)
    const top_bar = useRef(null)
    const [getbranddata, setGetbranddata] = useState(data);
    const [getprices, setGetPrices] = useState(pricedata);
    const [read, setRead] = useState(false)
    const [trans, setTrans] = useState(tdata)
    const [cbrand, setBrand] = useState(bres)
    const [desc, setDesc] = useState(dres)


    function numFormat(value) {
        const val = Math.abs(value)
        if (val >= 10000000) return `${(value / 10000000).toFixed(2)} Crore`
        if (val >= 100000) return `${(value / 100000).toFixed(2)} Lakh`
        return value;
    }






    useEffect(() => {
        setGetbranddata(data)
        setGetPrices(pricedata)
        setTrans(tdata)
        setBrand(bres)
        setDesc(dres)
    }, [])




    return (
        <>
            <div className='mx-2 md:mx-0'>
                <div className='lg:mx-[5rem]'>

                    <div className='mb-[2rem]'>
                        <Image className='mx-auto' src={advert} alt="" />
                    </div>


                    <div className='md:hidden'>
                        <div className='md:w-[74%]'>
                            <div className='mb-[2rem] w-full'>
                                <h1 className='md:text-[24px] text-[#484848] mb-3 text-[20px] font-semibold tracking-[-0.48px]'>Hyundai Cars</h1>
                                <div className='bg-[#f4f4f4] text-[#6F6F6F] p-3'>
                                    <p>{desc.brand_description}<span className={`${update ? null : "hidden"}`}>
                                    </span></p>

                                    <div onClick={() => update ? setUpdate(false) : setUpdate(true)} className='text-right cursor-pointer pt-[1rem]'>
                                        <span className='mx-[1rem] text-[#0B9DBC] text-[16px] font-normal'>Read More <Image className='inline' src={down} alt="" /></span>
                                    </div>
                                </div>
                                <hr className='border-t-1 border-[#E1E1E1]' />
                            </div>



                            {/* Car Models  */}
                            <div className='w-full'>
                                {getbranddata.map((item, index) => {
                                    return (<div key={index} className='flex justify-between my-2 border py-8 border-[#E1E1E1]'>
                                        <div className='w-[8rem]'>
                                            <Image width={200} height={200} src={`https://ik.imagekit.io/GORP/${item.brand.split(" ").join("_")}/${item.model_name.split(" ").join("_")}/${item.model_name.split(" ").join("_")}.jpg`} alt={`${item.brand} image`} />
                                        </div>
                                        <div className='space-y-0.5'>
                                            <Link href={`/new-cars/${item.brand.toLowerCase().split(" ").join("-")}/${item.model_name.toLowerCase().split(' ').join("-")}`}>
                                                <h3 className='text-[16px] font-semibold text-[#484848]'>{item.brand} {item.model_name}</h3>
                                            </Link>
                                            <span className='text-[#6F6F6F] text-[12px] font-normal'>
                                                {trans.filter((value, index, self) => {
                                                    return index === self.findIndex((t) => {
                                                        if (t.model_name === item.model_name) {
                                                            return t.Specifications.engine_and_transmission.fuel_type == value.Specifications.engine_and_transmission.fuel_type
                                                        }
                                                    })

                                                }).map((itm) => itm.Specifications.engine_and_transmission.fuel_type).join(" | ")} <span className='mr-1'>
                                                    |
                                                </span>
                                                {trans.filter((value, index, self) => {
                                                    return index === self.findIndex((t) => {
                                                        if (t.model_name === item.model_name) {
                                                            return t.transmission_type == value.transmission_type
                                                        }
                                                    })

                                                }).map((itm) => itm.transmission_type).join(" | ")}
                                            </span>
                                            {getprices.map((element) => {
                                                return element.model_id === item.model_id ? <p className='text-[14px] font-semibold text-[#484848]'>₹ {numFormat(element.min_price)} - ₹ {numFormat(element.max_price)}</p> : null
                                            })}

                                            <p className='text-[12px] text-[#6F6F6F] font-normal'>Ex-Showroom Price in Mumbai</p>
                                            <button className="text-[#CE4327] text-[16px] font-semibold ">Get Latest Offers</button>
                                        </div>
                                        <div className='mr-2'>
                                            <span className='bg-[#0B9DBC] px-[0.6rem] py-[4px] flex text-[10px] font-semibold rounded-md text-white'>
                                                4.5
                                                <Image width={15} className='pl-[4px]' src={star} alt="" />
                                            </span>
                                        </div>
                                    </div>)
                                })}
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
                                <h2 className='md:text-[24px] text-[18px] text-[#484848] font-semibold mt-6 mb-3'>Top Brands</h2>
                                <div className='grid grid-cols-3 gap-y-8 border border-[#E1E1E1] py-12'>
                                    {cbrand.map((item, index) => {
                                        return (<Link key={index} href={`/new-cars/${item.toLowerCase().split(" ").join("-")}`}>
                                            <div className='text-center'>
                                                <Image className='mx-auto' width={70} height={40} src={`https://ik.imagekit.io/GORP/Logos/${item}.jpg?updatedAt=1693313074421`} />
                                                <p className='text-[16px] text-[#484848] font-semibold my-3'>{item}</p>
                                            </div>
                                        </Link>)

                                    })}
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



                </div>
            </div>
        </>
    )
}



