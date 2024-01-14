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
    const [data, setData] = useState(props.data)
    const [fuel, setFuel] = useState(props.data)
    const [filter, setFilter] = useState({
        fuel_type: null,
        transmission_type: null
    })


    function numFormat(value) {
        const val = Math.abs(value)
        if (val >= 10000000) return `${(value / 10000000).toFixed(2)} Crore`
        if (val >= 100000) return `${(value / 100000).toFixed(2)} Lakh`
        return value;
    }

    function titleCase(str) {
        return str.toLowerCase().split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ');
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setData(props.data)
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
                            <Image width={150} height={150} src={`https://ik.imagekit.io/GORP/${titleCase(props.brand)}/${titleCase(props.model)}/${titleCase(props.model)}.jpg`} />
                            <p className='font-semibold text-[18px] text-[#484848] mt-8'>{props.brand} {props.model} Variants</p>
                        </div>
                        <Image onClick={handleClose} className="cursor-pointer" width={20} src={cross} alt="" />
                    </div>
                    <div className='p-4 border-y-[2px] border-gray-100 mt-4'>
                        <ul className='flex space-x-4 text-[16px]'>
                            {fuel.filter((value, index, self) => {
                                return index === self.findIndex((t) => {
                                    return t.Specifications.engine_and_transmission.fuel_type == value.Specifications.engine_and_transmission.fuel_type
                                })
                            }).map((item, index) => {
                                return(<li key={index} onClick={() => {
                                    setFilter({
                                        fuel_type: `${item.Specifications.engine_and_transmission.fuel_type}`,
                                        transmission_type: filter.transmission_type
                                    })
                                    filter.transmission_type !== null ? setData(props.data.filter((itm) => itm.Specifications.engine_and_transmission.fuel_type === item.Specifications.engine_and_transmission.fuel_type && itm.transmission_type === filter.transmission_type)) : setData(props.data.filter(itmm => itmm.Specifications.engine_and_transmission.fuel_type === `${item.Specifications.engine_and_transmission.fuel_type}`
                                    ))
                                }} className="cursor-pointer">{item.Specifications.engine_and_transmission.fuel_type}</li>)
                            })}
                            <li onClick={() => {
                                setFilter({
                                    fuel_type: filter.fuel_type,
                                    transmission_type: "Manual"
                                })
                                filter.fuel_type !== null ? setData(props.data.filter((item) => item.transmission_type === "Manual" && item.Specifications.engine_and_transmission.fuel_type === filter.fuel_type)) : setData(props.data.filter((item) => item.transmission_type === "Manual"))
                            }} className='border-l-[1px] border-black pl-4 cursor-pointer'>Manual</li>
                            <li onClick={() => {
                                setFilter({
                                    fuel_type: filter.fuel_type,
                                    transmission_type: "Automatic"
                                })
                                filter.fuel_type !== null ? setData(props.data.filter((item) => item.transmission_type === "Automatic" && item.Specifications.engine_and_transmission.fuel_type === filter.fuel_type)) : setData(props.data.filter((item) => item.transmission_type === "Automatic"))
                            }} className="cursor-pointer">Automatic</li>
                        </ul>
                    </div>
                    <div className="flex space-x-4 my-4">
                        {filter.fuel_type !== null ? <span className="text-[14px] border-[1px] border-[#C6C6C6] rounded-lg px-4 py-0.5">
                            {filter.fuel_type} <Image onClick={() => {
                                setFilter({
                                    fuel_type: null,
                                    transmission_type: filter.transmission_type
                                })
                                filter.transmission_type !== null ? setData(props.data.filter((item) => item.transmission_type === filter.transmission_type)) : setData(props.data)
                            }} src={cross} className="inline pb-0.5 ml-2 cursor-pointer" width={12} alt="cross" />
                        </span> : null}
                        {filter.transmission_type !== null ? <span className="text-[14px] border-[1px] border-[#C6C6C6] rounded-lg px-4 py-0.5">
                            {filter.transmission_type} <Image onClick={() => {
                                setFilter({
                                    fuel_type: filter.fuel_type,
                                    transmission_type: null
                                })
                                filter.fuel_type !== null ? setData(props.data.filter((item) => item.Specifications.engine_and_transmission.fuel_type === filter.fuel_type)) : setData(props.data)
                            }} src={cross} className="inline pb-0.5 ml-2 cursor-pointer" width={12} alt="cross" />
                        </span> : null}
                    </div>
                    <div className='flex justify-between text-[18px] mt-4 px-4 py-2 border-b-[1px] border-[#C6C6C6]'>
                        <p className='font-semibold text-[#484848]'>Variants</p>
                        <p className='text-right font-semibold text-[#484848]'>On Road Price Mumbai</p>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <div>
                        <div className="overflow-y-scroll">
                            {data.length > 0 ? data.map((element, index) => {
                                return (<Link key={index} onClick={handleClose} href={`/new-cars/${element.brand.toLowerCase().split(" ").join("-")}/${element.model_name.toLowerCase().split(" ").join("-")}/${element.version_name.toLowerCase().split(" ").join("-")}`}>
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
                            }) : <>
                                <p className="text-[18px] text-red-600 text-center">No data</p>
                            </>}
                        </div>
                    </div>
                </DialogContent>
            </Dialog >
        </>
    );
}

export default Version_Model;
