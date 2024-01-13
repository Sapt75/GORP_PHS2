import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Dealers_Web from '../../components/dealer_web';
import Dealers_Mobile from '../../components/dealer_mobile';
import Head from "next/head"




export default function Dealers({ bresponse, cities }) {

    let [show, setShow] = useState(false)
    const context = React.useContext(locationContext)

    let { location } = context


    useEffect(() => {
        window.innerWidth > 800 ? setShow(true) : setShow(false)
    }, [])






    return (
        <>
            <Navbar />
            <Head>
                <title itemProp='title'>{query.dealers.split("-")[0].charAt(0).toUpperCase() + route.query.dealers.split("-")[0].slice(1)} Showrooms in {location} | Maruti Dealers in {location} </title>
                <meta name='description' itemProp='description'>{query.dealers.split("-")[0].charAt(0).toUpperCase() + route.query.dealers.split("-")[0].slice(1)} has 56 authorized dealer outlets / showrooms in {location}. Dealer information includes full address, phone numbers, email, pin code etc.</meta>
            </Head>
            {show ? <Dealers_Web bresponse={bresponse} cities={cities} /> : <Dealers_Mobile bresponse={bresponse} cities={cities} />}
            <Footer />
        </>
    )
}




Dealers.getInitialProps = async (context) => {

    const { query, req } = context;
    const url = "https://inquisitive-knickers-fish.cyclic.app"
    // https://inquisitive-knickers-fish.cyclic.app

    const head = req ? req.headers : sessionStorage.getItem("host")



    let data = await fetch(`${url}/all_brands`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    let bresponse = await data.json()




    async function getCityData() {
        let data = await fetch(`${url}/city_names`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        let response = await data.json()
        return response
        // setCity(response)
    }

    let cities = getCityData()




    return {
        bresponse,
        cities,
        query,
        head
    }
}

