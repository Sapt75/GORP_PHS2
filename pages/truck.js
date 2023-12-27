// import React, { useState } from 'react'
// import style from "../styles/varient.module.css"
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import Faq from '../components/faq';
// import TruckGallery from '../components/truck_gallery';

// const Truck = () => {

//     const [text, setText] = useState(false)





//     return (
//         <>
//             <div className='pt-[2rem] pb-[0.5rem] mb-[4rem]'>
//                 <div className='flex mx-[2rem]'>
//                     <a href="/">
//                         <div>
//                             <img width={345} height={60} src="./images/logo.png" alt="" />
//                         </div>
//                     </a>
//                 </div>
//                 <hr className='border-t-2 my-[0.8rem] border-gray-300' />
//             </div>
//             <div className='lg:mx-[5rem]'>
//                 <div>
//                     <img className='mx-auto' src="./images/advert.png" alt="" />
//                     <div className='mt-[2rem] mb-[1.5rem]'>
//                         <h1 className='text-[24px] font-semibold tracking-[-0.4px]'>Tata Yodha Pickup 3150/Crew Cabin 4x2 Latest Updates</h1>
//                         <div className='flex pt-1 justify-between'>
//                             <div className='flex space-x-[1rem] text-[14px] font-light'>
//                                 <div>
//                                     <span className='bg-[#09809A] px-[0.6rem] py-[4px] flex text-[12px] rounded-md text-white'>
//                                         4.5
//                                         <img className='pl-[4px]' src="./images/star.svg" alt="" />
//                                     </span>
//                                 </div>
//                                 <p className='text-[11px] md:inline hidden md:text-base'>17 Ratings & 25 Reviews</p>
//                                 <p className='md:inline hidden'>|</p>
//                                 <p className='text-[#CE4327] md:inline hidden md:text-[16px] text-[11px] font-semibold tracking-[-0.32px]'>Rate this car</p>
//                                 <div className='flex space-x-2 md:hidden'>
//                                     <p className='text-[11px] md:text-base'>17 Ratings & 25 Reviews</p>
//                                     <p>|</p>
//                                     <p className='text-[#CE4327] md:text-[16px] text-[11px] font-semibold tracking-[-0.32px]'>Rate this car</p>
//                                 </div>
//                             </div>

//                         </div>
//                         <hr className='border-t-1 border-gray-300' />
//                     </div>
//                     <ul className='whitespace-nowrap md:whitespace-normal md:overflow-x-auto md:mx-0 overflow-x-scroll mx-[1rem] my-[1rem] md:ml-[2rem] flex space-x-5 md:space-x-[5rem] text-[16px] font-light tracking-[-0.32px]'>
//                         <li className='font-semibold'>Yodha Pickup 3150/Crew Cabin 4x2 </li>
//                         <li className='hover:text-[#0B9DBC] hover:border-b-2 hover:border-black'>Overview</li>
//                         <li className='hover:text-[#0B9DBC] hover:border-b-2 hover:border-black'>Features & Specifications</li>
//                         <li className='hover:text-[#0B9DBC] hover:border-b-2 hover:border-black'>Versions</li>
//                         <li className='hover:text-[#0B9DBC] hover:border-b-2 hover:border-black'>Reviews</li>
//                     </ul>
//                     <hr className='border-t-1 border-gray-300' />
//                     <div className='md:flex md:justify-between my-[1rem] py-[1rem] md:border md:border-[#0B9DBC]'>
//                         <div className='md:w-[60%] text-center'>
//                             <TruckGallery />
//                             <span className='mx-[2rem] text-[14px] font-normal tracking-[-0.28px] text-[#0B9DBC]'><img className='inline' src="./images/color.svg" alt="" /> Colors</span>
//                             <span className='mx-[2rem] text-[14px] font-normal tracking-[-0.28px] text-[#0B9DBC]'><img className='inline' src="./images/image.png" alt="" /> Images</span>
//                         </div>
//                         <div className='relative'>
//                             <div className='mx-[5rem]'>
//                                 <div className='pt-[5rem]'>
//                                     <span className='text-[32px] font-semibold tracking-[-0.64px]'>₹ 8.54 - ₹ 10.71 Lakh*</span>
//                                     <p className='text-[16px] text-[#CE4327] font-semibold underline'>On-Road Price New Delhi</p>
//                                 </div>
//                             </div>
//                             <button className='text-[14px] absolute bottom-0 right-2 py-[1rem] rounded-[2px] bg-[#0B9DBC] font-medium tracking-[-0.28px] text-white w-full'>Download Brochures</button>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='md:hidden'>
//                     <div className='md:w-[74%]'>
//                         <div className='mb-[2rem] w-full'>
//                             <h2 className='md:text-[24px] text-[18px] font-semibold tracking-[-0.48px]'>Tata Yodha Pickup 3150/Crew Cabin 4x2 Latest Updates</h2>
//                             <div className='bg-[#f4f4f4] p-3'>
//                                 <p>Tata Yodha Pickup Diesel Price:-Tata Yodha Pickup 3150/Crew Cabin 4x2 price starts at Rs .
//                                     Tata Yodha Pickup Diesel Engine & Transmission:-Tata Yodha Pickup 3150/Crew  <span className={`${text ? "block" : "hidden"}`}>
//                                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ducimus in tenetur sapiente inventore distinctio expedita quod. Adipisci modi laboriosam, eligendi sunt, voluptas obcaecati, facilis voluptate quaerat repudiandae repellat corporis consequuntur numquam officia molestiae ipsa aut ipsam nihil totam laudantium?
//                                     </span></p>

//                                 <div onClick={() => {
//                                     console.log(text)
//                                     setText(true)
//                                 }} className='text-right cursor-pointer pt-[1rem]'>
//                                     <span className='mx-[1rem] text-[#0B9DBC] text-[16px] font-normal'>Read More <img className='inline' src="./images/down.svg" alt="" /></span>
//                                 </div>
//                             </div>
//                             <hr className='border-t-1 border-gray-300' />
//                             <div className='py-5'>
//                                 <div className='w-full bg-[#0B9DBC] rounded-[2px] flex justify-between text-white py-2 px-4'>
//                                     <p className='md:text-[16px] text-[12px] font-normal tracking-[-0.32px]'>Key Specs of Hyundai Aura E 1.2 Petrol</p>
//                                     <p className='md:text-[14px] text-[12px] font-semibold tracking-[-0.28px] mx-3 md:mx-[2rem] flex'>View All <span className='mx-2'>
//                                         +
//                                     </span></p>
//                                 </div>
//                                 <div className={`${style["spec-category"]} my-1`}>
//                                     <div className="border border-gray-300 md:col-span-3 rounded-sm">
//                                         <div className='flex space-x-3 justify-center'>

