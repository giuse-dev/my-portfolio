import React from 'react'

import ProjectComp from "./ProjectComp"

import projectsData from "../data/projectsData"
import ioImg from "../img/io.jpg"

function MiddleComponent(){

  const projects = projectsData.map(
    item => <ProjectComp key={item.id}
                          img={item.img}
                          name={item.name}
                          techList={item.techListNames}
                          description={item.description}
                          projectLink={item.projectLink}
                          ghCodeLink={item.ghCodeLink}
              />
  )

  return(
    <div className="middle-comp">

      <h1>Breve presentazione</h1>
      <div className="bio-div">
        <div className="img-div">
          <img src={ioImg} alt=""/>
        </div>
        <div className="p-div">
          <p>Giuseppe Lombardo.
            <br/>
            <br/>
            Sono iscritto all'università della calabria, ma siccome ho dovuto sempre lavorare per mantenermi, non mi sono potuto dedicare completamente agli studi universitari.
            <br/>
          < br/>
          
          Ora l'università, se pure importante, non è una priorità per me. Vorrei quindi lavorare a tempo pieno come programmatore.
          </p>
        </div>
      </div>

      <h2>Progetti</h2>
      
      <div className="middle-projects-div">
        {projects}
      </div>
    </div>
  )
}

export default MiddleComponent