import React from 'react';
import resume from './resume.json'
import Index from './index'
import 'bootstrap/dist/css/bootstrap.min.css'

function ResumeCard (props) {
   return <div className='cards'> {props.children} </div>
}

function Resume () {
    return (
        <div>
            <div className='projects'>
                <h2 className='title'> My Resume </h2>
            </div>
            <ResumeCard id='card-data'>
                {resume.map((resume) => (
                    <Index key={resume.id} img={resume.img} github={resume.github} launch={resume.launch}></Index>
                ))}
            </ResumeCard>
        </div>
    )
}

export default Resume;