//                                             <div>
//                                                 <img className='mt-1' src="./images/arai.svg" alt="" />
//                                             </div>
//                                             <div>
//                                                 <p className='text-[#0B9DBC] text-[14px] font-normal tracking-[-0.28px]'>Number of Tyre</p>
//                                                 <p className='text-[14px] font-semibold tracking-[-0.28px]'>21-24 /kmph</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="border border-gray-300 md:col-span-2">
//                                         <div className='flex space-x-3 justify-center'>

//                                             <div>
//                                                 <img className='mt-1' src="./images/power.svg" alt="" />
//                                             </div>
//                                             <div>
//                                                 <p className='text-[#0B9DBC] text-[14px] font-normal tracking-[-0.28px]'>Power</p>
//                                                 <p className='text-[14px] font-semibold tracking-[-0.28px]'>98hp</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="border border-gray-300 md:col-span-2">
//                                         <div className='flex space-x-3 justify-center'>

//                                             <div>
//                                                 <img className='mt-1' src="./images/weight.svg" alt="" />
//                                             </div>
//                                             <div>
//                                                 <p className='text-[#0B9DBC] text-[14px] font-normal tracking-[-0.28px]'>GVW</p>
//                                                 <p className='text-[14px] font-semibold tracking-[-0.28px]'>2990 kg</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="border border-gray-300 md:col-span-3">
//                                         <div className='flex space-x-3 justify-center'>

//                                             <div>
//                                                 <img className='mt-1' src="./images/engine.svg" alt="" />
//                                             </div>
//                                             <div>
//                                                 <p className='text-[#0B9DBC] text-[14px] font-normal tracking-[-0.28px]'>Engine Capacity</p>
//                                                 <p className='text-[14px] font-semibold tracking-[-0.28px]'>2200 cc</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="border border-gray-300 md:col-span-3">
//                                         <div className='flex space-x-3 justify-center'>

//                                             <div>
//                                                 <img className='mt-1' src="./images/fuel_tank.svg" alt="" />
//                                             </div>
//                                             <div>
//                                                 <p className='text-[#0B9DBC] text-[14px] font-normal tracking-[-0.28px]'>Fuel Tank</p>
//                                                 <p className='text-[14px] font-semibold tracking-[-0.28px]'>45 Ltr</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="border border-gray-300 md:col-span-2 rounded-sm">
//                                         <div className='flex space-x-3 justify-center'>

//                                             <div>
//                                                 <img className='mt-1' src="./images/fire_truck.svg" alt="" />
//                                             </div>
//                                             <div>
//                                                 <p className='text-[#0B9DBC] text-[14px] font-normal tracking-[-0.28px]'>Payload</p>
//                                                 <p className='text-[14px] font-semibold tracking-[-0.28px]'>1140 kg</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='py-[3rem]'>
//                                     <img src="./images/advert2.png" alt="" />
//                                 </div>
//                             </div>
//                         </div>


//                         {/* Specifications, Features & Brochure */}
//                         <div>
//                             <p className='text-[24px] font-bold tracking-[0.48px] mb-6'>Key Specifications of Yodha Pickup 3150/Crew Cabin 4x2</p>
//                             <div className='md:w-full md:flex'>
//                                 <div className='flex md:w-1/2'>
//                                     <table class="table-auto w-full md:mr-[4rem]">
//                                         <tbody>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Number of Tyre</td>
//                                                 <td className='text-right'>4</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>GVW</td>
//                                                 <td className='text-right'>2990 kg</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Fuel Tank</td>
//                                                 <td className='text-right'>45 Ltr</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Chassis Type</td>
//                                                 <td className='text-right'>Chassis with Cabin</td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                 </div>
//                                 <div className='flex md:w-1/2'>
//                                     <table class="table-auto w-full md:mr-[4rem]">
//                                         <tbody>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Power</td>
//                                                 <td className='text-right'>98 hp</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Engine</td>
//                                                 <td className='text-right'>2200 cc</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Payload</td>
//                                                 <td className='text-right'>1140 kgs</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Body Option</td>
//                                                 <td className='text-right'>Deck Body</td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                         </div>


//                         {/* Car Versions Listing  */}

//                         <div className='lg:w-full'>
//                             <p className='lg:text-[24px] text-[16px] my-4 font-semibold tracking-[-0.48px]'>Tata Yodha Pickup</p>
//                             <div>
//                                 <div className='flex justify-between bg-[#dcdcdc] py-3 px-4'>
//                                     <p className='text-[16px] font-semibold tracking-[-0.32px]'>Varient</p>
//                                     <p className='text-[16px] font-semibold tracking-[-0.32px] mx-10'>GVW</p>
//                                 </div>

//                                 {/* Versions  */}
//                                 <div>
//                                     <div className='flex justify-between py-6 px-4 border border-[#C6C6C6]'>
//                                         <div>
//                                             <p className='text-[18px] font-semibold tracking-[-0.36px]'>Tata Yodha Pickup 3150/Crew Cabin 4x2 </p>
//                                         </div>
//                                         <div className='mx-8'>
//                                             <p className='text-[18px] font-semibold tracking-[-0.36px]'>2290 kg</p>
//                                         </div>
//                                     </div>
//                                     <div className='flex justify-between py-6 px-4 border border-[#C6C6C6]'>
//                                         <div>
//                                             <p className='text-[18px] font-semibold tracking-[-0.36px]'>Tata Yodha Pickup 2825/4x4(1200) </p>
//                                         </div>
//                                         <div className='mx-8'>
//                                             <p className='text-[18px] font-semibold tracking-[-0.36px]'>2290 kg</p>
//                                         </div>
//                                     </div>
//                                     <div className='flex justify-between py-6 px-4 border border-[#C6C6C6]'>
//                                         <div>
//                                             <p className='text-[18px] font-semibold tracking-[-0.36px]'>Tata Yodha Pickup 3150(1200) </p>
//                                         </div>
//                                         <div className='mx-8'>
//                                             <p className='text-[18px] font-semibold tracking-[-0.36px]'>2950 kg</p>
//                                         </div>
//                                     </div>
//                                     <div className='flex justify-between py-6 px-4 border border-[#C6C6C6]'>
//                                         <div>
//                                             <p className='text-[18px] font-semibold tracking-[-0.36px]'>Tata Yodha Pickup 3150(1500) </p>
//                                         </div>
//                                         <div className='mx-8'>
//                                             <p className='text-[18px] font-semibold tracking-[-0.36px]'>3260 kg</p>
//                                         </div>
//                                     </div>
//                                     <div className='flex justify-between py-6 px-4 border border-[#C6C6C6]'>
//                                         <div>
//                                             <p className='text-[18px] font-semibold tracking-[-0.36px]'>Tata Yodha Pickup 3150(1500) </p>
//                                         </div>
//                                         <div className='mx-8'>
//                                             <p className='text-[18px] font-semibold tracking-[-0.36px]'>3490 kg</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>


