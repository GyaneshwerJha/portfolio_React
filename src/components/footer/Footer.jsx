import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { IoLogoGithub } from 'react-icons/io'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Gyaneshwer Jha</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.instagram.com/mrgyaneshwerjha/" target="_blank" rel="noreferrer"><BsInstagram /></a>
        <a href="https://www.linkedin.com/in/gyaneshwer-jha-233871206/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/GyaneshwerJha" target="_blank" rel="noreferrer"><IoLogoGithub /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Gyaneshwer Jha. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer