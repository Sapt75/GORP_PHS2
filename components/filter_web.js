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
import InfiniteScroll from 'react-infinite-scroll-component';
import CustomSeparator from './breadcrumbs';
import TemporaryDrawer from './deal';







export default function Filter_Web({ data, pricedata, query, tdata, ftdata, head, bres }) {

    const [show, setShow] = useState(false)
    const top_bar = useRef(null)
    const [getbranddata, setGetbranddata] = useState(data);
    const [getprices, setGetPrices] = useState(pricedata);
    const [read, setRead] = useState(false)
    const [trans, setTrans] = useState(tdata)
    const [cbrand, setBrand] = useState(bres)
    // const [desc, setDesc] = useState(dres)


    const url = "https://inquisitive-knickers-fish.cyclic.app"

    const route = useRouter()


    function numFormat(value) {
        const val = Math.abs(value)
        if (val >= 10000000) return `${(value / 10000000).toFixed(2)} Crore`
        if (val >= 100000) return `${(value / 100000).toFixed(2)} Lakh`
        return value;
    }




    function scrollFunction() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            top_bar.current.classList.add(style.scrolling);
        } else {
            top_bar.current.classList.remove(style.scrolling);
        }
    }


    async function fetchAgain() {
        const res = await fetch(`${url}/filter/${route.query[0].split("-").join("_")}/${route.query[0].split("-")[0]}/${false}`, {
            // const res = await fetch(`/getonebrandcars?brand=${brand}&model=${model}&page=${pageNumber}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();

        setGetbranddata((preValue) => [...preValue].concat(data))

    }



    useEffect(() => {
        window.onscroll = function () { scrollFunction() };
        setGetbranddata(data)
        setGetPrices(pricedata)
        setTrans(tdata)
        setBrand(bres)
        // setDesc(dres)
    }, [data, pricedata, query, trans, ftdata, head])




    return (
        <>
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


                    <div className='md:flex hidden'>
                        <div className='md:w-[74%]'>
                            <div className='mb-[2rem] w-full'>
                                <h1 className='md:text-[24px] mb-3 text-[18px] text-[#484848] font-semibold tracking-[-0.48px]'>{getbranddata[0].brand} Cars</h1>
                                <div className='bg-[#f4f4f4] text-[#6F6F6F]  p-3'>
                                    {/* <p>{desc.brand_description}<span className={`${show ? null : "hidden"}`}></span> </p> */}

                                    <div onClick={() => show ? setShow(false) : setShow(true)} className='text-right pt-[1rem] cursor-pointer'>
                                        <span className='mx-[1rem] text-[#0B9DBC] text-[16px] font-normal'>Read {show ? "Less" : "More"} <Image className='inline' src={down} alt="" /></span>
                                    </div>
                                </div>
                                <hr className='border-t-1 border-[#E1E1E1]' />
                            </div>


                            {/* Car Models  */}
                            <div className='w-full'>
                                <InfiniteScroll
                                    dataLength={getbranddata ? getbranddata.length : null}
                                    next={fetchAgain}
                                    hasMore={true}
                                    loader={<h4>Loading...</h4>}
                                >
                                    {getbranddata.map((item, index) => {
                                        return (<div key={index} className='flex justify-between my-2 px-10 border py-8 border-[#E1E1E1]'>
                                            <div className='w-[15rem]'>
                                                <Image width={200} height={200} src={`https://ik.imagekit.io/GORP/${item.brand.split(" ").join("_")}/${item.model_name.split(" ").join("_")}/${item.model_name.split(" ").join("_")}.jpg`} />
                                            </div>
                                            <div className='space-y-0.5'>
                                                <Link href={`/new-cars/${item.brand.toLowerCase().split(" ").join("-")}/${item.model_name.toLowerCase().split(' ').join("-")}`}>
                                                    <h3 className='text-[22px] font-semibold text-[#484848]'>{item.brand} {item.model_name}</h3>
                                                </Link>
                                                <span className='text-[#6F6F6F] text-[14px] font-normal'>
                                                    {trans.length > 0 ? trans.filter((value, index, self) => {
                                                        return index === self.findIndex((t) => {
                                                            if (t.model_name === item.model_name) {
                                                                return t.Specifications.engine_and_transmission.fuel_type == value.Specifications.engine_and_transmission.fuel_type
                                                            }
                                                        })

                                                    }).map((itm) => itm.Specifications.engine_and_transmission.fuel_type).join(" | ") : null} <span className='mr-1'>
                                                        |
                                                    </span>
                                                    {trans.length > 0 ? trans.filter((value, index, self) => {
                                                        return index === self.findIndex((t) => {
                                                            if (t.model_name === item.model_name) {
                                                                return t.transmission_type == value.transmission_type
                                                            }
                                                        })

                                                    }).map((itm) => itm.transmission_type).join(" | ") : null}
                                                </span>

                                                {getprices.map((element) => {
                                                    return element.model_id === item.model_id ? <p className='text-[22px] font-semibold text-[#484848]'>₹ {numFormat(element.min_price)} - ₹ {numFormat(element.max_price)}</p> : null
                                                })}
                                                <p className='text-[14px] text-[#6F6F6F] font-normal'>Ex-Showroom Price in Mumbai</p>
                                                <button className="text-[#CE4327] text-[16px] font-semibold ">Get Latest Offers</button>
                                            </div>
                                            <div>
                                                <span className='bg-[#0B9DBC] px-[0.6rem] py-[4px] flex text-[14px] font-semibold rounded-md text-white'>
                                                    4.5
                                                    <Image width={20} className='pl-[4px]' src={star} alt="" />
                                                </span>
                                            </div>
                                        </div>)
                                    })}
                                </InfiniteScroll>
                                <div class="bg-yellow-400 p-4 flex justify-evenly my-4">
                                    <div>
                                        <p class="text-2xl font-semibold">EMI Starts  at 12550/Month</p>
                                        <Emi_Modal />
                                    </div>
                                    <div>
                                        <button class="px-10 py-1.5 bg-[#CE4327] text-white text-xl font-semibold rounded-[10px]">GET OFFERS</button>
                                    </div>
                                </div>
                            </div>


                            {/* Brands Listing */}
                            <div className='w-full my-4'>
                                <h2 className='md:text-[24px] text-[18px] text-[#484848] font-semibold my-6'>Top Brands</h2>
                                <div className='grid grid-cols-4 gap-y-8 border border-[#E1E1E1] py-12'>
                                    {cbrand.map((item, index) => {
                                        return (<Link key={index} href={`/new-cars/${item.brand.toLowerCase().split(" ").join("-")}`}>
                                            <div key={index} className='text-center'>
                                                <Image className='mx-auto' width={100} height={70} src={`https://ik.imagekit.io/GORP/Logos/${item.brand}.jpg?updatedAt=1693313074421`} />
                                                <p className='text-xl text-[#484848] font-semibold my-3'>{item.brand}</p>
                                            </div>
                                        </Link>)

                                    })}
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


                            <CustomSeparator />
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
                                        <TemporaryDrawer brand={getbranddata[0].brand} right={true} model={getbranddata[0].model} />
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
        </>
    )
}



