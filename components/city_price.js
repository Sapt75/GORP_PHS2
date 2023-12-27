import Image from 'next/image'
import React from 'react'
import cross from "../public/images/cross.svg"
import bangalore from "../public/images/bangalore.svg"
import mumbai from "../public/images/mumbai.svg"
import chennai from "../public/images/chennai.svg"
import delhi from "../public/images/delhi.svg"
import pune from "../public/images/pune.svg"
import hyderabad from "../public/images/hyderabad.svg"
import kolkata from "../public/images/kolkata.svg"
import ahmedabad from "../public/images/ahmedabad.svg"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import style from "../styles/city.module.css"

const City_Price = () => {
    return (
        <>
            <div onClick={()=> document.getElementById("city").classList.add(style["show-city"])} className='border border-[#E1E1E1] w-full flex justify-between cursor-pointer'>
                <div className='leading-[1.2] p-[0.5rem]'>
                    <p className='pb-2 text-[#6F6F6F]'>City</p>
                    <span className='md:text-[14px] text-[12px] text-[#484848] font-semibold tracking-[-0.28px]'>Electronic City, Bangalore</span>
                </div>
                <span><ChevronRightIcon className='mt-[1rem] md:mr-[0.6rem]' fontSize='medium' /></span>
            </div>
            <div id='city' className={style.city}>
                <div className='flex justify-between px-4 py-4 bg-gray-200'>
                    <p className='font-semibold'>Select Your City</p>
                    <span className='cursor-pointer' onClick={()=> {
                        document.getElementById("city").classList.add(style["hide-city"])
                        document.getElementById("city").classList.remove(style["show-city"])
                        setTimeout(()=>{
                            document.getElementById("city").classList.remove(style["hide-city"])
                        }, 1000)
                        }}><Image src={cross} alt="" /></span>
                </div>
                <div className='px-2 bg-gray-100'>
                    <input className='border-2 border-[#0B9DBC] w-full py-[0.3rem]' type="text" />
                </div>
                <div className='my-2 mx-0.5 min-h-screen h-screen'>
                    <p className='bg-[#0B9DBC] py-3 px-2 text-white text-xl font-semibold w-full'>Popular Cities</p>
                    <div>
                        <div className='flex justify-between mx-6 py-2'>
                            <p>Mumbai</p>
                            <Image width={30} src={mumbai} alt='' />
                        </div>
                        <div className='flex justify-between mx-6 py-2'>
                            <p>Bangalore</p>
                            <Image width={30} src={bangalore} alt='' />
                        </div>
                        <div className='flex justify-between mx-6 py-2'>
                            <p>Delhi</p>
                            <Image width={30} src={delhi} alt='' />
                        </div>
                        <div className='flex justify-between mx-6 py-2'>
                            <p>Pune</p>
                            <Image width={30} src={pune} alt='' />
                        </div>
                        <div className='flex justify-between mx-6 py-2'>
                            <p>Hyderabad</p>
                            <Image width={30} src={hyderabad} alt='' />
                        </div>
                        <div className='flex justify-between mx-6 py-2'>
                            <p>Ahmedabad</p>
                            <Image width={30} src={ahmedabad} alt='' />
                        </div>
                        <div className='flex justify-between mx-6 py-2'>
                            <p>Chennai</p>
                            <Image width={30} src={chennai} alt='' />
                        </div>
                        <div className='flex justify-between mx-6 py-2'>
                            <p>Kolkata</p>
                            <Image width={30} src={kolkata} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default City_Price