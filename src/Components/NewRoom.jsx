import React from 'react'

export default function NewRoom() {
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
                <button className='btn'>Join</button>
            </div>
        </div>
    )
}
