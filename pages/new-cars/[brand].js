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


let cacheData = [];


export const getServerSideProps = async (context) => {
    const { query, req } = context;
    const url = "https://inquisitive-knickers-fish.cyclic.app";

    const head = req ? req.headers : sessionStorage.getItem("host");

    const brandKey = query.brand.toLowerCase().split(" ").join("-");

    // Check if data is in cache
    const cachedItem = cacheData.find(item => item.data[0].brand.toLowerCase().split(" ").join("-") === brandKey);

    if (cachedItem) {
        return {
            props: cachedItem
        };
    }

    try {
        const fetchData = async (endpoint) => {
            const res = await fetch(`${url}/${endpoint}?brand=${brandKey}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return res.json();
        };

        const [data, pricedata, tdata, bres, dres] = await Promise.all([
            fetchData("getonebrandcarsnew"),
            fetchData(`all_model_prices/${brandKey}`),
            fetchData(`all_typ/${brandKey}`),
            fetchData("all_brands"),
            fetchData(`brand_desc/${brandKey}`)
        ]);

        cacheData.push({ data, pricedata, query, tdata, bres, dres, head });

        return {
            props: { data, pricedata, query, tdata, bres, dres, head }
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                error: "Error fetching data"
            }
        };
    }
};

