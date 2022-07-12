import React from 'react'
import Tweet from '../assets/tweet.jpeg'
import Snap from '../assets/snap.jpeg'
import Cobra from '../assets/cobra.png'
import Quizz from '../assets/quiz.png'

function Portfolio() {
  return (
    <section id="projects">
      <h5>Projets de groupe et individuel</h5>
      <h2>J'ai réalisé</h2>

      <div className="containe grid grid-cols-4 gap-[2rem] p-8 h-1/2">
        <div className="text-center hover:scale-x-50 trans">
          <a href="https://github.com/clarissewath/Tweet_Acedemie" target="_blank" rel="noreferrer"><img src={Tweet} alt="Tweet project" className="rounded-[14px]"/></a>
          <br />
          <span>Tweet Académie</span>
        </div>

        <div className="text-center hover:scale-y-50 trans">
          <a href="https://github.com/clarissewath/Snap_Chat" target="_blank" rel="noreferrer"><img src={Snap} alt="Snap project" className="rounded-[14px]"/></a>
          <br />
          <span>My Snapchat</span>
        </div>

        <div className="text-center hover:scale-x-50 trans">
          <a href="https://github.com/clarissewath/test_technique_Colbr" target="_blank" rel="noreferrer"><img src={Cobra} alt="Cobra project" className="rounded-[14px]"/></a>
          <br />
          <span>Cobra</span>
        </div>

        <div className="text-center hover:scale-y-50 trans">
          <a href="https://github.com/clarissewath/My_Quizz" target="_blank" rel="noreferrer"><img src={Quizz} alt="Quizz project" className="rounded-[14px]"/></a>
          <br />
          <span>My Quizz</span>
        </div>
      </div>
    </section>
  )
}

export default Portfolio