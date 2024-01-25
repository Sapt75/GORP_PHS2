import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from "next/image";
import loc from "../public/images/location.svg"
import cross from "../public/images/cross.svg"
import ahmedabad from "../public/images/ahemdabad.png"
import bangalore from "../public/images/bangalore.png"
import kolkata from "../public/images/kolkata.png"
import mumbai from "../public/images/mumbai.png"
import hyderabad from "../public/images/hyderabad.png"
import chennai from "../public/images/chennai.png"
import delhi from "../public/images/delhi.png"
import locationContext from "../context/LocationContext";
import { useRouter } from "next/router";

export default function Modal(props) {
    const [open, setOpen] = useState(false);
    const [city, setCity] = useState([])
    const context = useContext(locationContext)
    const route = useRouter()

    let { location, setLocation } = context


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    async function pincodeData(e) {
        if (!isNaN(e.target.value)) {
            let data = await fetch(`${props.url}/pincode_details/${e.target.value}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let response = await data.json()
            setCity(response)
        } else {
            let data = await fetch(`${props.url}/pincode_details/${e.target.value}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let response = await data.json()
            setCity(response)

        }
    }


    async function getCityData() {
        let data = await fetch(`${props.url}/city_names`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        let response = await data.json()
        setCity(response)
    }

    useEffect(() => {
        getCityData()
    }, [location])


    return (
        <>
            {props.status ? <Image onClick={handleOpen} className="cursor-pointer w-auto h-auto" width={25} height={25} src={loc} alt="location" /> : <div onClick={handleOpen} className='border border-[#E1E1E1] w-1/2 flex justify-between cursor-pointer'>
                <div className='leading-[1.2] p-[0.5rem]'>
                    <p className='pb-2 text-[#6F6F6F]'>City</p>
                    <span className='md:text-[14px] text-[12px] text-[#484848] font-semibold tracking-[-0.28px]'>{location ? location : "Mumbai"}</span>
                </div>
                <span><ChevronRightIcon className='mt-[1rem] mr-[0.6rem]' fontSize='medium' /></span>
            </div>}

            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle borderBottom={"1px solid #C6C6C6"}>
                    <div className="flex justify-between">
                        <p className='font-semibold text-[18px] px-2 text-[#484848]'>Select Your City</p>
                        <Image onClick={handleClose} className="cursor-pointer" width={20} src={cross} alt="cross" />
                    </div>
                </DialogTitle>
                <DialogContent>
                    <div className='px-2 bg-gray-100 my-4'>
                        <input onChange={pincodeData} id='pcode' className='border-2 border-[#0B9DBC] w-full py-[0.3rem] px-2' placeholder='Type in your pincode or City name' type="text" />
                    </div>
                    <div>
                        <p className='p-2 text-[16px] text-[#484848] font-semibold w-full'>Popular Cities</p>
                        <div className='flex overflow-x-scroll space-x-10 mx-2'>
                            <div onClick={() => {
                                setLocation("Ahmedabad")
                                sessionStorage.setItem("city", "Ahmedabad")
                                route.asPath.split("/")[1] === "new-car-dealers" ? route.push(`/new-car-dealers/${route.asPath.split("/")[2].split("-")[0]}-car-dealers-ahmedabad`) : null
                                route.asPath.split("/")[1] === "price-data" ? route.push(`/price-data/${route.asPath.split("/")[2]}/${route.asPath.split("/")[3]}/price-in-${item.City ? item.City.toLowerCase() : item["City Name"].toLowerCase()}`) : null
                                handleClose()
                            }} className='text-center'>
                                <Image className='mx-auto' width={70} src={ahmedabad} alt="bangalore" />
                                <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Ahmedabad</p>
                            </div>
                            <div onClick={() => {
                                setLocation("Bangalore")
                                sessionStorage.setItem("city", "Bangalore")
                                route.asPath.split("/")[1] === "new-car-dealers" ? route.push(`/new-car-dealers/${route.asPath.split("/")[2].split("-")[0]}-car-dealers-bangalore`) : null
                                route.asPath.split("/")[1] === "price-data" ? route.push(`/price-data/${route.asPath.split("/")[2]}/${route.asPath.split("/")[3]}/price-in-${item.City ? item.City.toLowerCase() : item["City Name"].toLowerCase()}`) : null
                                handleClose()
                            }} className='text-center'>
                                <Image className='mx-auto' width={70} src={bangalore} alt="bangalore" />
                                <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Bangalore</p>
                            </div>
                            <div onClick={() => {
                                setLocation("Kolkata")
                                sessionStorage.setItem("city", "Kolkata")
                                route.asPath.split("/")[1] === "new-car-dealers" ? route.push(`/new-car-dealers/${route.asPath.split("/")[2].split("-")[0]}-car-dealers-kolkata`) : null
                                route.asPath.split("/")[1] === "price-data" ? route.push(`/price-data/${route.asPath.split("/")[2]}/${route.asPath.split("/")[3]}/price-in-${item.City ? item.City.toLowerCase() : item["City Name"].toLowerCase()}`) : null
                                handleClose()
                            }} className='text-center'>
                                <Image className='mx-auto' width={70} src={kolkata} alt="kolkata" />
                                <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Kolkata</p>
                            </div>
                            <div onClick={() => {
                                setLocation("Mumbai")
                                sessionStorage.setItem("city", "Mumbai")
                                route.asPath.split("/")[1] === "new-car-dealers" ? route.push(`/new-car-dealers/${route.asPath.split("/")[2].split("-")[0]}-car-dealers-bangalore`) : null
                                route.asPath.split("/")[1] === "price-data" ? route.push(`/price-data/${route.asPath.split("/")[2]}/${route.asPath.split("/")[3]}/price-in-${item.City ? item.City.toLowerCase() : item["City Name"].toLowerCase()}`) : null
                                handleClose()
                            }} className='text-center'>
                                <Image className='mx-auto' width={70} src={mumbai} alt="mumbai" />
                                <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Mumbai</p>
                            </div>
                            <div onClick={() => {
                                setLocation("Hyderabad")
                                sessionStorage.setItem("city", "Hyderabad")
                                route.asPath.split("/")[1] === "new-car-dealers" ? route.push(`/new-car-dealers/${route.asPath.split("/")[2].split("-")[0]}-car-dealers-bangalore`) : null
                                route.asPath.split("/")[1] === "price-data" ? route.push(`/price-data/${route.asPath.split("/")[2]}/${route.asPath.split("/")[3]}/price-in-${item.City ? item.City.toLowerCase() : item["City Name"].toLowerCase()}`) : null
                                handleClose()
                            }} className='text-center'>
                                <Image className='mx-auto' width={70} src={hyderabad} alt="hyderabad" />
                                <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Hyderabad</p>
                            </div>
                            <div onClick={() => {
                                setLocation("Chennai")
                                sessionStorage.setItem("city", "Chennai")
                                route.asPath.split("/")[1] === "new-car-dealers" ? route.push(`/new-car-dealers/${route.asPath.split("/")[2].split("-")[0]}-car-dealers-bangalore`) : null
                                route.asPath.split("/")[1] === "price-data" ? route.push(`/price-data/${route.asPath.split("/")[2]}/${route.asPath.split("/")[3]}/price-in-${item.City ? item.City.toLowerCase() : item["City Name"].toLowerCase()}`) : null
                                handleClose()
                            }} className='text-center'>
                                <Image className='mx-auto' width={70} src={chennai} alt="chennai" />
                                <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Chennai</p>
                            </div>
                            <div onClick={() => {
                                setLocation("Delhi")
                                sessionStorage.setItem("city", "Delhi")
                                route.asPath.split("/")[1] === "new-car-dealers" ? route.push(`/new-car-dealers/${route.asPath.split("/")[2].split("-")[0]}-car-dealers-bangalore`) : null
                                route.asPath.split("/")[1] === "price-data" ? route.push(`/price-data/${route.asPath.split("/")[2]}/${route.asPath.split("/")[3]}/price-in-${item.City ? item.City.toLowerCase() : item["City Name"].toLowerCase()}`) : null
                                handleClose()
                            }} className='text-center'>
                                <Image className='mx-auto' width={70} src={delhi} alt="delhi" />
                                <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Delhi</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='p-2 text-[16px] text-[#484848] font-semibold w-full'>All Cities</p>
                        <ul className='overflow-y-scroll h-[100vh]'>
                            {city ? city.map((item, id) => {
                                return (<li key={id} onClick={() => {
                                    setLocation(item.City ? item.City : item["City Name"])
                                    sessionStorage.setItem("city", item.City ? item.City : item["City Name"])
                                    route.asPath.split("/")[1] === "new-car-dealers" ? route.push(`/new-car-dealers/${route.asPath.split("/")[2].split("-")[0]}-car-dealers-${item.City ? item.City.toLowerCase() : item["City Name"].toLowerCase()}`) : null
                                    route.asPath.split("/")[1] === "price-data" ? route.push(`/price-data/${route.asPath.split("/")[2]}/${route.asPath.split("/")[3]}/price-in-${item.City ? item.City.toLowerCase() : item["City Name"].toLowerCase()}`) : null
                                    handleClose()
                                }} className='py-2.5 px-2 cursor-pointer border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>{item.City ? item.City : item["City Name"]}, {item.postoffice_name ? item.postoffice_name : item["State name"]}</li>)
                            }) : null}
                        </ul>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}


