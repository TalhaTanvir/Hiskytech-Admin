import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { AiOutlineTeam } from "react-icons/ai";
import { PiVideoBold } from "react-icons/pi";
import { FaRegNewspaper } from "react-icons/fa6";
import { LuMessageSquareText } from "react-icons/lu";
import { NavLink } from 'react-router-dom';




function Sidebar() {

    const links = [
    {id: 1, path: "/", label: "Dashboard", icon: <LuLayoutDashboard /> },
    {id: 2, path: "/services", label: "Services", icon: <RiCustomerService2Line /> },
    {id: 3, path: "/projects", label: "Projects", icon: <FaClipboardList /> },
    {id: 4, path: "/prices", label: "Pricing", icon: <BiDollar /> },
    {id: 5, path: "/team", label: "Team", icon: <AiOutlineTeam /> },
    {id: 6, path: "/videos", label: "Video", icon: <PiVideoBold /> },
    {id: 7, path: "/news", label: "News", icon: <FaRegNewspaper /> },
    {id: 8, path: "/messages", label: "Messages", icon: <LuMessageSquareText /> },
  ];


  return (
    <div className='max-w-[200px] h-screen bg-[#E8E8E8] py-4 px-6 fixed top-0 bottom-0 left-0 lg:flex hidden'>
        <div className='flex flex-col gap-12 h-full'>
        {/* Logo */}

        <div className='text-center'>
            <h1 className='text-2xl font-bold'><span className='text-blue-500'>HiSky</span>Tech</h1>
        </div>


        {/* Sidebar Links */}

        <ul className='flex flex-col gap-8'>
            {
              links.map((link)=>(
                <li key={link.id}>
                  <NavLink to={link.path} className={({isActive}) =>`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 ${isActive ? 'bg-blue-500 text-white' : 'text-black '}`}>{link.icon} {link.label}</NavLink>
                </li>
              ))
            }
        </ul>
        </div>

    </div>
  )
}

export default Sidebar