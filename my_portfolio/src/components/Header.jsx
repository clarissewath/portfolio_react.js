import React from 'react'
import CTA from './CTA'
import ME from "../assets/me-round.png"
import HeaderSocial from './HeaderSocial'


function Header() {
  return (
      <header className="h-screen pt-[7rem] tablet:h-[68rem]">
        <div className="container text-center h-full relative">
          <h5>Hello ! Je suis</h5>
          <h1>Clarisse Wathanyuta</h1>
          <h5 className="text-light">Développeuse web Full Stack</h5>
          <CTA/>
          <HeaderSocial/>
          
          <div className="w-1/2 h-80 absolute left-1/2 translate-x-[-50%] tablet:w-full">
            <img src={ME} alt="me"/>
          </div>

          <a href="#contact" className="absolute right-[-2.3rem] bottom-20 rotate-90 font-light text-sm phone:hidden">Aller en bas de page &#x279C;</a>
        </div>
      </header>
  )
}

export default Header