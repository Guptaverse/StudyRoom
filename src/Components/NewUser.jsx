import React from 'react'

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
