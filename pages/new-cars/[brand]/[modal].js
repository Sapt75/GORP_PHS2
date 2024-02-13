import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Model_Web from "../../../components/model_web"
import Model_Mobile from "../../../components/model_mobile"







export default function Model({ data, response, vresponse, vpresponse, query, head, citresponse, nomcity, specef, cres, rcity }) {

    const [width, setWidth] = useState()
    // const [loading, setLoading] = useState(true)

    const route = useRouter()

    const host_url = `https://${head.host}/new-cars`

    // const Model_Web = dynamic(() => import('../../../components/model_web'));
    // const Model_Mobile = dynamic(() => import('../../../components/model_mobile'));


    function numFormat(value) {
        const val = Math.abs(value)
        if (val >= 10000000) return `${(value / 10000000).toFixed(2)} Crore`
        if (val >= 100000) return `${(value / 100000).toFixed(2)} Lakh`
        return value;
    }



    let sdata = {
        "@context": "https://schema.org/",
        "@graph": [
            {
                "@type": "Car",
                "name": `${data[0].brand} ${data[0].model_name}`,
                "description": `${data[0].model_description}`,
                "url": `${host_url}/${route.query.brand.toLowerCase()}/${route.query.modal.toLowerCase()}`,
                "model": `${data[0].model_name}`,
                // "image": [
                //     {
                //         "@type": "ImageObject",
                //         "url": "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80&q=80",
                //         "height": "1080",
                //         "width": "1920"
                //     },
                //     {
                //         "@type": "ImageObject",
                //         "url": "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-108.jpeg?isig=0&q=80&q=80",
                //         "height": "1080",
                //         "width": "1920"
                //     },
                //     {
                //         "@type": "ImageObject",
                //         "url": "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/130591/fronx-exterior-right-side-view-2.jpeg?isig=0&q=80&q=80",
                //         "height": "1080",
                //         "width": "1920"
                //     },
                //     {
                //         "@type": "ImageObject",
                //         "url": "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/130591/fronx-exterior-right-rear-three-quarter-2.jpeg?isig=0&q=80&q=80",
                //         "height": "1080",
                //         "width": "1920"
                //     },
                //     {
                //         "@type": "ImageObject",
                //         "url": "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/130591/fronx-exterior-rear-view-2.jpeg?isig=0&q=80&q=80",
                //         "height": "1080",
                //         "width": "1920"
                //     },
                //     {
                //         "@type": "ImageObject",
                //         "url": "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/130591/fronx-exterior-left-rear-three-quarter-2.jpeg?isig=0&q=80&q=80",
                //         "height": "1080",
                //         "width": "1920"
                //     },
                //     {
                //         "@type": "ImageObject",
                //         "url": "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/130591/fronx-exterior-left-side-view-2.jpeg?isig=0&q=80&q=80",
                //         "height": "1080",
                //         "width": "1920"
                //     },
                //     {
                //         "@type": "ImageObject",
                //         "url": "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/130591/fronx-exterior-left-front-three-quarter-2.jpeg?isig=0&q=80&q=80",
                //         "height": "1080",
                //         "width": "1920"
                //     },
                //     {
                //         "@type": "ImageObject",
                //         "url": "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/130591/fronx-exterior-front-view-2.jpeg?isig=0&q=80&q=80",
                //         "height": "1080",
                //         "width": "1920"
                //     },
                //     {
                //         "@type": "ImageObject",
                //         "url": "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/130591/fronx-interior-dashboard-2.jpeg?isig=0&q=80&q=80",
                //         "height": "1080",
                //         "width": "1920"
                //     },
                //     {
                //         "@type": "ImageObject",
                //         "url": "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/130591/fronx-interior-steering-wheel.jpeg?isig=0&q=80&q=80",
                //         "height": "1080",
                //         "width": "1920"
                //     }
                // ],
                "brand": `${data[0].brand}`,
                "manufacturer": {
                    "@type": "Organization",
                    "name": `${data[0].brand}`
                },
                "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "INR",
                    "lowPrice": response[0].min_price,
                    "highPrice": response[0].max_price,
                    "offerCount": 1
                },
            }
        ]
    }






    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        })

        sessionStorage.setItem("host", JSON.stringify(head))
        setWidth(window.innerWidth)
    }, [data, response, vresponse, vpresponse, query, head, citresponse, nomcity, specef, cres, rcity])




    return (
        <>

            <Head>
                <title itemProp='name'>{data[0].brand} {data[0].model_name} Price, {data[0].model_name} Varients, Mileage & Features & Specifications | GetOnRoadPrice</title>
                <meta name="description" itemProp='description' content={`${data[0].brand} ${data[0].model_name} price in India starts at ${response.length > 0 ? numFormat(response[0].min_price) : null}. Get ${data[0].brand} ${data[0].model_name} key specs, features, ${data[0].model} Price Breakup, mileage, color, variants Price at GetonRoadPrice  `} />
                <link rel="canonical" href={`${host_url}/${route.query.brand.toLowerCase()}/${route.query.modal.toLowerCase()}`} />
                <script key="structured-data" type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(sdata) }} />
            </Head>


            {width > 800 ? <Model_Web host_url={host_url} data={data} response={response} vresponse={vresponse} vpresponse={vpresponse} query={query} head={head} citresponse={citresponse} nomcity={nomcity} specef={specef} cres={cres} /> : <Model_Mobile host_url={host_url} data={data} response={response} vresponse={vresponse} vpresponse={vpresponse} query={query} head={head} citresponse={citresponse} nomcity={nomcity} specef={specef} cres={cres} mcity={rcity} />}


        </>
    )
}

