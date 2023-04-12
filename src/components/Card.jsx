import React from 'react'

export default function Card(props) {
    return (
        <>

            <div className='card p-4 bg-body' >
                <div className='card-body'>
                    <h2>{props.email}</h2>
                    <h2>{props.name}</h2>
                </div>
            </div>
        </>
    )
}
