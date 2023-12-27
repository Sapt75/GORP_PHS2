
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Faq() {
  return (
    <div>
      <Accordion className='shadow-none'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="text-[14px] p-0 m-0 text-[#484848] font-semibold">What is the fuel tank capacity?</Typography>
        </AccordionSummary>
        <AccordionDetails className='py-0 my-0'>
          <Typography className='text-[#6F6F6F]'>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly
            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
            ourselves and actualize our dreams.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='shadow-none '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="text-[14px] text-[#484848] font-semibold p-0">What is the maintenance cost of the Hyundai Aura?</Typography>
        </AccordionSummary>
        <AccordionDetails className='py-0 my-0'>
          <Typography className='text-[#6F6F6F]'>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly
            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
            ourselves and actualize our dreams.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='shadow-none '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="text-[14px] text-[#484848] font-semibold p-0">What are the specifications of the music system?</Typography>
        </AccordionSummary>
        <AccordionDetails className='py-0 my-0'>
          <Typography className='text-[#6F6F6F]'>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly
            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
            ourselves and actualize our dreams.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='shadow-none '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="text-[14px] text-[#484848] font-semibold p-0">How many colours are available in Hyundai Aura?</Typography>
        </AccordionSummary>
        <AccordionDetails className='py-0 my-0'>
          <Typography className='text-[#6F6F6F]'>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly
            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
            ourselves and actualize our dreams.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='shadow-none '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="text-[14px] text-[#484848] font-semibold p-0">What are the specifications of Hyundai Aura S CNG?</Typography>
        </AccordionSummary>
        <AccordionDetails className='py-0 my-0'>
          <Typography className='text-[#6F6F6F]'>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly
            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
            ourselves and actualize our dreams.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}


// return (
//   <>
//     <Accordion className="my-8" open={open === 1} icon={<Icon id={1} open={open} />}>
//       <AccordionHeader className="text-[16px] font-semibold p-0 text-black">What is the fuel tank capacity?</AccordionHeader>
//       <AccordionBody>
// We&apos;re not always in the position that we want to be at. We&apos;re constantly
// growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
// ourselves and actualize our dreams.
//       </AccordionBody>
//     </Accordion>
//     <Accordion className="my-8" open={open === 2} icon={<Icon id={2} open={open} />}>
//       <AccordionHeader className="text-[16px] font-semibold p-0 text-black">
//         What is the maintenance cost of the Hyundai Aura?
//       </AccordionHeader>
//       <AccordionBody>
// We&apos;re not always in the position that we want to be at. We&apos;re constantly
// growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
// ourselves and actualize our dreams.
//       </AccordionBody>
//     </Accordion>
//     <Accordion className="my-8" open={open === 3} icon={<Icon id={3} open={open} />}>
//       <AccordionHeader className="text-[16px] font-semibold p-0 text-black">
//         What are the specifications of the music system?
//       </AccordionHeader>
//       <AccordionBody>
//         We&apos;re not always in the position that we want to be at. We&apos;re constantly
//         growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
//         ourselves and actualize our dreams.
//       </AccordionBody>
//     </Accordion>
//     <Accordion className="my-8" open={open === 3} icon={<Icon id={3} open={open} />}>
//       <AccordionHeader className="text-[16px] font-semibold p-0 text-black">
//         How many colours are available in Hyundai Aura?
//       </AccordionHeader>
//       <AccordionBody>
//         We&apos;re not always in the position that we want to be at. We&apos;re constantly
//         growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
//         ourselves and actualize our dreams.
//       </AccordionBody>
//     </Accordion>
//     <Accordion className="my-8" open={open === 3} icon={<Icon id={3} open={open} />}>
//       <AccordionHeader className="text-[16px] font-semibold p-0 text-black">
//         What are the specifications of Hyundai Aura S CNG?
//       </AccordionHeader>
//       <AccordionBody>
//         We&apos;re not always in the position that we want to be at. We&apos;re constantly
//         growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
//         ourselves and actualize our dreams.
//       </AccordionBody>
//     </Accordion>
//   </>
// );
