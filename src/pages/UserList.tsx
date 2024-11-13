import React, { useState } from 'react'

function UserList() {
    /**
     * useState, bir değişkeni sarmalayarak react tarafından yönetilmesini sağlar. 
     * Böylece bu değişkenin state'inde olacak bir değişiklik bilinir ve ilgili component tekrardan render edilir.
     * Böylece değişkende olan değişiklik sayfaya yansıtılmışi olur.
     * useState(DEFAULT_VALUE) eğer bir değişkene ilk başlangıç değeri atayacaksanız parantezleri içerisine değer vermeniz yeterlidir.
     * DİKKAT!!
     * Bir değişkenin değiştiğinin react tarafından anlaşılması için set methodunun mutlaka tetiklenmesi gerekli.
     * Bu nedenle değişkenin değerini = atama operatörü kullanarak değiştirmek sayfada değişikliğe neden olmaz.
     */
  const[userList,setUserList]=useState( [{
    "userName": "rbumpas0",
    "name": "Rani Bumpas",
    "isActive": true
  }, {
    "userName": "ewindridge1",
    "name": "Esra Windridge",
    "isActive": true
  }, {
    "userName": "lverne2",
    "name": "La verne Andress",
    "isActive": false
  }, {
    "userName": "gburnham3",
    "name": "Gardy Burnham",
    "isActive": true
  }, {
    "userName": "tabrashkin4",
    "name": "Talia Abrashkin",
    "isActive": false
  }, {
    "userName": "gchittock5",
    "name": "Georgie Chittock",
    "isActive": true
  }, {
    "userName": "rgreenmon6",
    "name": "Reube Greenmon",
    "isActive": true
  }, {
    "userName": "mcundey7",
    "name": "Megan Cundey",
    "isActive": true
  }, {
    "userName": "dwilsone8",
    "name": "Dyane Wilsone",
    "isActive": true
  }, {
    "userName": "snorwood9",
    "name": "Scotty Norwood",
    "isActive": false
  }, {
    "userName": "jaspolea",
    "name": "Jeniffer Aspole",
    "isActive": false
  }, {
    "userName": "mparissb",
    "name": "Malissa Pariss",
    "isActive": true
  }, {
    "userName": "spynerc",
    "name": "Sax Pyner",
    "isActive": false
  }, {
    "userName": "neynaudd",
    "name": "Nicola Eynaud",
    "isActive": false
  }, {
    "userName": "cdichee",
    "name": "Claudius Diche",
    "isActive": true
  }]);
  
  /**
   * DİKKAT !!!
   * Bir arrow function eğer ek parametre almayacaksa ilgili methodların gövdelerine direkt sarılarak kullanılabilir. Mesela : 
   * 1.Adım : 
   * const checkedEvent = (evt: any){}
   * 2.Adım :
   * onChange={checkedEvent}
   * Buradaki kullanım onChange props'unun içinde zaten evt parametresi olduğu için ek bir kullanıma gerek kalmadan checkedEvent eklenebiliyor.
   * Ancak bir arrow method içinde özel eke parametreler istiyor ise ilgili handle method ayrı bir gövdeye sahip olacak şekilde kodlanmalıdır. Mesela : 
   * 1.Adım : 
   * const checkedEvent = (isActive:boolean,index:number)=>{}
   * 2.Adım : 
   * onChange={evt=>{checkedEvent(DEĞER,DEĞER)}}
   */
  const checkedEvent = (isActive:boolean,index:number)=>{
        let list=userList.map((data,uIndex)=>{
            if(uIndex==index) data.isActive=isActive;
            return data;
        })
        setUserList(list);
        // Bunu bir sunucuya ilgili kullanıcının değerini değiştirmek için gönderdiğinizi düşünün.
        
  }
  console.log('render');
  
  return (
    <div className="container">
        <div className="row mt-5 mb-3">
            <input type="text" className="form-control" />
        </div>
        <div className="row mt-3 justify-content-center">
            {
                userList.map((user,index)=>{
                    return(
                        <div key={index}  className={user.isActive?"col-3 border m-2 rounded-3 shadow p-4 text-bg-success":"col-3 border m-2 rounded-3 shadow p-4 text-bg-secondary"}>
                            <div className='mb-3'>
                                <label className='form-label'>UserName....: {user.userName}</label>                    
                            </div>
                            <div className='mb-3'>
                                <label className="form-label">Name........: {user.name}</label>                  
                            </div>
                            <div className='mb-3 form-check form-switch'>
                                <input onChange={evt=>{
                                    checkedEvent(evt.target.checked,index)}} 
                                    className="form-check-input" type="checkbox" defaultChecked={user.isActive} />
                            </div>
                        </div>
                    ) 
                })
            }            
        </div>
    </div>
  )
}

export default UserList