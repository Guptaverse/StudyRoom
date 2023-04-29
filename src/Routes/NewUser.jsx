import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NewUser() {

    return (
        <div className='new-user'>
            <div className='user-box'>
                <div>
                    <label htmlFor="">Username: </label>
                    <input type="text" />
                </div>
                <button className='btn'>Create</button>
            </div>
        </div>
    )
}
