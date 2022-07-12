import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

function HeaderSocial() {
  return (
    <div className="flex items-center gap-3 absolute left-0 bottom-12 phone:hidden">
        <a href="https://www.linkedin.com/in/clarisse-w-2a76251b3/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/clarissewath" target="_blank" rel='noreferrer'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocial