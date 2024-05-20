import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
interface Props {
    setOpenState: (isFavorite: boolean, isSnackBarOpened: boolean)=> void
    isSnackBarOpened: boolean,
    isFavorite: boolean
}
export default function SimpleSnackbar({isSnackBarOpened, isFavorite, setOpenState}: Props, ) {

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return event;
        }

        setOpenState(isFavorite, false);
    };

    const action = (
        <React.Fragment>
            <Button color="primary" size="small" onClick={()=> setOpenState(!isFavorite, false )}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={()=> setOpenState(isFavorite, false)}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <div>
            <Snackbar
                open={isSnackBarOpened}
                autoHideDuration={6000}
                onClose={handleClose}
                message={isFavorite ? 'Game is added to favorite' : 'Game disliked'}
                action={action}
            />
        </div>
    );
}