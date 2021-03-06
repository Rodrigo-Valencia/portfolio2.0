import React from 'react';
// import Img from '../../assets/profileImg'

function About () {
    return (
        <div className='aboutPage'>
            <h2 className='myName'>Rodrigo Valencia</h2>
            <div className='row justify-content-center'>
                <div className='col-10' id='aboutSection'>
                    <img className='mb-5' id='profileImg' src='https://raw.githubusercontent.com/Rodrigo-Valencia/portfolio2.0/main/src/assets/profileImg.jpg' alt='Rodrigo Valencia'></img>
                    <p>A Software Engineer ready to take on the world. </p>
                    <p>This is my React portfolio. Feel free to visit the different tabs and checkout the links below.</p>
                </div>
            </div>
        </div>
    )
}

export default About;