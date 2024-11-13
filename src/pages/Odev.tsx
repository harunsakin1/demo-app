import React, { useState } from 'react'

function Odev() {
  const [sayi1,setSayi1]=useState(0);
  const [sayi2,setSayi2]=useState(0);
  const [toplam,setToplam]=useState(0);
  const topla=()=>{
    setToplam(sayi1+sayi2);
  }
  return (
    <div className='container'>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="mb-3">
            <label>1.Sayıyı Giriniz : </label>
            <input onChange={evt=>{setSayi1(parseInt(evt.target.value))}} type="number" className='form-control' placeholder='1.Sayı'/>
          </div>
          <div className="mb-3">
            <label>2.Sayıyı Giriniz : </label>
            <input onChange={evt=>{setSayi2(parseInt(evt.target.value))}} type="number" className='form-control' placeholder='2.Sayı'/>
          </div>
          <div className="mb-3">
            <button onClick={topla} className='btn btn-success'>Topla</button>
          </div>
          <div className="mb-3">
            <label>Sonuç : {toplam}</label>
          </div>
        </div>
        <div className="col3"></div>
      </div>
    </div>
  )
}

export default Odev