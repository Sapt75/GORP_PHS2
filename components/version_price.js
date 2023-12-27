import Image from 'next/image'
import React from 'react'
import cross from "../public/images/cross.svg"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import style from "../styles/city.module.css"

const Version_Price = () => {
    return (
        <>
            <div onClick={()=> document.getElementById("version").classList.add(style["show-city"])} className='border border-[#E1E1E1] w-full flex justify-between cursor-pointer'>
                <div className='leading-[1.2] p-[0.5rem]'>
                    <p className='pb-2 text-[#6F6F6F]'>Change Version</p>
                    <span className='md:text-[14px] text-[13px] text-[#484848] font-semibold tracking-[-0.28px]'>E 1.2 Petrol</span>
                </div>
                <span><ChevronRightIcon className='mt-[1rem] mr-[0.6rem]' fontSize='medium' /></span>
            </div>
            <div id='version' className={`${style.city}`}>
                <div className='flex justify-between px-4 py-4 bg-gray-200'>
                    <p className='font-semibold'>Select Your City</p>
                    <span className='cursor-pointer' onClick={() => {
                        document.getElementById("version").classList.add(style["hide-city"])
                        document.getElementById("version").classList.remove(style["show-city"])
                        setTimeout(() => {
                            document.getElementById("version").classList.remove(style["hide-city"])
                        }, 1000)
                    }}><Image src={cross} alt="" /></span>
                </div>
                <div className='p-4 border-b-[2px] border-gray-100'>
                    <ul className='flex space-x-3'>
                        <li>Petrol</li>
                        <li>CNG</li>
                        <li>Manual</li>
                        <li>Automatic</li>
                    </ul>
                </div>
                <div className='max-h-screen h-screen'>
                <div className='h-[90vh] overflow-y-scroll'>
                    <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                        <div>
                            <p className='text-[18px] font-semibold tracking-[-0.36px]'>Aura E</p>
                            <span className='text-[14px] font-normal tracking-[-0.28px]'>1197 cc, Manual, Petrol </span>
                            <p className='text-[12px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</p>
                        </div>
                        <div className='mx-8'>
                            <p className='text-[18px] font-semibold tracking-[-0.36px]'>₹ 6.09 Lakh</p>
                            <div className='mr-[2rem] pb-[1rem]'>
                                <input className='mx-1' type="checkbox"></input>
                                <span className='text-[#767676] text-[16px] font-medium tracking-[-0.32px]'>Compare</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                        <div>
                            <p className='text-[14px] font-semibold tracking-[-0.28px]'>Aura S</p>
                            <span className='text-[10px] font-normal tracking-[-0.2px]'>1197 cc, Manual, Petrol </span>
                            <p className='text-[10px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</p>
                        </div>
                        <div className='mx-8'>
                            <p className='text-[18px] font-semibold tracking-[-0.32px]'>₹ 7.18 Lakh</p>
                            <div className='mr-[2rem] pb-[1rem]'>
                                <input className='mx-1' type="checkbox"></input>
                                <span className='text-[#767676] text-[12px] font-medium tracking-[-0.32px]'>Compare</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                        <div>
                            <p className='text-[14px] font-semibold tracking-[-0.28px]'>Aura SX</p>
                            <span className='text-[10px] font-normal tracking-[-0.2px]'>1197 cc, Manual, Petrol </span>
                            <p className='text-[10px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</p>
                        </div>
                        <div className='mx-8'>
                            <p className='text-[18px] font-semibold tracking-[-0.32px]'>₹ 7.95 Lakh</p>
                            <div className='mr-[2rem] pb-[1rem]'>
                                <input className='mx-1' type="checkbox"></input>
                                <span className='text-[#767676] text-[12px] font-medium tracking-[-0.32px]'>Compare</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                        <div>
                            <p className='text-[14px] font-semibold tracking-[-0.28px]'>Aura S CNG</p>
                            <span className='text-[10px] font-normal tracking-[-0.2px]'>1197 cc, Manual, Petrol </span>
                            <p className='text-[10px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</p>
                        </div>
                        <div className='mx-8'>
                            <p className='text-[18px] font-semibold tracking-[-0.32px]'>₹ 8.13 Lakh</p>
                            <div className='mr-[2rem] pb-[1rem]'>
                                <input className='mx-1' type="checkbox"></input>
                                <span className='text-[#767676] text-[12px] font-medium tracking-[-0.32px]'>Compare</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                        <div>
                            <p className='text-[14px] font-semibold tracking-[-0.28px]'>Aura SX Option</p>
                            <span className='text-[10px] font-normal tracking-[-0.2px]'>1197 cc, Manual, Petrol </span>
                            <p className='text-[10px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</p>
                        </div>
                        <div className='mx-8'>
                            <p className='text-[18px] font-semibold tracking-[-0.32px]'>₹ 8.61 Lakh</p>
                            <div className='mr-[2rem] pb-[1rem]'>
                                <input className='mx-1' type="checkbox"></input>
                                <span className='text-[#767676] text-[12px] font-medium tracking-[-0.32px]'>Compare</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                        <div>
                            <p className='text-[18px] font-semibold tracking-[-0.36px]'>Aura E</p>
                            <span className='text-[14px] font-normal tracking-[-0.28px]'>1197 cc, Manual, Petrol </span>
                            <p className='text-[12px] text-[#CE4327] font-semibold tracking-[-0.24px]'>View Price Breakup</p>
                        </div>
                        <div className='mx-8'>
                            <p className='text-[18px] font-semibold tracking-[-0.36px]'>₹ 6.09 Lakh</p>
                            <div className='mr-[2rem] pb-[1rem]'>
                                <input className='mx-1' type="checkbox"></input>
                                <span className='text-[#767676] text-[16px] font-medium tracking-[-0.32px]'>Compare</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                        <div>
                            <p className='text-[14px] font-semibold tracking-[-0.28px]'>Aura S</p>
                            <span className='text-[10px] font-normal tracking-[-0.2px]'>1197 cc, Manual, Petrol </span>
                            <p className='text-[10px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</p>
                        </div>
                        <div className='mx-8'>
                            <p className='text-[18px] font-semibold tracking-[-0.32px]'>₹ 7.18 Lakh</p>
                            <div className='mr-[2rem] pb-[1rem]'>
                                <input className='mx-1' type="checkbox"></input>
                                <span className='text-[#767676] text-[12px] font-medium tracking-[-0.32px]'>Compare</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                        <div>
                            <p className='text-[14px] font-semibold tracking-[-0.28px]'>Aura SX</p>
                            <span className='text-[10px] font-normal tracking-[-0.2px]'>1197 cc, Manual, Petrol </span>
                            <p className='text-[10px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</p>
                        </div>
                        <div className='mx-8'>
                            <p className='text-[18px] font-semibold tracking-[-0.32px]'>₹ 7.95 Lakh</p>
                            <div className='mr-[2rem] pb-[1rem]'>
                                <input className='mx-1' type="checkbox"></input>
                                <span className='text-[#767676] text-[12px] font-medium tracking-[-0.32px]'>Compare</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                        <div>
                            <p className='text-[14px] font-semibold tracking-[-0.28px]'>Aura S CNG</p>
                            <span className='text-[10px] font-normal tracking-[-0.2px]'>1197 cc, Manual, Petrol </span>
                            <p className='text-[10px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</p>
                        </div>
                        <div className='mx-8'>
                            <p className='text-[18px] font-semibold tracking-[-0.32px]'>₹ 8.13 Lakh</p>
                            <div className='mr-[2rem] pb-[1rem]'>
                                <input className='mx-1' type="checkbox"></input>
                                <span className='text-[#767676] text-[12px] font-medium tracking-[-0.32px]'>Compare</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between py-3 px-4 border border-[#C6C6C6]'>
                        <div>
                            <p className='text-[14px] font-semibold tracking-[-0.28px]'>Aura SX Option</p>
                            <span className='text-[10px] font-normal tracking-[-0.2px]'>1197 cc, Manual, Petrol </span>
                            <p className='text-[10px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</p>
                        </div>
                        <div className='mx-8'>
                            <p className='text-[18px] font-semibold tracking-[-0.32px]'>₹ 8.61 Lakh</p>
                            <div className='mr-[2rem] pb-[1rem]'>
                                <input className='mx-1' type="checkbox"></input>
                                <span className='text-[#767676] text-[12px] font-medium tracking-[-0.32px]'>Compare</span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Version_Price