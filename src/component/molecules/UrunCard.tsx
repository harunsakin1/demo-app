import React, { useState } from 'react'
import LikeIcon from '../atoms/LikeIcon'
import CommentIcon from '../atoms/CommentIcon'
import SaveIcon from '../atoms/SaveIcon'


interface IUrunCardProps{
    index: any,
    data: any
}

function UrunCard(props: IUrunCardProps) {
    const [likeActive, setLikeActive] = useState(false);
    const [saveActive, setSaveActive] = useState(false);
    const [commentActive, setCommentActive] = useState(false);
  return (
    <div key={props.index} className="col-3 shadow border m-3 rounded-2 ">
                            <div className="row justify-content-center p-3 " >
                              <img src={props.data.image} style={{width:'75%', height:'75%'}}  />
                            </div>
                            <div className="row mt-5">
                                <label style={{fontWeight:'bold'}}>{props.data.tur}</label>
                            </div>
                            <div className="row mt-2">
                                <label>{props.data.ad}</label>
                            </div>
                            <div className="row mt-3">
                                <label>{props.data.fiyat}</label>
                            </div>
                            <div className="row mt-2 mb-2">
                                <div className="col-2">
                                    <LikeIcon isActive={likeActive} 
                                    onClick={() => setLikeActive(!likeActive)} 
                                    index={props.index}/>
                                    
                                </div>
                                <div className="col-2">
                                    <SaveIcon
                                    isActive={saveActive} 
                                    onClick={() => setSaveActive(!saveActive)}
                                    index={props.index} />
                                </div>
                                <div className="col-2">
                                    <CommentIcon 
                                    isActive={commentActive} 
                                    onClick={() => setCommentActive(!commentActive)}
                                    index={props.index}/>
                                </div>
                            </div>
                        </div>
  )
}

export default UrunCard