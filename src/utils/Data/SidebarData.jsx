import { HiOutlineBuildingLibrary, HiOutlineHome, HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import { IoGameControllerOutline } from 'react-icons/io5';
import { BsKey, BsPeople } from 'react-icons/bs';
import { RiFundsLine } from 'react-icons/ri'
import { PiGift, PiTreeStructure } from 'react-icons/pi'
import { LiaWalletSolid } from 'react-icons/lia';
import { VscSignIn } from 'react-icons/vsc';

export const menuItems = [
    {
        icon: <HiOutlineHome />,
        title: "Dashboard",
        link: '/dashboard',
        type: 'item'
    },
    {
        icon: <BsPeople />,
        title: "GAME APP",
        type: 'group',
        children: [
            {
                icon: <HiOutlineBuildingLibrary />,
                title: 'All Games',
                link: '/allgamelist',
            },
            {
                icon: <HiOutlineBuildingLibrary />,
                title: 'Add Game',
                link: '/addgame'
            },
        ]
    },
    {
        icon: <BsKey />,
        title: "Payment & Wallet",
        type: 'group',
        children: [
            {
                icon: <HiOutlineBuildingLibrary />,
                title: 'Payment Details',
                link: '/payment',
            },
            {
                icon: <HiOutlineBuildingLibrary />,
                title: 'Wallet',
                link: '/wallet'
            },
            // {
            //     icon: <HiOutlineBuildingLibrary />,
            //     title: 'Wallet',
            //     link: '/epins/requests'
            // },
        ]
    },
    {
        icon: <PiTreeStructure />,
        title: "Users",
        type: 'group',
        children: [
            {
                icon: <HiOutlineBuildingLibrary />,
                title: 'User List',
                link: '/userlist',
            },
           
        ]
    },
    {
        icon: <LiaWalletSolid />,
        title: "Earnings & Payouts",
        type: 'group',
        children: [
            {
                icon: <HiOutlineBuildingLibrary />,
                title: 'Earnings Report',
                link: '/earnings',
            },
            {
                icon: <HiOutlineBuildingLibrary />,
                title: 'Payout Report',
                link: '/payouts'
            },
            // {
            //     icon: <HiOutlineBuildingLibrary />,
            //     title: 'Admin Charges',
            //     link: '/admincharge'
            // },
        ]
    },
    {
        icon: <IoGameControllerOutline />,
        title: "Utilities",
        type: 'group',
        children: [
            {
                icon: <HiOutlineBuildingLibrary />,
                title: 'Manage Package',
                link: '/package',
            },
        ]
    },
    // {
    //     icon: <PiGift />,
    //     title: "Rewards",
    //     type: 'group',
    //     children: [
    //         {
    //             title: 'Reward Achievers',
    //             link: '/rewards',
    //         },
    //     ]
    // },
    // {
    //     icon: <RiFundsLine />,
    //     title: "Fund Management",
    //     type: 'group',
    //     children: [
    //         {
    //             icon: <HiOutlineBuildingLibrary />,
    //             title: 'View History',
    //             link: '/funds/history',
    //         },
    //         {
    //             icon: <HiOutlineBuildingLibrary />,
    //             title: 'Transfer Fund',
    //             link: '/funds/transfer',
    //         },
    //     ]
    // },
];

export const checkActiveMenu = (link, activePath) => {
    if (activePath?.includes(link))
        return 'text-blue-600 bg-blue-200';
    return 'text-gray-400'
}

export const modeItems = [
    { icon: <HiOutlineSun />, title: 'Light' },
    { icon: <HiOutlineMoon />, title: 'Dark' }
]