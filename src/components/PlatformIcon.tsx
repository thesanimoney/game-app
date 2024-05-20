import { FaLinux, FaWindows, FaApple, FaPlaystation, FaXbox } from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import {Avatar, AvatarGroup} from "@mui/material";
import {ReactElement} from "react";
import {Platform} from "../hooks/usePlatform.tsx";

interface Platforms {
    platforms: Platform[];
}

function PlatformIcon({ platforms }: Platforms) {
    const mapIcons: { [key: string]: ReactElement } = {
        pc: <FaWindows />,
        playstation: <FaPlaystation />,
        xbox: <FaXbox />,
        linux: <FaLinux />,
        apple: <FaApple />,
        nintendo: <SiNintendo />,
        mac: <FaApple />,
        ios: <MdPhoneIphone />,
        web: <BsGlobe />
    };

    return (
        <>
            <AvatarGroup max={4}>
            {platforms.map((el) => (
                <Avatar sx={{
                    '&:hover': {
                        // your hover styles here
                        color: 'lightgrey', // for example
                    },
                }} key={el.id}>{mapIcons[el.slug]}</Avatar>
            ))}
            </AvatarGroup>
        </>
    );
}

export default PlatformIcon;
