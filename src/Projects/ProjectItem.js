import React from 'react'
import { useNavigate } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import { GitHub} from '@material-ui/icons'

function ProjectItem({ skills, name, link }) {
    const navigate = useNavigate();
    return (
      <div
        className="projectItem"
      >
        {/* <div style={{ backgroundImage: `url(${image})` }} className="bgImage" /> */}
        <h1> {name} </h1>
        <p> {skills} </p>
        <Link href={link}  target="_blank" >
            <GitHub/>
           </Link>
      </div>
    );
  }
  

export default ProjectItem


// onClick={() => {
//     navigate("/project/" + id);
//   }}

// , id, image