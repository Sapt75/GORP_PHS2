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
import Brand_Model from '../components/brand_modal';
import { Link } from 'react-scroll';
import ColorSlider from '../components/color';
import RLink from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import cross from "../public/images/cross.svg"





export default function Model_Web({ data, response, vresponse, vpresponse, query, head, citresponse, nomcity, specef, cres }) {

    const [update, setUpdate] = useState(false)
    const [show, setShow] = useState(false)
    const top_bar = useRef(null)
    const [getmodels, setGetModels] = useState(data);
    const [versionPrice, setVersionPrice] = useState(vpresponse)
    const [finalVersion, setFinalVersion] = useState(vresponse)
    const [getprices, setGetPrices] = useState([]);
    const [modelPrice, setModelPrice] = useState(response)
    const [getVersion, setVersion] = useState(vresponse)
    const [tshow, setTShow] = useState(false)
    const [modal, showModal] = useState(false)
    const [spec, setSpecs] = useState(specef)
    const [read, setRead] = useState(false)
    const [city, setCity] = useState(citresponse)
    const [rcity, setRCity] = useState(nomcity)
    const [tips, setTips] = useState({
        pros: "",
        cons: ""
    })
    const [filter, setFilter] = useState()
    const [fdata, setfData] = useState(vresponse)
    let [uniqueId, setUID] = useState(data[0].uid)
    let [model_id, setModel_ID] = useState(data[0].model_id)

    const route = useRouter()

    const host_url = `https://${head.host}/new-cars`

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            top_bar.current.classList.add(style.scrolling);
        } else {
            top_bar.current.classList.remove(style.scrolling);
        }
    }

    function numFormat(value) {
        const val = Math.abs(value)
        if (val >= 10000000) return `${(value / 10000000).toFixed(2)} Crore`
        if (val >= 100000) return `${(value / 100000).toFixed(2)} Lakh`
        return value;
    }

    function numFormat2(value) {
        const val = Math.abs(value)
        if (val >= 10000000) return `${(value / 10000000).toFixed(2)}`
        if (val >= 100000) return `${(value / 100000).toFixed(2)}`
        return value;
    }


    const url = "https://inquisitive-knickers-fish.cyclic.app"






    useEffect(() => {
        window.onscroll = function () { scrollFunction() };
        setTips({
            pros: {
                __html: data[0].pros
            },
            cons: {
                __html: data[0].cons
            }
        })

        setUID(data[0].uid)
        setModel_ID(data[0].model_id)
        setGetModels(data)
        response == "No Data" ? setModelPrice([]) : setModelPrice(response)
        setVersion(vresponse)
        setFinalVersion(vresponse)
        vpresponse == "No Data" ? setVersionPrice([]) : setVersionPrice(vpresponse)
        setCity(citresponse)
        setRCity(nomcity)
        setSpecs(specef)
    }, [data, response, vresponse, vpresponse, query, head, citresponse, nomcity, specef])




    return (
        <>

            <div className='mx-2 md:mx-0'>
                <div ref={top_bar} className={`${style["top-scroll"]} hidden md:block`}>
                    <div className='flex justify-around'>
                        <div className='flex'>
                            <ul className='whitespace-nowrap text-gray-800 md:whitespace-normal md:overflow-x-auto md:mx-0 overflow-x-scroll mx-[1rem] my-[0.5rem] flex space-x-10 2xl:space-x-[5rem] text-[16px] font-normal tracking-[-0.32px]'>
                                <li><Image className='w-auto h-[50px]' width={200} height={60} src={logo} alt='logo' /></li>
                                <Brand_Model url={url} state={true} brand={getmodels[0].brand} model={getmodels[0].model_name} />
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
                <div className='lg:mx-[5rem]'>
                    <div>
                        {/* <Image className='mx-auto' src={advert} alt="" /> */}
                        <div className='mt-[2rem] mb-[1rem]'>
                            <h1 className='text-[24px] text-[#484848] font-semibold tracking-[-0.4px]'>{getmodels[0].brand} {getmodels[0].model_name}<Brand_Model url={url} state={true} mod={true} brand={getmodels[0].brand} model={getmodels[0].model_name} /> </h1>
                            {/* <div className='flex py-3 justify-between'>
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
                            </div> */}
                        </div>

                        <ul className='whitespace-nowrap hidden md:flex md:whitespace-normal md:overflow-x-auto md:mx-0 overflow-x-scroll mx-[1rem] my-[1rem] space-x-5 md:space-x-[5rem] text-[16px] font-normal tracking-[-0.32px]'>
                            <li className='font-semibold text-[#484848]'><span title={`${getmodels[0].brand} ${getmodels[0].model_name}`}> {getmodels[0].model_name}  </span><Version_Modal brand={getmodels[0].brand} model={getmodels[0].model_name} version={getmodels[0].version_name} price={versionPrice} data={finalVersion} status={true} /></li>
                            <Link title={`${getmodels[0].model_name} Overview`} activeClass="active"
                                to="over" spy={true} smooth={true} offset={-150} duration={500}>
                                <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Overview</li>
                            </Link>
                            <Link title={`${getmodels[0].model_name} Variants`} activeClass="active"
                                to="ver" spy={true} smooth={true} offset={-150} duration={500}>
                                <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Variants</li>
                            </Link>
                            <Link title={`${getmodels[0].model_name} Colors`} activeClass="active"
                                to="col" spy={true} smooth={true} offset={-150} duration={500}>
                                <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Colors</li>
                            </Link>
                            <Link title={`${getmodels[0].model_name} Mileage`} activeClass="active"
                                to="mil" spy={true} smooth={true} offset={-150} duration={500}>
                                <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Performance [mileage]</li>
                            </Link>
                            {/* <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Similar Car</li>
                            <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>FAQ&apos;s</li>
                            <li className={`hover:text-[#09809A]  text-[#484848] hover:border-b-[3px] border-b-[3px] border-transparent hover:border-[#09809A] pb-2 cursor-pointer font-semibold`}>Download Brochure</li> */}
                        </ul>
                        <hr className='border-t-1 border-[#E1E1E1]' />
                        <div className='md:flex xl:space-x-[6rem] my-[1rem] py-[1rem] md:border md:border-[#E1E1E1]'>
                            <div className='md:w-[50%] text-center'>
                                <ImageSlider url={url} brand={getmodels[0].brand} model={getmodels[0].model_name} />
                                <span className='mx-[2rem] text-[14px] font-normal tracking-[-0.28px] text-[#09809A]'><Image className='inline' src={color} alt="colors" /> Colors</span>
                                {/* <span className='mx-[2rem] text-[14px] font-normal tracking-[-0.28px] text-[#09809A]'><Image className='inline' src={image} alt="" /> Images</span> */}
                            </div>
                            <div className='md:w-[40%]'>
                                <div className='hidden md:flex space-x-1'>
                                    <Version_Modal brand={getmodels[0].brand} model={getmodels[0].model_name} version={getmodels[0].version_name} price={versionPrice} data={finalVersion} />
                                    <City_Modal />
                                </div>
                                <div>
                                    <div className='hidden md:block'>
                                        <div className='pt-[1.5rem] space-x-[1.6rem]'>
                                            <span className='text-[22px] text-[#484848] font-semibold tracking-[-0.48px]'>₹ {modelPrice.length > 0 ? `${numFormat2(modelPrice[0].min_price)} - ${numFormat(modelPrice[0].max_price)}* ` : "No Data"}</span>
                                            <span className='text-[16px] text-[#CE4327] font-semibold underline'>View Price Breakup</span>
                                        </div>
                                        <span className='text-[14px] font-thin tracking-[-0.28px] text-[#484848]'>On-Road Price New Delhi</span>
                                    </div>
                                    {/* <div className='flex justify-between w-100 mt-[2rem] md:mt-0 bg-[#F4F4F4] py-[0.5rem]'>
                                        <div className='px-2 pb-1'>
                                            <p className='text-[16px] text-[#484848] font-medium pb-0.5 tracking-[-0.28px]'>EMI Starts  at 12550/Month</p>
                                            <Emi_Modal />
                                        </div>
                                        <div>
                                            <button className='px-[1rem] hover:bg-[#09809A] bg-[#09809A] py-[0.1rem] mx-[1rem] mt-[0.5rem] rounded-[5px] text-white text-[14px] font-medium tracking-[-0.24px]'>View Offers</button>
                                        </div>
                                    </div> */}
                                    <button className='text-[14px] hidden md:block my-[1rem] py-[0.5rem] rounded-[2px] bg-[#09809A] font-medium tracking-[-0.28px] text-white w-full md:w-3/5'>Get The Best Deal</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='w-[74%]'>
                            <div id='over' className='mb-[1rem] w-full'>
                                <h2 className='md:text-[24px] py-2 text-[18px] text-[#484848] font-semibold tracking-[-0.48px]'>{getmodels[0].brand} {getmodels[0].model_name} Latest Updates</h2>
                                <div className='bg-[#f4f4f4] text-[#6F6F6F]  p-3'>
                                    <p>{getmodels[0].model_description}<span className={`${show ? null : "hidden"}`}></span> </p>

                                    <div onClick={() => show ? setShow(false) : setShow(true)} className='text-right pt-[1rem] cursor-pointer'>
                                        <span className='mx-[1rem] text-[#09809A] text-[16px] font-normal'>Read {show ? "Less" : "More"} <Image className='inline' src={down} alt="down" /></span>
                                    </div>
                                </div>
                                <hr className='border-t-1 border-[#E1E1E1]' />
                                <div className='py-5'>
                                    <div className='w-full rounded-[2px] flex justify-between font-semibold text-[#484848] py-2'>
                                        <h2 className='md:text-[24px] text-[12px] font-semibold tracking-[-0.32px]'>Key Specs of {getmodels[0].brand} {getmodels[0].model_name} </h2>
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
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>{getmodels[0].Specifications.engine_and_transmission.fuel_type}</p>
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
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>{getmodels[0].seating_capacity}</p>
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
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>{getmodels[0].body_type}</p>
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
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>{getmodels[0].transmission_type}</p>
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
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>{getmodels[0].Specifications.engine_and_transmission.displacement} CC</p>
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
                                                    <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>{getmodels[0].Specifications.engine_and_transmission.arai_mileage ? getmodels[0].Specifications.engine_and_transmission.arai_mileage : "null"} /kmph</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='py-[1.5rem]'>
                                        <Image src={advert2} alt="advertisement" />
                                    </div>
                                </div>
                            </div>





                            {/* Car Versions Listing  */}

                            <div id='ver' className='lg:w-full'>
                                <p className='lg:text-[24px] text-[#484848] text-[18px] my-2 font-semibold tracking-[-0.48px]'>{getmodels[0].brand} {getmodels[0].model_name} Variants 2023</p>
                                <div>
                                    <ul className='flex space-x-8 px-4 py-3 text-[#484848] font-semibold'>
                                        {finalVersion.filter((value, index, self) => {
                                            return index === self.findIndex((t) => {
                                                return t.Specifications.engine_and_transmission.fuel_type == value.Specifications.engine_and_transmission.fuel_type
                                            })
                                        }).map((item, index) => {
                                            return (<li onClick={() => {
                                                setFilter(item.Specifications.engine_and_transmission.fuel_type)
                                                setfData(data.filter((itm) => item.Specifications.engine_and_transmission.fuel_type === `${itm.Specifications.engine_and_transmission.fuel_type}`))
                                            }} key={index} className='hover:text-[#09809A] hover:border-b-[3px]  border-[#09809A] cursor-pointer'>{item.Specifications.engine_and_transmission.fuel_type}</li>)
                                        })}
                                    </ul>
                                    {filter ? <span className="text-[14px] border-[1px] border-[#C6C6C6] rounded-lg px-4 py-0.5">
                                        {filter} <Image onClick={() => {
                                            setFilter(null)
                                            setfData(finalVersion)
                                        }} src={cross} className="inline pb-0.5 ml-2 cursor-pointer" width={12} alt="cross" />
                                    </span> : null}
                                    <div className='flex justify-between bg-[#F4F4F4] py-3 mt-4 px-4'>
                                        <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px]'>Variants</p>
                                        <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px] w-[25rem] text-right'>On Road Price</p>
                                        <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px]'>Price Breakup</p>
                                    </div>

                                    {/* Versions  */}
                                    <div>
                                        {fdata.map((element, id) => {
                                            return (<div key={id} className={`${update ? "flex" : id > 3 ? "hidden" : "flex"} justify-between py-3 px-4 border border-[#C6C6C6]`}>
                                                <div className='w-[25rem]'>
                                                    <RLink title={`${element.model_name} ${element.version_name}`} href={`/new-cars/${element.brand.toLowerCase()}/${element.model_name.toLowerCase().split(" ").join("-")}/${element.version_name.toLowerCase().split(" ").join("-")}`}>
                                                        <h3 className='text-[18px] mb-1 text-[#484848] font-semibold tracking-[-0.36px]'>{element.model_name} {element.version_name}</h3>
                                                    </RLink>
                                                    <span className='text-[14px] text-[#6F6F6F] font-normal tracking-[-0.28px]'>{element.Specifications.engine_and_transmission.displacement} cc, {element.transmission_type}, {element.Specifications.engine_and_transmission.fuel_type} </span>
                                                </div>


                                                <div>
                                                    <p className='text-[18px] text-[#484848] font-semibold tracking-[-0.36px]'>{versionPrice.length > 0 ? `₹ ${numFormat(versionPrice.find(o => o.Version_UID === element.uid).ex_showroom_price)}` : null} </p>
                                                    {/* <div className='pb-[1rem]'>
            <input className='mx-1' type="checkbox"></input>
            <span className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
        </div> */}
                                                </div>
                                                <div>
                                                    <p title={`${getmodels[0].model_name} ${getmodels[0].version_name} Price in Mumbai`} className='text-[16px] text-[#CE4327] cursor-pointer font-semibold tracking-[-0.24px]'>View Price Breakup</p>
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
                                <h2 className='lg:text-[24px] text-[#484848] text-[16px] my-4 font-semibold tracking-[-0.48px]'>{getmodels[0].brand} {getmodels[0].model_name} Colors</h2>
                                <div className='border-[1px] border-[#C6C6C6]'>
                                    <ColorSlider url={url} data={cres} brand={getmodels[0].brand} model={getmodels[0].model_name} />
                                    {/* <div className='flex justify-center space-x-5 pt-8 pb-4'>
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
                                    </div> */}
                                </div>
                            </div>



                            {/* Mileage Lisitin  */}
                            <div id='mil' className='mb-[2rem] w-full'>
                                <h2 className='md:text-[24px] text-[18px] text-[#484848] font-semibold tracking-[-0.48px]'>{getmodels[0].brand} {getmodels[0].model_name} Mileage</h2>
                                <div className='bg-[#f4f4f4] text-[#6F6F6F]  p-3'>
                                    <p>{getmodels[0].mileage_algorithm}<span className={`${show ? null : "hidden"}`}></span> </p>

                                    <div onClick={() => show ? setShow(false) : setShow(true)} className='text-right pt-[1rem] cursor-pointer'>
                                        <span className='mx-[1rem] text-[#09809A] text-[16px] font-normal'>Read {show ? "Less" : "More"} <Image className='inline' src={down} alt="down" /></span>
                                    </div>
                                </div>
                                <hr className='border-t-1 border-[#E1E1E1]' />

                                <div className='my-2 md:w-full'>
                                    <ul className='bg-[#09809A] flex justify-between py-3 mb-3 px-4'>
                                        <li className='text-white text-[16px] font-semibold tracking-[-0.32px]'>Varient</li>
                                        <li className='text-white text-[16px] font-semibold tracking-[-0.32px]'>Transmission</li>
                                        <li className='text-white pr-2 text-[16px] font-semibold tracking-[-0.32px]'>Mileage</li>
                                    </ul>
                                    {getmodels.filter((value, index, self) => {
                                        return index === self.findIndex((t) => {
                                            return t.Specifications.engine_and_transmission.fuel_type == value.Specifications.engine_and_transmission.fuel_type
                                        })
                                    }).map((item, index) => {
                                        return (<ul key={index} className='border px-4 border-[#C6C6C6] flex justify-between mb-3'>
                                            <li className='font-normal py-2'>
                                                <p className='text-[#484848] font-semibold text-[18px]'>{item.Specifications.engine_and_transmission.fuel_type}</p>
                                                <p className='text-[14px] text-[#6F6F6F]'>{item.Specifications.engine_and_transmission.displacement} cc</p>
                                            </li>
                                            <li className=' pt-6 text-[17px] text-[#6F6F6F] leading-[5px] tracking-[-0.32px]'>
                                                {item.transmission_type}
                                            </li>
                                            <li className=' pt-4 text-[18px] text-[#484848] font-semibold tracking-[-0.2px]'>
                                                {item.Specifications.engine_and_transmission.arai_mileage ? item.Specifications.engine_and_transmission.arai_mileage : "null"} KMPL</li>
                                        </ul>)
                                    })}
                                </div>
                            </div>


                            {/* Advert Model  */}
                            <div className='lg:w-full flex space-x-2 my-4'>
                                <div className='w-1/2'>
                                    <div className='w-full bg-[#09809A] px-5 max-h-fit h-fit'>
                                        <p className='text-white text-[32px] font-bold'>Hyundai Aura Brochure</p>
                                        <p className='text-white text-[22px] w-3/4'>Download the brochure to view detailed price, specs, and features</p>
                                        <div className='flex space-x-6 pt-4'>
                                            <p className='text-white text-[22px] mt-[3rem]'>Download Brochure <Image width={22} className='inline' src={download} alt='download' /></p>
                                            <Image src={model_car} alt='car' />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-1/2'>
                                    <div className='w-full bg-[#F4F4F4] px-5 max-h-fit h-fit'>
                                        <p className='text-3xl font-semibold pt-2'>Contact Hyundai Dealer</p>
                                        <p className='text-[22px] w-4/5 pt-2'>Get in touch for the best buying option from your authorized dealer</p>
                                        <div className='pt-6'>
                                            <Image className='inline' src={price_tag} alt='price-tag' />
                                            <button className='bg-black py-2 w-3/4 rounded-md mx-4 text-white'>Locate the dealer near you</button>
                                        </div>
                                    </div>
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
                            <Right url={url} uid={getmodels[0].uid} brand={getmodels[0].brand} model={getmodels[0].model_name} />
                        </div>
                    </div>

                    <div className='pb-4'>
                        <p>Home &gt; Hyundai &gt; Aura</p>
                    </div>


                </div>
            </div >
        </>
    )
}











