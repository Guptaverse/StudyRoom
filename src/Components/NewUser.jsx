import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NewUser() {

    const [close, setClose] = useState(true)

    return (
        <>
            {close ?
                <div className='new-user'>
                    < div className='user-box' >
                        <div className='modal-grp'>
                            <label htmlFor="">Username: </label>
                            <input />
                        </div>
                        <button className='btn'>Create</button>
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
