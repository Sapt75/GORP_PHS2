import React from 'react'
import style from "../styles/varient.module.css"
import Link from "next/link"

const Price_Filter = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-y-10 border border-[#E1E1E1] py-12'>
            <div className='text-center'>
                <div className={`border-[1px] border-[#6C6C6C] w-2/3 rounded-md mx-auto ${style["price-hover"]} cursor-pointer`}>
                    <Link title='Cars under 5 Lakhs' href="/new-car-price/price-upto-5-lakh">
                        <p className='font-semibold text-[14px] py-1.5'>Under 5 Lakh</p>
                    </Link>
                </div>
            </div>
            <div className='text-center'>
                <div className={`border-[1px] border-[#6C6C6C] w-2/3 rounded-md mx-auto ${style["price-hover"]} cursor-pointer`}>
                    <Link title='5 - 10 Lakh Cars' href="/new-car-price/price-upto-10-lakh">
                        <p className='font-semibold text-[14px] py-1.5'>5 - 10 Lakh</p>
                    </Link>
                </div>
            </div>
            <div className='text-center'>
                <div className={`border-[1px] border-[#6C6C6C] w-2/3 rounded-md mx-auto ${style["price-hover"]} cursor-pointer`}>
                    <Link title='10 - 15 Lakh Cars' href="/new-car-price/price-upto-15-lakh"> 
                        <p className='font-semibold text-[14px] py-1.5'>10 - 15 Lakh</p>
                    </Link>
                </div>
            </div>
            <div className='text-center'>
                <div className={`border-[1px] border-[#6C6C6C] w-2/3 rounded-md mx-auto ${style["price-hover"]} cursor-pointer`}>
                    <Link title='15 - 20 Lakh Cars' href="/new-car-price/price-upto-20-lakh">
                        <p className='font-semibold text-[14px] py-1.5'>15 - 20 Lakh</p>
                    </Link>
                </div>
            </div>
            <div className='text-center'>
                <div className={`border-[1px] border-[#6C6C6C] w-2/3 rounded-md mx-auto ${style["price-hover"]} cursor-pointer`}>
                    <Link title='20 - 25 Lakh Cars' href="/new-car-price/price-upto-25-lakh">
                        <p className='font-semibold text-[14px] py-1.5'>20 - 25 Lakh</p>
                    </Link>
                </div>
            </div>
            <div className='text-center'>
                <div className={`border-[1px] border-[#6C6C6C] w-2/3 rounded-md mx-auto ${style["price-hover"]} cursor-pointer`}>
                    <Link title='25 - 30 Lakh Cars' href="/new-car-price/price-upto-30-lakh">
                        <p className='font-semibold text-[14px] py-1.5'>25 - 30 Lakh</p>
                    </Link>
                </div>
            </div>
            <div className='text-center'>
                <div className={`border-[1px] border-[#6C6C6C] w-2/3 rounded-md mx-auto ${style["price-hover"]} cursor-pointer`}>
                    <Link title='30 - 35 Lakh Cars' href="/new-car-price/price-upto-35-lakh">
                        <p className='font-semibold text-[14px] py-1.5'>30 - 35 Lakh</p>
                    </Link>
                </div>
            </div>
            <div className='text-center'>
                <div className={`border-[1px] border-[#6C6C6C] w-2/3 rounded-md mx-auto ${style["price-hover"]} cursor-pointer`}>
                    <Link title='35 - 40 Lakh Cars' href="/new-car-price/price-upto-40-lakh">
                        <p className='font-semibold text-[14px] py-1.5'>35 - 40 Lakh</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Price_Filter