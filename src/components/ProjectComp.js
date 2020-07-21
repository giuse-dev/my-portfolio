import React from "react"

import BoxTechComp from "./BoxTechComp"

function ProjectComp(props){

  let techListItems = props.techList.map(
    item => <BoxTechComp name={item} />
  )

  return(

    <div className="project-div">
      
      <div className="left-div">
        <img 
          src={props.img}
          alt=""/>
      </div>
      
      <div className="right-div">
        <h3 className="proj-title">{props.name}</h3>
        
        <div className="techs-used-div">
          {techListItems}
        </div>

        <div className="description-div">
          <p classname="proj-description-p">
            {props.description}
          </p>
        </div>

        <div className="proj-links">
          
          <a href={props.projectLink} target="_blank">demo</a>
          
          <a href={props.ghCodeLink} target="_blank">code</a>
        </div>

      </div>
    
    </div>
  );
}

export default ProjectComp