//                         {/* Specifications 2 */}
//                         <div className='my-10'>
//                             <p className='text-[24px] font-bold tracking-[0.48px] mb-6'>Specifications of Yodha Pickup 3150/Crew Cabin 4x2</p>
//                             <div className='md:w-full md:flex'>
//                                 <div className='flex md:w-1/2'>
//                                     <table class="table-auto w-full md:mr-[4rem]">
//                                         <tbody>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Chassis Type</td>
//                                                 <td className='text-right'>Chassis with Cabin</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>GVW</td>
//                                                 <td className='text-right'>2990 kg</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Number of Tyre</td>
//                                                 <td className='text-right'>4</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Body Option</td>
//                                                 <td className='text-right'>Deck Body</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Payload</td>
//                                                 <td className='text-right'>1140 kgs</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Fuel Tank</td>
//                                                 <td className='text-right'>45 Ltr</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>GVW</td>
//                                                 <td className='text-right'>2990 kg</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Number of Tyre</td>
//                                                 <td className='text-right'>4</td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                 </div>
//                                 <div className='flex md:w-1/2'>
//                                     <table class="table-auto w-full md:mr-[4rem]">
//                                         <tbody>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Fuel Tank</td>
//                                                 <td className='text-right'>45 Ltr</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Engine</td>
//                                                 <td className='text-right'>2200 cc</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Payload</td>
//                                                 <td className='text-right'>1140 kgs</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Body Option</td>
//                                                 <td className='text-right'>Deck Body</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Power</td>
//                                                 <td className='text-right'>98 hp</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Engine</td>
//                                                 <td className='text-right'>2200 cc</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td>Chassis Type</td>
//                                                 <td className='text-right'>Chassis with Cabin</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Power</td>
//                                                 <td className='text-right'>98 hp</td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                         </div>


//                         {/* Similar Cars  */}

//                         <div className='lg:flex'>
//                             <div className='lg:w-full mx-3 md:mx-0'>
//                                 <p className='text-[24px] font-semibold tracking-[-0.48px]'>Similar Pickup’s</p>
//                                 <div className='flex'>
//                                     <div style={{ whiteSpace: "nowrap", overflow: "scroll", display: "flow" }} className='space-x-3'>
//                                         <div className='w-[19rem] inline-block border border-[#C6C6C6] my-3'>
//                                             <div className='h-[7rem]'>
//                                                 <img className='mx-auto' src="./images/truck1.png" alt="" />
//                                             </div>
//                                             <div className='bg-[#f4f4f4] p-3'>
//                                                 <p className='text-[16px] font-normal leading-[24px] capitalize'>Mahindra Bolero Pickup 4x4</p>
//                                                 <span className='mr-3 text-[14px] font-semibold leading-[24px] capitalize'>From ₹ 8.80 Lakh</span>
//                                                 <p className='text-[12px] text-[#767676] mb-[4rem] font-normal leading-[17px] capitalize'>On-Road Price New Delhi</p>
//                                             </div>
//                                         </div>
//                                         <div className='w-[19rem] inline-block border border-[#C6C6C6] my-3'>
//                                             <div className='h-[7rem]'>
//                                                 <img className='mx-auto' src="./images/truck2.png" alt="" />
//                                             </div>
//                                             <div className='bg-[#f4f4f4] p-3'>
//                                                 <p className='text-[16px] font-normal leading-[24px] capitalize'>Ashok Leyland Dost+</p>
//                                                 <span className='mr-3 text-[14px] font-semibold leading-[24px] capitalize'>₹ 7.75 - ₹ 8.25 Lakh</span>
//                                                 <p className='text-[12px] text-[#767676] mb-[4rem] font-normal leading-[17px] capitalize'>On-Road Price New Delhi</p>
//                                             </div>
//                                         </div>
//                                         <div className='w-[19rem] inline-block border border-[#C6C6C6] my-3'>
//                                             <div className='h-[7rem]'>
//                                                 <img className='mx-auto' src="./images/truck3.png" alt="" />
//                                             </div>
//                                             <div className='bg-[#f4f4f4] p-3'>
//                                                 <p className='text-[16px] font-normal leading-[24px] capitalize'>Ashok Leyland Bada Dost</p>
//                                                 <span className='mr-3 text-[14px] font-semibold leading-[24px] capitalize'>₹ 8.15 - ₹ 9.47 Lakh</span>
//                                                 <p className='text-[12px] text-[#767676] mb-[4rem] font-normal leading-[17px] capitalize'>On-Road Price New Delhi</p>
//                                             </div>
//                                         </div>
//                                         <div className='w-[19rem] inline-block border border-[#C6C6C6] my-3'>
//                                             <div className='h-[7rem]'>
//                                                 <img className='mx-auto' src="./images/truck2.png" alt="" />
//                                             </div>
//                                             <div className='bg-[#f4f4f4] p-3'>
//                                                 <p className='text-[16px] font-normal leading-[24px] capitalize'>Isuzu D-Max</p>
//                                                 <span className='mr-3 text-[14px] font-semibold leading-[24px] capitalize'>₹ 8.32 - ₹ 8.36 Lakh</span>
//                                                 <p className='text-[12px] text-[#767676] mb-[4rem] font-normal leading-[17px] capitalize'>On-Road Price New Delhi</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>




