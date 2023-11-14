import React from 'react'
import { GitHub, Instagram, LinkedIn } from '@material-ui/icons'
// import { Link } from 'react-router-dom'
import Link from '@material-ui/core/Link';

function Footer() {
  return (
    <div className='footer'>
      
       <Link href="https://www.linkedin.com/in/chirayu-batra-541807217/"  target="_blank" >
       <LinkedIn/>
      </Link>
      
       <Link href="https://github.com/ChirayuBatra99"  target="_blank" >
       <GitHub/>
      </Link>
    </div>
  )
}

export default Footer
