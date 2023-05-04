import React, { useState } from 'react'
import '../Styles/login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'

export default function Login() {

    const [signUp, setSignUp] = useState(true)

    const [values, setValues] = useState({
        password: "",
        showPassword: false,
    });
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handlePasswordChange = (prop) => (e) => {
        setValues({ ...values, [prop]: e.target.value });
    };

    return (
        <>
            <div className='Login-Signup'>
                <div className='Login-container'>
                    <div className='container-left'>

                    </div>
                    {signUp ?
                        <div className='form-container'>
                            <div className='form-box'>
                                <form action="">
                                    <input type="text" placeholder='Username' />
                                    <div className='input-box'>
                                        <input
                                            type={values.showPassword ? "text" : "password"}
                                            onChange={handlePasswordChange("password")}
                                            placeholder='Password'
                                            value={values.password}
                                        />
                                        <FontAwesomeIcon icon={faEye} onClick={handleClickShowPassword} className='show-hide' />
                                    </div>
                                    <button className='btn'>Login</button>
                                </form>
                            </div>
                            <div style={{ textAlign: "center" }} >Don't have any account yet? <a onClick={() => setSignUp(false)}><strong>Sign Up</strong></a></div>
                        </div> :
                        <div className='form-container'>
                            <div className='form-box'>
                                <form action="">
                                    <input type="text" placeholder='Username' />
                                    <div className='input-box'>
                                        <input
                                            type={values.showPassword ? "text" : "password"}
                                            onChange={handlePasswordChange("password")}
                                            placeholder='Password'
                                            value={values.password}
                                        />
                                        <FontAwesomeIcon icon={faEye} onClick={handleClickShowPassword} className='show-hide' />
                                    </div>
                                    <div className='input-box'>
                                        <input
                                            type={values.showPassword ? "text" : "password"}
                                            onChange={handlePasswordChange("password")}
                                            placeholder='Confirm Password'
                                            value={values.password}
                                        />
                                        <FontAwesomeIcon icon={faEye} onClick={handleClickShowPassword} className='show-hide' />
                                    </div>
                                    <button className='btn'>Sign Up</button>
                                </form>
                            </div>
                            <div style={{ textAlign: "center" }} >Already have an account? <a onClick={() => setSignUp(true)}><strong>Login</strong></a></div>
                        </div>
                    }
                    {/* <div className='form-container'>
                        <div className='form-box'>
                            <form action="">
                                <input type="text" placeholder='Username' />
                                <div className='input-box'>
                                    <input
                                        type={values.showPassword ? "text" : "password"}
                                        onChange={handlePasswordChange("password")}
                                        placeholder='Password'
                                        value={values.password}
                                    />
                                    <FontAwesomeIcon icon={faEye} onClick={handleClickShowPassword} className='show-hide' />
                                </div>
                                <button className='btn'>Login</button>
                            </form>
                        </div>
                        <div style={{textAlign: "center"}} >Don't have any account yet? <a><strong>Sign Up</strong></a></div>
                    </div> */}
                </div>
            </div>
        </>
    )
}
