import React from "react";

function ResumeLink(props) {
    return (
        <div className="card">
            <div className="imgContainer">
                <p>
                    <a href=""> <img src="https://raw.githubusercontent.com/Rodrigo-Valencia/portfolio2.0/main/src/assets/profileImg.jpg"></img></a>
                </p>
            </div>
            <div className="resumeContent">
                <p className="resumeTitle" id="linkTitle"> {props.name} </p>
                <p id="resumeIcons">
                    <a href={props.github}> <img src='https://img.icons8.com/material-outlined/24/undefined/github.png'></img> </a>
                </p>
            </div>
        </div>
    );
}

export default ResumeLink;