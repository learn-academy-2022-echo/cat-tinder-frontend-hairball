import React from 'react'
import NotFoundCat from '../assets/NotFound.jpeg'

const NotFound = () => {
    return (
        <>
        <h1>Page Not Found
        <br></br>
        <img src={NotFoundCat} className='picture' />
        </h1>
        </>
    )
}

export default NotFound