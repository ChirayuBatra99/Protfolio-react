import React from 'react'
import { ProjectList } from '../Projects/ProjectList'
import ProjectItem from '../Projects/ProjectItem'

function Projects() {
  return (
    <div className='projects'>
        <h1>My projects:</h1>
    <div className='projectlist'>
      {ProjectList.map((project)=>{
          return <ProjectItem name={project.name} skills={project.skills} link={project.link}/>;
      })}   
      </div>    
    </div>
  )
}

export default Projects
