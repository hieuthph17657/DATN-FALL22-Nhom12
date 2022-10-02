import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
    {
        title: 'Quản lý nhân viên',
        path: '/',
        icon: <BiIcons.BiUserCircle />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Users',
                path: '/nhanvien/nhanvien1',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Quản lý khách hàng',
        path: '/reports',
        icon: <FiIcons.FiUsers />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Reports',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav'
            },
            {
                title: 'Reports 2',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav'
            },
            {
                title: 'Reports 3',
                path: '/reports/reports3',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Quản lý sản phẩm',
        path: '/products',
        icon: <BsIcons.BsLaptopFill />
    },
    {
        title: 'Quản lý đơn hàng',
        path: '/team',
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: 'Quản lý loại SP',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Message 1',
                path: '/messages/message1',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Message 2',
                path: '/messages/message2',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Quản lý hóa đơn',
        path: '/support',
        icon: <BiIcons.BiReceipt />
    },
    {
        title: 'Quản lý doanh thu',
        path: '/support',
        icon: <GiIcons.GiProgression />
    },
    {
        title: 'Quản lý website',
        path: '/support',
        icon: <AiIcons.AiOutlineGlobal />
    }
];