import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useRouter } from 'next/router';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator(props) {

    // let c = "https://" + JSON.parse(sessionStorage.getItem("host")).host

    let c = "https://seahorse-app-vuq9s.ondigitalocean.app"

    

    const route = useRouter()



    return (
        <Stack spacing={2}>
            <Breadcrumbs itemType="http://schema.org/BreadcrumbList" data-skin="breadcrumb" itemScope="" separator="›" aria-label="breadcrumb">
                <Link itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem" underline="hover" key="1" color="inherit" href="/">
                    home
                </Link>
                {route.asPath.split("/").map((item, index) => {
                    c ? c.split("/").includes(item) ? null : c = c + "/" + item : null
                    return (index > 1 ? <Link itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem" underline="hover" key="1" color="inherit" href={`${c}`}>{item}</Link> : null)
                })}
            </Breadcrumbs>
        </Stack>
    );
}

