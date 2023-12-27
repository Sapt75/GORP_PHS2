import React from 'react'

const Fuel_Filter = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-y-10 border border-[#E1E1E1] py-12'>
        <div className='text-center'>
                <img width={80} className='mx-auto mb-3' src="https://imgd.aeplcdn.com/0x0/cw/fuel/svg/petrol.svg?v=1" alt="" />
                <p className='font-semibold text-[14px] py-1.5'>Petrol</p>
            </div>
            <div className='text-center'>
                <img width={80} className='mx-auto mb-3' src="https://imgd.aeplcdn.com/0x0/cw/fuel/svg/diesel.svg?v=1" alt="" />
                <p className='font-semibold text-[14px] py-1.5'>Diesel</p>
            </div>
            <div className='text-center'>
                <img width={80} className='mx-auto mb-3' src="https://imgd.aeplcdn.com/0x0/cw/fuel/svg/cng.svg?v=1" alt="" />
                <p className='font-semibold text-[14px] py-1.5'>CNG</p>
            </div>
            <div className='text-center'>
                <img width={80} className='mx-auto mb-3' src="https://imgd.aeplcdn.com/0x0/cw/fuel/svg/electric.svg?v=1" alt="" />
                <p className='font-semibold text-[14px] py-1.5'>Electric</p>
            </div>
            <div className='text-center'>
                <img width={80} className='mx-auto mb-3' src="https://imgd.aeplcdn.com/0x0/cw/fuel/svg/h-filter-without-background.svg?v=2" alt="" />
                <p className='font-semibold text-[14px] py-1.5'>Hybrid</p>
            </div>
        </div>
    )
}

export default Fuel_Filter