//                         {/* Reviews Section  */}
//                         <div className='my-10'>
//                             <p className='text-[24px] font-semibold tracking-[-0.48px]'>Tata Yodha Pickup 3150/Crew Cabin 4x2 User Reviews</p>
//                             <div className='md:w-full border border-[#C6C6C6]'>
//                                 <p className='text-[16px] font-normal tracking-[-0.32px] m-3'>Tata Yodha Pickup 3150(1700)</p>
//                                 <div className='flex pt-1 justify-between mx-3'>
//                                     <div className='flex space-x-[1rem] text-[14px] font-light'>
//                                         <div>
//                                             <span className='bg-[#09809A] px-[0.6rem] py-[4px] flex text-[12px] rounded-md text-white'>
//                                                 4.5
//                                                 <img className='pl-[4px]' src="./images/star.svg" alt="" />
//                                             </span>
//                                         </div>
//                                         <p className='text-[11px] md:inline hidden md:text-base'>25 Reviews</p>
//                                         <p className='md:inline hidden'>|</p>
//                                         <p className='text-[#CE4327] md:inline hidden md:text-[16px] text-[11px] font-semibold tracking-[-0.32px]'>Rate this car</p>
//                                         <div className='flex space-x-2 md:hidden'>
//                                             <p className='text-[11px] md:text-base'>25 Reviews</p>
//                                             <p>|</p>
//                                             <p className='text-[#CE4327] md:text-[16px] text-[11px] font-semibold tracking-[-0.32px]'>Rate this car</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div style={{ display: "-webkit-box" }} className='overflow-x-scroll space-x-3 m-3'>
//                                     <div className='border border-[#C6C6C6] w-[20rem] px-4'>
//                                         <div className='mb-5 mt-4'>
//                                             <span className='bg-[#09809A] p-2 text-[12px] rounded-md text-white'>
//                                                 <img width={20} className='inline' src="./images/star.svg" alt="" />
//                                             </span>
//                                             <span className='text-[16px] font-semibold tracking-[-0.32px] mx-4'>4.5 Excellent Star</span>
//                                         </div>
//                                         <div>
//                                             <p className='text-[16px] font-light tracking-[-0.32px] text-justify'>It's a good car with a good design, and the mileage is also very good. I would like to buy it as i... <span className='text-[#CE4327] text-[14px]'>Read More</span>
//                                             </p>
//                                         </div>
//                                         <div className='mt-10 mb-2'>
//                                             <p className='text-[16px] font-semibold tracking-[-0.32px]'>By Salauddin</p>
//                                             <p className='text-[12px] font-normal tracking-[-0.24px]'>On: Jul 14, 2023 | 568 views</p>
//                                         </div>
//                                     </div>
//                                     <div className='border border-[#C6C6C6] w-[20rem] px-4'>
//                                         <div className='mb-5 mt-4'>
//                                             <span className='bg-[#09809A] p-2 text-[12px] rounded-md text-white'>
//                                                 <img width={20} className='inline' src="./images/star.svg" alt="" />
//                                             </span>
//                                             <span className='text-[16px] font-semibold tracking-[-0.32px] mx-4'>4.5 Excellent Star</span>
//                                         </div>
//                                         <div>
//                                             <p className='text-[16px] font-light tracking-[-0.32px] text-justify'>It's a good car with a good design, and the mileage is also very good. I would like to buy it as i... <span className='text-[#CE4327] text-[14px]'>Read More</span>
//                                             </p>
//                                         </div>
//                                         <div className='mt-10 mb-2'>
//                                             <p className='text-[16px] font-semibold tracking-[-0.32px]'>By Salauddin</p>
//                                             <p className='text-[12px] font-normal tracking-[-0.24px]'>On: Jul 14, 2023 | 568 views</p>
//                                         </div>
//                                     </div>
//                                     <div className='border border-[#C6C6C6] w-[20rem] px-4'>
//                                         <div className='mb-5 mt-4'>
//                                             <span className='bg-[#09809A] p-2 text-[12px] rounded-md text-white'>
//                                                 <img width={20} className='inline' src="./images/star.svg" alt="" />
//                                             </span>
//                                             <span className='text-[16px] font-semibold tracking-[-0.32px] mx-4'>4.5 Excellent Star</span>
//                                         </div>
//                                         <div>
//                                             <p className='text-[16px] font-light tracking-[-0.32px] text-justify'>It's a good car with a good design, and the mileage is also very good. I would like to buy it as i... <span className='text-[#CE4327] text-[14px]'>Read More</span>
//                                             </p>
//                                         </div>
//                                         <div className='mt-10 mb-2'>
//                                             <p className='text-[16px] font-semibold tracking-[-0.32px]'>By Salauddin</p>
//                                             <p className='text-[12px] font-normal tracking-[-0.24px]'>On: Jul 14, 2023 | 568 views</p>
//                                         </div>
//                                     </div>
//                                     <div className='border border-[#C6C6C6] w-[20rem] px-4'>
//                                         <div className='mb-5 mt-4'>
//                                             <span className='bg-[#09809A] p-2 text-[12px] rounded-md text-white'>
//                                                 <img width={20} className='inline' src="./images/star.svg" alt="" />
//                                             </span>
//                                             <span className='text-[16px] font-semibold tracking-[-0.32px] mx-4'>4.5 Excellent Star</span>
//                                         </div>
//                                         <div>
//                                             <p className='text-[16px] font-light tracking-[-0.32px] text-justify'>It's a good car with a good design, and the mileage is also very good. I would like to buy it as i... <span className='text-[#CE4327] text-[14px]'>Read More</span>
//                                             </p>
//                                         </div>
//                                         <div className='mt-10 mb-2'>
//                                             <p className='text-[16px] font-semibold tracking-[-0.32px]'>By Salauddin</p>
//                                             <p className='text-[12px] font-normal tracking-[-0.24px]'>On: Jul 14, 2023 | 568 views</p>
//                                         </div>
//                                     </div>
//                                     <div className='border border-[#C6C6C6] w-[20rem] px-4'>
//                                         <div className='mb-5 mt-4'>
//                                             <span className='bg-[#09809A] p-2 text-[12px] rounded-md text-white'>
//                                                 <img width={20} className='inline' src="./images/star.svg" alt="" />
//                                             </span>
//                                             <span className='text-[16px] font-semibold tracking-[-0.32px] mx-4'>4.5 Excellent Star</span>
//                                         </div>
//                                         <div>
//                                             <p className='text-[16px] font-light tracking-[-0.32px] text-justify'>It's a good car with a good design, and the mileage is also very good. I would like to buy it as i... <span className='text-[#CE4327] text-[14px]'>Read More</span>
//                                             </p>
//                                         </div>
//                                         <div className='mt-10 mb-2'>
//                                             <p className='text-[16px] font-semibold tracking-[-0.32px]'>By Salauddin</p>
//                                             <p className='text-[12px] font-normal tracking-[-0.24px]'>On: Jul 14, 2023 | 568 views</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* FAQ Section  */}
//                         <div className='my-10'>
//                             <p className='text-[24px] font-semibold tracking-[-0.48px]'>FAQ&apos;s</p>
//                             <div className='my-3 md:w-[65rem]'>
//                                 <Faq />
//                             </div>
//                         </div>


//                     </div>
//                 </div>


//                 <div className='md:flex hidden'>
//                     <div className='md:w-[74%]'>
//                         <div className='mb-[2rem] w-full'>
//                             <h2 className='md:text-[24px] text-[18px] font-semibold tracking-[-0.48px]'>Tata Yodha Pickup 3150/Crew Cabin 4x2 Latest Updates</h2>
//                             <div className='bg-[#f4f4f4] p-3'>
//                                 <p>Tata Yodha Pickup Diesel Price:-Tata Yodha Pickup 3150/Crew Cabin 4x2 price starts at Rs .
//                                     Tata Yodha Pickup Diesel Engine & Transmission:-Tata Yodha Pickup 3150/Crew <span className={`${text ? null : "hidden"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ducimus in tenetur sapiente inventore distinctio expedita quod. Adipisci modi laboriosam, eligendi sunt, voluptas obcaecati, facilis voluptate quaerat repudiandae repellat corporis consequuntur numquam officia molestiae ipsa aut ipsam nihil totam laudantium?
//                                     </span></p>

