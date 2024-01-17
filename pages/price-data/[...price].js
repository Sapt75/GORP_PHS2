import React, { useEffect, useRef, useState } from 'react'
import style from "../../styles/varient.module.css"
import Image from 'next/image';
import price_tag from "../../public/images/price_tag.svg"
import star from "../../public/images/star.svg"
import down from "../../public/images/down.svg"
import advert from "../../public/images/advert.png"
import car3 from "../../public/images/car3.png"
import car5 from "../../public/images/car5.png"
import car4 from "../../public/images/car4.png"
import compare_white from "../../public/images/compare-white.svg"
import brochure from "../../public/images/brocher.jpg"
import brochure2 from "../../public/images/brochure.svg"
import download from "../../public/images/download.svg"
import connect from "../../public/images/connect.svg"
import promo from "../../public/images/promo.png"
import last_adv from "../../public/images/last_adv.png"
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import City_Modal from '../../components/city_modal';
import Version_Modal from '../../components/version_modal';
import { ChevronRight } from '@mui/icons-material';
import Price_Faq from '../../components/pic_faq';
import Right from '../../components/right';
import logo from "../../public/images/logo.png"
import edit from "../../public/images/edit.svg"
import Rating_Model from '../../components/rating_modal';
import locationContext from '../../context/LocationContext';
import { useRouter } from 'next/router';




