import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ link }) => {

    return <button className='link'><Link id={link.id} to={link.link}>{link.name}</Link></button>

}

export default Button