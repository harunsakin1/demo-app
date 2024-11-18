import React, { useState } from 'react'

function LikeButton() {
    const [isLike, setIsLike] = useState(false);
    const btnLike = ()=>{
        if(isLike) 
            return <button onClick={()=>setIsLike(false)} type="button" className='btn btn-success'> 
                            <i className="fa-solid fa-heart"></i>
                    </button>
        return <button onClick={()=>setIsLike(true)} type="button" className='btn btn-outline-success'> 
                    <i className="fa-regular fa-heart"></i>
                </button>;
    }    
  return (
    <>
    {
        btnLike()
    }
    </>
  )
}

export default LikeButton