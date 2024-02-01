import React, { useEffect, useRef, useState } from 'react'
import style from "../../styles/varient.module.css"
import Faq from '../../components/faq';
import Image from 'next/image';
import logo from "../../public/images/logo.png"
import advert from "../../public/images/advert.png"
import star from "../../public/images/star.svg"
import down from "../../public/images/down.svg"
import arai from "../../public/images/arai.svg"
import engine from "../../public/images/engine.svg"
import fuel from "../../public/images/fuel.svg"
import seat from "../../public/images/seat.svg"
import transmission from "../../public/images/transmission.svg"
import body from "../../public/images/body.svg"
import advert2 from "../../public/images/advert2.png"
import model_yt from "../../public/images/model_yt.png"
import car1 from "../../public/images/car1.png"
import car2 from "../../public/images/car2.png"
import car3 from "../../public/images/car3.png"
import compare from "../../public/images/compare.svg"
import car5 from "../../public/images/car5.png"
import car4 from "../../public/images/car4.png"
import compare_white from "../../public/images/compare-white.svg"
import brochure from "../../public/images/brocher.jpg"
import brochure2 from "../../public/images/brochure.svg"
import download from "../../public/images/download.svg"
import thumbs_up from "../../public/images/thumbs_up.svg"
import thumbs_down from "../../public/images/thumbs_down.svg"
import connect from "../../public/images/connect.svg"
import promo from "../../public/images/promo.png"
import last_adv from "../../public/images/last_adv.png"
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import edit from "../../public/images/edit.svg"
import ahmedabad from "../../public/images/ahemdabad.png"
import bangalore from "../../public/images/bangalore.png"
import chennai from "../../public/images/chennai.png"
import delhi from "../../public/images/delhi.png"
import hyderabad from "../../public/images/hyderabad.png"
import jaipur from "../../public/images/jaipur.png"
import kolkata from "../../public/images/kolkata.png"
import lucknow from "../../public/images/lucknow.png"
import mumbai from "../../public/images/mumbai.png"
import pune from "../../public/images/pune.png"
import { ChevronRight } from '@mui/icons-material';
import Rating_Model from '../../components/rating_modal';
import Emi_Modal from '../../components/emi';
import { useRouter } from 'next/router';
import Filter_Web from '../../components/filter_web';
import Head from 'next/head';
import Brand_Model from '../../components/brand_modal';
import Filter_Mobile from '../../components/filter_mobile';







export default function Filter({ data, pricedata, query, trans, ftdata, head, bres }) {

    const host_url = `https://${head.host}/new-cars`
    const route = useRouter()

    const [width, setWidth] = useState()



    let date = new Date()

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        })

        sessionStorage.setItem("host", JSON.stringify(head))
        setWidth(window.innerWidth)
    }, [data, pricedata, query, trans, ftdata, head])




    return (
        <>
            <Navbar />
            {/* <Head>
                <title itemProp='name'>{data[0].brand} Cars in India {date.getFullYear().toString()}, {data[0].brand} New Car Models, On Road Price, Car Details & Video Reviews | GetOnRoadPrice</title>
                <meta itemProp='description' name="description" content={`${data[0].brand} Car price in India starts at ₹ ${dres.brand_description.split(" ")[9]} Lakh. Get On Road Price of all ${data.length} ${data[0].brand} Cars available in ${date.getFullYear().toString()}, View Features, Price Breakup, Mileage, Colours, Variants Price and more at GetonRoadPrice
`} />
            </Head> */}
            <Filter_Web data={data} pricedata={pricedata} query={query} tdata={trans} ftdata={ftdata} head={head} bres={bres} />
            {/* {width > 800 ? <Filter_Web data={data} pricedata={pricedata} query={query} tdata={trans} ftdata={ftdata} head={head} /> : <Filter_Mobile data={data} pricedata={pricedata} query={query} trans={trans} ftdata={ftdata} head={head} />} */}

            <Footer />
        </>
    )
}




Filter.getInitialProps = async (context) => {

    const { query, req } = context;
    const url = "https://inquisitive-knickers-fish.cyclic.app"
    // https://inquisitive-knickers-fish.cyclic.app
    let id, model

    const head = req ? req.headers : sessionStorage.getItem("host")

    console.log(query)


    let value = query.filter[1].split("-")[0]


    const res = await fetch(`${url}/filter/${query.filter[0].split("-").join("_").toLowerCase()}/${value.split("-")[0]}/${true}`, {
        // const res = await fetch(`/getonebrandcars?brand=${brand}&model=${model}&page=${pageNumber}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();

    // setGetbranddata(data)


    const res_two = await fetch(`${url}/filter_model_prices`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const pricedata = await res_two.json();

    // setGetPrices(pricedata)


    const res_three = await fetch(`https://inquisitive-knickers-fish.cyclic.app/all_var/${query.filter[0].split("-").join("_").toLowerCase()}/${value.split("-")[0]}`, {
        // const res = await fetch(`/getonebrandcars?brand=${brand}&model=${model}&page=${pageNumber}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const trans = await res_three.json();

    // setTrans(data)

    const ftres = await fetch(`${url}/filter/${query.filter[0].toLowerCase()}/${value.split("-")[0]}/${false}`, {
        // const res = await fetch(`/getonebrandcars?brand=${brand}&model=${model}&page=${pageNumber}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const ftdata = await ftres.json();

    // setGetbranddata((preValue) => [...preValue].concat(ftdata))


    let bdata = await fetch(`${url}/all_brands`, {
        headers: {
            "Content-Type": "application/json"
        }
    })

    let bres = await bdata.json()

    return {
        data,
        pricedata,
        query,
        trans,
        ftdata,
        head, 
        bres
    }
}