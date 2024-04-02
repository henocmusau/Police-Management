import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BsHousesFill } from "react-icons/bs";
import { BiTransferAlt } from "react-icons/bi";
import { RiSettingsFill } from "react-icons/ri";

export const navLinks = [
    {
        label: 'Dashboard',
        link: '/',
        icon: MdDashboard
    },
    {
        label: 'Effectif',
        link: '/staff',
        icon: FaUsers
    },
    {
        label: 'Postes',
        link: '/positions',
        icon: BsHousesFill
    },
    {
        label: 'Transferts',
        link: '/transferts',
        icon: BiTransferAlt
    },
    {
        label: 'Settings',
        link: '/settings',
        icon: RiSettingsFill
    },
]