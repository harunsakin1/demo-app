import React from 'react'

interface ICommentIconProps {
    isActive: boolean;
    onClick: () => void;
    index: number;
}

function CommentIcon(props:ICommentIconProps) {
    return (
        <>
         <input className='btn-check' type="checkbox" id={`btn-check-outlined-2-${props.index}`} autoComplete='off' checked={props.isActive} onChange={props.onClick}/>
         <label className='btn btn-outline-success' htmlFor={`btn-check-outlined-2-${props.index}`}><i className="fa-regular fa-comment"></i></label>
        </>
       )
}

export default CommentIcon