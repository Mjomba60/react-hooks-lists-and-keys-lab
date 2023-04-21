import React from "react";

function ProjectItem({ name, about, technologies }) {
  const singleTech = technologies.map((technology, index) => {
    return <span key= {index} >{technology}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        { singleTech}
      </div>
    </div>
  );
}

export default ProjectItem;
