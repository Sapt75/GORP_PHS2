"use client"
import React, { useEffect, useRef, useState } from 'react'
import Variant_Mobile from "../../components/variant_mobile"
import Head from "next/head"
import Variant_Web from '../../components/variant_web';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { useRouter } from 'next/router';
import Script from 'next/script';



export default function Variant({ data, response, vpresponse, vvpresponse, params, head }) {

    const [width, setWidth] = useState()

    const host_url = `https://${head.host}/new-cars`
    const route = useRouter()



    let sdata = {
        "@context": "https://schema.org/",
        "@type": "Car",
        "mpn": "CW-Version-11543",
        "name": "Maruti Suzuki Fronx Sigma 1.2L MT",
        "model": "Fronx",
        "image": "https://imgd.aeplcdn.com/310x174/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80",
        "brand": "Maruti Suzuki",
        "bodyType": "CompactSuv",
        "vehicleEngine": {
            "@type": "EngineSpecification ",
            "engineDisplacement": {
                "@type": "QuantitativeValue",
                "value": "1197",
                "unitText": "cc"
            }
        },
        "fuelType": "Petrol",
        "vehicleSeatingCapacity": "5",
        "manufacturer": {
            "@type": "Organization",
            "name": "Maruti Suzuki"
        },
        "height": {
            "@type": "QuantitativeValue",
            "value": "1550",
            "unitText": "mm"
        },
        "width": {
            "@type": "QuantitativeValue",
            "value": "1765",
            "unitText": "mm"
        },
        "numberOfAirbags": null,
        "fuelConsumption": {
            "@type": "QuantitativeValue",
            "value": "21.79",
            "unitText": "kmpl"
        },
        "color": [
            "Nexa Blue (Celestial)",
            "Grandeur Grey",
            "Earthen Brown",
            "Opulent Red",
            "Splendid Silver",
            "Arctic White"
        ],
        "vehicleTransmission": {
            "@type": "QualitativeValue",
            "name": "Manual"
        },
        "driveWheelConfiguration": {
            "@type": "DriveWheelConfigurationValue",
            "name": "FWD"
        },
        "description": "Maruti Fronx Sigma 1.2L MT Variants - Get price, mileage and available offers in India for Maruti Fronx variants at CarWale.",
        "url": "https://www.carwale.com/maruti-suzuki-cars/fronx/sigma-12l-mt/",
        "@graph": {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "answerCount": 1,
                    "dateCreated": "2021-01-28",
                    "author": {
                        "@type": "Person",
                        "name": "Carwale Experts"
                    },
                    "name": "What is the Fronx base model price?",
                    "text": "What is the Fronx base model price?",
                    "acceptedAnswer": [
                        {
                            "@type": "Answer",
                            "dateCreated": "2021-01-28",
                            "author": {
                                "@type": "Person",
                                "name": "Carwale Experts"
                            },
                            "text": "Fronx Sigma 1.2L MT price is ‎Rs. 7.47 Lakh."
                        }
                    ]
                },
                {
                    "@type": "Question",
                    "answerCount": 1,
                    "dateCreated": "2021-01-28",
                    "author": {
                        "@type": "Person",
                        "name": "Carwale Experts"
                    },
                    "name": "How is the Fronx base model performance?",
                    "text": "How is the Fronx base model performance?",
                    "acceptedAnswer": [
                        {
                            "@type": "Answer",
                            "dateCreated": "2021-01-28",
                            "author": {
                                "@type": "Person",
                                "name": "Carwale Experts"
                            },
                            "text": "Sigma 1.2L MT is powered by a 1197 cc Petrol  engine mated to a  5 Gears speed Manual  gearbox which generates 89 bhp of power & 113 Nm of torque."
                        }
                    ]
                },
                {
                    "@type": "Question",
                    "answerCount": 1,
                    "dateCreated": "2021-01-28",
                    "author": {
                        "@type": "Person",
                        "name": "Carwale Experts"
                    },
                    "name": "What is the Fronx base model mileage?",
                    "text": "What is the Fronx base model mileage?",
                    "acceptedAnswer": [
                        {
                            "@type": "Answer",
                            "dateCreated": "2021-01-28",
                            "author": {
                                "@type": "Person",
                                "name": "Carwale Experts"
                            },
                            "text": "The Fronx Sigma 1.2L MT mileage is 21.79 kmpl."
                        }
                    ]
                },
                {
                    "@type": "Question",
                    "answerCount": 1,
                    "dateCreated": "2021-01-28",
                    "author": {
                        "@type": "Person",
                        "name": "Carwale Experts"
                    },
                    "name": "What is the standard tyre size and ground clearance for the Fronx base model?",
                    "text": "What is the standard tyre size and ground clearance for the Fronx base model?",
                    "acceptedAnswer": [
                        {
                            "@type": "Answer",
                            "dateCreated": "2021-01-28",
                            "author": {
                                "@type": "Person",
                                "name": "Carwale Experts"
                            },
                            "text": "The standard tyre size for the Fronx base model is 195 / 60 R16, and the ground clearance is 190 mm."
                        }
                    ]
                },
                {
                    "@type": "Question",
                    "answerCount": 1,
                    "dateCreated": "2021-01-28",
                    "author": {
                        "@type": "Person",
                        "name": "Carwale Experts"
                    },
                    "name": "What is the fuel tank capacity of Fronx base model?",
                    "text": "What is the fuel tank capacity of Fronx base model?",
                    "acceptedAnswer": [
                        {
                            "@type": "Answer",
                            "dateCreated": "2021-01-28",
                            "author": {
                                "@type": "Person",
                                "name": "Carwale Experts"
                            },
                            "text": "The fuel tank capacity of Fronx base model is 37 litres."
                        }
                    ]
                },
                {
                    "@type": "Question",
                    "answerCount": 1,
                    "dateCreated": "2021-01-28",
                    "author": {
                        "@type": "Person",
                        "name": "Carwale Experts"
                    },
                    "name": "How much bootspace does Fronx offer?",
                    "text": "How much bootspace does Fronx offer?",
                    "acceptedAnswer": [
                        {
                            "@type": "Answer",
                            "dateCreated": "2021-01-28",
                            "author": {
                                "@type": "Person",
                                "name": "Carwale Experts"
                            },
                            "text": "Maruti Fronx boot space is 308 litres."
                        }
                    ]
                },
                {
                    "@type": "Question",
                    "answerCount": 1,
                    "dateCreated": "2021-01-28",
                    "author": {
                        "@type": "Person",
                        "name": "Carwale Experts"
                    },
                    "name": "What is the Fronx safety rating for the base model?",
                    "text": "What is the Fronx safety rating for the base model?",
                    "acceptedAnswer": [
                        {
                            "@type": "Answer",
                            "dateCreated": "2021-01-28",
                            "author": {
                                "@type": "Person",
                                "name": "Carwale Experts"
                            },
                            "text": "Maruti Fronx Sigma 1.2L MT has not been crash tested by the Global NCAP yet."
                        }
                    ]
                }
            ]
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "reviewCount": 25,
            "ratingValue": 4.48,
            "worstRating": 1,
            "bestRating": 5
        },
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "INR",
            "lowPrice": 746500,
            "highPrice": 1313500,
            "offerCount": 1
        },
        "review": [
            {
                "@type": "Review",
                "author": "Ellihert",
                "datePublished": "2023-12-13T11:33:32+05:30",
                "name": "Maruti Suzuki Fronx Sigma 1.2L MT",
                "reviewBody": "The back seat is congested for 3 people otherwise, it is the best car under 10 lakhs. Everything feels like a premium black interior with elegant design, 16-inch wheels, good road presence, and excellent milage.",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": 4
                }
            },
            {
                "@type": "Review",
                "author": "Bhanwar tandi",
                "datePublished": "2023-11-19T19:55:33+05:30",
                "name": "Maruti Suzuki Fronx",
                "reviewBody": "Powerful and very smooth car. Driving is very easy. Good off-roading car",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": 5
                }
            },
            {
                "@type": "Review",
                "author": "akshansh sharma",
                "datePublished": "2023-08-30T17:19:18+05:30",
                "name": "Very good car",
                "reviewBody": "This car is very good car because it is not so expensive and driving is comfortable it has warranty and free servicing this car looks beautiful in blue color and red color it is good car you can also buy this.",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": 5
                }
            }
        ],
        "sku": "10-2033-11543"
    }



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
                <title itemProp='name'>{data[0].brand} {data[0].model_name} {data[0].version_name} on road price, {data[0].brand} {data[0].model_name} {data[0].version_name} Features & Specs, Colours & Variants.
                </title>
                <meta name="description" itemProp='description' content={`${data[0].brand} ${data[0].model_name} ${data[0].version_name} on road price, features, specifications, ${data[0].brand} ${data[0].model_name} variants and colours - View price breakup of ${data[0].brand} ${data[0].model_name} ${data[0].version_name} at GetOnRoadPrice.
`} />
                <link rel="canonical" href={`${host_url}/${route.query.variant[0].toLowerCase()}/${route.query.variant[1].toLowerCase()}/${route.query.variant[2].toLowerCase()}`} />
            </Head>

            <Script key="structured-data" type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(sdata) }}>

            </Script>


            {width > 800 ? <Variant_Web data={data} response={response} vpresponse={vpresponse} vvpresponse={vvpresponse} params={params} /> : <Variant_Mobile data={data} response={response} vpresponse={vpresponse} vvpresponse={vvpresponse} params={params} />}

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

    const head = req.headers




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
        query,
        head
    }
}

