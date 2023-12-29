"use client"
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Variant_Web from '../../components/variant_web';
import Variant_Mobile from '../../components/variant_mobile';




export default function Variant({ data, response, vpresponse, vvpresponse, params }) {

    const [width, setWidth] = useState()

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        })
        setWidth(window.innerWidth)
    }, [])


    return (
        <>
            <Navbar />

            {width > 800 ? <Variant_Web data={data} response={response} vpresponse={vpresponse} vvpresponse={vvpresponse} params={params} /> : <Variant_Mobile data={data} response={response} vpresponse={vpresponse} vvpresponse={vvpresponse} params={params} />}

            <div className='md:p-4 p-1.5'>
                <p>Home &gt; Hyundai &gt; Aura</p>
            </div>


            <Footer />
        </>
    )
}


export async function getServerSideProps(context) {

    const { params } = context;
    const url = "https://inquisitive-knickers-fish.cyclic.app"

    let id, model



    const res = await fetch(`${url}/single_car/${params.variant[0]}/${params.variant[1]}/${params.variant[2]}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await res.json()

    id = data[0].uid
    model = data[0].model_id

    // setCardetails(data)


    let vversion = await fetch(`${url}/version_data/${model}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    let response = await vversion.json()


    // setVersion(response)
    // setFinalVersion(response)

    let vp = await fetch(`${url}/version_prices/${model}/Mumbai`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    let vpresponse = await vp.json()

    // vpresponse == "No Data" ? setAllVersionPrice([]) : setAllVersionPrice(vpresponse)


    let vvp = await fetch(`${url}/single_version/${id}/Mumbai`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    let vvpresponse = await vvp.json()


    // vvpresponse == "No Data" ? setVersionPrice([]) : setVersionPrice(vvpresponse)


    return {
        props: {
            data,
            response,
            vpresponse,
            vvpresponse,
            params
        }
    }
}