let cacheData = [];

export const getServerSideProps = async (context) => {

    const { query, req, res } = context;
    const url = "https://inquisitive-knickers-fish.cyclic.app"
    // https://inquisitive-knickers-fish.cyclic.app



    const head = req ? req.headers : sessionStorage.getItem("host")


    if (cacheData.find(item => item.data[0].model_name.toLowerCase().split(" ").join("-") === query.modal)) {
        return {
            props: cacheData.find(item => item.data[0].model_name.toLowerCase().split(" ").join("-") === query.modal)
        }
    } else {
        const main = await fetch(`${url}/getmodelnewdetails?brand=${query.brand}&model_name=${query.modal}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Accept-Encoding': 'gzip, deflate'
            }
        });
        const data = await main.json();

        if (main.status === 422 || !data) {
            console.log("error");
        } else {
            // setTips({
            //     pros: {
            //         __html: data[0].pros
            //     },
            //     cons: {
            //         __html: data[0].cons
            //     }
            // })

            // setUID(data[0].uid)
            // setModel_ID(data[0].model_id)
            // setdata(data)

            //Model Price Fetching
            let model = await fetch(`${url}/model_prices/${data[0].model_id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Accept-Encoding': 'gzip, deflate'
                }
            })

            let response = await model.json()


            // response == "No Data" ? setresponse([]) : setresponse(response)

            let version = await fetch(`${url}/version_data/${data[0].model_id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Accept-Encoding': 'gzip, deflate'
                }
            })

            let vresponse = await version.json()
            // setVersion(vresponse)
            // setFinalVersion(vresponse)

            //Version Price Fetch
            let vp = await fetch(`${url}/version_prices/${data[0].model_id}/Mumbai`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Accept-Encoding': 'gzip, deflate'
                }
            })

            let vpresponse = await vp.json()

            console.log(vpresponse)

            // vpresponse == "No Data" ? setVersionPrice([]) : setVersionPrice(vpresponse)
            // console.log("Data Fetched!");


            //City Price
            let city_p = await fetch(`${url}/diff_prices/${data[0].uid}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Accept-Encoding': 'gzip, deflate'

                }
            })

            let citresponse = await city_p.json()
            let rcity = citresponse
            // setCity(citresponse)


            let nomlcit = await fetch(`${url}/norml_cities/${data[0].uid}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Accept-Encoding': 'gzip, deflate'
                }
            })

            let nomcity = await nomlcit.json()
            // setRCity(nomcity)


            let specef = {
                transmission: "",
                fuel: "",
                seat: ""
            }
            let dat = await fetch(`${url}/model_car/${query.brand.split("-").join(" ")}/${query.modal.split("-").join(" ")}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Accept-Encoding': 'gzip, deflate'
                }
            })

            let res = await dat.json()

            const removeDuplicatesByProperty = (array, property) => {
                const uniqueValues = new Set();
                return array.filter((item) => {
                    const value = item[property];
                    if (!uniqueValues.has(value)) {
                        uniqueValues.add(value);
                        return true;
                    }
                    return false;
                });
            };

            specef.transmission = removeDuplicatesByProperty(res, "transmission_type");

            specef.fuel = removeDuplicatesByProperty(res, (value) => value.Specifications.engine_and_transmission.fuel_type);

            specef.seat = removeDuplicatesByProperty(res, "seating_capacity");
            // setSpecs(specef)


            const color = await fetch(`${url}/color_images/${data[0].brand}/${data[0].model_name}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Accept-Encoding': 'gzip, deflate'
                }
            });
            const cres = await color.json()


            cacheData.push({
                data,
                response,
                vresponse,
                vpresponse,
                query,
                head,
                citresponse,
                nomcity,
                specef,
                cres,
                rcity
            })



            return {
                props: {
                    data,
                    response,
                    vresponse,
                    vpresponse,
                    query,
                    head,
                    citresponse,
                    nomcity,
                    specef,
                    cres,
                    rcity
                }
            }
        }
    }

}








