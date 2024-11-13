import React from 'react'
import { IUserProfile } from '../../models/IUserProfile'

interface IUserProfileProps{
    userProfile: IUserProfile,
    isAdmin: boolean
}

function UserProfile(props: IUserProfileProps) {
  return (
    <>
                <div className="row m-3 justify-content-center">
                    <img src={props.userProfile.photo} style={{display:'inline-block',width:'200px',borderRadius:'100%'}} />
                </div>
                <div className="row m-3">
                    <input type="text" className='form-control' placeholder='Kullanıcı adı' value={props.userProfile.userName}/>
                </div>
                <div className="row m-3">
                    <input type="password" className='form-control' placeholder='Şifre' value={props.userProfile.password}/>
                </div>
                <div className="row m-3">
                    <input type="tel" className='form-control' placeholder='Telefon No' value={props.userProfile.phone}/>
                </div>
                <div className="row d-grid m-3">
                    <button className='btn btn-success'>Bilgilerimi Güncelle</button>
                </div>
    </>
  )
}

export default UserProfile