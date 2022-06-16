import React from 'react';
import portfolio from './portfolio.json';
import Index from './index';
import 'bootstrap/dist/css/bootstrap.min.css'

function PortfolioCards(props) {
    return <div className='cards'>{props.children}</div>
}

function Portfolio () {
    return (
        <div>
            <div className='projects'>
                <h2 className='title'>My Portfolio</h2>
            </div>
            <PortfolioCards id='card-data'>
                {portfolio.map((project) => (
                    <Index key={project.id} name={project.name} github={project.github} launch={project.launch} details={project.details} />
                ))}
            </PortfolioCards>
        </div>
    )
}

export default Portfolio;