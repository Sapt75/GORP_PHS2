"use client"
import React, { useEffect, useRef, useState } from 'react'
import Variant_Mobile from "../../components/variant_mobile"
import Head from "next/head"
import Variant_Web from '../../components/variant_web';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { useRouter } from 'next/router';



export default function Variant({ data, response, vpresponse, vvpresponse, params, head, cres }) {

    const [width, setWidth] = useState()

    const host_url = `https://${head.host}/new-cars`
    const route = useRouter()

    let colors = cres.map((item) => {
        return item.split("/")[item.split("/").length - 1].split(".")[0].split("_")[1]
    })




    let sdata = {
        "@context": "https://schema.org/",
        "@type": "Car",
        "mpn": "CW-Version-11545",
        "name": `${data[0].brand} ${data[0].model_name} ${data[0].version_name}`,
        "model": `${data[0].model_name}`,
        "image": `https://ik.imagekit.io/GORP/${data[0].brand}/${data[0].model_name}/${data[0].model_name}.jpg`,
        "brand": `${data[0].brand}`,
        "bodyType": `${data[0].body_type}`,
        "vehicleEngine": {
            "@type": "EngineSpecification ",
            "engineDisplacement": {
                "@type": "QuantitativeValue",
                "value": `${data[0].Specifications.engine_and_transmission.displacement}`,
                "unitText": "cc"
            }
        },
        "fuelType": `${data[0].Specifications.engine_and_transmission.fuel_type}`,
        "vehicleSeatingCapacity": `${data[0].seating_capacity}`,
        "manufacturer": {
            "@type": "Organization",
            "name": `${data[0].brand}`
        },
        "numberOfAirbags": `${data[0].Features.safety.no_of_airbags}`,
        "fuelConsumption": {
            "@type": "QuantitativeValue",
            "value": `${data[0].Specifications.engine_and_transmission.arai_mileage}`,
            "unitText": "kmpl"
        },
        "color": colors,
        "vehicleTransmission": {
            "@type": "QualitativeValue",
            "name": `${data[0].transmission_type}`
        },
        "description": `${data[0].varient_description}`,
        "url": `${host_url}/${route.query.variant[0].toLowerCase()}/${route.query.variant[1].toLowerCase()}/${route.query.variant[2].toLowerCase()}`,
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "INR",
            "lowPrice": 746500,
            "highPrice": 1313500,
            "offerCount": 1
        },
        "vehicleModelDate" : "15-06-2023",
        "itemCondition": "New"
    }





    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        })

        sessionStorage.setItem("host", head)
        setWidth(window.innerWidth)
    })



    return (
        <>
            <Navbar />
            <Head>
                <title itemProp='name'>{data[0].brand} {data[0].model_name} {data[0].version_name} on road price, {data[0].brand} {data[0].model_name} {data[0].version_name} Features & Specs, Colours & Variants.
                </title>
                <meta name="description" itemProp='description' content={`${data[0].brand} ${data[0].model_name} ${data[0].version_name} on road price, features, specifications, ${data[0].brand} ${data[0].model_name} variants and colours - View price breakup of ${data[0].brand} ${data[0].model_name} ${data[0].version_name} at GetOnRoadPrice.
`} />
                <link rel="canonical" href={`${host_url}/${route.query.variant[0].toLowerCase()}/${route.query.variant[1].toLowerCase()}/${route.query.variant[2].toLowerCase()}`} />
                <script key="structured-data" type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(sdata) }} />
            </Head>

            {width > 800 ? <Variant_Web data={data} response={response} vpresponse={vpresponse} vvpresponse={vvpresponse} params={params} color={cres} /> : <Variant_Mobile data={data} response={response} vpresponse={vpresponse} vvpresponse={vvpresponse} params={params} color={cres} />}

            <div className='md:p-4 p-1.5'>
                <p>Home &gt; Hyundai &gt; Aura</p>
            </div>


            <Footer />
        </>
    )
}




Variant.getInitialProps = async (context) => {

    const { query, req } = context;
    const url = "https://inquisitive-knickers-fish.cyclic.app"
    // https://inquisitive-knickers-fish.cyclic.app
    let id, model

    const head = req ? req.headers : sessionStorage.getItem("host")



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


    const color = await fetch(`${url}/color_images/${data[0].brand}/${data[0].model_name}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const cres = await color.json()
    // setImages(res)


    return {
        data,
        response,
        vpresponse,
        vvpresponse,
        query,
        head,
        cres
    }
}

