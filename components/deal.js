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

export default function TemporaryDrawer({ brand, model, version, status }) {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    function handelSubmit() {
        toggleDrawer('right', false)
    }

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div>
                <div className='my-[1rem] mx-4 flex'>
                    <div>
                        <Image onClick={toggleDrawer('right', false)} className='cursor-pointer' width={30} src={cross} />
                    </div>
                    <div className='ml-6'>
                        <p className='text-[18px] font-semibold text-[#484848]'>{brand} {model ? model : null} {version ? version : null}</p>
                        <p className='text-[#6F6F6F] text-[14px] leading-[1.2]'>Please share your contact details to schedule a test drive, explore EMI options, avail yourself of exchange benefits, and discover exciting offers.</p>
                    </div>
                </div>
                <div className='mx-4'>
                    <form onSubmit={handelSubmit}>
                        <input className='block w-full py-2 border-[1px] border-[#C6C6C6] rounded-md mt-6 px-4' type="text" placeholder='Name' />
                        <p className='text-[11px] text-[#6F6F6F]'>Your details are safe with us and we only ask this once</p>
                        <input className='block w-full py-2 border-[1px] border-[#C6C6C6] rounded-md my-4 px-4' type="number" placeholder='Contact Number' />
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
                {status ? <button onClick={toggleDrawer('right', true)} className="text-[#CE4327] text-[16px] font-semibold ">Get Latest Offers</button> : <button onClick={toggleDrawer('right', true)} className='text-[14px] hidden md:block my-[1rem] py-[0.5rem] rounded-[2px] bg-[#09809A] font-medium tracking-[-0.28px] text-white w-full md:w-3/5'>Get The Best Deal</button>}
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
