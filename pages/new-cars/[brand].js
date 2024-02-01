import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { useRouter } from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';







export default function Brand({ data, pricedata, query, tdata, bres, dres, head }) {

    const host_url = `https://${head.host}/new-cars`
    const route = useRouter()

    const [width, setWidth] = useState()

    const Brand_Web = dynamic(() => import('../../components/brand_web'));
    const Brand_Mobile = dynamic(() => import('../../components/brand_mobile'));



    let date = new Date()

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        })

        sessionStorage.setItem("host", JSON.stringify(head))
        setWidth(window.innerWidth)
    }, [data, pricedata, query, tdata, bres, dres, head])




    return (
        <>
            <Head>
                <title itemProp='name'>{data[0].brand} Cars in India {date.getFullYear().toString()}, {data[0].brand} New Car Models, On Road Price, Car Details & Video Reviews | GetOnRoadPrice</title>
                <meta itemProp='description' name="description" content={`${data[0].brand} Car price in India starts at ₹ ${dres.brand_description.split(" ")[9]} Lakh. Get On Road Price of all ${data.length} ${data[0].brand} Cars available in ${date.getFullYear().toString()}, View Features, Price Breakup, Mileage, Colours, Variants Price and more at GetonRoadPrice
`} />
            </Head>
            {width > 800 ? <Brand_Web host_url={host_url} data={data} pricedata={pricedata} query={query} tdata={tdata} bres={bres} dres={dres} head={head} /> : <Brand_Mobile host_url={host_url} data={data} pricedata={pricedata} query={query} tdata={tdata} bres={bres} dres={dres} head={head} />}

        </>
    )
}




export const getServerSideProps = async (context) => {

    const { query, req } = context;
    const url = "https://inquisitive-knickers-fish.cyclic.app"
    // https://inquisitive-knickers-fish.cyclic.app
    let id, model

    const head = req ? req.headers : sessionStorage.getItem("host")

    const res = await fetch(`${url}/getonebrandcarsnew?brand=${query.brand === "rolls-royce" || query.brand === "mercedes-benz" ? query.brand : query.brand.split("-").join(" ")}`, {
        // const res = await fetch(`/getonebrandcars?brand=${data[0].brand}&model=${model}&page=${pageNumber}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();


    // setGetbranddata(data)


    const res_two = await fetch(`${url}/all_model_prices/${query.brand === "rolls-royce" || query.brand === "mercedes-benz" ? query.brand : query.brand.split("-").join(" ")}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const pricedata = await res_two.json();

    // setGetPrices(pricedata)

    const tres = await fetch(`${url}/all_typ/${query.brand === "rolls-royce" || query.brand === "mercedes-benz" ? query.brand : query.brand.split("-").join(" ")}`, {
        // const res = await fetch(`/getonebrandcars?brand=${data[0].brand}&model=${model}&page=${pageNumber}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept-Encoding": "gzip"
        }
    });
    const tdata = await tres.json();
    // setTrans(data)

    let bdata = await fetch(`${url}/all_brands`, {
        headers: {
            "Content-Type": "application/json"
        }
    })

    let bres = await bdata.json()
    // setBrand(res)


    let ddata = await fetch(`${url}/brand_desc/${query.brand === "rolls-royce" || query.brand === "mercedes-benz" ? query.brand : query.brand.split("-").join(" ")}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })

    let dres = await ddata.json()
    // setDesc(res)


    return {
        props: {
            data,
            pricedata,
            query,
            tdata,
            bres,
            dres,
            head
        }
    }
}