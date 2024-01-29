import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Stack} from "@mui/material";

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
        <Stack direction={"column"}><Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', mt: '30%'}}>
            <Box sx={{width: '50%', mr: 1}}>
                <LinearProgress sx={{height: '10px'}} variant="determinate" {...props} />
            </Box>
            <Box sx={{minWidth: 35}}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
            <Typography variant={"h4"} alignSelf={'center'}>Loading...</Typography>
        </Stack>
    );
}

export default function Loading() {
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 150 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgressWithLabel value={progress} />
        </Box>
    );
}