//                                 <div onClick={() => text ? setText(false) : setText(true)} className='text-right cursor-pointer pt-[1rem]'>
//                                     <span className='mx-[1rem] text-[#0B9DBC] text-[16px] font-normal'>Read More <img className='inline' src="./images/down.svg" alt="" /></span>
//                                 </div>
//                             </div>
//                             <hr className='border-t-1 border-gray-300' />
//                             <div className='py-5'>
//                                 <div className='w-full bg-[#0B9DBC] rounded-[2px] flex justify-between text-white py-2 px-4'>
//                                     <p className='md:text-[16px] text-[12px] font-normal tracking-[-0.32px]'>Key Specs of Hyundai Aura E 1.2 Petrol</p>
//                                     <p className='md:text-[14px] text-[12px] font-semibold tracking-[-0.28px] mx-3 md:mx-[2rem] flex'>View All <span className='mx-2'>
//                                         +
//                                     </span></p>
//                                 </div>
//                                 <div className={`${style["spec-category"]} my-1`}>
//                                     <div className="border border-gray-300 md:col-span-3 rounded-sm">
//                                         <div className='flex space-x-3 justify-center'>

//                                             <div>
//                                                 <img className='mt-1' src="./images/arai.svg" alt="" />
//                                             </div>
//                                             <div>
//                                                 <p className='text-[#0B9DBC] text-[14px] font-normal tracking-[-0.28px]'>Number of Tyre</p>
//                                                 <p className='text-[14px] font-semibold tracking-[-0.28px]'>21-24 /kmph</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="border border-gray-300 md:col-span-2">
//                                         <div className='flex space-x-3 justify-center'>

//                                             <div>
//                                                 <img className='mt-1' src="./images/power.svg" alt="" />
//                                             </div>
//                                             <div>
//                                                 <p className='text-[#0B9DBC] text-[14px] font-normal tracking-[-0.28px]'>Power</p>
//                                                 <p className='text-[14px] font-semibold tracking-[-0.28px]'>98hp</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="border border-gray-300 md:col-span-2">
//                                         <div className='flex space-x-3 justify-center'>

//                                             <div>
//                                                 <img className='mt-1' src="./images/weight.svg" alt="" />
//                                             </div>
//                                             <div>
//                                                 <p className='text-[#0B9DBC] text-[14px] font-normal tracking-[-0.28px]'>GVW</p>
//                                                 <p className='text-[14px] font-semibold tracking-[-0.28px]'>2990 kg</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="border border-gray-300 md:col-span-3">
//                                         <div className='flex space-x-3 justify-center'>

//                                             <div>
//                                                 <img className='mt-1' src="./images/engine.svg" alt="" />
//                                             </div>
//                                             <div>
//                                                 <p className='text-[#0B9DBC] text-[14px] font-normal tracking-[-0.28px]'>Engine Capacity</p>
//                                                 <p className='text-[14px] font-semibold tracking-[-0.28px]'>2200 cc</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="border border-gray-300 md:col-span-3">
//                                         <div className='flex space-x-3 justify-center'>

//                                             <div>
//                                                 <img className='mt-1' src="./images/fuel_tank.svg" alt="" />
//                                             </div>
//                                             <div>
//                                                 <p className='text-[#0B9DBC] text-[14px] font-normal tracking-[-0.28px]'>Fuel Tank</p>
//                                                 <p className='text-[14px] font-semibold tracking-[-0.28px]'>45 Ltr</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="border border-gray-300 md:col-span-2 rounded-sm">
//                                         <div className='flex space-x-3 justify-center'>

//                                             <div>
//                                                 <img className='mt-1' src="./images/fire_truck.svg" alt="" />
//                                             </div>
//                                             <div>
//                                                 <p className='text-[#0B9DBC] text-[14px] font-normal tracking-[-0.28px]'>Payload</p>
//                                                 <p className='text-[14px] font-semibold tracking-[-0.28px]'>1140 kg</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='py-[3rem]'>
//                                     <img src="./images/advert2.png" alt="" />
//                                 </div>
//                             </div>
//                         </div>


//                         {/* Specifications, Features & Brochure */}
//                         <div>
//                             <p className='text-[24px] font-bold tracking-[0.48px] mb-6'>Key Specifications of Yodha Pickup 3150/Crew Cabin 4x2</p>
//                             <div className='md:w-full md:flex'>
//                                 <div className='flex md:w-1/2'>
//                                     <table class="table-auto w-full md:mr-[4rem]">
//                                         <tbody>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Number of Tyre</td>
//                                                 <td className='text-right'>4</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>GVW</td>
//                                                 <td className='text-right'>2990 kg</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Fuel Tank</td>
//                                                 <td className='text-right'>45 Ltr</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Chassis Type</td>
//                                                 <td className='text-right'>Chassis with Cabin</td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                 </div>
//                                 <div className='flex md:w-1/2'>
//                                     <table class="table-auto w-full md:mr-[4rem]">
//                                         <tbody>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Power</td>
//                                                 <td className='text-right'>98 hp</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Engine</td>
//                                                 <td className='text-right'>2200 cc</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Payload</td>
//                                                 <td className='text-right'>1140 kgs</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Body Option</td>
//                                                 <td className='text-right'>Deck Body</td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                         </div>


//                         {/* Car Versions Listing  */}

//                         <div className='lg:w-full'>
//                             <p className='lg:text-[24px] text-[16px] my-4 font-semibold tracking-[-0.48px]'>Tata Yodha Pickup</p>
//                             <div>
//                                 <div className='flex justify-between bg-[#dcdcdc] py-3 px-4'>
//                                     <p className='text-[16px] font-semibold tracking-[-0.32px]'>Varient</p>
//                                     <p className='text-[16px] font-semibold tracking-[-0.32px] mx-10'>GVW</p>
//                                 </div>

