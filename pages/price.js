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




const Price = () => {

    const [update, setUpdate] = useState(false)
    const [first, setFirst] = useState(false)
    const top_bar = useRef(null)
    let [third, setThird] = useState(false)
    let [second, setSecond] = useState(false)



    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            top_bar.current.classList.add(style.scrolling)
        } else {
            top_bar.current.classList.remove(style.scrolling);
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
            <div ref={top_bar} className={`${style["top-scroll"]} hidden md:block`}>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <ul className='whitespace-nowrap text-gray-800 md:whitespace-normal md:overflow-x-auto md:mx-[2rem] overflow-x-scroll mx-[1rem] my-[1rem] flex space-x-10 2xl:space-x-[2rem] text-[16px] font-normal tracking-[-0.32px]'>
                            <li><Image width={200} src={logo} /></li>
                            <li className='font-semibold text-[#484848]'>Aura <Image className='inline' src={edit} /></li>
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
                    <h1 className='md:text-[24px] text-[20px] text-[#484848] pb-3 font-semibold tracking-[-0.48px]'>Hyundai Aura On Road Price in Mumbai</h1>
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
                            <img className='w-[70%] mx-auto' src={"https://ik.imagekit.io/GORP/Hyundai/Aura/Aura.jpg?updatedAt=1690106132936"} />
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
                                        <p className='text-[24px] text-[#484848] font-semibold tracking-[-0.48px]'>Hyundai Aura</p>
                                        <span className='text-[24px] text-[#484848] font-semibold tracking-[-0.48px]'>₹ 7.51 Lakh - ₹ 8.95 Lakh</span>
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
                            <div className='md:pr-4 py-3'>
                                <div className={`${first ? "hidden" : "block"}`}>
                                    <div className='flex justify-between'>
                                        <p className='md:text-[20px] text-[17px] text-[#484848] font-semibold pb-1'>Aura S 1.2 CNG Price Mumbai</p>
                                        <span onClick={() => setFirst(true)}>
                                            <ChevronRight className='rotate-[360deg] cursor-pointer' />
                                        </span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p className='text-[16px] text-[#484848]'>On Road Price In Mumbai</p>
                                        <p className='text-[16px] text-[#484848] font-semibold'>9,25,280</p>
                                    </div>
                                </div>
                                <div className={`w-full ${first ? "block" : "hidden"} border border-[#E1E1E1]`}>
                                    <div className='flex justify-between px-4'>
                                        <p className="text-[#484848] text-[17px] md:text-[20px] py-3 font-semibold">Aura SX 1.2 CNG Price Mumbai</p>
                                        <div onClick={() => setFirst(false)} className='cursor-pointer py-3'>
                                            <ChevronRight className='rotate-[90deg]' />
                                        </div>
                                    </div>
                                    <div className='bg-stone-300 bg-opacity-25 md:px-4'>
                                        <div className='flex justify-between pt-4'>
                                            <p className="text-[18px] font-semibold">Ex-Showroom Price</p>
                                            <p className="text-black text-[18px] text-right font-semibold ">₹ 6,75,280</p>
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
                                                    <p className="text-neutral-500 text-right text-lg">₹ 67,500</p>
                                                    <p className="text-neutral-500 text-right text-lg">₹ 675</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-between relative'>
                                                <p className="text-[18px] font-semibold">Total Registration Charges</p>
                                                <p className="text-black text-[18px] text-right font-semibold ">₹ 68,175</p>
                                                <div className="w-full h-[0px] px-2 bottom-[-10px] absolute border border-[#E1E1E1]"></div>
                                            </div>
                                        </div>
                                        <div className='pt-4'>
                                            <div className='flex justify-between pb-6'>
                                                <p className="text-[18px] font-semibold">Insurance Charges</p>
                                                <p className="text-black text-[18px] text-right font-semibold ">₹ 1,75,280</p>
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
                                                    <p className="text-neutral-500 text-right text-lg">₹ 1,500</p>
                                                    <p className="text-neutral-500 text-right text-lg">₹ 600</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-between relative'>
                                                <p className="text-[18px] font-semibold">Total Other Charges</p>
                                                <p className="text-black text-[18px] text-right font-semibold ">₹ 2,100</p>
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
                                                    <p className="text-neutral-500 text-right text-lg">₹ 4,500</p>
                                                    <p className="text-neutral-500 text-right text-lg">₹ 6,000</p>
                                                    <p className="text-neutral-500 text-right text-lg">₹ 12,000</p>
                                                    <p className="text-neutral-500 text-right text-lg">₹ 20,000</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-between relative'>
                                                <p className="text-[18px] font-semibold">Total Optional Charges</p>
                                                <p className="text-black text-[18px] text-right font-semibold ">₹ 42,500</p>
                                                <div className="w-full h-[0px] px-2 bottom-[-10px] absolute border border-[#E1E1E1]"></div>
                                            </div>
                                        </div>
                                        <div className='pt-4 pb-4 relative'>
                                            <div className='flex justify-between pb-6'>
                                                <p className="text-[18px] font-semibold">On Road Price Mumbai</p>
                                                <p className="text-black text-[18px] text-right font-semibold ">₹ 9,63,335</p>
                                                <div className="w-full h-[0px] px-2 bottom-[30px] absolute border border-[#E1E1E1]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='md:pr-4 py-3'>
                                <div className={`${second ? "hidden" : "block"}`}>
                                    <div className='flex justify-between'>
                                        <p className='md:text-[20px] text-[17px] text-[#484848] font-semibold pb-1'>Aura SX 1.2 CNG Price Mumbai</p>
                                        <span onClick={() => setSecond(true)}>
                                            <ChevronRight className='rotate-[360deg] cursor-pointer' />
                                        </span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p className='text-[16px] text-[#484848]'>On Road Price In Mumbai</p>
                                        <p className='text-[16px] text-[#484848] font-semibold'>9,25,280</p>
                                    </div>
                                </div>
                                <div className={`w-full ${second ? "block" : "hidden"} border border-[#E1E1E1]`}>
                                    <div className='flex justify-between px-4'>
                                        <p className="text-[#484848] text-[17px] md:text-[20px] py-3 font-semibold">Aura SX 1.2 CNG Price Mumbai</p>
                                        <div onClick={() => setSecond(false)} className='cursor-pointer py-3'>
                                            <ChevronRight className='rotate-[90deg]' />
                                        </div>
                                    </div>
                                    <div className='bg-stone-300 bg-opacity-25 md:px-4'>
                                        <div className='flex justify-between pt-4'>
                                            <p className="text-[18px] font-semibold">Ex-Showroom Price</p>
                                            <p className="text-black text-[18px] text-right font-semibold ">₹ 6,75,280</p>
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
                                                    <p className="text-neutral-500 text-right text-lg">₹ 67,500</p>
                                                    <p className="text-neutral-500 text-right text-lg">₹ 675</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-between relative'>
                                                <p className="text-[18px] font-semibold">Total Registration Charges</p>
                                                <p className="text-black text-[18px] text-right font-semibold ">₹ 68,175</p>
                                                <div className="w-full h-[0px] px-2 bottom-[-10px] absolute border border-[#E1E1E1]"></div>
                                            </div>
                                        </div>
                                        <div className='pt-4'>
                                            <div className='flex justify-between pb-6'>
                                                <p className="text-[18px] font-semibold">Insurance Charges</p>
                                                <p className="text-black text-[18px] text-right font-semibold ">₹ 1,75,280</p>
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
                                                    <p className="text-neutral-500 text-right text-lg">₹ 1,500</p>
                                                    <p className="text-neutral-500 text-right text-lg">₹ 600</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-between relative'>
                                                <p className="text-[18px] font-semibold">Total Other Charges</p>
                                                <p className="text-black text-[18px] text-right font-semibold ">₹ 2,100</p>
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
                                                    <p className="text-neutral-500 text-right text-lg">₹ 4,500</p>
                                                    <p className="text-neutral-500 text-right text-lg">₹ 6,000</p>
                                                    <p className="text-neutral-500 text-right text-lg">₹ 12,000</p>
                                                    <p className="text-neutral-500 text-right text-lg">₹ 20,000</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-between relative'>
                                                <p className="text-[18px] font-semibold">Total Optional Charges</p>
                                                <p className="text-black text-[18px] text-right font-semibold ">₹ 42,500</p>
                                                <div className="w-full h-[0px] px-2 bottom-[-10px] absolute border border-[#E1E1E1]"></div>
                                            </div>
                                        </div>
                                        <div className='pt-4 pb-4 relative'>
                                            <div className='flex justify-between pb-6'>
                                                <p className="text-[18px] font-semibold">On Road Price Mumbai</p>
                                                <p className="text-black text-[18px] text-right font-semibold ">₹ 9,63,335</p>
                                                <div className="w-full h-[0px] px-2 bottom-[30px] absolute border border-[#E1E1E1]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='md:pr-4 py-3'>
                                <div className={`${third ? "hidden" : "block"}`}>
                                    <div className='flex justify-between'>
                                        <p className='md:text-[20px] text-[17px] text-[#484848] font-semibold pb-1'>Aura E 1.2 Petrol Price Mumbai</p>
                                        <span onClick={() => setThird(true)}>
                                            <ChevronRight className='rotate-[360deg] cursor-pointer' />
                                        </span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p className='text-[16px] text-[#484848]'>On Road Price In Mumbai</p>
                                        <p className='text-[16px] text-[#484848] font-semibold'>9,25,280</p>
                                    </div>
                                </div>
                                <div className={`w-full ${third ? "block" : "hidden"} border border-[#E1E1E1]`}>
                                    <div className='flex justify-between px-4'>
                                        <p className="text-[#484848] text-[17px] md:text-[20px] py-3 font-semibold">Aura E 1.2 Petrol Price Mumbai</p>
                                        <div onClick={() => setThird(false)} className='cursor-pointer py-3'>
                                            <ChevronRight className='rotate-[90deg]' />
                                        </div>
                                    </div>
                                    <div className='bg-stone-300 bg-opacity-25 md:px-4'>
                                        <div className='flex justify-between pt-4'>
                                            <p className="text-[18px] font-semibold">Ex-Showroom Price</p>
                                            <p className="text-black text-[18px] text-right font-semibold ">₹ 6,75,280</p>
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
                                                    <p className="text-neutral-500 text-right text-lg">₹ 67,500</p>
                                                    <p className="text-neutral-500 text-right text-lg">₹ 675</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-between relative'>
                                                <p className="text-[18px] font-semibold">Total Registration Charges</p>
                                                <p className="text-black text-[18px] text-right font-semibold ">₹ 68,175</p>
                                                <div className="w-full h-[0px] px-2 bottom-[-10px] absolute border border-[#E1E1E1]"></div>
                                            </div>
                                        </div>
                                        <div className='pt-4'>
                                            <div className='flex justify-between pb-6'>
                                                <p className="text-[18px] font-semibold">Insurance Charges</p>
                                                <p className="text-black text-[18px] text-right font-semibold ">₹ 1,75,280</p>
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
                                                    <p className="text-neutral-500 text-right text-lg">₹ 1,500</p>
                                                    <p className="text-neutral-500 text-right text-lg">₹ 600</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-between relative'>
                                                <p className="text-[18px] font-semibold">Total Other Charges</p>
                                                <p className="text-black text-[18px] text-right font-semibold ">₹ 2,100</p>
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
                                                    <p className="text-neutral-500 text-right text-lg">₹ 4,500</p>
                                                    <p className="text-neutral-500 text-right text-lg">₹ 6,000</p>
                                                    <p className="text-neutral-500 text-right text-lg">₹ 12,000</p>
                                                    <p className="text-neutral-500 text-right text-lg">₹ 20,000</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-between relative'>
                                                <p className="text-[18px] font-semibold">Total Optional Charges</p>
                                                <p className="text-black text-[18px] text-right font-semibold ">₹ 42,500</p>
                                                <div className="w-full h-[0px] px-2 bottom-[-10px] absolute border border-[#E1E1E1]"></div>
                                            </div>
                                        </div>
                                        <div className='pt-4 pb-4 relative'>
                                            <div className='flex justify-between pb-6'>
                                                <p className="text-[18px] font-semibold">On Road Price Mumbai</p>
                                                <p className="text-black text-[18px] text-right font-semibold ">₹ 9,63,335</p>
                                                <div className="w-full h-[0px] px-2 bottom-[30px] absolute border border-[#E1E1E1]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

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
                                    <Version_Modal />
                                    <City_Modal />
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

                    <div className='relative z-[100] bg-white'>
                        {/* Service Cost  */}
                        <div className='pb-4 pt-8 md:px-0'>
                            <h2 className='md:text-[24px] text-[18px] text-[#484848] font-semibold pb-2 md:pb-4'>Service cost of Aura in Mumbai (5 Years / 50,000 KM)</h2>
                            <div className='border-x-[1px] border-t-[1px] border-[#E1E1E1]'>
                                <div className='border border-[#E1E1E1] w-[90%] md:w-1/5 flex justify-between cursor-pointer m-4'>
                                    <div className='leading-[1.2] p-[0.5rem]'>
                                        <p className='pb-1 text-[#6F6F6F]'>Select Version</p>
                                        <span className='md:text-[14px] text-[13px] text-[#484848] font-semibold tracking-[-0.28px]'>E 1.2 Petrol</span>
                                    </div>
                                    <span><ChevronRightIcon className='mt-[1rem] mr-[0.6rem]' fontSize='medium' /></span>
                                </div>
                                <table className='w-full my-2 md:my-5'>
                                    <tr className='bg-[#E1E1E1]'>
                                        <th className='text-left p-2 text-[16px] font-normal tracking-[-0.32px]'>Service Interval</th>
                                        <th className='text-right py-2 px-3 text-[16px] font-normal tracking-[-0.32px]'>Service Cost</th>
                                    </tr>
                                    <tr className='border border-[#C6C6C6]'>
                                        <td className='text-[16px] font-normal p-2'>10,000 km or 1 year</td>
                                        <td className='text-right py-2 px-3 text-[16px] text-[#484848] leading-[5px] pt-2 font-semibold tracking-[-0.32px]'>₹ 1,642</td>
                                    </tr>
                                    <tr className='border border-[#C6C6C6]'>
                                        <td className='text-[16px] font-normal p-2'>20,000 km or 2 year</td>
                                        <td className='text-right py-2 px-3 text-[16px] text-[#484848] leading-[5px] pt-2 font-semibold tracking-[-0.32px]'>₹ 1,840</td>
                                    </tr>
                                    <tr className='border border-[#C6C6C6]'>
                                        <td className='text-[16px] font-normal p-2'>30,000 km or 3 year</td>
                                        <td className='text-right py-2 px-3 text-[16px] text-[#484848] leading-[5px] pt-2 font-semibold tracking-[-0.32px]'>₹ 4,463</td>
                                    </tr>
                                    <tr className='border border-[#C6C6C6]'>
                                        <td className='text-[16px] font-normal p-2'>40,000 km or 4 year</td>
                                        <td className='text-right py-2 px-3 text-[16px] text-[#484848] leading-[5px] pt-2 font-semibold tracking-[-0.32px]'>₹ 4,460</td>
                                    </tr>
                                    <tr className='border border-[#C6C6C6]'>
                                        <td className='text-[16px] font-normal p-2'>50,000 km or 5 year</td>
                                        <td className='text-right py-2 px-3 text-[16px] text-[#484848] leading-[5px] pt-2 font-semibold tracking-[-0.32px]'>₹ 4,769</td>
                                    </tr>
                                </table>
                            </div>
                        </div>


                        {/* Dealers Section  */}
                        <div>
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

                        {/* Compare Cars Mobile  */}
                        <div className='my-4 md:hidden'>
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
                                            <button className='bg-[#09809A] w-full py-3 text-white text-[14px] font-normal'><Image className='inline mr-1' width={20} src={compare_white} alt="" />Add to Compare</button>
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
                                            <button className='bg-[#09809A] w-full py-3 text-white text-[14px] font-normal'><Image className='inline mr-1' width={20} src={compare_white} alt="" />Add to Compare</button>
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
                                            <button className='bg-[#09809A] w-full py-3 text-white text-[14px] font-normal'><Image className='inline mr-1' width={20} src={compare_white} alt="" />Add to Compare</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Compare Cars  */}
                        <div className='my-10 hidden md:block'>
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


                        {/* Highlights  */}
                        <div className='w-full my-6 md:px-0'>

                            <p className='md:text-[24px] text-[18px] text-[#484848] font-semibold mb-2'>Key Highlights of Hyundai Cars</p>
                            <div class="relative overflow-x-auto">
                                <table class="w-full text-left">
                                    <tbody>
                                        <tr class="bg-white border dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="md:px-6 px-2 text-[14px] text-[#484848] md:text-base py-2 font-semibold md:whitespace-nowrap dark:text-white">
                                                Registration Fees
                                            </th>
                                            <td class="md:pl-[15rem] text-[14px] px-2 md:px-0 text-[#6F6F6F] md:text-base">
                                                Rs. 600 – For all cars
                                            </td>
                                        </tr>
                                        <tr class="bg-white border dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="md:px-6 px-2 text-[14px] text-[#484848] md:text-base py-2 font-semibold md:whitespace-nowrap dark:text-white">
                                                Hypothecation Charges
                                            </th>
                                            <td class="md:pl-[15rem] text-[14px] px-2 md:px-0 text-[#6F6F6F] md:text-base">
                                                Rs. 1,500 – If the car is purchased on a loan
                                            </td>
                                        </tr>
                                        <tr class="bg-white border dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="md:px-6 px-2 text-[14px] text-[#484848] md:text-base py-2 font-semibold md:whitespace-nowrap dark:text-white">
                                                Number Plate Charges
                                            </th>
                                            <td class="md:pl-[15rem] text-[14px] px-2 md:px-0 text-[#6F6F6F] md:text-base">
                                                Rs. 230 – 400 – Same for HSRP Number Plate
                                            </td>
                                        </tr>
                                        <tr class="bg-white border dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="md:px-6 px-2 text-[14px] text-[#484848] md:text-base py-2 font-semibold md:whitespace-nowrap dark:text-white">
                                                Parking Fee/State Development Charges
                                            </th>
                                            <td class="md:pl-[15rem] text-[14px] px-2 md:px-0 text-[#6F6F6F] md:text-base">
                                                <p className='pb-3'>Rs. 2,000 – MCD Parking Fees for cars under</p>
                                                <p>Rs. 4 LakhRs. 4,000 – MCD Parking Fees for cars above Rs. 4 Lakh</p>
                                            </td>
                                        </tr>
                                        <tr class="bg-white border dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="md:px-6 px-2 text-[14px] text-[#484848] md:text-base py-2 font-semibold md:whitespace-nowrap dark:text-white">
                                                Number Plate Charges
                                            </th>
                                            <td class="md:pl-[15rem] text-[14px] px-2 md:px-0 text-[#6F6F6F] md:text-base">
                                                Rs. 230 – 400 – Same for HSRP Number Plate
                                            </td>
                                        </tr>
                                        <tr class="bg-white border dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="md:px-6 px-2 text-[14px] text-[#484848] md:text-base py-2 font-semibold md:whitespace-nowrap dark:text-white">
                                                Temporary Registration Charges
                                            </th>
                                            <td class="md:pl-[15rem] text-[14px] text-[#6F6F6F] px-2 md:px-0 md:text-base">Rs. 1,200 – 1,500 – Temporary Registration for up to 1 month</td>
                                        </tr>
                                        <tr class="bg-white border dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="md:px-6 px-2 text-[14px] text-[#484848] md:text-base py-2 font-semibold md:whitespace-nowrap dark:text-white">
                                                Road Tax Charges
                                            </th>
                                            <td class="md:pl-[15rem] text-[14px] text-[#6F6F6F] px-2 md:px-0 md:text-base">
                                                <p className="pb-2">Cars under Rs. 10.0 Lakh: CNG – 7%, Petrol – 11%, Diesel – 13%Cars between Rs. 10.0 – 20.0 Lakh: Petrol – 12%, Diesel – 14%Cars above Rs. 20.0 Lakh: Petrol – 13%, Diesel – 15%</p>
                                                <p className='pb-1'>If car is purchased under Company Name, Road Tax is above 20%</p>
                                            </td>
                                        </tr>
                                        <tr class="bg-white border dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="md:px-6 px-2 text-[14px] text-[#484848] md:text-base py-2 font-semibold md:whitespace-nowrap dark:text-white">
                                                FastTag Charges
                                            </th>
                                            <td class="md:pl-[15rem] text-[14px] text-[#6F6F6F] px-2 md:px-0 md:text-base">Rs. 500 FasTag fees payable on purchase of the vehicle</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>


                        {/* FAQ Section  */}
                        <div className='my-10'>
                            <p className='md:text-[24px] text-[18px] text-[#484848] font-semibold tracking-[-0.48px]'>Regional Transport Office (RTO) Mumbai</p>
                            <div className='my-3 md:w-[65rem]'>
                                <Price_Faq />
                            </div>
                        </div>




                        {/* BReadCrumb  */}
                        <div className='p-4'>
                            <p>Home &gt; Hyundai &gt; Aura</p>
                        </div>
                    </div>


                </div>


                <div className='md:w-[26%] hidden md:block ml-[1rem] md:mr-20'>
                    <Right />
                </div>
            </div>
            <div className='relative z-[100]'>
                <Footer />
            </div>
        </>
    )
}

export default Price








