import React, { useState } from 'react'
import { IUserOdev3 } from '../../models/IUserOdev3'

function Odev3Component(user:IUserOdev3) {
    const [isActive,setIsActive]=useState(user.isActive);
    const checkedEvent=(evt:any)=>{
        setIsActive(evt.target.checked);
    }
    
    const getBodyClass=(state:boolean)=>{
        return state?"col-3 border m-3 rounded-3 shadow p-4 text-bg-success text-center"
        :"col-3 border m-3 rounded-3 shadow p-4 text-bg-danger text-center"
    }
  return (
    <div  className={getBodyClass(isActive)}>
                            <div className="mb-3 d-flex justify-content-center">
                                <img src={user.avatar} className='border rounded-circle'/>
                            </div>
                            <div className='mb-3 form-check form-switch'>
                                <input onChange={checkedEvent} 
                                    className="form-check-input" type="checkbox" defaultChecked={isActive} />
                            </div>
                        </div>
  )
}

export default Odev3Component