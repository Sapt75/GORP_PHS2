import React, { useEffect, useState } from 'react'
import style from "../styles/navbar.module.css"
import facebook from "../public/images/facebook.svg"
import twitter from "../public/images/twitter.svg"
import book from "../public/images/book.svg"
import youtube from "../public/images/youtube.svg"
import insta from "../public/images/insta.jpeg"
import percent from "../public/images/percent.svg"
import square from "../public/images/square.svg"
import logo from "../public/images/logo.png"
import search from "../public/images/search.svg"
import notification from "../public/images/notification.svg"
import cross from "../public/images/cross.svg"
import down from "../public/images/down.svg"
import Image from 'next/image'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Search from './search'
import City from "./city_modal"


const Navbar = () => {


    const [show, setShow] = useState(false)
    const [drop, setDrop] = useState(false)
    const [more, setMore] = useState(false)





    return (
        <>
            <div className='md:h-auto'>
                <div className='sm:hidden w-full bg-white py-3'>
                    <div>
                        <div className='flex justify-evenly'>
                            <div onClick={() => document.getElementById("side").classList.add(style.scroll)}>
                                <Image className='mt-2' width={25} src={square} alt="square" />
                            </div>
                            <div>
                                <Image className='w-auto h-[50px]' width={200} height={60} src={logo} alt="logo" />
                            </div>
                            <div className='flex space-x-4'>
                                <Search />
                                <Image width={20} height={20} src={notification} alt="notification" />
                            </div>
                        </div>
                    </div>
                    <div id='side' className={`h-screen min-h-screen fixed z-[999999] top-0 bg-white w-8/12 ${style.scroller}`}>
                        <div className='my-4 flex justify-between mr-4'>
                            <Image className='w-auto h-auto' width={150} height={60} src="/images/logo.png" alt="logo" />
                            <Image onClick={() => document.getElementById("side").classList.remove(style.scroll)} src={cross} alt="cross" />
                        </div>
                        <ul className='mx-4 mt-6 space-y-5 text-sm text-[#484848]'>
                            <li onClick={() => drop ? setDrop(false) : setDrop(true)} className='flex justify-between text-[16px]'><span> New Cars </span><span className='mx-2'><Image className='inline' src={down} alt="" /></span></li>
                            <ul className={`space-y-2 text-[14px] ${drop ? null : "hidden"}`}>
                                <li>Aston Martin</li>
                                <li>Audi</li>
                                <li>BMW</li>
                                <li>Hyundai</li>
                                <li>Maruti</li>
                            </ul>
                            <li className='text-[16px]'>Compare Cars</li>
                            <li className='text-[16px]'>Car Dealers</li>
                            <li className='text-[16px]'>Electric Cars</li>
                            <li className='text-[16px]'>EMI Calculator</li>
                            <li className='text-[16px]'>Car Loan</li>
                            <li className='text-[16px]'>Car Value</li>
                            <li onClick={() => more ? setMore(false) : setMore(true)} className='flex justify-between text-[16px]'><span> More </span><span className='mx-2'><Image className='inline' src={down} alt="" /></span></li>
                            <ul className={`space-y-2 text-[14px] ${more ? null : "hidden"}`}>
                                <li>Option 1</li>
                                <li>Option 2</li>
                                <li>Option 3</li>
                                <li>Option 4</li>
                                <li>Option 5</li>
                            </ul>
                        </ul>
                        <div className='border-t-[1px] space-y-2 w-full border-black absolute bottom-40 text-left px-4 text-sm'>
                            <ul className='flex space-x-3 justify-center my-8'>
                                <a href=" https://www.facebook.com/getonroadprice">
                                    <li><Image width={20} src={facebook} alt="facebook" /></li>
                                </a>
                                <a href="https://twitter.com/getonroadprice">
                                    <li><Image width={25} src={twitter} alt="twitter" /></li>
                                </a>
                                <a href="https://www.youtube.com/channel/UC61OEz_KZVsMlozqPz-1xgw">
                                    <li><Image width={25} src={youtube} alt="youtube" /></li>
                                </a>
                                <a href="https://www.instagram.com/getonroadprice/">
                                    <li><Image width={25} src={insta} alt="instagram" /></li>
                                </a>
                            </ul>
                            <p className='mt-3 font-semibold text-[#484848]'>VMetrics Solutions Private Limited</p>
                            <p className='text-[#6F6F6F]'>103/A, Rishabh CHS LTD, Jai Ambe Mata Mandir Road, Bhayander West, Thane 401101, Maharashtra, India</p>
                            <p className='text-[#6F6F6F]'>admin@getonroadprice.com</p>
                            <p className='text-[#6F6F6F]'>Chat with us</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden md:block pt-[0.5rem] pb-[0.5rem]'>
                <div className='flex justify-evenly 2xl:mx-2'>
                    <div>
                        <Image className='w-auto h-[60px]' width={345} height={60} src={logo} alt="logo" />
                    </div>
                    <ul className='flex text-[18px] uppercase font-medium tracking-[-0.4px] space-x-[1.5rem] xl:space-x-[3rem] 2xl:space-x-[4rem] 2xl:ml-[2rem] pt-[1rem]'>
                        <li className='text-[#484848]'>New Cars</li>
                        <li className='text-[#484848]'>Compare Cars</li>
                        <li className='text-[#484848]'>Find Car Dealers</li>
                        <li className='cursor-pointer text-[#484848]' onClick={() => {
                            if (show) {
                                document.getElementById("nav-down").classList.remove(style["top-nav-down"])
                                setShow(false)
                            } else {
                                document.getElementById("nav-down").classList.add(style["top-nav-down"])
                                setShow(true)
                                setTimeout(() => {
                                    document.body.onclick = () => {
                                        document.getElementById("nav-down").classList.remove(style["top-nav-down"])
                                        setShow(false)
                                        document.body.onclick = null
                                    }
                                }, 1500)
                            }
                        }}><span>More</span> <span><KeyboardArrowDownIcon /></span>
                            <div id='nav-down' className={`position ${style["top-nav"]} absolute bg-white w-1/4 shadow-2xl`}>
                                <ul className='text-[18px] mx-10 py-10 space-y-3'>
                                    <li className='uppercase font-medium hover:text-[#09809a]'>Upcoming Cars</li>
                                    <li className='uppercase font-medium hover:text-[#09809a]'>Electric Cars</li>
                                    <li className='uppercase font-medium hover:text-[#09809a]'>New Car Loan</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <div className='flex space-x-[1rem] 2xl:space-x-[2rem] 2xl:ml-[2rem] py-[0.8rem]'>
                        <Search status={true} />
                        <Image width={25} height={25} src={notification} alt="notification" />
                        <City status={true} />
                    </div>
                </div>
                <hr className='border-t-2 mb-[0.8rem] border-gray-300' />
            </div>
            <div className='flex md:hidden w-full space-x-0.5 fixed z-[999] bottom-0'>
                <button className='bg-[#333333] text-white text-[12px] py-2 w-1/2'><span><Image className='inline mr-2' src={book} alt='book' /></span> Contact Details</button>
                <button className='bg-[#BA1223] text-white text-[12px] py-2 w-1/2'><span><Image className='inline mr-2' src={percent} alt='percentage' /></span> Get Offers</button>
            </div>
        </>

    )
}

export default Navbar


