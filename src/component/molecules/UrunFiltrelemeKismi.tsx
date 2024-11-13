import React from 'react'

interface IUrunFiltreProps{
    key: any,
    data: any
}

function UrunFiltrelemeKismi(props:IUrunFiltreProps) {
  return (
                        <div key={props.key} className="col-2 ">                            
                            <input className='form-check-input' type="checkbox"/>
                            <label className='form-check-label'>{props.data}</label>
                        </div>
  )
}

export default UrunFiltrelemeKismi