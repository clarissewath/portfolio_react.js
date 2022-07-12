import React from 'react'
import {HiOutlineMail} from 'react-icons/hi'

function Contact() {
  return (
    <section id="contact">
      <h5>Vous voulez en savoir plus ?</h5>
      <h2>Contactez-moi !</h2>

      <div className="container">
        <div className="contact-options">
          <article className="email-option">
            <HiOutlineMail/>
            <h4>Email</h4>
            <h5>clarisse.wathanyuta@epitech.eu</h5>
            <a href="mailto:clarisse.wathanyuta@epitech.eu"> Envoyer un mail</a>
          </article>
        </div>
        <form action="" className="flex flex-col rounded-[14px]">
          <input type="text" name="fullname" placeholder="Nom et prénom" required/>
          <input type="email" name="email" placeholder="email@email.com" required/>
          <textarea name="msg" rows="7" placeholder="Ecrivez moi un message..."></textarea>
          <button type="submit">Envoyer le message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact