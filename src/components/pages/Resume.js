import React from 'react';

function Resume (props) {
    return (
        <div className='card port-card'>
            <div className='projectContainer'>
                <img alt={props.name} src={props.image}></img>
            </div>
            <div className='content'>
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Project:</strong> {props.project}
                    </li>
                    <li>
                        <strong>Preview:</strong> {props.location}
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default Resume;