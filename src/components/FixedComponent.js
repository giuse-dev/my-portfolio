import React from 'react'
import logoGithub from '../img/github-logo.png'
import logoMail from '../img/mail-logo.png'
import logoCv from '../img/cv-logo.png'

function FixedComponent(){

  return(
    <div className="fixed-comp">
      <div className="github-box">
        <a href="https://github.com/giuse-dev" target="_blank"><img src={logoGithub} alt=""/></a>
      </div>
      <div className="mail-box">
        <a href="mailto:giuse.developing@gmail.com" target="_blank"><img src={logoMail} alt=""/></a>
      </div>
      <div className="cv-box">
        <a href="https://drive.google.com/file/d/1bbmRMkja9_yByfEua5EN7c5sh6pdmVUW/view?usp=sharing" target="_blank"><img src={logoCv} alt=""/></a>
      </div>
    </div>
  )
}

export default FixedComponent