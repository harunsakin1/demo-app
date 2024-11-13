import React, { useState } from 'react'
import Odev3Component from '../component/molecules/Odev3Component';
import dataList from '../utils/MOCK_DATA.json'

function Odev3() {
    const[userList,setUserList]=useState(dataList)
    const checkedEvent = (isActive:boolean,index:number)=>{
    let list=userList.map((data,uIndex)=>{
        if(uIndex==index) data.isActive=isActive;
        return data;
    })
    setUserList(list);   
    
}
  return (
    <div className="container">
        <div className="row mt-5 justify-content-center">
            {
                userList.map((user,index)=>{
                    return(
                        <Odev3Component key={index} id={user.id} avatar={user.avatar} isActive={user.isActive}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Odev3