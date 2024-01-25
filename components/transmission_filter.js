import Link from 'next/link'
import React from 'react'


const Transmission_Filter = () => {
    return (
        <div className='grid grid-cols-4 md:grid-cols-4 gap-y-10 border border-[#E1E1E1] py-12'>
            <Link href={`/cars/transmission-type/automatic-cars`}>
                <div className='text-center'>
                    <img width={80} className='mx-auto mb-3' src="https://imgd.aeplcdn.com/0x0/cw/transmission/svg/automatic_clr.svg?v3.0" alt="" />
                    <p className='font-semibold text-[14px] py-1.5'>Automatic</p>
                </div>
            </Link>
            <Link href={`/cars/transmission-type/manual-cars`}>
                <div className='text-center'>
                    <img width={80} className='mx-auto mb-3' src="https://imgd.aeplcdn.com/0x0/cw/transmission/svg/manual_clr.svg?v3.0" alt="" />
                    <p className='font-semibold text-[14px] py-1.5'>Manual</p>
                </div>
            </Link>
        </div>
    )
}

export default Transmission_Filter