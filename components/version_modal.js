import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from "next/image";
import cross from "../public/images/cross.svg"
import Link from "next/link"
import edit from "../public/images/edit.svg"

function Version_Model(props) {
    const [open, setOpen] = useState(false);


    function numFormat(value) {
        const val = Math.abs(value)
        if (val >= 10000000) return `${(value / 10000000).toFixed(2)} Crore`
        if (val >= 100000) return `${(value / 100000).toFixed(2)} Lakh`
        return value;
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {props.status ? <Image onClick={handleOpen} src={edit} alt="edit" className='inline mx-2 mb-1 cursor-pointer' /> : <div onClick={handleOpen} className='border border-[#E1E1E1] w-1/2 flex justify-between cursor-pointer'>
                <div className='leading-[1.2] p-[0.5rem]'>
                    <p className='pb-2 text-[#6F6F6F]'>Change Variant</p>
                    <span className='md:text-[14px] text-[13px] text-[#484848] font-semibold tracking-[-0.28px]'>{props.version}</span>
                </div>
                <span><ChevronRightIcon className='mt-[1rem] mr-[0.6rem]' fontSize='medium' /></span>
            </div>}

            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle>
                    <div className="flex justify-between">
                        <div className='flex space-x-4'>
                            <Image width={150} height={150} src={"https://ik.imagekit.io/GORP/Hyundai/Aura/Aura.jpg?updatedAt=1690106132936"} />
                            <p className='font-semibold text-[18px] text-[#484848] mt-8'>{props.brand} {props.model} Variants</p>
                        </div>
                        <Image onClick={handleClose} className="cursor-pointer" width={20} src={cross} alt="" />
                    </div>
                </DialogTitle>
                <DialogContent>
                    <div className='p-4 border-y-[2px] border-gray-100 mt-4'>
                        <ul className='flex space-x-4'>
                            <li>Petrol</li>
                            <li>Diesel</li>
                            <li>CNG</li>
                            <li className='border-l-[1px] border-black pl-4'>Manual</li>
                            <li>Automatic</li>
                        </ul>
                    </div>
                    <div>
                        <div className='flex justify-between mt-4 px-4 py-2 border-b-[1px] border-[#C6C6C6]'>
                            <p className='font-semibold text-[#484848]'>Variants</p>
                            <p className='text-right font-semibold text-[#484848]'>On Road Price Mumbai</p>
                        </div>
                        <div className="overflow-y-scroll">
                            {props.data ? props.data.map((element, index) => {
                                return (
                                    <Link key={index} onClick={handleClose} href={`/new-cars/${element.brand.toLowerCase()}/${element.model_name.toLowerCase().split(" ").join("-")}/${element.version_name.toLowerCase().split(" ").join("-")}`}>
                                        <div className='border-b-[1px] flex justify-between px-4 py-2 border-[#C6C6C6]'>
                                            <div>
                                                <p className='text-[18px] text-[#484848] font-semibold tracking-[-0.36px]'>{element.model_name} {element.version_name}</p>
                                                <span className='text-[14px] text-[#6F6F6F] font-normal tracking-[-0.28px]'>{element.Specifications.engine_and_transmission.displacement} cc, {element.transmission_type}, {element.Specifications.engine_and_transmission.fuel_type} </span>
                                            </div>
                                            <div>
                                                <p className='text-[18px] text-[#484848] font-semibold tracking-[-0.36px]'>{props.price.length > 0 ? `₹ ${numFormat(props.price.find(o => o.Version_UID === element.uid).ex_showroom_price)}` : null}</p>
                                            </div>
                                        </div>
                                    </Link>)
                            }) : null}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default Version_Model;