export default function Price({ data,
    verp,
    response,
    query,
    head }) {




    const [update, setUpdate] = useState(false)
    const [first, setFirst] = useState()
    const top_bar = useRef(null)

    const [cardetails, setCardetails] = useState(data)
    const [getbreakup, setBreakup] = useState([]);
    const [versionPrice, setVersionPrice] = useState([])
    const [allVersionPrice, setAllVersionPrice] = useState([])
    const [finalVersion, setFinalVersion] = useState(response)
    const [getVersion, setVersion] = useState(response)
    const [tshow, setShow] = useState(false)
    const [showbreakup, setShowBreakup] = useState(parseInt(verp.uid))
    const [others, setOthers] = useState()
    const [optional, setOptional] = useState()
    const [warrenties, setWarrenties] = useState()
    const [rssa, setRsa] = useState()
    const [registration, setRegistration] = useState(0)
    const [similar, setSimilar] = useState([])


    let route = useRouter()





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

        let zero = item.zero_deep_insurance ? parseInt(item.zero_deep_insurance) : 0
        let four = item.four_year_extended_warranty ? parseInt(item.four_year_extended_warranty) : 0
        let amc = item.amc ? parseInt(item.amc) : 0

        let sum = parseInt(item.ex_showroom_price) + parseInt(item.rto) + parseInt(item.road_safety_tax_cess) + parseInt(Math.round(item.insurance)) + parseInt(item.fastag) + parseInt(item.hypothecation_charges) + zero + four + amc

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

        let itms = {}

        response.map((item, index) => {
            itms[index] = false
            console.log(itms)
            index === item.length - 1 ? setFirst(itms) : null
        })
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
    }, [location])







    return (
        <>
            <Navbar />
            <div ref={top_bar} className={`${style["top-scroll"]} hidden md:block`}>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <ul className='whitespace-nowrap text-gray-800 md:whitespace-normal md:overflow-x-auto md:mx-[2rem] overflow-x-scroll mx-[1rem] my-[1rem] flex space-x-10 2xl:space-x-[2rem] text-[16px] font-normal tracking-[-0.32px]'>
                            <li><Image width={200} height={60} src={logo} /></li>
                            <li className='font-semibold text-[#484848]'>Aura <Image className='inline' src={edit} alt='edit' /></li>
                            <li className='hover:text-[#09809A] invisible hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold text-[#484848]'>Features & Specifications</li>
                            <li className='hover:text-[#09809A] invisible hover:border-b-[3px] border-[#09809A] pb-2 cursor-pointer font-semibold text-[#484848]'>Variant</li>
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
                        <p>Hyundai Aura E Prices: The price of the Hyundai Aura E in New Delhi is Rs 6.33 Lakh (Ex-showroom). To know more about the Aura E Images, Reviews, Offers & other details, download the Get On road price App. Hyundai Aura E mileage : It returns a certified mileage of . <span className={`${update ? null : "hidden"}`}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, repellat tempore quasi doloribus possimus laudantium. Exercitationem commodi nobis dolore assumenda neque repudiandae, sit dolores, quae eaque soluta maiores! Corporis quis ipsa perferendis, repellendus odio eligendi accusamus impedit quia animi eius.
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
                            <p>Hyundai Aura Prices: The price of the Hyundai Aura in New Delhi is Rs 6.33 Lakh (Ex-showroom). To know more about the Aura Images, Reviews, Offers & other details, download the Get On road price App. Hyundai Aura mileage : It returns a certified mileage of . <span className={`${update ? null : "hidden"}`}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, repellat tempore quasi doloribus possimus laudantium. Exercitationem commodi nobis dolore assumenda neque repudiandae, sit dolores, quae eaque soluta maiores! Corporis quis ipsa perferendis, repellendus odio eligendi accusamus impedit quia animi eius.
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
                                            <Rating_Model />
                                            <div className='flex space-x-2 md:hidden'>
                                                <p className='text-[11px] text-[#6F6F6F] md:text-base'>17 Ratings & 25 Reviews</p>
                                                <p>|</p>
                                                <Rating_Model />
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
                                                return (item.Version_UID === element.uid ? <p key={index} className='text-[16px] text-[#484848] font-semibold'>₹ {item.ex_showroom_price}</p> : null)
                                            })}
                                        </div>
                                    </div>
                                    {
                                        getbreakup.map((item, ind) => {
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
                                                            <div class="w-[257px] h-[0px] border border-black"></div>
                                                            <div class="w-[84px] absolute left-[-25px] top-[42px] h-[0px] border border-black rotate-90"></div>
                                                            <div class="w-[24.66px] h-[0px] left-[18px] top-[40px] absolute border border-black"></div>
                                                            <p class="text-neutral-500 absolute left-[58px] top-[25px] text-lg">RTO</p>
                                                            <div class="w-[24.66px] h-[0px] left-[17px] top-[84px] absolute border border-black"></div>
                                                            <p class="text-neutral-500 absolute left-[58px] top-[70px] text-lg">Road Safety Tax/Cess</p>
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
                                                            <p className="text-black text-[18px] text-right font-semibold ">₹ {Math.round(item.insurance)}</p>
                                                        </div>
                                                        <p className="text-[18px] font-semibold">Other Charges </p>
                                                        <div className='relative h-[9rem]'>
                                                            <div class="w-[130px] h-[0px] border border-black"></div>
                                                            <div class="w-[84px] absolute left-[-25px] top-[42px] h-[0px] border border-black rotate-90"></div>
                                                            <div class="w-[24.66px] h-[0px] left-[18px] top-[40px] absolute border border-black"></div>
                                                            <p class="text-neutral-500 absolute left-[58px] top-[25px] text-lg">Hypothecation Charges</p>
                                                            <div class="w-[24.66px] h-[0px] left-[17px] top-[84px] absolute border border-black"></div>
                                                            <p class="text-neutral-500 absolute left-[58px] top-[70px] text-lg">FASTag</p>
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
                                                            <div class="w-[130px] h-[0px] border border-black"></div>
                                                            <div class="w-[180px] absolute left-[-72px] top-[90px] h-[0px] border border-black rotate-90"></div>
                                                            <div class="w-[24.66px] h-[0px] left-[18px] top-[40px] absolute border border-black"></div>
                                                            <p class="text-neutral-500 absolute left-[58px] top-[25px] text-lg">Zero Deep Insurance</p>
                                                            <div class="w-[24.66px] h-[0px] left-[17px] top-[84px] absolute border border-black"></div>
                                                            <p class="text-neutral-500 absolute left-[58px] top-[70px] text-lg">Extended Warranty (4 Years)</p>
                                                            <div class="w-[24.66px] h-[0px] left-[17px] top-[130px] absolute border border-black"></div>
                                                            <p class="text-neutral-500 absolute left-[58px] top-[115px] text-lg">AMC</p>
                                                            <div class="w-[24.66px] h-[0px] left-[17px] top-[180px] absolute border border-black"></div>
                                                            <p class="text-neutral-500 absolute left-[58px] top-[165px] text-lg">Accessories</p>
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
                                <div className='text-center py-3'>
                                    <button className='bg-[#09809A] text-white w-full font-medium px-4 py-1.5 rounded-md'>Get Latest Offers</button>
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


                </div>


                <div className='md:w-[26%] hidden md:block ml-[1rem] md:mr-20'>
                    <Right url={url} uid={finalVersion[0].uid} brand={finalVersion[0].brand} model={finalVersion[0].model_name} version={finalVersion[0].version_name} />
                </div>
            </div >
            <div className='relative z-[100]'>
                <Footer />
            </div>
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
