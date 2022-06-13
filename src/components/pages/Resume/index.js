import React from "react";

function ResumeLink(props) {
    return (
        <div className="card">
            <div className="imgContainer">
                <img alt={props.name} src={props.img}></img>
            </div>
            <div className="resumeContent">
                <p className="resumeTitle" id="linkTitle"> {props.name} </p>
                <p id="resumeIcons">
                    <a href={props.github}> <img src=''></img> </a>
                    <a href={props.launch}> <img src=''></img> </a>
                </p>
            </div>
        </div>
    )
}

export default ResumeLink;