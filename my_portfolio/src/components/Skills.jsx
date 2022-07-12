import React from 'react'
import {ImHtmlFive} from 'react-icons/im'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {SiBootstrap} from 'react-icons/si'
import {FaPhp} from 'react-icons/fa'
import {DiMysql} from 'react-icons/di'
import {SiPostgresql} from 'react-icons/si'
import {SiSymfony} from 'react-icons/si'
import {SiLaravel} from 'react-icons/si'


function Skills() {
  return (
    <section id="skills">
      <h2>Compétences</h2>

      <div className="container grid grid-cols-[1fr_1fr] gap-[2rem] tablet:grid-cols-[1fr]">
        <div className="xp_front bg-gradient-to-r from-[#460da8] to-transparent p-[2.4rem_5rem] rounded-[2rem] border-transparent border-solid border-[1px] hover:border-[#460da8] hover:rotate-[-4deg] trans cursor-default text-center mb-[2rem] tablet:w-[80%] tablet:p-[2rem] tablet:m-auto">
          Développement Frontend
          <div className=" grid grid-cols-[1fr_1fr] gap-x-[2rem] p-[1rem]">
            <article className="details   gap-[1rem]">
            <ImHtmlFive size='2rem' color='#f25220'/>
                <small className="text-white">HTML</small>
                <SiCss3 size='2rem' color='#1472b6'/>
                <small className="text-white">CSS</small>
                <SiJavascript size='2rem' color='#efdb50'/>
                <small className="text-white">JavaScript</small>
                <FaReact size='2rem' color='#61dafb'/>
                <small className="text-white">React</small>
                <SiTailwindcss size='2rem' color='#35b4eb'/>
                <small className="text-white">Tailwind</small>
                <SiBootstrap size='2rem' color='#7211eb'/>
                <small className="text-white">Bootstrap</small>
            </article>
          </div>
        </div>
      
        <div className="bg-gradient-to-r from-[#460da8] to-transparent p-[2.4rem_5rem] rounded-[2rem] border-transparent border-solid border-[1px] hover:border-[#460da8] hover:rotate-[4deg] trans cursor-default text-center mb-[2rem] tablet:w-[80%] tablet:p-[2rem] tablet:m-auto">
            Développement Backend
          <div className="grid grid-cols-[1fr_1fr] gap-x-[2rem]">
            <article className="details gap-[1rem]">
                <FaPhp size='2.5rem' color='#7175a9'/>
                <small className="text-white">PHP</small>
                <DiMysql size='2.5rem' color='#da8404'/>
                <small className="text-white">MySQL</small>
                <SiPostgresql size='2rem' color='#316289'/>
                <small className="text-white">PostgreSQL</small>
                <SiSymfony size='2rem' color='white'/>
                <small className="text-white">Symfony</small>
                <SiLaravel size='2rem' color='#f43020'/>
                <small className="text-white">Laravel</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills