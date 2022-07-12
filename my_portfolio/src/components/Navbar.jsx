import React from 'react'
import {RiHomeHeartLine} from "react-icons/ri"
import {CgProfile} from "react-icons/cg"
import {RiLightbulbFlashLine} from 'react-icons/ri'
import {BiBriefcase} from 'react-icons/bi'
import {RiComputerLine} from 'react-icons/ri'
import {HiOutlineMail} from 'react-icons/hi'



function Navbar() {
  return (
    <nav className="bg-black opacity-30 w-max block py-3 px-7 z-[2] left-1/2 fixed translate-x-[-50%] bottom-8 flex gap-3.5 rounded-[3rem] backdrop-blur-lg">
      <a href="!#" className="bg-transparent p-4 rounded-full flex text-[#CDFFFF] text-sm hover:bg-[#052D6B]"><RiHomeHeartLine/></a>
      <a href="#about" className="bg-transparent p-4 rounded-full flex text-[#CDFFFF] text-sm hover:bg-[#052D6B]"><CgProfile/></a>
      <a href="#skills" className="bg-transparent p-4 rounded-full flex text-[#CDFFFF] text-sm hover:bg-[#052D6B]"><RiLightbulbFlashLine/></a>
      <a href="#projects" className="bg-transparent p-4 rounded-full flex text-[#CDFFFF] text-sm hover:bg-[#052D6B]"><RiComputerLine/></a>
      <a href="#xp" className="bg-transparent p-4 rounded-full flex text-[#CDFFFF] text-sm hover:bg-[#052D6B]"><BiBriefcase/></a>
      <a href="#contact" className="bg-transparent p-4 rounded-full flex text-[#CDFFFF] text-sm hover:bg-[#052D6B]"><HiOutlineMail/></a>
    </nav>
  )
}

export default Navbar