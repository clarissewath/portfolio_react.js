import React from 'react'
import ME from '../assets/me-peace-G.png'

function About() {
  return (
    <section id="about">
      <h5>À propos de</h5>
      <h2>Moi</h2>

      <div className="container grid grid-cols-[35%_50%] gap-[15%] tablet:grid-cols-[1fr] tablet:gap-0">
        <div className="w-full aspect-square rounded-[25px] grid place-items-center about__me tablet:w-1/2 tablet:m-[2rem_auto_4rem] phone:w-[65%] phone:m-[0_auto-3rem]">
          <div className="rounded-[25px] overflow-hidden origin-bottom rotate-6 hover:rotate-[-8deg] trans">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="font-light text-center space-y-4 phone:ml-[1.5rem] mr-[1.5rem]">
          <p className="text-fuchsia-500">Développeuse web en formation à la Web@cadémie Epitech 👩🏻‍💻 </p>
          <p className="font-semibold"> Mon métier ?</p> 
          <p className="text-light"> J'aide à donner vie à vos idées en murmurant à l'ordinateur ! 🌬</p>
          <p>
            Mes objectifs principaux en tant que dev sont : 
          </p>
            <ul className="space-y-4">
              <li>&#x279C; Approfondir mes connaissances</li>
              <li>&#x279C; Me spécialiser en React</li>
              <li className="text-light">&#x279C; Créer, aider</li>
              <li>&#x279C; Renforcer les compétences techniques tout au long de ma carrière</li>
            </ul>
        </div>
      </div>
    </section>
  )
}

export default About