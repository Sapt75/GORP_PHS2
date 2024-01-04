"use client"
import React, { useEffect, useRef, useState } from 'react'
import Variant_Mobile from "../../components/variant_mobile"
import Head from "next/head"
import Variant_Web from '../../components/variant_web';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';



export default function Variant({ data, response, vpresponse, vvpresponse, params }) {

    const [width, setWidth] = useState()


    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        })
        setWidth(window.innerWidth)
    })



    return (
        <>
            <Navbar />
            <Head>
                <title>{data[0].brand} {data[0].model_name} {data[0].version_name} on road price, {data[0].brand} {data[0].model_name} {data[0].version_name} Features & Specs, Colours & Variants.
                </title>
                <meta name="description" content={`${data[0].brand} ${data[0].model_name} ${data[0].version_name} on road price, features, specifications, ${data[0].brand} ${data[0].model_name} variants and colours - View price breakup of ${data[0].brand} ${data[0].model_name} ${data[0].version_name} at GetOnRoadPrice.
`} />
            </Head>

            {width > 800 ? <Variant_Web data={data} response={response} vpresponse={vpresponse} vvpresponse={vvpresponse} params={params} /> : <Variant_Mobile data={data} response={response} vpresponse={vpresponse} vvpresponse={vvpresponse} params={params} />}

            <div className='md:p-4 p-1.5'>
                <p>Home &gt; Hyundai &gt; Aura</p>
            </div>


            <Footer />
        </>
    )
}




Variant.getInitialProps = async (context) => {

    const { query } = context;
    const url = "https://inquisitive-knickers-fish.cyclic.app"
    let id, model




    const res = await fetch(`${url}/single_car/${query.variant[0].charAt(0).toUpperCase() + query.variant[0].slice(1)}/${query.variant[1].charAt(0).toUpperCase() + query.variant[1].slice(1)}/${query.variant[2].split("-").join(" ")}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await res.json()


    id = data.length > 0 ? data[0].uid : 218
    model = data.length > 0 ? data[0].model_id : 24
    // setdata(data)


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
        data,
        response,
        vpresponse,
        vvpresponse,
        query
    }
}

