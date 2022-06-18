import React from 'react';
import portfolio from './portfolio.json';
import Index from './index';

function PortfolioCards(props) {
    return <div className='cards'>{props.children}</div>
}

function Portfolio () {
    return (
        <div>
            <div className='mb-5'>
                <h2>My Portfolio</h2>
            </div>
            <PortfolioCards id='card-data'>
                {portfolio.map((portfolio) => (
                    <Index key={portfolio.id} img={portfolio.img} name={portfolio.name} github={portfolio.github} launch={portfolio.launch} details={portfolio.details} />
                ))}
            </PortfolioCards>
        </div>
    )
}

export default Portfolio;