//                                 {/* Versions  */}
//                                 <div>
//                                     <div className='flex justify-between py-6 px-4 border border-[#C6C6C6]'>
//                                         <div>
//                                             <p className='text-[18px] font-semibold tracking-[-0.36px]'>Tata Yodha Pickup 3150/Crew Cabin 4x2 </p>
//                                         </div>
//                                         <div className='mx-8'>
//                                             <p className='text-[18px] font-semibold tracking-[-0.36px]'>2290 kg</p>
//                                         </div>
//                                     </div>
//                                     <div className='flex justify-between py-6 px-4 border border-[#C6C6C6]'>
//                                         <div>
//                                             <p className='text-[18px] font-semibold tracking-[-0.36px]'>Tata Yodha Pickup 2825/4x4(1200) </p>
//                                         </div>
//                                         <div className='mx-8'>
//                                             <p className='text-[18px] font-semibold tracking-[-0.36px]'>2290 kg</p>
//                                         </div>
//                                     </div>
//                                     <div className='flex justify-between py-6 px-4 border border-[#C6C6C6]'>
//                                         <div>
//                                             <p className='text-[18px] font-semibold tracking-[-0.36px]'>Tata Yodha Pickup 3150(1200) </p>
//                                         </div>
//                                         <div className='mx-8'>
//                                             <p className='text-[18px] font-semibold tracking-[-0.36px]'>2950 kg</p>
//                                         </div>
//                                     </div>
//                                     <div className='flex justify-between py-6 px-4 border border-[#C6C6C6]'>
//                                         <div>
//                                             <p className='text-[18px] font-semibold tracking-[-0.36px]'>Tata Yodha Pickup 3150(1500) </p>
//                                         </div>
//                                         <div className='mx-8'>
//                                             <p className='text-[18px] font-semibold tracking-[-0.36px]'>3260 kg</p>
//                                         </div>
//                                     </div>
//                                     <div className='flex justify-between py-6 px-4 border border-[#C6C6C6]'>
//                                         <div>
//                                             <p className='text-[18px] font-semibold tracking-[-0.36px]'>Tata Yodha Pickup 3150(1500) </p>
//                                         </div>
//                                         <div className='mx-8'>
//                                             <p className='text-[18px] font-semibold tracking-[-0.36px]'>3490 kg</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>


//                         {/* Specifications 2 */}
//                         <div className='my-10'>
//                             <p className='text-[24px] font-bold tracking-[0.48px] mb-6'>Specifications of Yodha Pickup 3150/Crew Cabin 4x2</p>
//                             <div className='md:w-full md:flex'>
//                                 <div className='flex md:w-1/2'>
//                                     <table class="table-auto w-full md:mr-[4rem]">
//                                         <tbody>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Chassis Type</td>
//                                                 <td className='text-right'>Chassis with Cabin</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>GVW</td>
//                                                 <td className='text-right'>2990 kg</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Number of Tyre</td>
//                                                 <td className='text-right'>4</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Body Option</td>
//                                                 <td className='text-right'>Deck Body</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Payload</td>
//                                                 <td className='text-right'>1140 kgs</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Fuel Tank</td>
//                                                 <td className='text-right'>45 Ltr</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>GVW</td>
//                                                 <td className='text-right'>2990 kg</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Number of Tyre</td>
//                                                 <td className='text-right'>4</td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                 </div>
//                                 <div className='flex md:w-1/2'>
//                                     <table class="table-auto w-full md:mr-[4rem]">
//                                         <tbody>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Fuel Tank</td>
//                                                 <td className='text-right'>45 Ltr</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Engine</td>
//                                                 <td className='text-right'>2200 cc</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Payload</td>
//                                                 <td className='text-right'>1140 kgs</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Body Option</td>
//                                                 <td className='text-right'>Deck Body</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Power</td>
//                                                 <td className='text-right'>98 hp</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Engine</td>
//                                                 <td className='text-right'>2200 cc</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td>Chassis Type</td>
//                                                 <td className='text-right'>Chassis with Cabin</td>
//                                             </tr>
//                                             <tr className='border-b-[1px] border-b-[#C6C6C6]'>
//                                                 <td className='py-2'>Power</td>
//                                                 <td className='text-right'>98 hp</td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                         </div>


//                         {/* Similar Cars  */}

//                         <div className='lg:flex'>
//                             <div className='lg:w-full mx-3 md:mx-0'>
//                                 <p className='text-[24px] font-semibold tracking-[-0.48px]'>Similar Pickup’s</p>
//                                 <div className='flex'>
//                                     <div style={{ whiteSpace: "nowrap", overflow: "scroll", display: "flow" }} className='space-x-3'>
//                                         <div className='w-[19rem] inline-block border border-[#C6C6C6] my-3'>
//                                             <div className='h-[7rem]'>
//                                                 <img className='mx-auto' src="./images/truck1.png" alt="" />
//                                             </div>
//                                             <div className='bg-[#f4f4f4] p-3'>
//                                                 <p className='text-[16px] font-normal leading-[24px] capitalize'>Mahindra Bolero Pickup 4x4</p>
//                                                 <span className='mr-3 text-[14px] font-semibold leading-[24px] capitalize'>From ₹ 8.80 Lakh</span>
//                                                 <p className='text-[12px] text-[#767676] mb-[4rem] font-normal leading-[17px] capitalize'>On-Road Price New Delhi</p>
//                                             </div>
//                                         </div>
//                                         <div className='w-[19rem] inline-block border border-[#C6C6C6] my-3'>
//                                             <div className='h-[7rem]'>
//                                                 <img className='mx-auto' src="./images/truck2.png" alt="" />
//                                             </div>
//                                             <div className='bg-[#f4f4f4] p-3'>
//                                                 <p className='text-[16px] font-normal leading-[24px] capitalize'>Ashok Leyland Dost+</p>
//                                                 <span className='mr-3 text-[14px] font-semibold leading-[24px] capitalize'>₹ 7.75 - ₹ 8.25 Lakh</span>
//                                                 <p className='text-[12px] text-[#767676] mb-[4rem] font-normal leading-[17px] capitalize'>On-Road Price New Delhi</p>
//                                             </div>
//                                         </div>
//                                         <div className='w-[19rem] inline-block border border-[#C6C6C6] my-3'>
//                                             <div className='h-[7rem]'>
//                                                 <img className='mx-auto' src="./images/truck3.png" alt="" />
//                                             </div>
//                                             <div className='bg-[#f4f4f4] p-3'>
//                                                 <p className='text-[16px] font-normal leading-[24px] capitalize'>Ashok Leyland Bada Dost</p>
//                                                 <span className='mr-3 text-[14px] font-semibold leading-[24px] capitalize'>₹ 8.15 - ₹ 9.47 Lakh</span>
//                                                 <p className='text-[12px] text-[#767676] mb-[4rem] font-normal leading-[17px] capitalize'>On-Road Price New Delhi</p>
//                                             </div>
//                                         </div>
//                                         <div className='w-[19rem] inline-block border border-[#C6C6C6] my-3'>
//                                             <div className='h-[7rem]'>
//                                                 <img className='mx-auto' src="./images/truck2.png" alt="" />
//                                             </div>
//                                             <div className='bg-[#f4f4f4] p-3'>
//                                                 <p className='text-[16px] font-normal leading-[24px] capitalize'>Isuzu D-Max</p>
//                                                 <span className='mr-3 text-[14px] font-semibold leading-[24px] capitalize'>₹ 8.32 - ₹ 8.36 Lakh</span>
//                                                 <p className='text-[12px] text-[#767676] mb-[4rem] font-normal leading-[17px] capitalize'>On-Road Price New Delhi</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>




