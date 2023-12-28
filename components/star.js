import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


export default function Star(props) {
    const [value, setValue] = React.useState(props.value);

    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Rating name="read-only" value={value} readOnly />
        </Box>
    );
}