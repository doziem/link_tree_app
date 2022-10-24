import React from 'react'

const Button = ({ link }) => {
    return <button className='link' id={link.id} to={link.link}>{link.name}</button>

}

export default Button