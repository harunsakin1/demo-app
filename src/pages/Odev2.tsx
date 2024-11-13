import React, { useState } from 'react'
import swal from 'sweetalert';

function Odev2() {
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [rePassword,setRePassword]=useState('');
    const [age,setAge]=useState(0);
    const [successRegister,setSuccessRegister]=useState(false);
    const [passwordMatch, setPasswordMatch] = useState(false);

    

    const register=()=>{
        if(password!==rePassword){
            setSuccessRegister(false);
            swal('Şifreler uyuşmuyor.');
        }
        else{
            setSuccessRegister(true);
            swal('Kayıt başarılı.');
        }
    }
  return (
    <div className="container">
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <div className="mb-3">
                    <label>Username : </label>
                    <input onChange={evt=>{setUserName(evt.target.value)}} type="text" className='form-control' />
                </div>
                <div className="mb-3">
                    <label>Password : </label>
                    <input onChange={evt=>{setPassword(evt.target.value)}} type="password" className='form-control' />
                </div>
                <div className="mb-3">
                    <label>Re-Password : </label>                   
                    <input onChange={evt=>{
                        setRePassword(evt.target.value)
                        if(evt.target.value===password) {setPasswordMatch(false);}
                        else{setPasswordMatch(true);}
                        // setPasswordMatch(!(evt.target.value===password)) // eğer şifreler uyuşmuyor ise TRUE
                        }} type="password" className='form-control' />
                    {
                        passwordMatch
                        ?
                        <label className='text-danger'>*Şifreler uyuşmuyor!</label>
                        :
                        null
                    }
                    
                </div>
                <div className="mb-3">
                    <label>Age : </label>
                    <input onChange={evt=>{setAge(parseInt(evt.target.value))}} type="number" className='form-control'  />
                </div>
                <div className="mb-3 d-grid">
                    <button onClick={register} className='btn btn-success'>Register</button>
                </div>
                {
                    successRegister
                    ? 
                    <div>
                        <div className="mb-3">
                            <label>Username : {userName}</label>
                        </div>
                        <div className="mb-3">
                            <label>Password : {password}</label>
                        </div>
                        <div className="mb-3">
                            <label>Age : {age}</label>
                        </div>
                    </div>
                    
                    :null
                }               
            </div>
            <div className="col-3"></div>
        </div>
    </div>
  )
}

export default Odev2