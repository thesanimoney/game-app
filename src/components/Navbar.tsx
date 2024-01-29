import {Avatar, FormControlLabel, Stack, styled, Switch, Typography} from "@mui/material";
import Search from "./Search.tsx";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#FAEF9B',
        width: 32,
        height: 32,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#FF9843',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

interface Theme {
    toggleTheme: boolean,
    setToggleTheme: (data: boolean) => void
}

interface  Props extends Theme {
    setSearchText: (event: string) => void,
    searchText: string
}

function Navbar({toggleTheme, setToggleTheme, setSearchText, searchText}: Props) {
    console.log(toggleTheme)
    return <>
        <Stack boxShadow={'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;'} bgcolor={'rgba(234,234,234,0.07)'} padding={{xs: '0.8rem', sm: '1rem', md: '1.5rem'}} borderRadius={'4px'} my={'2rem'} direction='row' columnGap={3} justifyContent={'space-between'}>
            <Stack alignItems={'center'} direction={"row"} columnGap={2}>
                <Avatar sx={{width: '46px', height: '42px'}} variant={'rounded'} src='https://portfolio123222.s3.eu-central-1.amazonaws.com/react.svg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaDGV1LWNlbnRyYWwtMSJGMEQCID4zFyKoltUgFw0kndVXMMV%2FAvLq7v8fChOrOraS4fTvAiARBGOhho%2BYfhWIAYKxa3UlZg4SX7cDH%2BDaDhUQRowQzSrtAgjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDg4ODE2MTU5MDcxNyIM3EgBwkC2DJ0qZcJAKsECSMUbkQtz6P0HctxvqrHm%2Fi5hvj0k8oRGTbg5mQQReoJkhCi3JoIf4AjovRstPf9BjJLyXUwc2rcGRG6U9vJgwYVFDz5%2F18mU6MSp5DhUSttFYmILwzP%2FrFX6fOUebTmavbWfokYGUKlAfPX4UbvczS%2B9erHdpCWG22OPDxv4i9lDMeZ8%2BOFNOKdb%2BRXSanCtHxq%2F2AWjx%2FKmswARzTVRpCOMkOY1jU3s0MBEG4LFmxhuriP7dw5BYq6iSzmGDXBjcRhNHjjmwRqLUbtAuBED8OHURPOo8ygyc%2BNT0B64hyjIFty8iug5GKKfCYCIPMPUYnoFuD5ORrXuBD9FXi4ztRE4%2BEmrsYLP%2Fi956VLRy9ce35Zv4OG6bWZfj8YP4D1ZzjGlizwtAZdDSICTMVMJqWWZgTjz1axm0%2Blu6%2BEY4rTTMMaB360GOrQC6Tp%2FOAmJJ3IuxMyOVunZJdcLUiDuBRF5905n0ivHdbRxwE2lx8MH5y7eP9Fer9jXoXnsE17Do%2F0smgH2cvL1RnfiAzwKhy0E5ut1li8VIujMHYG%2FzpZjbu3xLNjiIyPJhszpfeiF2jwMFq%2BQbjvV0wTtuzsIwrxScVVKhfukCngKfGbbFQlo6BroyRScyuGqRgOj9HZWQ%2Fz93X2EXEYZEqic2hXDZKFqEShA2Ljd8zyWb8h3Qj%2FgWAe0Sr7r6uh6h%2BY%2FhVBnOM36oQY0ZZomc%2BvyfYPjJB1vZC5In77hS0%2FVlLPVZVFbWc9zefOTCtPEZYCyA9ZD6puWvHSjKHhTdJudpHJNLClaHc3WLgCpCFVJgJ5QeipVXoPIGQgeJq29G95qA3%2BiuxzUELJ9oC%2BX8d2fWeE%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240129T151452Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA45SUOLW64OR4J6TT%2F20240129%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=260ce3dd486472e39c8cdc269d921321338386d500415a5f3ef8280d2c79961b'/>
                <Typography sx={{display: {xs: 'none', sm: 'none', md: 'inline-block'}}} fontWeight={'bold'} variant={'h4'}>Gaming Portal</Typography>
            </Stack>
            <Search searchText={searchText} setSearchText={setSearchText}>
            </Search>
            <FormControlLabel control={
                <MaterialUISwitch
                checked={toggleTheme}
                onChange={(event) => setToggleTheme(event.target.checked)}
            />} label={''}></FormControlLabel>

        </Stack>
    </>
}

export default Navbar;