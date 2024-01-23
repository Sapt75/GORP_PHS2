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

export default function CustomSeparator() {


    let c = ""



    const route = useRouter()


    console.log(route)

    return (
        <Stack spacing={2}>
            <Breadcrumbs itemType="http://schema.org/BreadcrumbList" data-skin="breadcrumb" itemscope="" separator="›" aria-label="breadcrumb">
                <Link itemProp="itemListElement" itemscope="" itemType="http://schema.org/ListItem" underline="hover" key="1" color="inherit" href="/">
                    home
                </Link>
                {route.asPath.split("/").map((item, index) => {
                    c += "/" + item
                    return (index > 1 ? <Link itemProp="itemListElement" itemscope="" itemType="http://schema.org/ListItem" underline="hover" key="1" color="inherit" href={c}>{item}</Link> : null)
                })}
            </Breadcrumbs>
        </Stack>
    );
}