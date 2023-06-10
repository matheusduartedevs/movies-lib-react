import React from 'react'
import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <h2>
                    <Link to='/'>
                        <BiCameraMovie /> MoviesLib
                    </Link>
                </h2>
                <form>
                    <input type="text" placeholder='Busque um filme' />
                    <button type='submit'>
                        <BiSearchAlt2 />
                    </button>
                </form>
            </nav>
        </div>
    )
}

export default Navbar