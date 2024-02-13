import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import style from "../styles/varient.module.css"

const Seating = () => {


    const [type, setType] = useState([])

    const url = "http://localhost:5000"



    async function getData() {
        let data = await fetch(`${url}/all_seating_types`, {
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
                return (item !== null && item && item.seating_capacity !== 0 ? <Link title={`${item.seating_capacity} Seater Cars`} key={index} href={`/cars/seating-capacity/${item.seating_capacity}-seater-cars`}>
                    <div className={`border-[1px] border-[#6C6C6C] w-2/3 text-center rounded-md mx-auto ${style["price-hover"]} cursor-pointer`}>
                            <p className='font-semibold text-[14px] py-1.5'>{item.seating_capacity} Seater</p>
                    </div>
                </Link> : null)
            }) : null}
        </div>
    )
}

export default Seating