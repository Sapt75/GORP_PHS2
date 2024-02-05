import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Body_Filter = () => {


    const [type, setType] = useState([])

    const url = "http://localhost:5000"



    async function getData() {
        let data = await fetch(`http://localhost:5000/all_body_types`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        let response = await data.json()
        setType(response)
    }


    useEffect(() => {
        getData()
    }, [])





    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-y-10 border border-[#E1E1E1] py-12'>
            {type.length > 0 ? type.map((item, index) => {
                return ( item !== null ? <Link title={`${item} Cars`} key={index} href={`/cars/body-type/${item.toLowerCase()}-cars`}>
                    <div className='text-center'>
                        <img width={80} className='mx-auto mb-3' src={`https://imgd.aeplcdn.com/0x0/cw/body/svg/${item === "Luxury" || item === "Minivan" || item === "Pickup Truck" ? "suv" : item.toLowerCase()}_clr.svg?v=1`} alt="" />
                        <p className='font-semibold text-[14px] py-1.5'>{item}</p>
                    </div>
                </Link>:null)
            }):null}
        </div>
    )
}

export default Body_Filter