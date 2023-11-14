import { GitHub, Instagram, LinkedIn } from '@material-ui/icons'
import React from 'react'
// import GithubIcon from "@material-ui/icons/GitHub";
// import Linkedin from "@material-ui/icons/LinkedIn";
import '../styles/Home.css'
import Link from '@material-ui/core/Link';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Chirayu Batra </h2>
        <div className='prompt'>
          <p> A tech enthusiast </p>
          {/* <GithubIcon/> */}
          <div className='links'>
          <Link href="https://www.linkedin.com/in/chirayu-batra-541807217/"  target="_blank" >
       <LinkedIn/>
      </Link>
      
       <Link href="https://github.com/ChirayuBatra99"  target="_blank" >
       <GitHub/>
      </Link>
          </div>
        </div>
      </div>

      <div className='skills'>
        Skills
        <ol className='list'>
          <li className='item'>
              <h1> Front-end</h1>
              <span>React JS, HTML, CSS</span>
          </li>
          <li className='item'>
            <h1> Back-end</h1>
            <span> NodeJS </span>
          </li>
          <li className='item'>
            <h1> Languages</h1>
            <span> C/C++, Java, Python, Javascript</span>
          </li>
        </ol>
      </div>

    </div>


  )
}

export default Home
