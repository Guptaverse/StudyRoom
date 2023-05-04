import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/home.css'
import NewUser from '../Components/NewUser'
import NewRoom from './NewRoom'
// import img1 from '../assets/group-study.webp'
import img1 from '../assets/pnggroup.png'
import './Dashboard.css'



const Dashboard = () => {
    
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
                                <Link to="/dashboard">Dashboard</Link>
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

            <div className='main_page'>
                <div className='main_page_left'>
                    <button className="button-29" role="button">Create Room</button>
                    <button className="button-29" role="button">Join Room</button>

                    {/* <button>Create Room</button>
                    <button>Join Room</button> */}
                </div>
                <div className='main_page_right'>
                    <br />
                    <h1>Dashboard</h1>

                    <br />
                    <br />
                    <div className='list'>
                        <h3>Ongoings Rooms</h3>
                        <ul>
                            <li className='host_li'><div className='name'>Sumit Kumar Shakya</div> <div className='date'>1:00pm - 3:00pm, Thursday, 4 May 2023</div> <a href=''>Copy Room Code</a> </li>
                            <li className='user_li'><div className='name'>Shivam Gupta</div>  <div className='date'>1:00pm - 3:00pm, Thursday, 4 May 2023</div><a href=''>Copy Room Code</a> </li>
                        </ul>
                    </div>
                    <div className='list'>
                        <h3>Upcoming Rooms</h3>
                        <ul>
                            <li className='host_li'><div className='name'>Ahzam Farukh Sayed</div>  <div className='date'>1:00pm - 3:00pm, Thursday, 4 May 2023</div><a href=''>Copy Room Code</a> </li>
                            <li className='user_li'><div className='name'>Sumit Kumar Shakya</div>  <div className='date'>1:00pm - 3:00pm, Thursday, 4 May 2023</div><a href=''>Copy Room Code</a> </li>
                        </ul>
                    </div>
                    <div className='list'>
                        <h3>Past Rooms</h3>
                        <ul>
                            <li className='host_li'><div className='name'>Sumit Kumar Shakya</div>  <div className='date'>1:00pm - 3:00pm, Thursday, 4 May 2023</div><a href=''>Copy Room Code</a> </li>
                            <li className='user_li'><div className='name'>Sumit Kumar Shakya</div>  <div className='date'>1:00pm - 3:00pm, Thursday, 4 May 2023</div><a href=''>Copy Room Code</a> </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard