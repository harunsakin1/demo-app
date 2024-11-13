import React, { useState } from 'react'
import { IUser } from '../../models/IUser'
/**
 * TypeScript,
 * JS -> Tip güvenliği olmayan bir dil. Bu nedenle daha öngörülebilir bir yapı kurmak için TS geliştirilmiş.
 * Burada değişkenler önceden belirlenebiliyor ve ayrıca kendi tiplerimizi yaratabiliyoruz. JAVA'da class'a denk geliyor.
 *  
 */
function UserComponent(user: IUser) {
    const [isActive,setIsActive]=useState(user.isActive);
    const checkedEvent=(evt:any)=>{
        setIsActive(evt.target.checked);
    }
    console.log('render user component',user.userName);
    const getBodyClass=(state:boolean)=>{
        return state?"col-3 border m-2 rounded-3 shadow p-4 text-bg-success":"col-3 border m-2 rounded-3 shadow p-4 text-bg-secondary"
    }
  return (
        <div  
            className={getBodyClass(isActive)}>
            <div className='mb-3'>
                <label className='form-label'>UserName....: {user.userName}</label>                    
            </div>
            <div className='mb-3'>
                <label className="form-label">Name........: {user.name}</label>                  
            </div>
            <div className='mb-3 form-check form-switch'>
                <input onChange={checkedEvent} 
                    className="form-check-input" type="checkbox" defaultChecked={isActive} />
            </div>
        </div>
  )
}

export default UserComponent