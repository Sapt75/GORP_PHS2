import React, { useEffect, useRef, useState } from 'react'
import style from "../styles/varient.module.css"
import Image from 'next/image';
import price_tag from "../public/images/price_tag.svg"
import star from "../public/images/star.svg"
import down from "../public/images/down.svg"
import advert from "../public/images/advert.png"
import car3 from "../public/images/car3.png"
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
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import City_Modal from '../components/city_modal';
import Version_Modal from '../components/version_modal';
import { ChevronRight } from '@mui/icons-material';
import Price_Faq from '../components/pic_faq';
import Right from '../components/right';
import logo from "../public/images/logo.png"
import edit from "../public/images/edit.svg"
import Rating_Model from '../components/rating_modal';
import locationContext from '../context/LocationContext';
import { useRouter } from 'next/router';
import Head from 'next/head';
import TemporaryDrawer from '../components/deal';
import CustomSeparator from '../components/breadcrumbs';
import Brand_Model from '../components/brand_modal';
import Link from 'next/link';




export default function Price({ data,
    verp,
    response,
    query,
    head }) {




    const [update, setUpdate] = useState(false)
    const [first, setFirst] = useState({})
    const top_bar = useRef(null)

    const [cardetails, setCardetails] = useState(data)
    const [getbreakup, setBreakup] = useState([]);
    const [versionPrice, setVersionPrice] = useState([])
    const [allVersionPrice, setAllVersionPrice] = useState([])
    const [finalVersion, setFinalVersion] = useState([])
    const [getVersion, setVersion] = useState([])
    const [tshow, setShow] = useState(false)
    const [showbreakup, setShowBreakup] = useState(parseInt(verp.uid))
    const [others, setOthers] = useState()
    const [optional, setOptional] = useState()
    const [warrenties, setWarrenties] = useState()
    const [rssa, setRsa] = useState()
    const [registration, setRegistration] = useState(0)
    const [similar, setSimilar] = useState([])


    let route = useRouter()

    console.log(route)

    const host_url = `https://${head.host}/`


    let sdata = {
        "@context": "https://schema.org/",
        "@type": "Car",
        "mpn": "CW-Version-11545",
        "name": `${data[0].brand} ${data[0].model_name} ${data[0].version_name}`,
        "model": `${data[0].model_name}`,
        "image": `https://ik.imagekit.io/GORP/${data[0].brand}/${data[0].model_name}/${data[0].model_name}.jpg`,
        "brand": `${data[0].brand}`,
        "bodyType": `${data[0].body_type}`,
        "manufacturer": {
            "@type": "Organization",
            "name": `${data[0].brand}`
        },
        "description": `${data[0].varient_description}`,
        "url": `${host_url}/${route.query.price[0].toLowerCase()}/${route.query.price[1].toLowerCase()}/${route.query.price[2].toLowerCase()}`,
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "INR",
            "lowPrice": 746500,
            "highPrice": 1313500,
            "offerCount": 1
        }
    }





    const context = React.useContext(locationContext)

    let { location, setDet, setShowLoc } = context

    const url = "https://inquisitive-knickers-fish.cyclic.app"


    async function getFinal() {
        let vvpdata = await fetch(`${url}/version_prices/${verp.model_id}/${location}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        let vresponse = await vvpdata.json()
        console.log(response, "Hello")
        vresponse == "No Data" ? setAllVersionPrice([]) : setAllVersionPrice(vresponse)


        let svdata = await fetch(`${url}/single_version/${verp.uid}/${location}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        let svresponse = await svdata.json()

        console.log(svresponse, "Single")


        svresponse == "No Data" ? setVersionPrice([]) : setVersionPrice(svresponse)


        let pbdata = await fetch(`${url}/price_breakup/${verp.model_id}/${location}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        let pbresponse = await pbdata.json()
        setBreakup(pbresponse)


    }


    async function getSimilar() {
        let data = await fetch(`${url}/similar`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        let response = await data.json()
        setSimilar(response)
    }


    function numFormat(value) {
        const val = Math.abs(value)
        if (val >= 10000000) return `${(value / 10000000).toFixed(2)} Crore`
        if (val >= 100000) return `${(value / 100000).toFixed(2)} Lakh`
        return value;
    }

    function numFormat1(num) {
        return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(num)
    }


    function calc(item) {

        console.log(item, "INs")

        let zero = item.zero_deep_insurance ? parseInt(item.zero_deep_insurance) : 0
        let four = item.four_year_extended_warranty ? parseInt(item.four_year_extended_warranty) : 0
        let amc = item.amc ? parseInt(item.amc) : 0
        let ins = typeof (item.insurance) == "number" ? parseInt(Math.round(item.insurance)) : 0

        let sum = parseInt(item.ex_showroom_price) + parseInt(item.rto) + parseInt(item.road_safety_tax_cess) + ins + parseInt(item.fastag) + parseInt(item.hypothecation_charges) + zero + four + amc

        return sum

    }

    function cap(itm) {
        return itm.charAt(0).toUpperCase() + itm.slice(1)
    }



    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            top_bar.current.classList.add(style.scrolling)
        } else {
            top_bar.current.classList.remove(style.scrolling);
        }
    }



    useEffect(() => {

        sessionStorage.setItem("host", JSON.stringify(head))

        let itms = {}

        for (let i = 0; i < response.length; i++) {
            if (response[i].uid === parseInt(route.query.uid)) {
                itms[i] = true

                let move = response.splice(i, 1)[0];

                response.splice(0, 0, move)
            } else {
                itms[i] = false
            }

            if (i === response.length - 1) {
                setFirst(itms)
            }
        }

        getFinal()
        getSimilar()
        setDet({
            model: parseInt(verp.model_id),
            version: parseInt(verp.uid)
        })
        setFinalVersion(response)
        setVersion(response)
        setCardetails(data)
        setShowBreakup(parseInt(verp.uid))

        // document.getElementById("boom").addEventListener("wheel", ()=> console.log("Hello"))
        // tab_change.current.addEventListner = function () {return console.log("Hello")}
        window.onscroll = function () { scrollFunction() };
    }, [location, finalVersion, route.query])







    return (
        <>
            <Head>
                <title>{cardetails[0].brand} {cardetails[0].model_name} {cardetails[0].version_name} Price in {location}, Price Breakup of {cardetails[0].model_name} {cardetails[0].version_name} in {location} | GetOnRoadPrice</title>
                <meta name="description" content={`${cardetails[0].brand} ${cardetails[0].model_name} ${cardetails[0].version_name} on road price in ${location} is ${versionPrice.length > 0 ? numFormat(versionPrice[0].ex_showroom_price) : null} .Check ${cardetails[0].brand} ${cardetails[0].model_name} price breakup, ex-showroom price, Registration Charges, Insurance & Other Charges in ${location}. | GetonRoadPrice`} />
                <script key="structured-data" type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(sdata) }} />
            </Head>

            {finalVersion.length > 0 ? <div>
                <div ref={top_bar} className={`${style["top-scroll"]} hidden md:block`}>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <ul className='whitespace-nowrap text-gray-800 md:whitespace-normal md:overflow-x-auto md:mx-[2rem] overflow-x-scroll mx-[1rem] my-[1rem] flex space-x-10 2xl:space-x-[2rem] text-[16px] font-normal tracking-[-0.32px]'>
                                <Link href={'/'}>
                                    <li><Image width={200} height={60} src={logo} /></li>
                                </Link>
                                <Brand_Model url={url} state={true} brand={cardetails[0].brand} model={cardetails[0].model_name} />
                                <li className='hover:text-[#09809A] invisible hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold text-[#484848]'>Features & Specifications</li>
                                <li className='hover:text-[#09809A] invisible hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold text-[#484848]'>Variant</li>
                            </ul>
                        </div>
                        <div className='flex w-[25%] border-x border-[#E1E1E1]'>
                            <div className='px-4 w-1/2 top-down py-[0.5rem] border-r justify-between border-[#E1E1E1] flex'>
                                <Version_Modal brand={cardetails[0].brand} model={cardetails[0].model_name} version={cardetails[0].version_name} price={allVersionPrice} data={finalVersion} />
                            </div>
                            <div className='px-4 w-1/2 top-down py-[0.5rem] justify-between border-[#E1E1E1] flex'>
                                <City_Modal url={url} />
                            </div>
                        </div>
                        <div className='my-[0.5rem] px-8 border-[#E1E1E1]'>
                            <TemporaryDrawer sticky={true} />
                        </div>
                    </div>
                </div>
                {/* <div ref={top_bar} className={`${style["top-scroll"]} md:hidden`}>
                <div className='bg-white h-[0.4rem] w-full'>

                </div>
                <div className='flex justify-around'>
                    <Version_Price />
                    <City_Price />
                </div>
            </div> */}
                <div className='md:ml-10 px-2 md:px-0'>
                    <Image className='mx-auto' src={advert} />

                    {/* Car text  */}
                    <div className='md:mr-[2.5rem] pt-6'>
                        <h1 className='md:text-[24px] text-[20px] text-[#484848] pb-3 font-semibold tracking-[-0.48px]'>{cardetails[0].brand}&nbsp;{cardetails[0].model_name} On Road Price in&nbsp;{location}</h1>
                        <div className='bg-[#f4f4f4] text-[#6F6F6F] p-3'>
                            <p>Hyundai Aura E Prices: The price of the Hyundai Aura E in {location} is Rs 6.33 Lakh (Ex-showroom). To know more about the Aura E Images, Reviews, Offers & other details, download the Get On road price App. Hyundai Aura E mileage : It returns a certified mileage of . <span className={`${update ? null : "hidden"}`}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, repellat tempore quasi doloribus possimus laudantium. Exercitationem commodi nobis dolore assumenda neque repudiandae, sit dolores, quae eaque soluta maiores! Corporis quis ipsa perferendis, repellendus odio eligendi accusamus impedit quia animi eius.
                            </span></p>

                            <div onClick={() => update ? setUpdate(false) : setUpdate(true)} className='text-right cursor-pointer pt-[1rem]'>
                                <span className='mx-[1rem] text-[#09809A] text-[16px] font-normal'>Read More <Image className='inline' src={down} alt="" /></span>
                            </div>
                        </div>
                        <hr className='border-t-1 border-[#E1E1E1]' />
                    </div>
                </div>
                <div className='md:flex md:ml-10 mx-2'>
                    <div className='md:w-[74%]'>
                        {/* Car Image  */}
                        <div className='md:flex hidden h-[13rem] xl:space-x-[6rem] my-[1rem] py-[1rem] md:border md:border-[#E1E1E1]'>
                            <div className='md:w-[50%] text-center'>
                                <img className='w-[70%] mx-auto' src={`https://ik.imagekit.io/GORP/${cap(route.query.price[0])}/${cap(route.query.price[1])}/${cap(route.query.price[1])}.jpg`} />
                            </div>
                            <div className='bg-[#f4f4f4] md:hidden mt-[1rem] text-[#6F6F6F] p-3'>
                                <p>Hyundai Aura Prices: The price of the Hyundai Aura in {location} is Rs 6.33 Lakh (Ex-showroom). To know more about the Aura Images, Reviews, Offers & other details, download the Get On road price App. Hyundai Aura mileage : It returns a certified mileage of . <span className={`${update ? null : "hidden"}`}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, repellat tempore quasi doloribus possimus laudantium. Exercitationem commodi nobis dolore assumenda neque repudiandae, sit dolores, quae eaque soluta maiores! Corporis quis ipsa perferendis, repellendus odio eligendi accusamus impedit quia animi eius.
                                </span></p>

                                <div onClick={() => update ? setUpdate(false) : setUpdate(true)} className='text-right cursor-pointer pt-[1rem]'>
                                    <span className='mx-[1rem] text-[#09809A] text-[16px] font-normal'>Read More <Image className='inline' src={down} alt="" /></span>
                                </div>
                            </div>
                            <div className='md:w-[40%]'>
                                <div>
                                    <div className='hidden md:block'>
                                        <div className='pt-[1.5rem]'>
                                            <p className='text-[24px] text-[#484848] font-semibold tracking-[-0.48px]'>{cardetails[0].brand}&nbsp;{cardetails[0].model_name}</p>
                                            {versionPrice.length > 0 ? <span className='text-[24px] text-[#484848] font-semibold tracking-[-0.48px]'>{`₹ ${numFormat(versionPrice[0].ex_showroom_price)}`}</span> : null}
                                            <div className='flex space-x-[1rem] text-[14px] mt-4 font-light'>
                                                <div>
                                                    <span className='bg-[#09809A] px-[0.6rem] py-[4px] flex text-[14px] font-semibold rounded-md text-white'>
                                                        4.5
                                                        <Image width={20} className='pl-[4px]' src={star} alt="" />
                                                    </span>
                                                </div>
                                                <p className='text-[14px] md:inline text-[#6F6F6F] hidden md:text-base'>17 Ratings & 25 Reviews</p>
                                                <p className='md:inline hidden'>|</p>
                                                {/* <Rating_Model /> */}
                                                <p className='text-[#09809A] cursor-pointer md:text-[16px] text-[14px] font-semibold tracking-[-0.32px]'>Rate this car</p>

                                                <div className='flex space-x-2 md:hidden'>
                                                    <p className='text-[11px] text-[#6F6F6F] md:text-base'>17 Ratings & 25 Reviews</p>
                                                    <p>|</p>
                                                    <p className='text-[#09809A] cursor-pointer md:text-[16px] text-[14px] font-semibold tracking-[-0.32px]'>Rate this car</p>

                                                    {/* <Rating_Model /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Show Breakup Section  */}
                        <div className='w-full md:flex grid mt-4 md:px-0 md:mt-0 relative'>
                            <div className='md:w-[75%] order-2 md:order-1'>
                                {finalVersion.map((element, index) => {
                                    return (<div key={index} className='md:pr-4 py-3'>
                                        <div className={`${first ? first[index] ? "hidden" : "block" : null}`}>
                                            <div className='flex justify-between'>
                                                <p className='md:text-[20px] text-[17px] text-[#484848] font-semibold pb-1'>{element.model_name}&nbsp;{element.version_name}&nbsp;Price {location ? location : "Mumbai"}</p>
                                                <span onClick={() => setFirst(prevValues => ({
                                                    ...prevValues,
                                                    [index]: true,
                                                }))}>
                                                    <ChevronRight className='rotate-[360deg] cursor-pointer' />
                                                </span>
                                            </div>
                                            <div className='flex justify-between'>
                                                <p className='text-[16px] text-[#484848]'>On Road Price In  {location ? location : "Mumbai"}</p>
                                                {getbreakup.map((item, index) => {
                                                    return (item.Version_UID === element.uid ? <p key={index} className='text-[16px] text-[#484848] font-semibold'>₹ {calc(item)}</p> : null)
                                                })}
                                            </div>
                                        </div>
                                        {getbreakup.map((item, ind) => {
                                            return (item.Version_UID === element.uid ? <div key={ind} className={`w-full ${first ? first[index] ? "block" : "hidden" : null} border border-[#E1E1E1]`}>
                                                <div className='flex justify-between px-4'>
                                                    <p className="text-[#484848] text-[17px] md:text-[20px] py-3 font-semibold">{element.model_name}&nbsp;{element.version_name}&nbsp;Price {location ? location : "Mumbai"}</p>
                                                    <div onClick={() => setFirst(prevValues => ({
                                                        ...prevValues,
                                                        [index]: false,
                                                    }))} className='cursor-pointer py-3'>
                                                        <ChevronRight className='rotate-[90deg]' />
                                                    </div>
                                                </div>
                                                <div className='bg-stone-300 bg-opacity-25 md:px-4'>
                                                    <div className='flex justify-between pt-4'>
                                                        <p className="text-[18px] font-semibold">Ex-Showroom Price</p>
                                                        <p className="text-black text-[18px] text-right font-semibold ">₹ {item.ex_showroom_price}</p>
                                                    </div>
                                                    <div className='pt-6'>
                                                        <div>
                                                            <span className="text-[18px] font-semibold">Registration </span>
                                                            <span className="text-cyan-600 text-[18px] font-medium">Individual</span>
                                                        </div>
                                                        <div className='relative h-[9rem]'>
                                                            <div className="w-[257px] h-[0px] border border-black"></div>
                                                            <div className="w-[84px] absolute left-[-25px] top-[42px] h-[0px] border border-black rotate-90"></div>
                                                            <div className="w-[24.66px] h-[0px] left-[18px] top-[40px] absolute border border-black"></div>
                                                            <p className="text-neutral-500 absolute left-[58px] top-[25px] text-lg">RTO</p>
                                                            <div className="w-[24.66px] h-[0px] left-[17px] top-[84px] absolute border border-black"></div>
                                                            <p className="text-neutral-500 absolute left-[58px] top-[70px] text-lg">Road Safety Tax/Cess</p>
                                                            <div className='absolute right-20 space-y-4 mt-4'>
                                                                <p className="text-neutral-500 text-right text-lg">₹ {item.rto}</p>
                                                                <p className="text-neutral-500 text-right text-lg">₹ {item.road_safety_tax_cess}</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex justify-between relative'>
                                                            <p className="text-[18px] font-semibold">Total Registration Charges</p>
                                                            <p className="text-black text-[18px] text-right font-semibold ">₹ {parseInt(item.rto) + parseInt(item.road_safety_tax_cess)}</p>
                                                            <div className="w-full h-[0px] px-2 bottom-[-10px] absolute border border-[#E1E1E1]"></div>
                                                        </div>
                                                    </div>
                                                    <div className='pt-4'>
                                                        <div className='flex justify-between pb-6'>
                                                            <p className="text-[18px] font-semibold">Insurance Charges</p>
                                                            <p className="text-black text-[18px] text-right font-semibold ">₹ {typeof (item.insurance) == "number" ? parseInt(Math.round(item.insurance)) : 0}</p>
                                                        </div>
                                                        <p className="text-[18px] font-semibold">Other Charges </p>
                                                        <div className='relative h-[9rem]'>
                                                            <div className="w-[130px] h-[0px] border border-black"></div>
                                                            <div className="w-[84px] absolute left-[-25px] top-[42px] h-[0px] border border-black rotate-90"></div>
                                                            <div className="w-[24.66px] h-[0px] left-[18px] top-[40px] absolute border border-black"></div>
                                                            <p className="text-neutral-500 absolute left-[58px] top-[25px] text-lg">Hypothecation Charges</p>
                                                            <div className="w-[24.66px] h-[0px] left-[17px] top-[84px] absolute border border-black"></div>
                                                            <p className="text-neutral-500 absolute left-[58px] top-[70px] text-lg">FASTag</p>
                                                            <div className='absolute right-20 space-y-4 mt-4'>
                                                                <p className="text-neutral-500 text-right text-lg">₹ {item.hypothecation_charges}</p>
                                                                <p className="text-neutral-500 text-right text-lg">₹ {item.fastag}</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex justify-between relative'>
                                                            <p className="text-[18px] font-semibold">Total Other Charges</p>
                                                            <p className="text-black text-[18px] text-right font-semibold ">₹ {parseInt(item.fastag) + parseInt(item.hypothecation_charges)}</p>
                                                            <div className="w-full h-[0px] px-2 bottom-[-10px] absolute border border-[#E1E1E1]"></div>
                                                        </div>
                                                    </div>
                                                    <div className='pt-4'>
                                                        <p className="text-[18px] font-semibold">Optional</p>
                                                        <div className='relative h-[14rem]'>
                                                            <div className="w-[130px] h-[0px] border border-black"></div>
                                                            <div className="w-[180px] absolute left-[-72px] top-[90px] h-[0px] border border-black rotate-90"></div>
                                                            <div className="w-[24.66px] h-[0px] left-[18px] top-[40px] absolute border border-black"></div>
                                                            <p className="text-neutral-500 absolute left-[58px] top-[25px] text-lg">Zero Deep Insurance</p>
                                                            <div className="w-[24.66px] h-[0px] left-[17px] top-[84px] absolute border border-black"></div>
                                                            <p className="text-neutral-500 absolute left-[58px] top-[70px] text-lg">Extended Warranty (4 Years)</p>
                                                            <div className="w-[24.66px] h-[0px] left-[17px] top-[130px] absolute border border-black"></div>
                                                            <p className="text-neutral-500 absolute left-[58px] top-[115px] text-lg">AMC</p>
                                                            <div className="w-[24.66px] h-[0px] left-[17px] top-[180px] absolute border border-black"></div>
                                                            <p className="text-neutral-500 absolute left-[58px] top-[165px] text-lg">Accessories</p>
                                                            <div className='absolute right-20 space-y-5 mt-4'>
                                                                <p className="text-neutral-500 text-right text-lg">₹ {item.zero_deep_insurance ? item.zero_deep_insurance : 0}</p>
                                                                <p className="text-neutral-500 text-right text-lg">₹ {item.four_year_extended_warranty ? item.four_year_extended_warranty : 0}</p>
                                                                <p className="text-neutral-500 text-right text-lg">₹ {item.amc ? item.amc : 0}</p>
                                                                <p className="text-neutral-500 text-right text-lg">₹ 0</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex justify-between relative'>
                                                            <p className="text-[18px] font-semibold">Total Optional Charges</p>
                                                            <p className="text-black text-[18px] text-right font-semibold ">₹ {item.zero_deep_insurance ? item.zero_deep_insurance : 0 + item.four_year_extended_warranty ? item.four_year_extended_warranty : 0 + item.amc ? item.amc : 0 + 0}</p>
                                                            <div className="w-full h-[0px] px-2 bottom-[-10px] absolute border border-[#E1E1E1]"></div>
                                                        </div>
                                                    </div>
                                                    <div className='pt-4 pb-4 relative'>
                                                        <div className='flex justify-between pb-6'>
                                                            <p className="text-[18px] font-semibold">On Road Price Mumbai</p>
                                                            <p className="text-black text-[18px] text-right font-semibold ">₹ {calc(item)}</p>
                                                            <div className="w-full h-[0px] px-2 bottom-[30px] absolute border border-[#E1E1E1]"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> : null)
                                        })
                                        }
                                    </div>)
                                })}



                                {/* Sponsored ADV  */}
                                <div className='lg:w-full hidden md:block my-6'>
                                    <div className='w-[80%] h-[15rem] bg-[#09809A]'>
                                        <p className='text-white text-3xl p-10'>
                                            Sponsored Adv
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='md:w-[25%] order-1 md:order-2'>
                                <div className='md:h-[10rem]'>
                                    <div className={`flex md:block ${style.full} ${style.full3} space-y-2 bg-white z-10`}>
                                        <Version_Modal brand={cardetails[0].brand} model={cardetails[0].model_name} version={cardetails[0].version_name} price={allVersionPrice} data={finalVersion} />
                                        <City_Modal url={url} />
                                    </div>
                                </div>
                                <div className='hidden md:block'>
                                    <div className='text-center py-3 big'>
                                        <TemporaryDrawer brand={cardetails[0].brand} model={cardetails[0].model_name} version={cardetails[0].version_name} />
                                    </div>
                                    <div className='w-full bg-[#F4F4F4] px-5 max-h-fit h-fit'>
                                        <p className='text-[18px] font-semibold pt-2'>Contact Hyundai Dealer</p>
                                        <p className='text-[16px] w-4/5 pt-2'>Get in touch for the best buying option from your authorized dealer</p>
                                        <div className='py-6'>
                                            <Image width={30} className='inline mr-3' src={price_tag} />
                                            <button className='bg-black text-[12px] pt-1 pb-1.5 w-3/4 rounded-md text-white'>Locate the dealer near you</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <CustomSeparator />


                    </div>


                    <div className='md:w-[26%] hidden md:block ml-[1rem] md:mr-20'>
                        <Right url={url} uid={finalVersion[0].uid} brand={finalVersion[0].brand} model={finalVersion[0].model_name} version={finalVersion[0].version_name} />
                    </div>
                </div >
            </div> : null}
        </>
    )
}




Price.getInitialProps = async (context) => {

    const { query, req } = context;
    const head = req ? req.headers : sessionStorage.getItem("host")

    const url = "https://inquisitive-knickers-fish.cyclic.app"


    let dt = await fetch(`${url}/price_ver/${query.price[0]}/${query.price[1]}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    const verp = await dt.json()

    // setDet({
    //     model: parseInt(verp.model_id),
    //     version: parseInt(verp.uid)
    // })

    // setShowBreakup(parseInt(verp.uid))


    const res = await fetch(`${url}/price_car_details/${verp.uid}/${verp.model_id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await res.json();


    let vpdata = await fetch(`${url}/version_data/${verp.model_id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    let response = await vpdata.json()
    // setVersion(response)
    // setFinalVersion(response)


    return {
        data,
        verp,
        response,
        query,
        head
    }
}
