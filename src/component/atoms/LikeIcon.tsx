import React from 'react'

interface ILikeIconProps {
    isActive: boolean;
    onClick: () => void;
    index: number;
}

function LikeIcon(props: ILikeIconProps) { 
  return (
    <>
        <input className='btn-check' type="checkbox" id={`btn-check-outlined-${props.index}`} autoComplete='off' checked={props.isActive} onChange={props.onClick} />
        <label className='btn btn-outline-success' htmlFor={`btn-check-outlined-${props.index}`}><i className="fa-regular fa-heart"></i></label>
    </>
                             
  )
}

export default LikeIcon