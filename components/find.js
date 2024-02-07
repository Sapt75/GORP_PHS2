import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import cross from "../public/images/cross.svg"
import Image from 'next/image';
import { useRouter } from "next/router";
import locationContext from '../context/LocationContext';

export default function TopDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const [data, setData] = React.useState([])

    const [city, setCity] = React.useState([])


    const url = "https://inquisitive-knickers-fish.cyclic.app"

    const context = React.useContext(locationContext)

    let { location, setLocation } = context

    const route = useRouter()

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    function handelSubmit(event) {
        event.preventDefault()
        toggleDrawer('right', false)
        setLocation(event.target.city.value)
        sessionStorage.setItem("city", event.target.city.value)
        route.push(`/new-car-dealers/${event.target.brand.value.toLowerCase()}-car-dealers-in-${event.target.city.value.toLowerCase()}`)
    }



    async function getBrands() {
        let data = await fetch(`${url}/all_brands`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        let bresponse = await data.json()
        setData(bresponse)
    }

    async function getCityData() {
        let data = await fetch(`${url}/city_names`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        let response = await data.json()
        setCity(response)
    }




    React.useEffect(() => {
        getBrands()
        getCityData()
    }, [])

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
            role="presentation"
        >
            <div>
                <div className='my-[1rem] mx-4 flex'>
                    <div onClick={() => {
                            toggleDrawer('right', false)
                        }}>
                        <Image className='cursor-pointer' width={20} height={20} src={cross} />
                    </div>
                </div>
                <div className='mx-4'>
                    <form onSubmit={handelSubmit}>
                    <p className='text-[15px] text-[#6F6F6F]'>Brand</p>
                        <select className='block w-full py-2 border-[1px] border-[#C6C6C6] rounded-md mt-3 px-4' name="brand">
                            {data ? data.map((item, index) => {
                                return (<option key={index} value={item.brand}>{item.brand}</option>)
                            }) : null}
                        </select>
                        <p className='text-[15px] text-[#6F6F6F] mt-4'>City</p>
                        <select className='block w-full py-2 border-[1px] border-[#C6C6C6] rounded-md mt-3 px-4' name="city">
                            {city ? city.map((item, index) => {
                                return (<option key={index} value={item['City Name']}>{item['City Name']}</option>)
                            }) : null}
                        </select>
                        <button className='w-full py-2 bg-[#09809A] text-center text-white font-semibold rounded-md my-4' type="submit">Submit</button>
                    </form>
                </div>
            </div>


            {/* <Divider /> */}

        </Box>
    );

    return (
        <div>
            <React.Fragment key={'right'}>
                <li onClick={toggleDrawer('right', true)} className='text-[#484848] cursor-pointer'>Find Car Dealers</li>
                <Drawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                >
                    {list('right')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
