import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import img1 from '../assets/8262271.jpg'


export default function HomeTop() {


    const navigate = useNavigate()

    return (
        <div>
            <header>
                <div className="header-left">
                    <div className="logo">
                        <img src="./logo.png" alt="" />
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/" className="active">Home</Link>
                            </li>

                            <li>
                                <Link to="">About</Link>
                            </li>
                        </ul>

                    </nav>
                </div>
                <div className="header-right">

                    <div className="hamburger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </header>
            <section className='hero-section'>

                <div className='btn-grp'>
                    <button className='btn'  onClick={()=>navigate('/register')}>Register</button>
                    <button className='btn'  onClick={()=>navigate('/login')}>Login</button>
                </div>

                <div className='hero-img'>
                    <img src={img1} alt="" />
                </div>
            </section>
        </div>
    )
}
