import React from 'react'

const Button = ({ link }) => {

    return <button className='link'><a rel="noreferrer" id={link.id} target="_blank" href={link.link}>{link.name}</a></button>

}

export default Button