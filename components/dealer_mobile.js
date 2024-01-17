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
import { useRouter } from 'next/router';
import locationContext from '../context/LocationContext';
import { Link } from 'react-scroll';




export default function Dealers_Mobile({ bresponse, cities }) {

    const [update, setUpdate] = useState(false)
    const [show, setShow] = useState(false)
    const top_bar = useRef(null)
    const top_shift = useRef(null)
    const tab_change = useRef(null)
    let [distance, setDistance] = useState(0)
    const white = useRef(null)

    const url = "https://inquisitive-knickers-fish.cyclic.app"
    const context = React.useContext(locationContext)

    let { location, pinn, setLocation } = context

    const route = useRouter()

    const [city, setCity] = useState()

    const [mainb, setMainb] = useState(route.query.dealers.split("-")[0].charAt(0).toUpperCase() + route.query.dealers.split("-")[0].slice(1)
    )
    const [mainc, setMainc] = useState()
    const [mainp, setMainp] = useState(pinn)

    const [brand, setBrand] = useState(bresponse)

    const [dealer, setDealer] = useState([])

    const [cityData, setCityData] = useState()

    const [postal, showPostal] = useState()

    const [dloc, setDlock] = useState()



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

    async function getBrandData() {
        let city = route.query.dealers.split("-")[route.query.dealers.split("-").length - 1]

        setDlock(sessionStorage.getItem("city") ? sessionStorage.getItem("city") : location)
        setCityData(sessionStorage.getItem("city") ? sessionStorage.getItem("city") : location)

        let data = await fetch(`${url}/dealer`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                city: location,
                brand: route.query.dealers.split("-")[0].charAt(0).toUpperCase() + route.query.dealers.split("-")[0].slice(1),
                pin: ""
            })
        })


        if (data.status === 201) {
            showPostal({
                pin: pinn,
                stat: true
            })
        }


        let response = await data.json()


        setDealer(response)
    }


    useEffect(() => {
        window.onscroll = function () { scrollFunction() };
        setMainc(sessionStorage.getItem("city_name") ? sessionStorage.getItem("city_name") : location)
        // setDealer(sessionStorage.getItem("dealer_details") ? JSON.parse(sessionStorage.getItem("dealer_details")) : [])
        getBrandData()
        setBrand(bresponse)
        setCity(cities)
    }, [location])






    return (
        <>
            <div className='mx-2 md:mx-0'>
                <div ref={top_bar} className={`${style["top-scroll"]} hidden md:block`}>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <ul className='whitespace-nowrap text-gray-800 md:whitespace-normal md:overflow-x-auto md:mx-[2rem] overflow-x-scroll mx-[1rem] my-[1rem] flex space-x-10 2xl:space-x-[2rem] text-[16px] font-normal tracking-[-0.32px]'>
                                <li><Image width={200} height={60} src={logo} /></li>
                                <li className='font-semibold text-[#484848]'>{route.query.dealers.split("-")[0].charAt(0).toUpperCase() + route.query.dealers.split("-")[0].slice(1)} <Image className='inline' src={edit} alt='edit' /></li>
                                <li className='hover:text-[#09809A] invisible hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold text-[#484848]'>Features & Specifications</li>
                                <li className='hover:text-[#09809A] invisible hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold text-[#484848]'>Variant</li>
                            </ul>
                        </div>
                        <div className='flex w-[25%] border-x border-[#E1E1E1]'>
                            <div className='px-4 w-1/2 py-[0.5rem] border-r justify-between border-[#E1E1E1] flex'>
                                <div className='pt-2'>
                                    <p className='text-[16px] text-[#6F6F6F]'>Brand</p>
                                    <p className='text-[13px] font-semibold text-[#484848]'>{route.query.dealers.split("-")[0].charAt(0).toUpperCase() + route.query.dealers.split("-")[0].slice(1)}</p>
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
                                <h1 className='md:text-[24px] text-[#484848] mb-2 mt-6 text-[18px] font-semibold tracking-[-0.48px]'>{route.query.dealers.split("-")[0].charAt(0).toUpperCase() + route.query.dealers.split("-")[0].slice(1)} Car Dealers & Showrooms in {location}</h1>
                                <div className='bg-[#f4f4f4] text-[#6F6F6F] p-3'>
                                    <p>{route.query.dealers.split("-")[0].charAt(0).toUpperCase() + route.query.dealers.split("-")[0].slice(1)} Aura E Prices: The price of the {route.query.dealers.split("-")[0].charAt(0).toUpperCase() + route.query.dealers.split("-")[0].slice(1)} Aura E in New Delhi is Rs 6.33 Lakh (Ex-showroom). To know more about the Aura E Images, Reviews, Offers & other details, download the Get On road price App. {route.query.dealers.split("-")[0].charAt(0).toUpperCase() + route.query.dealers.split("-")[0].slice(1)} Aura E mileage : It returns a certified mileage of . <span className={`${update ? null : "hidden"}`}>
                                    </span></p>

                                    <div onClick={() => update ? setUpdate(false) : setUpdate(true)} className='text-right cursor-pointer pt-[1rem]'>
                                        <span className='mx-[1rem] text-[#09809A] text-[14px] font-normal'>Read More <Image className='inline' src={down} alt="" /></span>
                                    </div>
                                </div>
                                <hr className='border-t-1 border-[#E1E1E1]' />
                                <div className={`flex space-x-2 w-full my-2`}>
                                    <Brand_Modal url={url} brand={route.query.dealers.split("-")[0].charAt(0).toUpperCase() + route.query.dealers.split("-")[0].slice(1)} />
                                    <City_Modal url={url} />
                                </div>


                                {/* Dealers Section  */}
                                <div className='mt-6'>
                                    <h2 className='md:text-[24px] text-[18px] text-[#484848] font-semibold mb-2'>Authorised {route.query.dealers.split("-")[0].charAt(0).toUpperCase() + route.query.dealers.split("-")[0].slice(1)} Dealers in {location}</h2>
                                    <div className='space-y-4'>
                                        {dealer.map((item, index) => {
                                            return (<div key={index} className='border border-[#C6C6C6] w-[18rem] px-4'>
                                                <p className='font-semibold text-[15px] text-[#484848] md:text-base py-2'>{item.dealer_name}</p>
                                                <p className='mb-4 text-[14px] md:text-base text-[#6F6F6F]'>{item.complete_address}</p>
                                                <p><img className='inline' src="./images/phone.svg" alt="" /><span className='text-[14px] md:text-base text-[#6F6F6F]'>{item.phone}</span></p>
                                                <button className='bg-[#09809A] py-1 px-2 text-white rounded-md w-full mt-2 mb-6'>Contact Dealer</button>
                                            </div>)
                                        })}
                                    </div>
                                </div>





                                {/* Brands Listing */}
                                <div className='w-full my-6'>
                                    <h2 className='md:text-[24px] text-[18px] text-[#484848] font-semibold mb-2'>Top Brands</h2>
                                    <div className='grid grid-cols-3 gap-y-8 border border-[#E1E1E1] py-12'>
                                        {brand.length > 0 ? brand.map((item, index) => {
                                            return (<Link key={index} href={`/new-cars/${item.brand.toLowerCase()}`}>
                                                <div key={index} className='text-center'>
                                                    <Image className='mx-auto' width={70} height={40} src={`https://ik.imagekit.io/GORP/Logos/${item.brand}.jpg?updatedAt=1693313074421`} />
                                                    <p className='text-[16px] text-[#484848] font-semibold my-3'>{item.brand}</p>
                                                </div>
                                            </Link>)

                                        }) : null}
                                    </div>

                                </div>


                                <div className='md:p-4 py-1.5'>
                                    <p>Home &gt; {route.query.dealers.split("-")[0].charAt(0).toUpperCase() + route.query.dealers.split("-")[0].slice(1)} &gt; Aura</p>
                                    <p className='my-4 text-[#6F6F6F]'>Disclaimer: While we do our best to ensure that these prices are accurate, we suggest to please contact your nearest dealer for current on road prices and offers.</p>
                                </div>

                            </div>




                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
