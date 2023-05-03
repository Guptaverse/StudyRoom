import React from 'react'
import '../Styles/login.css'

export default function Login() {
    return (
        <>
            <div className='Login-Signup'>
                <div className='Login-container'>
                    <div className='container-left'>

                    </div>
                    <div className='form-container'>
                        <div className='form-box'>
                            <form action="">
                                <input type="text" placeholder='Username' />
                                <input type="password" placeholder='Password' />
                                <button className='btn'>Login</button>
                            </form>
                        </div>
                        <div>Don't have any account yet? <a><strong>Sign Up</strong></a></div>
                    </div>
                </div>
            </div>
        </>
    )
}
