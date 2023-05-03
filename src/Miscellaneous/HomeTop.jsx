import React, { useState } from 'react'
import NewUser from './NewUser';
import NewRoom from './NewRoom'
import { Link } from 'react-router-dom'
import img1 from '../assets/8262271.jpg'

export default function HomeTop() {
    const [user, setUser] = useState(false)
    const [room, setRoom] = useState(false)

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
                        {/* <div className="login-signup">
                            <a href="">Login</a> or <a href="">Signup</a>
                        </div> */}
                    </nav>
                </div>
                <div className="header-right">
                    {/* <div className="login-signup">
                        <a href="">Login</a> or <a href="">Signup</a>
                    </div> */}
                    <div className="hamburger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </header>
            <section className='hero-section'>
                {user && <NewUser user={user} setUser={setUser} />}
                {room && <NewRoom room={room} setRoom={setRoom} />}
                <div className='btn-grp'>
                    <button className='btn' onClick={() => setRoom(!room)}>Sign Up</button>
                    <button className='btn' onClick={() => { setUser(!user); console.log(user) }}>Login</button>
                </div>
                <div className='hero-img'>
                    <img src={img1} alt="" />
                </div>
            </section>
        </div>
    )
}
