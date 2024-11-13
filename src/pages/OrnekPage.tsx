import React, { useState } from 'react'
import CheckIcons from '../component/molecules/CheckIcons';
import OzelCheckBox from '../component/atoms/OzelCheckBox';
function OrnekPage() {

    
    console.log('ornek page render');
    
  return (
        <div className='container'>
            <div className="row">
                <h1>Uzmanlık Yaptığınız Alanları Seçiniz.</h1>
                <OzelCheckBox name={'Yazilim'} />
                <OzelCheckBox name={'Donanım'} />
                <OzelCheckBox name={'Network'} />
                <OzelCheckBox name={'Architect'} />
                <OzelCheckBox name={'Müdür'} />
                <OzelCheckBox name={'Şef'} />
                
                <div className="mb-2 mt-2">
                    <button className='btn btn-danger'>DENETLE</button>
                </div>
                <CheckIcons yazilim={false}/>
            </div>
        </div>
  )
}

export default OrnekPage