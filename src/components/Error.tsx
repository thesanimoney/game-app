import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import {Typography} from "@mui/material";

function Error() {
    const error = useRouteError()

    return <>
            <Typography variant={'body1'}>Oops.. {isRouteErrorResponse(error) ? 'invalid page' : 'unexpected error'}</Typography>
    </>
}

export default Error;