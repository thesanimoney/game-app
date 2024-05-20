import { Button, Snackbar } from '@mui/material'
import { useState } from 'react'

const CopyButton = () => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(true)
        navigator.clipboard.writeText('https://instagram.com/thesanimoney')
    }

    return (
        <>
            <Button onClick={handleClick}>Share</Button>
            <Snackbar
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={2000}
                message="Copied to clipboard"
            />
        </>
    )
}

export default CopyButton