import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NewRoom() {
    const navigate = useNavigate()
    const [close, setClose] = useState(true)

    return (
        <>
            {close ?
                <div className='new-user'>
                    < div className='user-box' >
                        <div className='modal-grp'>
                            <label htmlFor="">Username: </label>
                            <input type="text" />
                        </div>
                        <div className='modal-grp'>
                            <label htmlFor="">Room ID:  </label>
                            <input type="text" />
                        </div>
                        <button className='btn' onClick={() => { navigate('/GroupRoom') }}>Join</button>
                        <div className='close' onClick={() => setClose(!close)}>
                            <FontAwesomeIcon icon={faCircleXmark} spin spinReverse />
                        </div>
                    </div >
                </div >
                :
                ' '
            }
        </>
    )
}
