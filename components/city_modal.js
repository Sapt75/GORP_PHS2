import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from "next/image";
import location from "../public/images/location.svg"
import cross from "../public/images/cross.svg"
import ahmedabad from "../public/images/ahemdabad.png"
import bangalore from "../public/images/bangalore.png"

function Modal(props) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {props.status ? <Image onClick={handleOpen} className="cursor-pointer w-auto h-auto" width={25} height={25} src={location} alt="location" /> : <div onClick={handleOpen} className='border border-[#E1E1E1] w-1/2 flex justify-between cursor-pointer'>
                <div className='leading-[1.2] p-[0.5rem]'>
                    <p className='pb-2 text-[#6F6F6F]'>City</p>
                    <span className='md:text-[14px] text-[12px] text-[#484848] font-semibold tracking-[-0.28px]'>Electronic City, Bangalore</span>
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
                        <input className='border-2 border-[#0B9DBC] w-full py-[0.3rem] px-2' placeholder='Type in your pincode or City name' type="text" />
                    </div>
                    <div>
                        <p className='p-2 text-[16px] text-[#484848] font-semibold w-full'>Popular Cities</p>
                        <div className='flex overflow-x-scroll space-x-6 mx-2'>
                            <div className='text-center'>
                                <Image className='mx-auto' width={70} src={ahmedabad} alt="bangalore" />
                                <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Ahmedabad</p>
                            </div>
                            <div className='text-center'>
                                <Image className='mx-auto' width={70} src={bangalore} alt="bangalore" />
                                <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Bangalore</p>
                            </div>
                            <div className='text-center'>
                                <Image className='mx-auto' width={70} src={ahmedabad} alt="bangalore" />
                                <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Ahmedabad</p>
                            </div>
                            <div className='text-center'>
                                <Image className='mx-auto' width={70} src={bangalore} alt="bangalore" />
                                <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Bangalore</p>
                            </div>
                            <div className='text-center'>
                                <Image className='mx-auto' width={70} src={ahmedabad} alt="bangalore" />
                                <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Ahmedabad</p>
                            </div>
                            <div className='text-center'>
                                <Image className='mx-auto' width={70} src={bangalore} alt="bangalore" />
                                <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Bangalore</p>
                            </div>
                            <div className='text-center'>
                                <Image className='mx-auto' width={70} src={ahmedabad} alt="bangalore" />
                                <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Ahmedabad</p>
                            </div>
                            <div className='text-center'>
                                <Image className='mx-auto' width={70} src={bangalore} alt="bangalore" />
                                <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Bangalore</p>
                            </div>
                            <div className='text-center'>
                                <Image className='mx-auto' width={70} src={ahmedabad} alt="bangalore" />
                                <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Ahmedabad</p>
                            </div>
                            <div className='text-center'>
                                <Image className='mx-auto' width={70} src={bangalore} alt="bangalore" />
                                <p className='text-[16px] text-[#6F6F6F] font-normal my-1'>Bangalore</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='p-2 text-[16px] text-[#484848] font-semibold w-full'>All Cities</p>
                        <ul className='overflow-y-scroll h-[100vh]'>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abohar, Punjab</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abu, Rajasthan</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adilabad, Telangana</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adimali, Kerala</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adoni, Andra Pradesh</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abohar, Punjab</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abu, Rajasthan</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adilabad, Telangana</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adimali, Kerala</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adoni, Andra Pradesh</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abohar, Punjab</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abu, Rajasthan</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adilabad, Telangana</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adimali, Kerala</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adoni, Andra Pradesh</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abohar, Punjab</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abu, Rajasthan</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adilabad, Telangana</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adimali, Kerala</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adoni, Andra Pradesh</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abohar, Punjab</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abu, Rajasthan</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adilabad, Telangana</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adimali, Kerala</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adoni, Andra Pradesh</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abohar, Punjab</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abu, Rajasthan</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adilabad, Telangana</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adimali, Kerala</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adoni, Andra Pradesh</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abohar, Punjab</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abu, Rajasthan</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adilabad, Telangana</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adimali, Kerala</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adoni, Andra Pradesh</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abohar, Punjab</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abu, Rajasthan</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adilabad, Telangana</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adimali, Kerala</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adoni, Andra Pradesh</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abohar, Punjab</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abu, Rajasthan</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adilabad, Telangana</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adimali, Kerala</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adoni, Andra Pradesh</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abohar, Punjab</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abu, Rajasthan</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adilabad, Telangana</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adimali, Kerala</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adoni, Andra Pradesh</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abohar, Punjab</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abu, Rajasthan</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adilabad, Telangana</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adimali, Kerala</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adoni, Andra Pradesh</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abohar, Punjab</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abu, Rajasthan</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adilabad, Telangana</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adimali, Kerala</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adoni, Andra Pradesh</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abohar, Punjab</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abu, Rajasthan</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adilabad, Telangana</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adimali, Kerala</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adoni, Andra Pradesh</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abohar, Punjab</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abu, Rajasthan</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adilabad, Telangana</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adimali, Kerala</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adoni, Andra Pradesh</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abohar, Punjab</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abu, Rajasthan</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adilabad, Telangana</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adimali, Kerala</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adoni, Andra Pradesh</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abohar, Punjab</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Abu, Rajasthan</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adilabad, Telangana</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adimali, Kerala</li>
                            <li className='py-2.5 px-2 border-b-[1px] text-[#6F6F6F] border-[#C6C6C6]'>Adoni, Andra Pradesh</li>
                        </ul>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default Modal;
