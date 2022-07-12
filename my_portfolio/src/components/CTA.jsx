import React from 'react';
import CV from "../assets/Clarisse_Wathanyuta_CV.pdf";

function CTA() {
  return (
    <div className="mt-[2.5rem] flex justify-center gap-5">
        <a href={CV} className="btn">Télécharger CV</a>
        <a href="#contact" className="btn btn-primary">Contactez moi</a>
    </div>
  )
}

export default CTA