//                         {/* Reviews Section  */}
//                         <div className='my-10'>
//                             <p className='text-[24px] font-semibold tracking-[-0.48px]'>Tata Yodha Pickup 3150/Crew Cabin 4x2 User Reviews</p>
//                             <div className='md:w-full border border-[#C6C6C6]'>
//                                 <p className='text-[16px] font-normal tracking-[-0.32px] m-3'>Tata Yodha Pickup 3150(1700)</p>
//                                 <div className='flex pt-1 justify-between mx-3'>
//                                     <div className='flex space-x-[1rem] text-[14px] font-light'>
//                                         <div>
//                                             <span className='bg-[#09809A] px-[0.6rem] py-[4px] flex text-[12px] rounded-md text-white'>
//                                                 4.5
//                                                 <img className='pl-[4px]' src="./images/star.svg" alt="" />
//                                             </span>
//                                         </div>
//                                         <p className='text-[11px] md:inline hidden md:text-base'>25 Reviews</p>
//                                         <p className='md:inline hidden'>|</p>
//                                         <p className='text-[#CE4327] md:inline hidden md:text-[16px] text-[11px] font-semibold tracking-[-0.32px]'>Rate this car</p>
//                                         <div className='flex space-x-2 md:hidden'>
//                                             <p className='text-[11px] md:text-base'>25 Reviews</p>
//                                             <p>|</p>
//                                             <p className='text-[#CE4327] md:text-[16px] text-[11px] font-semibold tracking-[-0.32px]'>Rate this car</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div style={{ display: "-webkit-box" }} className='overflow-x-scroll space-x-3 m-3'>
//                                     <div className='border border-[#C6C6C6] w-[20rem] px-4'>
//                                         <div className='mb-5 mt-4'>
//                                             <span className='bg-[#09809A] p-2 text-[12px] rounded-md text-white'>
//                                                 <img width={20} className='inline' src="./images/star.svg" alt="" />
//                                             </span>
//                                             <span className='text-[16px] font-semibold tracking-[-0.32px] mx-4'>4.5 Excellent Star</span>
//                                         </div>
//                                         <div>
//                                             <p className='text-[16px] font-light tracking-[-0.32px] text-justify'>It's a good car with a good design, and the mileage is also very good. I would like to buy it as i... <span className='text-[#CE4327] text-[14px]'>Read More</span>
//                                             </p>
//                                         </div>
//                                         <div className='mt-10 mb-2'>
//                                             <p className='text-[16px] font-semibold tracking-[-0.32px]'>By Salauddin</p>
//                                             <p className='text-[12px] font-normal tracking-[-0.24px]'>On: Jul 14, 2023 | 568 views</p>
//                                         </div>
//                                     </div>
//                                     <div className='border border-[#C6C6C6] w-[20rem] px-4'>
//                                         <div className='mb-5 mt-4'>
//                                             <span className='bg-[#09809A] p-2 text-[12px] rounded-md text-white'>
//                                                 <img width={20} className='inline' src="./images/star.svg" alt="" />
//                                             </span>
//                                             <span className='text-[16px] font-semibold tracking-[-0.32px] mx-4'>4.5 Excellent Star</span>
//                                         </div>
//                                         <div>
//                                             <p className='text-[16px] font-light tracking-[-0.32px] text-justify'>It's a good car with a good design, and the mileage is also very good. I would like to buy it as i... <span className='text-[#CE4327] text-[14px]'>Read More</span>
//                                             </p>
//                                         </div>
//                                         <div className='mt-10 mb-2'>
//                                             <p className='text-[16px] font-semibold tracking-[-0.32px]'>By Salauddin</p>
//                                             <p className='text-[12px] font-normal tracking-[-0.24px]'>On: Jul 14, 2023 | 568 views</p>
//                                         </div>
//                                     </div>
//                                     <div className='border border-[#C6C6C6] w-[20rem] px-4'>
//                                         <div className='mb-5 mt-4'>
//                                             <span className='bg-[#09809A] p-2 text-[12px] rounded-md text-white'>
//                                                 <img width={20} className='inline' src="./images/star.svg" alt="" />
//                                             </span>
//                                             <span className='text-[16px] font-semibold tracking-[-0.32px] mx-4'>4.5 Excellent Star</span>
//                                         </div>
//                                         <div>
//                                             <p className='text-[16px] font-light tracking-[-0.32px] text-justify'>It's a good car with a good design, and the mileage is also very good. I would like to buy it as i... <span className='text-[#CE4327] text-[14px]'>Read More</span>
//                                             </p>
//                                         </div>
//                                         <div className='mt-10 mb-2'>
//                                             <p className='text-[16px] font-semibold tracking-[-0.32px]'>By Salauddin</p>
//                                             <p className='text-[12px] font-normal tracking-[-0.24px]'>On: Jul 14, 2023 | 568 views</p>
//                                         </div>
//                                     </div>
//                                     <div className='border border-[#C6C6C6] w-[20rem] px-4'>
//                                         <div className='mb-5 mt-4'>
//                                             <span className='bg-[#09809A] p-2 text-[12px] rounded-md text-white'>
//                                                 <img width={20} className='inline' src="./images/star.svg" alt="" />
//                                             </span>
//                                             <span className='text-[16px] font-semibold tracking-[-0.32px] mx-4'>4.5 Excellent Star</span>
//                                         </div>
//                                         <div>
//                                             <p className='text-[16px] font-light tracking-[-0.32px] text-justify'>It's a good car with a good design, and the mileage is also very good. I would like to buy it as i... <span className='text-[#CE4327] text-[14px]'>Read More</span>
//                                             </p>
//                                         </div>
//                                         <div className='mt-10 mb-2'>
//                                             <p className='text-[16px] font-semibold tracking-[-0.32px]'>By Salauddin</p>
//                                             <p className='text-[12px] font-normal tracking-[-0.24px]'>On: Jul 14, 2023 | 568 views</p>
//                                         </div>
//                                     </div>
//                                     <div className='border border-[#C6C6C6] w-[20rem] px-4'>
//                                         <div className='mb-5 mt-4'>
//                                             <span className='bg-[#09809A] p-2 text-[12px] rounded-md text-white'>
//                                                 <img width={20} className='inline' src="./images/star.svg" alt="" />
//                                             </span>
//                                             <span className='text-[16px] font-semibold tracking-[-0.32px] mx-4'>4.5 Excellent Star</span>
//                                         </div>
//                                         <div>
//                                             <p className='text-[16px] font-light tracking-[-0.32px] text-justify'>It's a good car with a good design, and the mileage is also very good. I would like to buy it as i... <span className='text-[#CE4327] text-[14px]'>Read More</span>
//                                             </p>
//                                         </div>
//                                         <div className='mt-10 mb-2'>
//                                             <p className='text-[16px] font-semibold tracking-[-0.32px]'>By Salauddin</p>
//                                             <p className='text-[12px] font-normal tracking-[-0.24px]'>On: Jul 14, 2023 | 568 views</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* FAQ Section  */}
//                         <div className='my-10'>
//                             <p className='text-[24px] font-semibold tracking-[-0.48px]'>FAQ&apos;s</p>
//                             <div className='my-3 md:w-[65rem]'>
//                                 <Faq />
//                             </div>
//                         </div>


