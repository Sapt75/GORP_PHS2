import React from 'react'
import style from "../styles/varient.module.css"

const Price_Filter = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-y-10 border border-[#E1E1E1] py-12'>
            <div className='text-center'>
                <div className={`border-[1px] border-[#6C6C6C] w-2/3 rounded-md mx-auto ${style["price-hover"]} cursor-pointer`}>
                    <p className='font-semibold text-[14px] py-1.5'>Under 5 Lakh</p>
                </div>
            </div>
            <div className='text-center'>
                <div className={`border-[1px] border-[#6C6C6C] w-2/3 rounded-md mx-auto ${style["price-hover"]} cursor-pointer`}>
                    <p className='font-semibold text-[14px] py-1.5'>5 - 10 Lakh</p>
                </div>
            </div>
            <div className='text-center'>
                <div className={`border-[1px] border-[#6C6C6C] w-2/3 rounded-md mx-auto ${style["price-hover"]} cursor-pointer`}>
                    <p className='font-semibold text-[14px] py-1.5'>10 - 15 Lakh</p>
                </div>
            </div>
            <div className='text-center'>
                <div className={`border-[1px] border-[#6C6C6C] w-2/3 rounded-md mx-auto ${style["price-hover"]} cursor-pointer`}>
                    <p className='font-semibold text-[14px] py-1.5'>15 - 20 Lakh</p>
                </div>
            </div>
            <div className='text-center'>
                <div className={`border-[1px] border-[#6C6C6C] w-2/3 rounded-md mx-auto ${style["price-hover"]} cursor-pointer`}>
                    <p className='font-semibold text-[14px] py-1.5'>20 - 25 Lakh</p>
                </div>
            </div>
            <div className='text-center'>
                <div className={`border-[1px] border-[#6C6C6C] w-2/3 rounded-md mx-auto ${style["price-hover"]} cursor-pointer`}>
                    <p className='font-semibold text-[14px] py-1.5'>25 - 30 Lakh</p>
                </div>
            </div>
            <div className='text-center'>
                <div className={`border-[1px] border-[#6C6C6C] w-2/3 rounded-md mx-auto ${style["price-hover"]} cursor-pointer`}>
                    <p className='font-semibold text-[14px] py-1.5'>30 - 35 Lakh</p>
                </div>
            </div>
            <div className='text-center'>
                <div className={`border-[1px] border-[#6C6C6C] w-2/3 rounded-md mx-auto ${style["price-hover"]} cursor-pointer`}>
                    <p className='font-semibold text-[14px] py-1.5'>35 - 40 Lakh</p>
                </div>
            </div>
        </div>
    )
}

export default Price_Filter