import React from 'react'
import logo from "../public/images/logo.png"
import facebook from "../public/images/facebook.svg"
import twitter from "../public/images/twitter.svg"
import insta from "../public/images/insta.svg"
import youtube from "../public/images/youtube.svg"
import linkedin from "../public/images/linkedin.svg"
import chat from "../public/images/chat.svg"
import Image from 'next/image'
// import insta from "../public/images/insta.jpeg"

const Footer = () => {
    return (
        <>
            <div className='bg-[#f4f4f4] pb-32'>
                <div className='flex justify-around py-6 text-[16px]'>
                    <div>
                        <div className='relative mb-12'>
                            <span className='absolute right-[-36px]'>
                                <Image style={{ maxWidth: "unset" }} className='w-[12rem] h-auto' src={logo} alt="" />
                            </span>
                        </div>
                        <ul className='space-y-2'>
                            <li>Overview</li>
                            <li>About Us</li>
                            <li>FAQ&apos;s</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div className='mt-10 hidden w-1/5 md:inline'>
                        <p>VMetrics Solutions Private Limited:
                            103/A, Rishabh CHS LTD, Jai Ambe Mata Mandir Road, Bhayander West, Thane 401101, Maharashtra, India</p>
                        <p>+91 976 990 0531</p>
                        <p>info@abccorporation.com</p>
                    </div>
                    <div>
                        <p className='text-[20px] font-normal'>Connect with Us</p>
                        <ul className='flex space-x-3 justify-center my-2'>
                            <a title='Facebook' href=" https://www.facebook.com/getonroadprice">
                                <li><Image width={20} src={facebook} alt="" /></li>
                            </a>
                            <a title='Twitter' href="https://twitter.com/getonroadprice">
                                <li><Image width={25} src={twitter} alt="" /></li>
                            </a>
                            <a title='Youtube' href="https://www.youtube.com/channel/UC61OEz_KZVsMlozqPz-1xgw">
                                <li><Image width={25} src={youtube} alt="" /></li>
                            </a>
                            <a title='Instagram' href="https://www.instagram.com/getonroadprice/">
                                <li><Image width={20} src={insta} alt="" /></li>
                            </a>
                            <li className='cursor-pointer' title='LinkedIn'><Image width={20} src={linkedin} alt="" /></li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer