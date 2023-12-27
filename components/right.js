import React, { useEffect, useState } from 'react'
import brochure2 from "../public/images/brochure.svg"
import brochure from "../public/images/brocher.jpg"
import download from "../public/images/download.svg"
import connect from "../public/images/connect.svg"
import promo from "../public/images/promo.png"
import last_adv from "../public/images/last_adv.png"
import Image from 'next/image'


const Right = (props) => {

    const [city, setCity] = useState([])



    async function getData() {
        let data = await fetch(`${props.url}/diff_prices/${props.uid}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        let res = await data.json()

        console.log(res)
        setCity(res)
    }

    function numFormat(value) {
        const val = Math.abs(value)
        if (val >= 10000000) return `${(value / 10000000).toFixed(2)} Crore`
        if (val >= 100000) return `${(value / 100000).toFixed(2)} Lakh`
        return value;
    }


    useEffect(() => {
        getData()
    }, [])





    return (
        <>
            <div className='h-[250px] mt-[2rem] 2xl:ml-[3.5rem] md:w-[300px] bg-[#F4F4F4]'>

            </div>

            {/* City Prices  */}
            <div className='w-full ml-[2.5rem] hidden md:inline'>
                <div className='my-[2rem]'>
                    <h2 className='text-[20px] text-[#484848] font-semibold tracking-[-0.4px]'>{props.model} {props.version} Price in cities
                        near New Delhi</h2>
                    <div className='mt-[1rem]'>
                        <table className='w-full my-2 md:my-5'>
                            <tr className='bg-[#09809A]'>
                                <th className='text-left p-2 text-white text-[16px] font-normal tracking-[-0.32px]'>City</th>
                                <th className='text-right p-2 text-white text-[16px] font-normal tracking-[-0.32px]'>On Road Price</th>
                            </tr>
                            {city.length > 0 ? city.map((item, index) => {
                                return(<tr key={index} className='border border-[#C6C6C6]'>
                                    <td className='text-[16px] text-[#09809A] font-normal p-2'>{item.city_name}</td>
                                    <td className='text-right p-2'>
                                        <p className='text-[16px] text-[#484848] leading-[5px] pt-2 pb-1 font-semibold tracking-[-0.32px]'>₹ {numFormat(item.ex_showroom_price)}</p>
                                        <span className='text-[12px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</span>
                                    </td>
                                </tr>)
                            }) : null}
                        </table>
                    </div>
                </div>
            </div>


            {/* Brocher */}
            <div className='relative mt-[5rem]'>
                <div className='md:w-full p-3 md:p-0 bg-[#CE4327] md:absolute md:top-1/3 rounded-sm'>
                    <p className='md:text-[28px] mx-4 text-[18px] text-white font-semibold tracking-[-0.56px] md:py-2'>{props.brand} {props.model}</p>
                    <Image className='md:mx-auto w-[90%] inline md:block' src={brochure} alt="" />
                    <div className='text-center'>
                        <Image className='mx-2 md:py-4 inline w-4 md:w-6' src={brochure2} alt="" />
                        <span className='md:text-[22px] text-[14px] inline mr-2 text-white font-medium tracking-[-0.44px]'>Download Brochure</span>
                        <Image className='mx-2 md:py-4 inline w-4 md:w-6' src={download} alt="" />
                    </div>
                </div>
            </div>


            {/* Sponsored ADV  */}
            <div className='mt-[20rem]'>
                <div className='md:mt-[3rem] mt-[1rem]'>
                    <div style={{ verticalAlign: "middle", display: "table-cell" }} className='md:w-[20rem] w-[24rem] rounded-sm h-[15rem] bg-[#CE4327]  text-center'>
                        <p className='text-[24px] font-semibold tracking-[-0.48px] text-white'>Sponsor ADv</p>
                    </div>
                </div>
            </div>


            {/* Connect Section  */}

            <div className='bg-[#c2e6ee] mt-10'>
                <div className='text-center pt-6'>
                    <Image className='mx-auto' src={connect} alt="" />
                    <p className='text-[24px] font-semibold tracking-[-0.48px]'>Connect</p>
                    <p className='text-[20px] font-semibold tracking-[-0.4px] my-2'>{props.brand} Authorized</p>
                    <p className='text-[20px] font-semibold tracking-[-0.4px] my-2'>Dealers in your city</p>
                    <div className='text-center my-4 pb-4'>
                        <button className='bg-[#09809a] w-[90%] py-2 rounded-md'><span className='text-[20px] font-medium tracking-[-0.24px] text-white'>
                            Locate Dealer
                        </span></button>
                    </div>
                </div>
            </div>


            {/* Car Loan  */}
            <div className='bg-[#F4F4F4] p-4'>
                <p className='text-[#f80a1a] text-[32px] font-semibold leading-[1]'>Car Loan</p>
                <p className='text-[#1db876] text-[30px] font-semibold leading-[1]'>Lowest EMI</p>
                <Image src={promo} alt="" />
                <div className='text-center py-3'>
                    <button className='bg-[#ff3209] text-white text-[18px] font-medium px-4 rounded-md'>GET THE BEST OFFERS</button>
                </div>
            </div>


            {/* LAst Adv  */}
            <div className='my-4'>
                <Image src={last_adv} alt="" />
            </div>

        </>
    )
}

export default Right