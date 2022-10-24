import React from 'react'
import logo from '../image/logo.png'
import ingressImage from '../image/ingressImage.jpg'

const Footer = () => {
    return (
        <div className='footer'>

            <img className='zuri-logo' src={logo} alt='zuri' />

            <div className='zuri-title'>
                <h6>HNG Internship 9 Frontend Task</h6>
            </div>

            <img className='ingress-logo' src={ingressImage} alt='imgressive 4 good' />

        </div>
    )
}

export default Footer