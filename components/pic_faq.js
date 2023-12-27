
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Price_Faq() {
    return (
        <div>
            <Accordion className='shadow-none '>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className="text-[14px] text-[#484848] font-semibold">MH-02 Andheri RTO Office</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='text-[#6F6F6F]'>
                        <p>RTO Code: MH-02</p>
                        <p>Office Address: MH-Regional Transport Office, D/111, Ambivali Village, Versova Road, Near Manish Nagar, Andheri (West)</p>
                        <p>Mumbai - 400053</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='shadow-none '>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className="text-[14px] text-[#484848] font-semibold">MH-03 Bandra RTO Office</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='text-[#6F6F6F]'>
                        <p>RTO Code: MH-02</p>
                        <p>Office Address: MH-Regional Transport Office, D/111, Ambivali Village, Versova Road, Near Manish Nagar, Andheri (West)</p>
                        <p>Mumbai - 400053</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='shadow-none '>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className="text-[14px] text-[#484848] font-semibold">MH-01 Fort RTO Office</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='text-[#6F6F6F]'>
                        <p>RTO Code: MH-02</p>
                        <p>Office Address: MH-Regional Transport Office, D/111, Ambivali Village, Versova Road, Near Manish Nagar, Andheri (West)</p>
                        <p>Mumbai - 400053</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='shadow-none '>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className="text-[14px] text-[#484848] font-semibold">MH-04 Borivali RTO Office</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='text-[#6F6F6F]'>
                        <p>RTO Code: MH-02</p>
                        <p>Office Address: MH-Regional Transport Office, D/111, Ambivali Village, Versova Road, Near Manish Nagar, Andheri (West)</p>
                        <p>Mumbai - 400053</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}


