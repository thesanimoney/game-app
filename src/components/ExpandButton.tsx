import {Button} from "@mui/material";
import {useState} from "react";
import Typography from "@mui/material/Typography";

interface Props {
    text: string | undefined
}

function ExpandButtonText({text}: Props) {
    const limit = 300
    const summary =  text?.substring(0, limit)
    const [show, setShow] = useState(true)

    return <>
            <Typography variant={'body1'} mb={'3rem'}>
            {show ? summary : text}{text && text?.length > limit &&
                <Button onClick={() => setShow((prevState) => !prevState)}>{show ? 'Show More' : 'Show Less'}</Button>}
        </Typography>
    </>
}

export default ExpandButtonText;