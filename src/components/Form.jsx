import React, { useState } from 'react';
import Card from './Card';

function Form() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [file, setFile] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleNameChange = (e) => setName(e.target.value);
    const handleFileChange = (e) => setFile(e.target.files[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setName('');
        alert('form submitted successfully');
        console.log('Submitted:', { email, name, file });
    };

    return (
        <div className='container '>
            <div className='row  bg-light p-4'>
                <h2 className='bg-black p-2 rounded'>Fill the form</h2>
                <div className=' form-container col-12 col-md-6'>
                    <form onSubmit={handleSubmit}>
                        <div className=' mb-3 form-group '>

                            <input type="email" className='form-control ' placeholder="Email" value={email} onChange={handleEmailChange} />

                        </div>
                        <div className='mb-3 form-group'>

                            <input type="text" className='form-control' placeholder='Name' value={name} onChange={handleNameChange} />

                        </div>
                        <br />
                        <div className='mb-3 form-group'>
                            <input type="file" className='form-control' onChange={handleFileChange} />
                        </div>
                        <br />
                        <button className='btn-lg btn btn-primary' type="submit">Submit</button>
                    </form>
                </div>

                <div className='form-container w-100 col-12 col-sm-6'>
                    <Card email={email} name={name} />
                </div>



            </div>


        </div>
    );
}

export default Form;
