import React from 'react';

function Resume () {
    return (
       <div className='mb-5'>
        <h2 className='myResume'>My Resume</h2>
        <div className='justify-content-center row' id='myResume'>
            <div className='mt-5 pl-5 pr-5'>
                <h2>My Projects</h2>
                <ul id='resumeId'>
                    <li><span>Riddle Me This:</span> Node.js and Express.js to create a RESTful API. </li>
                    <li><span>E Commerce Backend:</span> Configured the sequelize ORM in a Node.js application.</li>
                    <li><span>Employee Tracker:</span> Used Node.js, Inquire, and MySQL to build a command line application to manage a company's database.</li>
                </ul>
                <p className='mt-5'>
                    <a href='' />
                    <img src='' />
                </p>
                <a href='' />
            </div>
        </div>
        <div className='mt-5 justify-content-center'>
            <div>
                <h4>Skills</h4>
                <p>Node.js, Express.js, MySQL, Sequelize, HTML, React</p>
                <p>Inquire, Mongoose ODB, RESTful API, React Router</p>
            </div>
        </div>

       </div>
    );
}

export default Resume;