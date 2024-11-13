import React, { useState } from 'react'
import swal from 'sweetalert';

function Login() {
    
    const [userName,setUserName]=useState('');
    const [password, setPassword] = useState('');
    /**
     * Java Class değişkenleri korumak için encapsulation
     * private String userName;
     * public getUserName();
     * public setUserName();
     * 
     */
    const [isEmpty,setIsEmpty]=useState(false);
    const [isUserEmpty,setIsUserEmpty]=useState(false);
    const [isPasswordEmpty,setIsPasswordEmpty]=useState(false);
    const doLogin=()=>{
            setIsUserEmpty(userName==='');
            setIsPasswordEmpty(password==='');
        if(userName ===''||password ===''){
            setIsEmpty(true);           
            return;
        }
        else{
            setIsEmpty(false);
        }
        // Get işleminde sadece url yeterli iken, sunucuya veri iletilecek işlemlerde put, delete, post işlemlerinde fetch için diğer parametreler eklenmelidir.
        fetch('http://localhost:9090/v1/dev/user/do-login',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'userName': userName,
                'password': password
            })
        }).then(data=>data.json()).then(res=>{
            if(res.code===200){
                swal('Giriş Başarılı.');
            }
            else{
                swal(res.message);
            }
        })
    }
    console.log('render');
    

  return (
    <div className='container'>
        <div className='row mt-4'>
            <div className="col-3"></div>
            <div className="col-6">
                {
                    isEmpty
                    ?
                    <div className='alert alert-warning' role='alert'>
                    <h4 className='alert-heading'>UYARI</h4>
                    <hr />
                    <p>Kullanıcı adı ve şifre boş geçilemez!</p>
                    </div>
                    : null

                }
               {
                isUserEmpty
                ?
                <div className="mb-3">
                    <label style={{color:'red'}} className='form-label'>Kullanıcı Adı</label>
                    <input style={{borderColor:'red'}} onChange={evt=>{setUserName(evt.target.value)}} type="text" className='form-control' />
                </div>
                :
                <div className="mb-3">
                    <label className='form-label'>Kullanıcı Adı</label>
                    <input onChange={evt=>{setUserName(evt.target.value)}} type="text" className='form-control' />
                </div>
               }
                
                {
                    isPasswordEmpty
                    ?
                <div className="mb-3">
                    <label style={{color:'red'}} className='form-label'>Şifre</label>
                    <input style={{borderColor:'red'}} onChange={evt=>{setPassword(evt.target.value)}} type="password" className='form-control' />
                </div>
                    :
                <div className="mb-3">
                    <label className='form-label'>Şifre</label>
                    <input onChange={evt=>{setPassword(evt.target.value)}} type="password" className='form-control' />
                </div>

                }
                               
                <div className="mb-3">
                    <button onClick={doLogin} className='btn btn-success'>Giriş</button>
                </div>
            </div>
            <div className="col-3"></div>
        </div>
    </div>
  )
}

export default Login;