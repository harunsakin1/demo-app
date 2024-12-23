import React from 'react'
import UserProfile from '../component/molecules/UserProfile'
import { IUserProfile } from '../models/IUserProfile'

function UserPage() {
    const userProfile:IUserProfile={
        photo: 'https://picsum.photos/100/100',
        userName:'harunsakin',
        password:'Harunsakin16+',
        phone:'0538 088 5993'
    }
  return (
    <div className="container">
        <div className="row mt-5 justify-content-center">
            <div className="col-5 border p-4">
                <UserProfile userProfile={userProfile} isAdmin={false}/>
            </div>
        </div>
    </div>
  )
}

export default UserPage