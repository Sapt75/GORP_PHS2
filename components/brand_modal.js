import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from "next/image";
import cross from "../public/images/cross.svg"
import edit from "../public/images/edit.svg"
import Link from "next/link";
import { useRouter } from "next/router";
import locationContext from "../context/LocationContext";

function Brand_Model(props) {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([])
    const [filter, setFilter] = useState([])

    const context = React.useContext(locationContext)

    let { location } = context


    let route = useRouter()



    async function getData() {
        const res = await fetch(`${props.url}/version_brand_admin`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        let data = await res.json();

        // data = [...new Map(data.map(item => [item["model_name"], item])).values()]

        if (res.status === 422 || !data) {
            console.log("error");
        } else {
            setData(data)
            console.log("Data Fetched!");
        }

    }

    function handelChange(e) {
        const searchQuery = e.target.value; // Example search query

        console.log(searchQuery)

        // Filtering the array based on the search query
        const filteredData = data.filter(item => {
            // Convert both the item name and search query to lowercase for case-insensitive comparison
            return item.toLowerCase().includes(searchQuery.toLowerCase());
        });

        // Sorting the filtered array based on the name
        setFilter(filteredData.sort((a, b) => {
            // Sort alphabetically based on the name property
            return a.localeCompare(b);
        }))
    }


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            {props.state ? props.mod ? <Image onClick={handleOpen} className='inline mx-2 cursor-pointer' src={edit} alt="edit" /> : <li className='font-semibold text-[#484848] cursor-pointer mt-2'><a href="" title={`${props.brand} ${props.model}`}> {props.brand}</a> <Image onClick={handleOpen} className='inline' src={edit} alt="edit" /></li> : <div onClick={handleOpen} className='border border-[#E1E1E1] w-1/2 flex justify-between cursor-pointer'>
                <div className='leading-[1.2] p-[0.5rem]'>
                    <p className='pb-2 text-[#6F6F6F]'>Make</p>
                    <span className='md:text-[14px] text-[13px] text-[#484848] font-semibold tracking-[-0.28px]'>{props.brand}</span>
                </div>
                <span><ChevronRightIcon className='mt-[1rem] mr-[0.6rem]' fontSize='medium' /></span>
            </div>}

            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle>
                    <div className='flex justify-between px-4 py-4'>
                        <p className='font-semibold'>Select Your Model</p>
                        <Image onClick={handleClose} className='cursor-pointer' src={cross} alt="cross" />
                    </div>
                </DialogTitle>
                <DialogContent>
                    <div className='px-2 my-4 bg-gray-100'>
                        <input onChange={handelChange} className='border-2 border-[#C6C6C6] focus-visible:border-[#0B9DBC] w-full py-[0.3rem] px-2' placeholder='Type in your Car name' type="text" />
                    </div>
                    <div>
                        <p className='p-2 text-[16px] text-[#484848] font-semibold w-full'>Most Searched Cars</p>
                    </div>
                    <div className='mt-4'>
                        <ul className='overflow-y-scroll h-[100vh]'>
                            {data.length > 0 ? filter.length > 0 ? filter.map((item, index) => {
                                return (item !== "#N/A" ? route.asPath.split("/")[1] === "new-car-dealers" ? <Link href={`/new-car-dealers/${item.toLowerCase().split(" ").join("-")}-car-dealers-in-${location.toLowerCase()}`} key={index}>
                                    <li onClick={handleClose} className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>{item}</li>
                                </Link> : <Link href={`/new-cars/${item.toLowerCase().split(" ").join("-")}`} key={index}>
                                    <li onClick={handleClose} className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>{item}</li>
                                </Link> : null)
                            }) : data.map((item, index) => {
                                return (item !== "#N/A" ? route.asPath.split("/")[1] === "new-car-dealers" ? <Link href={`/new-car-dealers/${item.toLowerCase().split(" ").join("-")}-car-dealers-in-${location.toLowerCase()}`} key={index}>
                                    <li onClick={handleClose} className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>{item}</li>
                                </Link> : <Link href={`/new-cars/${item.toLowerCase().split(" ").join("-")}`} key={index}>
                                    <li onClick={handleClose} className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>{item}</li>
                                </Link> : null)
                            }) : null}
                        </ul>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default Brand_Model;