//                     </div>


//                     <div className='md:w-[26%]'>
//                         <div className='h-[15.5rem] mt-[2rem] mx-[1rem] md:w-[80%] bg-[#dcdcdc]'>

//                         </div>

//                         {/* City Prices  */}
//                         {/* <div className='w-full ml-[2.5rem] hidden md:inline'>
//                             <div className='my-[2rem]'>
//                                 <h2 className='text-[20px] font-semibold tracking-[-0.4px]'>Aura E 1.2 Petrol Price in cities
//                                     near New Delhi</h2>
//                                 <div className='mt-[1rem]'>
//                                     <div>
//                                         <table className='w-full my-2 md:my-5'>
//                                             <tr className='bg-[#0B9DBC]'>
//                                                 <th className='text-left p-2 text-white text-[16px] font-normal tracking-[-0.32px]'>City</th>
//                                                 <th className='text-center py-2 text-white text-[16px] font-normal tracking-[-0.32px]'>On Road Price</th>
//                                             </tr>
//                                             <tr className='border border-[#C6C6C6]'>
//                                                 <td className='text-[16px] text-[#0B9DBC] font-normal p-2'>Noida</td>
//                                                 <td className='text-center p-2'>
//                                                     <p className='text-[16px] leading-[5px] pt-2 font-semibold tracking-[-0.32px]'>₹ 6.09 Lakh</p>
//                                                     <span className='text-[10px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</span>
//                                                 </td>
//                                             </tr>
//                                             <tr className='border border-[#C6C6C6]'>
//                                                 <td className='text-[16px] text-[#0B9DBC] font-normal p-2'>Gaziabad</td>
//                                                 <td className='text-center p-2'>
//                                                     <p className='text-[16px] leading-[5px] pt-2 font-semibold tracking-[-0.32px]'>₹ 6.09 Lakh</p>
//                                                     <span className='text-[10px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</span>
//                                                 </td>
//                                             </tr>
//                                             <tr className='border border-[#C6C6C6]'>
//                                                 <td className='text-[16px] text-[#0B9DBC] font-normal p-2'>Gurugram</td>
//                                                 <td className='text-center p-2'>
//                                                     <p className='text-[16px] leading-[5px] pt-2 font-semibold tracking-[-0.32px]'>₹ 6.09 Lakh</p>
//                                                     <span className='text-[10px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</span>
//                                                 </td>
//                                             </tr>
//                                             <tr className='border border-[#C6C6C6]'>
//                                                 <td className='text-[16px] text-[#0B9DBC] font-normal p-2'>Haridwar</td>
//                                                 <td className='text-center p-2'>
//                                                     <p className='text-[16px] leading-[5px] pt-2 font-semibold tracking-[-0.32px]'>₹ 6.09 Lakh</p>
//                                                     <span className='text-[10px] text-[#CE4327] font-semibold tracking-[-0.2px]'>View Price Breakup</span>
//                                                 </td>
//                                             </tr>
//                                         </table>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div> */}


//                         {/* Brocher */}
//                         <div className='relative mt-[5rem]'>
//                             <div className='md:w-full p-3 md:p-0 bg-[#BA1223] md:absolute md:top-1/3 rounded-sm'>
//                                 <p className='md:text-[28px] text-[18px] mx-4 text-white font-semibold tracking-[-0.56px] md:py-2'> Tata Yodha</p>
//                                 <img className='md:mx-auto w-[90%] inline md:block' src="./images/brocher.jpg" alt="" />
//                                 <div className='text-center'>
//                                     <img className='mx-2 md:py-4 inline w-4 md:w-6' src="./images/brochure.svg" alt="" />
//                                     <span className='md:text-[22px] text-[14px] inline mr-2 text-white font-medium tracking-[-0.44px]'>Download Brochure</span>
//                                     <img className='mx-2 md:py-4 inline w-4 md:w-6' src="./images/download.svg" alt="" />
//                                 </div>
//                             </div>
//                         </div>


//                         {/* Sponsored ADV  */}
//                         <div className='mt-[20rem]'>
//                             <div className='md:mt-[3rem] mt-[1rem] mx-5'>
//                                 <div style={{ verticalAlign: "middle", display: "table-cell" }} className='md:w-[20rem] w-[24rem] rounded-sm h-[15rem] bg-[#BA1223]  text-center'>
//                                     <p className='text-[24px] font-semibold tracking-[-0.48px] text-white'>Sponsor ADv</p>
//                                 </div>
//                             </div>
//                         </div>


//                         {/* Connect Section  */}

//                         <div className='bg-[#c2e6ee] mx-4 mt-10'>
//                             <div className='text-center pt-6'>
//                                 <img className='mx-auto' src="./images/connect.svg" alt="" />
//                                 <p className='text-[24px] font-semibold tracking-[-0.48px]'>Connect</p>
//                                 <p className='text-[20px] font-semibold tracking-[-0.4px] my-2'>Hyundai Authorized</p>
//                                 <p className='text-[20px] font-semibold tracking-[-0.4px] my-2'>Dealers in your city</p>
//                                 <div className='text-center my-4 pb-4'>
//                                     <button className='bg-[#09809a] w-[90%] py-2 rounded-md'><span className='text-[20px] font-medium tracking-[-0.24px] text-white'>
//                                         Locate Dealer
//                                     </span></button>
//                                 </div>
//                             </div>
//                         </div>


//                         {/* Car Loan  */}
//                         <div className='bg-[#dcdcdc] mx-4 p-4'>
//                             <p className='text-[#f80a1a] text-[32px] font-semibold leading-[1]'>Car Loan</p>
//                             <p className='text-[#1db876] text-[30px] font-semibold leading-[1]'>Lowest EMI</p>
//                             <img src="./images/promo.png" alt="" />
//                             <div className='text-center py-3'>
//                                 <button className='bg-[#ff3209] text-white text-[18px] font-medium px-4 rounded-md'>GET THE BEST OFFERS</button>
//                             </div>
//                         </div>


//                         {/* LAst Adv  */}
//                         <div className='m-4'>
//                             <img src="./images/last_adv.png" alt="" />
//                         </div>

//                     </div>
//                 </div>


//             </div>
//         </>
//     )
// }

// export default Truck


import React from 'react'

const truck = () => {
  return (
    <div>truck</div>
  )
}

export default truck