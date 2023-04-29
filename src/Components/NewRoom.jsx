import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NewRoom() {
    const navigate = useNavigate()

    return (
        <div className='new-user'>
            <div className='user-box'>
                <div>
                    <label htmlFor="">Username: </label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Room ID:  </label>
                    <input type="text" />
                </div>
                <button className='btn' onClick={() => {navigate('/GroupRoom')}}>Join</button>
            </div>
        </div>
    )
}
