import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import '../Styles/home.css'
import NewUser from './NewUser'
import NewRoom from './NewRoom'
import img1 from '../assets/group-study.webp'

export default function HomePage() {
    const navigate = useNavigate()
    return (
        <div>
            <header>
                <div class="header-left">
                    <div class="logo">
                        <img src="./logo.png" alt="" />
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <a href="" class="active">Home</a>
                            </li>
                            
                            <li>
                                <a href="">About</a>
                            </li>
                        </ul>
                        <div class="login-signup">
                            <a href="">Login</a> or <a href="">Signup</a>
                        </div>
                    </nav>
                </div>
                <div class="header-right">
                    {/* <div class="login-signup">
                        <a href="">Login</a> or <a href="">Signup</a>
                    </div> */}
                    <div class="hamburger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </header>
            <section className='hero-section'>
                <div className='btn-grp'>
                    <button className='btn'/* onClick={() => {navigate("/NewUser")}}*/>Create Username</button>
                    {/* <NewUser /> */}
                    <button className='btn'>Join a Room</button>
                    {/* <NewRoom /> */}
                </div>
                <div className='hero-img'>
                    <img src={img1} alt="" />
                </div>
            </section>
        </div>
    )
}
