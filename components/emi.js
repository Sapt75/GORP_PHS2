import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from "next/image";
import cross from "../public/images/cross.svg"
import ahmedabad from "../public/images/ahemdabad.png"
import bangalore from "../public/images/bangalore.png"
import Range from "./range";
import { PieChart } from '@mui/x-charts/PieChart';
import Switch from '@mui/material/Switch';

function Emi_Modal() {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false)
    const [ten, setTen] = useState(false)
    const [change, setChange] = useState(true)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <p onClick={handleOpen} className='text-[13px] font-normal underline tracking-[-0.2px] text-[#333]'>Check more EMI options</p>

            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle borderBottom={"1px solid #C6C6C6"}>
                    <div className="flex justify-between">
                        <p className='font-semibold text-[18px] px-2 text-[#484848]'>Choose Your EMI Options</p>
                        <Image onClick={handleClose} className="cursor-pointer" width={20} src={cross} alt="" />
                    </div>
                </DialogTitle>
                <DialogContent>
                    <div className="mt-2 mx-2">
                        <p className='text-[18px] text-[#484848] font-semibold w-full'>Hyundai Exter Ex 1.2 MT</p>
                        <p className='my-2 text-[18px] text-[#484848] font-semibold'>₹ 11,471 <span className="text-[14px] text-[#6F6F6F]">EMI for 5 years</span></p>
                        <div className="mt-6 border-b-[1px] border-[#C6C6C6] pb-6">
                            <div className="flex justify-between">
                                <p className="text-[18px] text-[#6f6f6f]">Down Payment : <span className="text-[#09809A] font-semibold">₹ 1,94,896</span></p>
                                <p onClick={() => show ? setShow(false) : setShow(true)} className="text-[18px] text-[#09809A]">Show</p>
                            </div>
                            <div className={`${show ? null : "hidden"}`}>
                                <Range />
                                <div className="flex justify-between">
                                    <p className="text-[16px] text-[#6f6f6f]">₹ 1,34,906</p>
                                    <p className="text-[16px] text-[#6f6f6f]">₹ 7,34,806</p>
                                </div>
                                <input className="p-2 border-[1px] border-[#C6C6C6] font-semibold w-full my-4 text-[#484848]" value={"₹ 1,94,896"} type="text" />
                                <p className="text-[18px] text-[#6f6f6f] mt-4">Your Loan Amount will be : <span className="text-[#09809A] font-semibold mx-4">₹ 5,39,910</span></p>
                            </div>
                        </div>
                        <div className="mt-6 border-b-[1px] border-[#C6C6C6] pb-2">
                            <div className="flex justify-between mb-4">
                                <p className="text-[18px] text-[#6f6f6f]">Tenure : <span className="text-[#09809A] font-semibold">5 Years</span></p>
                                <p className="text-[18px] text-[#6f6f6f]">Interest : <span className="text-[#09809A] font-semibold">10%</span></p>
                                <p onClick={() => ten ? setTen(false) : setTen(true)} className="text-[18px] text-[#09809A]">Show</p>
                            </div>
                            <div className={`${ten ? null : "hidden"}`}>
                                <div className="flex space-x-4">
                                    <div className="w-1/2">
                                        <p>Tenure</p>
                                        <Range />
                                        <div className="flex justify-between">
                                            <p className="text-[16px] text-[#6f6f6f]">1 year</p>
                                            <p className="text-[16px] text-[#6f6f6f]">7 year</p>
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <p>Interest</p>
                                        <Range />
                                        <div className="flex justify-between">
                                            <p className="text-[16px] text-[#6f6f6f]">8%</p>
                                            <p className="text-[16px] text-[#6f6f6f]">20%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <input className="p-2 border-[1px] w-1/2 border-[#C6C6C6] font-semibold my-4 text-[#484848]" value={"5"} type="text" />
                                    <input className="p-2 border-[1px] w-1/2 border-[#C6C6C6] font-semibold my-4 text-[#484848]" value={"10"} type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="justify-center flex space-x-2 mt-6">
                            <p className="text-[16px] text-[#6f6f6f] mt-2">Graph</p>
                            <label class="switch">
                                <input onChange={() => change ? setChange(false) : setChange(true)} type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                            {/* <Switch size='medium' defaultChecked /> */}
                            <p className="text-[16px] text-[#6f6f6f] mt-2">Schedule</p>
                        </div>
                        <div className={`mt-6 ${change ? null : "hidden"}`}>
                            <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 0, value: 5, color: "#ce4327" },
                                            { id: 1, value: 20, color: "#09809A" }
                                        ],
                                        innerRadius: 110,

                                    },
                                ]}
                                className='w-full'
                                height={400}
                            />

                            <div className="mb-8">
                                <ul className="flex space-x-4">
                                    <li className="text-[18px] text-[#6f6f6f]"><div className="w-2.5 h-2.5 mr-2 rounded-full bg-[#09809A] inline-block"></div> Principal Loan Amount</li>
                                    <li className="text-[18px] text-[#6f6f6f]">₹ 5,39,910</li>
                                </ul>
                                <ul className="flex space-x-7">
                                    <li className="text-[18px] text-[#6f6f6f]"><div className="w-2.5 h-2.5 mr-2 rounded-full bg-[#ce4327] inline-block"></div> Total Interest Payable</li>
                                    <li className="text-[18px] text-[#6f6f6f]">₹ 1,48,350</li>
                                </ul>
                                <ul className="flex space-x-6 mt-6">
                                    <li className="text-[18px] text-[#6f6f6f]"><div className="w-2.5 h-2.5 mr-2 invisible rounded-full bg-[#ce4327] inline-block"></div> Total Amount Payable</li>
                                    <li className="text-[18px] text-[#6f6f6f]">₹ 6,88,260</li>
                                </ul>
                            </div>
                        </div>

                        <div className={`mt-8 ${change ? "hidden" : null}`}>
                            <table className="w-full">
                                <thead>
                                    <tr className="text-center bg-[#f4f4f4]">
                                        <td className="border-[1px] border-[#C6C6C6]">Months</td>
                                        <td className="border-[1px] border-[#C6C6C6]">Price</td>
                                        <td className="border-[1px] border-[#C6C6C6]">Interest</td>
                                        <td className="border-[1px] border-[#C6C6C6]">Balanced</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-center">
                                        <td className="border-[1px] border-[#C6C6C6]">12</td>
                                        <td className="border-[1px] border-[#C6C6C6]">₹ 87,610</td>
                                        <td className="border-[1px] border-[#C6C6C6]">₹ 50,047</td>
                                        <td className="border-[1px] border-[#C6C6C6]">₹ 4,52,499</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="border-[1px] border-[#C6C6C6]">24</td>
                                        <td className="border-[1px] border-[#C6C6C6]">₹ 96,784</td>
                                        <td className="border-[1px] border-[#C6C6C6]">₹ 50,047</td>
                                        <td className="border-[1px] border-[#C6C6C6]">₹ 3,55,499</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="border-[1px] border-[#C6C6C6]">36</td>
                                        <td className="border-[1px] border-[#C6C6C6]">₹ 107,610</td>
                                        <td className="border-[1px] border-[#C6C6C6]">₹ 30,047</td>
                                        <td className="border-[1px] border-[#C6C6C6]">₹ 2,48,499</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="border-[1px] border-[#C6C6C6]">48</td>
                                        <td className="border-[1px] border-[#C6C6C6]">₹ 1,18,610</td>
                                        <td className="border-[1px] border-[#C6C6C6]">₹ 19,047</td>
                                        <td className="border-[1px] border-[#C6C6C6]">₹ 1,32,499</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="border-[1px] border-[#C6C6C6]">60</td>
                                        <td className="border-[1px] border-[#C6C6C6]">₹ 1,30,610</td>
                                        <td className="border-[1px] border-[#C6C6C6]">₹ 7,175</td>
                                        <td className="border-[1px] border-[#C6C6C6]">₹ 1,37,499</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default Emi_Modal;
