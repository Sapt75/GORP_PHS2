import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from "next/image";
import cross from "../public/images/cross.svg"
import search from "../public/images/search.svg"

function Search_Web(props) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {props.status ? <div className='relative'>
                <input className='w-[20rem] py-[0.45rem] rounded-md border-2 border-[#E1E1E1] px-[1rem] font-semibold text-[#6F6F6F]' placeholder='Search New Car' type="text" />
                <Image onClick={handleOpen} className='absolute top-[9px] right-[14px] cursor-pointer' width={25} src={search} alt="search" />
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
                        <input className='border-2 border-[#C6C6C6] focus-visible:border-[#0B9DBC] w-full py-[0.3rem] px-2' placeholder='Type in your Car name' type="text" />
                    </div>
                    <div>
                        <p className='p-2 text-[16px] text-[#484848] font-semibold w-full'>Most Searched Cars</p>
                    </div>
                    <div className='mt-4'>
                        <ul className='overflow-y-scroll h-[100vh]'>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Tata Nexon</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Hyundai Creta</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Hyundai Exter</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Kia Carens</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Mahindra W300</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Kia Sonet Facelift</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Maruti Brezza</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Hyundai Venue</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Hyundai Aura</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Maruti Fronx</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Tata Nexon</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Hyundai Creta</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Hyundai Exter</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Kia Carens</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Mahindra W300</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Kia Sonet Facelift</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Maruti Brezza</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Hyundai Venue</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Hyundai Aura</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Maruti Fronx</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Tata Nexon</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Hyundai Creta</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Hyundai Exter</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Kia Carens</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Mahindra W300</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Kia Sonet Facelift</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Maruti Brezza</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Hyundai Venue</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Hyundai Aura</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Maruti Fronx</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Tata Nexon</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Hyundai Creta</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Hyundai Exter</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Kia Carens</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Mahindra W300</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Kia Sonet Facelift</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Maruti Brezza</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Hyundai Venue</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Hyundai Aura</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Maruti Fronx</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Tata Nexon</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Hyundai Creta</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Hyundai Exter</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Kia Carens</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Mahindra W300</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Kia Sonet Facelift</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Maruti Brezza</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Hyundai Venue</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Hyundai Aura</li>
                            <li className='py-3 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Maruti Fronx</li>
                        </ul>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default Search_Web;
