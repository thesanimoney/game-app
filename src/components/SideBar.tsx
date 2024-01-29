import Box from '@mui/material/Box';

import {ReactNode} from "react";

interface Props {
    children: ReactNode
}

function SideBar({children}: Props) {

    return (
        <Box boxShadow={'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;'}  sx={{ width: '100%', maxWidth: 360, bgcolor: 'rgba(234,234,234,0.07)', borderRadius: '4px' }}>
            <nav>
                <Box>{children}</Box>
            </nav>
        </Box>
    );
}

export default SideBar