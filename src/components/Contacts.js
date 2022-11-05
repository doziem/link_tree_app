import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contacts = () => {
    const navigate = useNavigate()
    return (
        <button className='link' id='contact' onClick={() => navigate('/contact')}> Contact Me</button>
    )
}

export default Contacts