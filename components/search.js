import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from "next/image";
import cross from "../public/images/cross.svg"
import search from "../public/images/search.svg"
import locationContext from "../context/LocationContext";
import { useRouter } from "next/router";
import Link from "next/link";

function Search_Web(props) {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([])
    const [filter, setFilter] = useState([])

    const context = React.useContext(locationContext)

    let { location } = context


    let route = useRouter()


    const url = "http://localhost:5000"


    async function getData() {
        const res = await fetch(`${url}/version_brand_admin`, {
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
            {props.status ? <div className='relative'>
                <input onClick={handleOpen} className='w-[20rem] cursor-pointer py-[0.45rem] rounded-md border-2 border-[#E1E1E1] px-[1rem] font-semibold text-[#6F6F6F]' placeholder='Search New Car' type="text" />
                <Image className='absolute top-[9px] right-[14px] cursor-pointer' width={25} src={search} alt="search" />
            </div> : <Image onClick={handleOpen} width={20} src={search} alt="search" />}

            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle borderBottom={"1px solid #C6C6C6"}>
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-semibold text-[18px] text-[#484848]'>Search Your Car</p>
                        <Image width={20} className="cursor-pointer" onClick={handleClose} src={cross} alt="" />
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

export default Search_Web;
