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

function Brand_Model(props) {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([])



    async function getData() {
        const res = await fetch(`${props.url}/brands_cars/${props.brand}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();

        if (res.status === 422 || !data) {
            console.log("error");
        } else {
            setData(data)
            console.log("Data Fetched!");
        }

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
            {props.state ? <li className='font-semibold text-[#484848] cursor-pointer'><a href="" title={`${props.brand} ${props.model}`}> {props.model}</a> <Image onClick={handleOpen} className='inline' src={edit} /></li> : <div onClick={handleOpen} className='border border-[#E1E1E1] w-1/2 flex justify-between cursor-pointer'>
                <div className='leading-[1.2] p-[0.5rem]'>
                    <p className='pb-2 text-[#6F6F6F]'>Brand</p>
                    <span className='md:text-[14px] text-[13px] text-[#484848] font-semibold tracking-[-0.28px]'>{props.brand}</span>
                </div>
                <span><ChevronRightIcon className='mt-[1rem] mr-[0.6rem]' fontSize='medium' /></span>
            </div>}

            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle>
                    <div className='flex justify-between px-4 py-4'>
                        <p className='font-semibold'>Select Your Model</p>
                        <Image onClick={handleClose} className='cursor-pointer' src={cross} alt="" />
                    </div>
                </DialogTitle>
                <DialogContent>
                    <div className='px-2 my-4 bg-gray-100'>
                        <input className='border-2 border-[#C6C6C6] focus-visible:border-[#0B9DBC] w-full py-[0.3rem] px-2' placeholder='Type in your Car name' type="text" />
                    </div>
                    <div>
                        <p className='p-2 text-[16px] text-[#484848] font-semibold w-full'>Most Searched Cars</p>
                    </div>
                    <div className='mt-4'>
                        <ul className='overflow-y-scroll h-[100vh]'>
                            {data.length > 0 ? data.map((item, index) => {
                                return (<li key={index} className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>{item.brand} {item.model_name}</li>)
                            }) : null}
                        </ul>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default Brand_Model;
