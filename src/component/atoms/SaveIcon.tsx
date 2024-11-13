import React from 'react'

interface ISaveIconProps {
    isActive: boolean;
    onClick: () => void;
    index: number;
}

function SaveIcon(props:ISaveIconProps) {

    

    return (
        <>
         <input className='btn-check' type="checkbox" id={`btn-check-outlined-1-${props.index}`} autoComplete='off' checked={props.isActive} onChange={props.onClick}/>
         <label className='btn btn-outline-success' htmlFor={`btn-check-outlined-1-${props.index}`}><i className="fa-regular fa-bookmark"></i></label>
        </>
       )
}

export default SaveIcon