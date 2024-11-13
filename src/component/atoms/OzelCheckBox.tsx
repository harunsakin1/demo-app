import React from 'react'

function OzelCheckBox(props: any) {
  return (
                <div>
                    <input className='form-check-input me-2' type="checkbox"/>
                    <label>{props.name}</label>
                </div>
  )
}

export default OzelCheckBox