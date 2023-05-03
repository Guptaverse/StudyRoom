import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/home.css'
import NewUser from '../Components/NewUser'
import NewRoom from './NewRoom'
// import img1 from '../assets/group-study.webp'
import img1 from '../assets/8262271.jpg'

export default function HomePage() {
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
                    <button className='btn' onClick={() => {setUser(!user); console.log(user)}}>Create Room</button>
                    <button className='btn' onClick={() => setRoom(!room)}>Join a Room</button>
                </div>
                <div className='hero-img'>
                    <img src={img1} alt="" />
                </div>
            </section>
        </div>
    )
}
