import React from "react";

function ProjectLinks(props) {
    return (
        <div className="card" >
            <div className="imgContainer">
                <img alt={props.name} src={props.img}></img>
            </div>
            <div className="projectContent">
                <p className="projectTitle" id="linkTitle">{props.name}</p>
                <p id="projectIcons">
                    <a href={props.github}> <img src=''></img> </a>
                    <a href={props.launch}> <img src=''></img> </a>
                </p>
                <p id="details">
                    ({props.details})
                </p>
            </div>
        </div>
    );
}

export default ProjectLinks;