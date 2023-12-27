import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from "next/image";
import cross from "../public/images/cross.svg"
import City_Modal from '../components/city_modal';
import Version_Modal from '../components/version_modal';
import style from "../styles/varient.module.css"
import Star from "./star";

function Rating_Model() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <p onClick={handleOpen} className='text-[#09809A] cursor-pointer md:text-[16px] text-[14px] font-semibold tracking-[-0.32px]'>Rate this car</p>

            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle borderBottom={"1px solid #C6C6C6"}>
                    <div className="flex justify-between md:hidden">
                        <div className='flex space-x-4'>
                            <Image width={150} height={150} src={"https://ik.imagekit.io/GORP/Hyundai/Aura/Aura.jpg?updatedAt=1690106132936"} />
                            <div>
                                <p className='font-semibold text-[18px] text-[#484848] mt-8'>Hyundai Aura</p>
                                <p className='font-semibold text-[14px] text-[#6F6F6F]'>E 1.2 Petrol</p>
                            </div>
                        </div>
                        <Image onClick={handleClose} className="cursor-pointer" width={20} src={cross} alt="" />
                    </div>
                    <div className="hidden md:flex justify-between">
                        <p className='font-semibold text-[18px] text-[#484848]'>Rate This Car</p>
                        <Image onClick={handleClose} className="cursor-pointer" width={20} src={cross} alt="" />
                    </div>
                </DialogTitle>
                <DialogContent className="md:hidden">
                    <div className='flex space-x-1'>
                        <Version_Modal />
                        <City_Modal />
                    </div>
                    <div className="mt-8">
                        <p className="text-[18px] font-semibold text-[#484848]">You purchased this car as?</p>
                        <div className='grid grid-cols-2 gap-y-4 my-4'>
                            <div className='text-center mx-2'>
                                <div className={`border-[1px] border-[#6C6C6C] rounded-md mx-auto ${style["price-hover"]} cursor-pointer`}>
                                    <p className='font-semibold text-[#6F6F6F] text-[14px] py-1.5'>New</p>
                                </div>
                            </div>
                            <div className='text-center mx-2'>
                                <div className={`border-[1px] border-[#6C6C6C] rounded-md mx-auto ${style["price-hover"]} cursor-pointer`}>
                                    <p className='font-semibold text-[#6F6F6F] text-[14px] py-1.5'>Used</p>
                                </div>
                            </div>
                            <div className='text-center mx-2'>
                                <div className={`border-[1px] border-[#6C6C6C] rounded-md mx-auto ${style["price-hover"]} cursor-pointer`}>
                                    <p className='font-semibold text-[#6F6F6F] text-[14px] py-1.5'>Not Purchased</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="flex space-x-6 bg-[#f4f4f4] p-2">
                            <p className="text-[18px] font-semibold text-[#484848]">Overall Rating</p>
                            <div className="flex space-x-2">
                                <Star value={1} />
                                <span className="text-[14px] text-[#6F6F6F]">Poor</span>
                            </div>
                        </div>
                        <div className="mt-4 space-y-4">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-[18px] text-[#484848]">Engine & Performance</p>
                                    <Star value={2} />
                                </div>
                                <div>
                                    <p className="text-[#6F6F6F]">Fair</p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-[18px] text-[#484848]">Safety & Features</p>
                                    <Star value={3} />
                                </div>
                                <div>
                                    <p className="text-[#6F6F6F]">Good</p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-[18px] text-[#484848]">Exterior Rating</p>
                                    <Star value={4} />
                                </div>
                                <div>
                                    <p className="text-[#6F6F6F]">Very Good</p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-[18px] text-[#484848]">Interior Rating</p>
                                    <Star value={5} />
                                </div>
                                <div>
                                    <p className="text-[#6F6F6F]">Excellent</p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-[18px] text-[#484848]">Ride & Handling</p>
                                    <Star value={5} />
                                </div>
                                <div>
                                    <p className="text-[#6F6F6F]">Excellent</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-[18px] text-[#484848] font-semibold mb-2">Your Comments about the Car</p>
                            <textarea className="w-full bg-[#f4f4f4] border-[1px] border-[#C6C6C6]" rows={6}></textarea>
                        </div>
                        <div className="mt-4">
                            <p className="text-[18px] text-[#484848] font-semibold">Personal Details</p>
                            <p className="text-[14px] text-[#6F6F6F] mt-2">We wish to credit this rating to you. We will never spam your inbox</p>
                            <form className="my-4">
                                <label className="block text-[#484848] my-2" htmlFor="name">Name</label>
                                <input className="bg-[#f4f4f4] w-full p-2" type="text" placeholder="Enter your name" />
                                <label className="block text-[#484848] my-2" htmlFor="email">Email Id</label>
                                <input className="bg-[#f4f4f4] w-full p-2" type="email" placeholder="Enter your email id" />
                                <button className="w-full bg-[#09809A] py-2 text-white my-4">Submit</button>
                            </form>
                        </div>
                    </div>
                </DialogContent>
                <DialogContent className="hidden md:block">
                    <div className='flex justify-between'>
                        <div>
                            <p className="text-[20px] font-semibold text-[#484848]">Hyundai Aura E 1.2 Petrol</p>
                            <Image width={300} height={300} src={"https://ik.imagekit.io/GORP/Hyundai/Aura/Aura.jpg?updatedAt=1690106132936"} />
                        </div>
                        <div className="my-14 w-1/2">
                            <div className='flex space-x-2'>
                                <Version_Modal />
                                <City_Modal />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <p className="text-[18px] font-semibold text-[#484848]">You purchased this car as?</p>
                        <div className='grid grid-cols-6 gap-y-4 my-4'>
                            <div className='text-center mx-2'>
                                <div className={`border-[1px] border-[#6C6C6C] rounded-md mx-auto ${style["price-hover"]} cursor-pointer`}>
                                    <p className='font-semibold text-[#6F6F6F] text-[14px] py-1.5'>New</p>
                                </div>
                            </div>
                            <div className='text-center mx-2'>
                                <div className={`border-[1px] border-[#6C6C6C] rounded-md mx-auto ${style["price-hover"]} cursor-pointer`}>
                                    <p className='font-semibold text-[#6F6F6F] text-[14px] py-1.5'>Used</p>
                                </div>
                            </div>
                            <div className='text-center mx-2'>
                                <div className={`border-[1px] border-[#6C6C6C] rounded-md mx-auto ${style["price-hover"]} cursor-pointer`}>
                                    <p className='font-semibold text-[#6F6F6F] text-[14px] py-1.5'>Not Purchased</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="flex justify-between bg-[#f4f4f4] p-2">
                            <div className="flex space-x-2">
                                <p className="text-[18px] font-semibold text-[#484848]">Overall Rating</p>
                                <Star value={1} />
                            </div>
                            <div>
                                <span className="text-[14px] text-[#6F6F6F]">Poor</span>
                            </div>
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-y-12 px-2">
                            <div>
                                <div>
                                    <p className="text-[18px] text-[#484848]">Engine & Performance</p>
                                    <Star value={2} />
                                </div>
                                <div>
                                    <p className="text-[#6F6F6F]">Fair</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p className="text-[18px] text-[#484848]">Safety & Features</p>
                                    <Star value={3} />
                                </div>
                                <div>
                                    <p className="text-[#6F6F6F]">Good</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p className="text-[18px] text-[#484848]">Exterior Rating</p>
                                    <Star value={4} />
                                </div>
                                <div>
                                    <p className="text-[#6F6F6F]">Very Good</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p className="text-[18px] text-[#484848]">Interior Rating</p>
                                    <Star value={5} />
                                </div>
                                <div>
                                    <p className="text-[#6F6F6F]">Excellent</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p className="text-[18px] text-[#484848]">Ride & Handling</p>
                                    <Star value={5} />
                                </div>
                                <div>
                                    <p className="text-[#6F6F6F]">Excellent</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <p className="text-[18px] text-[#484848] font-semibold mb-2">Your Comments about the Car</p>
                            <textarea className="w-full bg-[#f4f4f4] border-[1px] border-[#C6C6C6]" rows={6}></textarea>
                        </div>
                        <div className="mt-4">
                            <p className="text-[20px] text-[#484848] font-semibold">Personal Details</p>
                            <p className="text-[16px] text-[#6F6F6F] mt-2">We wish to credit this rating to you. We will never spam your inbox</p>
                            <form className="my-4">
                                <label className="block text-[#484848] my-2" htmlFor="name">Name</label>
                                <input className="bg-[#f4f4f4] w-1/2 block p-2 border-[1px] border-[#C6C6C6]" type="text" placeholder="Enter your name" />
                                <label className="block text-[#484848] my-2" htmlFor="email">Email Id</label>
                                <input className="bg-[#f4f4f4] w-1/2 block p-2 border-[1px] border-[#C6C6C6]" type="email" placeholder="Enter your email id" />
                                <button className="bg-[#09809A] w-1/4 py-2 text-white my-4">Submit</button>
                            </form>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default Rating_Model;
