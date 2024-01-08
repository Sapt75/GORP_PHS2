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
import { useRouter } from 'next/router';
import RLink from 'next/link';
import ColorSlider from '../components/color';






export default function Model_Mobile({ data, response, vresponse, vpresponse, query, head, citresponse, nomcity, specef, cres }) {


    const [update, setUpdate] = useState(false)
    const [show, setShow] = useState(false)
    const top_shift = useRef(null)
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
    let [uniqueId, setUID] = useState(data[0].uid)
    let [model_id, setModel_ID] = useState(data[0].model_id)

    const route = useRouter()

    const host_url = `https://${head.host}/new-cars`


    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            top_shift.current.classList.add("mt-[-4rem]")
        } else {
            top_shift.current.classList.remove("mt-[-4rem]")
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
                <div className='lg:mx-[5rem]'>
                    <div>
                        <div className='h-[2rem] md:h-auto'>
                            <ul ref={top_shift} className={`flex ${style["top-top"]} fixed top-top z-[999] bg-white w-full md:hidden whitespace-nowrap overflow-x-scroll md:whitespace-normal space-x-8 md:space-x-[5rem] text-[16px] border-y border-[#E1E1E1] font-normal tracking-[-0.32px] px-2`}>
                                <li className='font-semibold text-[#484848] text-[14px] my-2'><span title={`${getmodels[0].brand} ${getmodels[0].model_name}`}> {getmodels[0].model_name}  </span><Version_Modal brand={getmodels[0].brand} model={getmodels[0].model_name} version={getmodels[0].version_name} price={versionPrice} data={finalVersion} status={true} /></li>
                                <Link title={`${getmodels[0].model_name} Overview`} activeClass="active"
                                    to="over" spy={true} smooth={true} offset={-150} duration={500}>
                                    <li className='hover:text-[#09809A] text-[14px] text-[#484848] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold my-2'>Overview</li>
                                </Link>
                                <Link title={`${getmodels[0].model_name} Variants`} activeClass="active"
                                    to="ver" spy={true} smooth={true} offset={-150} duration={500}>
                                    <li className='hover:text-[#09809A] text-[14px] text-[#484848] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold my-2'>Variant</li>
                                </Link>
                                <Link title={`${getmodels[0].model_name} Colors`} activeClass="active"
                                    to="col" spy={true} smooth={true} offset={-150} duration={500}>
                                    <li className='hover:text-[#09809A] text-[14px] text-[#484848] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold my-2'>Colors</li>
                                </Link>
                                <Link title={`${getmodels[0].model_name} Mileage`} activeClass="active"
                                    to="mil" spy={true} smooth={true} offset={-150} duration={500}>
                                    <li className='hover:text-[#09809A] text-[14px] text-[#484848] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold my-2'>Performance [mileage]</li>
                                </Link>
                                {/* <li className='hover:text-[#09809A] text-[14px] text-[#484848] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold my-2'>Similar Car</li>
                                <li className='hover:text-[#09809A] text-[14px] text-[#484848] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold my-2'>FAQ&apos;s</li>
                                <li className='hover:text-[#09809A] text-[14px] text-[#484848] hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold my-2'>Download Brochure</li> */}
                                <li className='my-1.5'>
                                    <button className='text-white text-[14px] px-4 bg-[#CE4327] font-semibold pb-1 rounded-md'>Get Offer</button>
                                </li>
                            </ul>
                        </div>
                        {/* <Image className='mx-auto' src={advert} alt="" /> */}
                        <div className='mt-[2rem] mb-[1rem]'>
                            <h1 className='text-[24px] text-[#484848] font-semibold tracking-[-0.4px]'>{getmodels[0].brand} {getmodels[0].model_name} <Image className='inline' src={edit} alt='edit' /> </h1>
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
                            <div className='md:hidden'>
                                <span className='text-[22px] text-[#484848] font-semibold tracking-[-0.48px]'>₹ {modelPrice.length > 0 ? `${numFormat2(modelPrice[0].min_price)} - ${numFormat(modelPrice[0].max_price)}* ` : "No Data"}</span>
                                <p className='text-[12px] text-[#6F6F6F] space-x-2'>Ex-showroom price in <span className='text-[#09809A] underline'>New Delhi</span> <span>|</span> <span className='text-[#CE4327]'>Get on road price</span></p>
                            </div>
                            {/* <hr className='border-t-1 border-[#E1E1E1]' /> */}
                        </div>

                        <hr className='border-t-1 border-[#E1E1E1]' />
                        <div className='md:flex xl:space-x-[6rem] my-[1rem] py-[1rem] md:border md:border-[#E1E1E1]'>
                            <div className='md:w-[50%] text-center'>
                                <ImageSlider url={url} brand={getmodels[0].brand} model={getmodels[0].model_name} />
                                <span className='mx-[2rem] text-[14px] font-normal tracking-[-0.28px] text-[#09809A]'><Image className='inline' src={color} alt="" /> Colors</span>
                                {/* <span className='mx-[2rem] text-[14px] font-normal tracking-[-0.28px] text-[#09809A]'><Image className='inline' src={image} alt="" /> Images</span> */}
                            </div>
                            <h2 id='over' className='text-[18px] text-[#484848] mt-6 font-semibold tracking-[-0.48px]'>{getmodels[0].brand} {getmodels[0].model_name} Latest Updates</h2>
                            <div className='bg-[#f4f4f4] md:hidden mt-[0.5rem] text-[#6F6F6F] p-3'>
                                <p>{getmodels[0].model_description} <span className={`${update ? null : "hidden"}`}>
                                </span></p>

                                <div onClick={() => update ? setUpdate(false) : setUpdate(true)} className='text-right cursor-pointer pt-[1rem]'>
                                    <span className='mx-[1rem] text-[#09809A] text-[16px] font-normal'>Read More <Image className='inline' src={down} alt="" /></span>
                                </div>
                            </div>

                            <div className='py-2'>
                                <div className='w-full rounded-[2px] flex justify-between text-[#484848] py-2 px-2'>
                                    <h2 className='text-[15px] md:text-[24px] font-semibold tracking-[-0.32px]'>Key Specs of {getmodels[0].brand} {getmodels[0].model_name} {getmodels[0].version_name}</h2>
                                    <Link title={`${getmodels[0].model_name} ${getmodels[0].version_name} Features & Specification`} activeClass="active"
                                        to="spec" spy={true} smooth={true} offset={-150} duration={500}>
                                        <p className='md:text-[14px] text-[12px] font-semibold tracking-[-0.28px] mx-3 md:mx-[2rem] flex'>View All</p>
                                    </Link>
                                </div>
                                <div className={`${style["spec-category"]} my-1`}>
                                    <div className="border border-[#E1E1E1] col-span-2 xl:col-span-2">
                                        <div className='flex space-x-3 ml-2 py-2'>

                                            <div>
                                                <Image className='mt-1' src={fuel} alt="fuel" />
                                            </div>
                                            <div>
                                                <p className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.28px]'>Fuel Type</p>
                                                <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>{getmodels[0].Specifications.engine_and_transmission.fuel_type}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border border-[#E1E1E1] col-span-2 xl:col-span-3">
                                        <div className='flex space-x-3 ml-2 py-2'>

                                            <div>
                                                <Image className='mt-1' src={seat} alt="seat" />
                                            </div>
                                            <div>
                                                <p className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.28px]'>Seating Capacity</p>
                                                <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>{getmodels[0].seating_capacity}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border border-[#E1E1E1] col-span-2 xl:col-span-2">
                                        <div className='flex space-x-3 ml-2 py-2'>

                                            <div>
                                                <Image className='mt-1' src={body} alt="body" />
                                            </div>
                                            <div>
                                                <p className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.28px]'>Body Type</p>
                                                <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>{getmodels[0].body_type}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border border-[#E1E1E1] col-span-2 xl:col-span-3">
                                        <div className='flex space-x-3 ml-2 py-2'>

                                            <div>
                                                <Image className='mt-1' src={transmission} alt="transmission" />
                                            </div>
                                            <div>
                                                <p className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.28px]'>Transmission Type</p>
                                                <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>{getmodels[0].transmission_type}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border border-[#E1E1E1] col-span-2 xl:col-span-3">
                                        <div className='flex space-x-3 ml-2 py-2'>

                                            <div>
                                                <Image className='mt-1' src={engine} alt="engine" />
                                            </div>
                                            <div>
                                                <p className='text-[#6F6F6F] text-[14px] font-normal tracking-[-0.28px]'>Engine Displacement</p>
                                                <p className='text-[14px] text-[#484848] font-semibold tracking-[-0.28px]'>{getmodels[0].Specifications.engine_and_transmission.displacement} CC</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="border border-[#E1E1E1] col-span-2 xl:col-span-2 rounded-sm">
                                        <div className='flex space-x-3 ml-2 py-2'>

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
                                <div className='md:py-[3rem] pt-4 pb-3'>
                                    <Image src={advert2} alt="advertisement" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='md:hidden'>
                        <div className='md:w-[74%]'>

                            {/* Sponsored Adv  */}
                            <div>
                                <p className='text-[12px] text-[#484848] mb-2 underline'>Sponsored</p>
                                <div className='w-full bg-[#E1E1E1] h-[15rem]'>

                                </div>
                            </div>


                            {/* Car Versions Listing  */}

                            <div id='ver' className='lg:w-full'>
                                <h2 className='text-[18px] text-[#484848] my-4 font-semibold tracking-[-0.48px]'>{getmodels[0].brand} {getmodels[0].model_name} Versions 2023</h2>
                                {/* <div className='flex md:hidden space-x-1'>
                                    <Version_Modal brand={getmodels[0].brand} model={getmodels[0].model_name} version={getmodels[0].version_name} price={versionPrice} data={finalVersion} />
                                    <City_Modal />
                                </div>
                                <div className='bg-[#f4f4f4] md:hidden mt-4 text-[#6F6F6F] p-3'>
                                    <p>Hyundai Aura Prices: The price of the Hyundai Aura in New Delhi is Rs 6.33 Lakh (Ex-showroom). To know more about the Aura Images, Reviews, Offers & other details, download the Get On road price App. Hyundai Aura mileage : It returns a certified mileage of . <span className={`${update ? null : "hidden"}`}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, repellat tempore quasi doloribus possimus laudantium. Exercitationem commodi nobis dolore assumenda neque repudiandae, sit dolores, quae eaque soluta maiores! Corporis quis ipsa perferendis, repellendus odio eligendi accusamus impedit quia animi eius.
                                    </span></p>

                                    <div onClick={() => update ? setUpdate(false) : setUpdate(true)} className='text-right cursor-pointer pt-[1rem]'>
                                        <span className='mx-[1rem] text-[#09809A] text-[16px] font-normal'>Read More <Image className='inline' src={down} alt="" /></span>
                                    </div>
                                </div> */}
                                <div>
                                    <ul className='flex space-x-8 px-4 py-3 text-[#484848] font-semibold'>
                                        {finalVersion.filter((value, index, self) => {
                                            return index === self.findIndex((t) => {
                                                return t.Specifications.engine_and_transmission.fuel_type == value.Specifications.engine_and_transmission.fuel_type
                                            })
                                        }).map((item, index) => {
                                            return (<li key={index} className='hover:text-[#09809A] hover:border-b-[3px] border-[#09809A] cursor-pointer'>{item.Specifications.engine_and_transmission.fuel_type}</li>)
                                        })}
                                    </ul>
                                    <div className='flex justify-between bg-[#F4F4F4] py-3 px-4'>
                                        <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px]'>Versions</p>
                                        <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px]'>On Road Price</p>
                                    </div>

                                    {/* Versions  */}
                                    <div>
                                        {finalVersion.map((element, id) => {
                                            return (<div key={id} className={`${show ? "flex" : id > 3 ? "hidden" : "flex"} justify-between py-3 px-4 border border-[#C6C6C6]`}>
                                                <div className='w-[10rem]'>
                                                    <RLink title={`${element.model_name} ${element.version_name}`} href={`/new-cars/${element.brand.toLowerCase()}/${element.model_name.toLowerCase().split(" ").join("-")}/${element.version_name.toLowerCase().split(" ").join("-")}`}>
                                                        <h3 className='text-[16px] text-[#484848] font-semibold tracking-[-0.36px]'>{element.model_name} {element.version_name}</h3>
                                                    </RLink>
                                                    <span className='text-[13px] text-[#6F6F6F] font-normal tracking-[-0.28px]'>{element.Specifications.engine_and_transmission.displacement} cc, {element.transmission_type}, {element.Specifications.engine_and_transmission.fuel_type} </span>
                                                    <p className='text-[12px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</p>
                                                </div>
                                                <div>
                                                    <p className='text-[16px] text-[#484848] font-semibold tracking-[-0.36px]'>{versionPrice.length > 0 ? `₹ ${numFormat(versionPrice.find(o => o.Version_UID === element.uid).ex_showroom_price)}` : null}</p>
                                                    {/* <div className=''>
                                                    <input className='mx-1' type="checkbox"></input>
                                                    <span className='text-[#484848] md:text-[16px] text-[14px] font-normal tracking-[-0.32px]'>Compare</span>
                                                </div> */}
                                                </div>
                                            </div>)
                                        })}
                                    </div>

                                    <div className='text-center my-4'>
                                        <button onClick={() => show ? setShow(false) : setShow(true)} className='px-16 rounded-md'><span className='text-[12px] font-normal tracking-[-0.24px] text-[#09809A]'>
                                            {show ? "Hide" : "View"} All Variants
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
                            <div id='col' className='lg:w-full md:mt-[6rem] mb-[1rem] md:mb-[3rem]'>
                                <h2 className='text-[18px] text-[#484848] mt-4 mb-2 font-semibold tracking-[-0.48px]'>{getmodels[0].brand} {getmodels[0].model_name} Colors</h2>
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
                            <div id='mil' className='md:mb-[2rem] w-full'>
                                <h2 className='text-[18px] mt-4 mb-2 text-[#484848] font-semibold tracking-[-0.48px]'>{getmodels[0].brand} {getmodels[0].model_name} Mileage</h2>
                                <div className='bg-[#f4f4f4] text-[#6F6F6F]  p-3'>
                                    <p>{getmodels[0].mileage_algorithm} <span className={`${show ? null : "hidden"}`}></span> </p>

                                    <div onClick={() => show ? setShow(false) : setShow(true)} className='text-right pt-[1rem] cursor-pointer'>
                                        <span className='mx-[1rem] text-[#09809A] text-[16px] font-normal'>Read {show ? "Less" : "More"} <Image className='inline' src={down} alt="down" /></span>
                                    </div>
                                </div>
                                <hr className='border-t-1 border-[#E1E1E1]' />

                                <div className='my-6 md:w-full'>
                                    <ul className='bg-[#f4f4f4] flex justify-between py-3 mb-3 px-4'>
                                        <li className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px]'>Varient</li>
                                        <li className='text-[16px] text-[#484848] font-semibold tracking-[-0.32px]'>Transmission</li>
                                        <li className='pr-2 text-[16px] text-[#484848] font-semibold tracking-[-0.32px]'>Mileage</li>
                                    </ul>
                                    {getmodels.filter((value, index, self) => {
                                        return index === self.findIndex((t) => {
                                            return t.Specifications.engine_and_transmission.fuel_type == value.Specifications.engine_and_transmission.fuel_type
                                        })
                                    }).map((item, index) => {
                                        return (<ul key={index} className='border px-4 border-[#C6C6C6] flex justify-between mb-3'>
                                            <li className='font-normal py-2'>
                                                <p className='text-[#484848] font-semibold text-[16px]'>{item.Specifications.engine_and_transmission.fuel_type}</p>
                                                <p className='text-[13px] text-[#6F6F6F]'>{item.Specifications.engine_and_transmission.displacement} cc</p>
                                            </li>
                                            <li className=' pt-6 text-[16px] text-[#6F6F6F] leading-[5px] tracking-[-0.32px]'>
                                                {item.transmission_type}
                                            </li>
                                            <li className=' pt-4 text-[16px] text-[#484848] font-semibold tracking-[-0.2px]'>
                                                {item.Specifications.engine_and_transmission.arai_mileage ? item.Specifications.engine_and_transmission.arai_mileage : "null"} KMPL
                                            </li>
                                        </ul>)
                                    })}
                                </div>
                            </div>


                            {/* City Prices  */}
                            <div className='my-5 md:my-10 md:w-full'>
                                <h2 className='md:text-[24px] text-[18px] text-[#484848] mx-2 md:mx-0 font-semibold tracking-[-0.48px]'>{getmodels[0].model_name} Price in top cities in India</h2>
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


                            {/* Sponsored Adv  */}
                            <div>
                                <p className='text-[12px] text-[#484848] mb-2 underline'>Sponsored</p>
                                <div className='w-full bg-[#E1E1E1] h-[15rem]'>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pb-4'>
                        <p>Home &gt; Hyundai &gt; Aura</p>
                    </div>


                </div>
            </div>
        </>
    )
}









