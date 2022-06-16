import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers'

function ContactPage () {
    const [formState, setFormState] = useState({name:'', email:'', message:''});
    const [errorMessage, setErrorMessage] = useState('');
    const {name, email, message} = formState;

    function controlChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if(!isValid) {
                setErrorMessage('Valid Email Required!');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is Required!`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({formState, [e.target.name]: e.target.value })
        }
    }

    function controlSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className='justify-content-center' id='contactDiv'>
            <h2 data-testid='h1tag' className='contactH2'>Contact Me</h2>
            <form className='justify-content-center' id='contactForm'>
                <div className='mt-5'>
                    <label htmlFor='name'>Name:</label>
                    <input className='formInput' type='text' name='name' defaultValue={name} onBlur={controlChange}></input>
                </div>
                <div className='mt-5'>
                    <label htmlFor='email'>Email:</label>
                    <input className='formInput' type='email' name='email' defaultValue={email} onBlur={controlChange}></input>
                </div>
                <div className='mt-5'>
                    <label htmlFor='message'>Message:</label>
                    <input className='formInput' id='messageBox' name='message' defaultValue={message} onBlur={controlChange}></input>
                </div>
                {errorMessage && (
                    <div>
                        <p className='errorMessage'>{errorMessage}</p>
                    </div>
                )}
                <div className='mt-5 mb-5'>
                    <button data-testid='button' className='btn btn-outline-dark mt-4' type='submit' onSubmit={controlSubmit}>Submit</button>
                </div>

            </form>
            
        </div>
    );
}

export default ContactPage;