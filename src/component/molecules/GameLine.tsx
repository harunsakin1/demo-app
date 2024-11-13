import React from 'react'
import GameBall from '../atoms/GameBall'

interface IGameLineProps{
    teamNubmer: number, // Takım numarası: 1 veya 2
    pointList: boolean[] // Bildikleri soru sayısı
}

function GameLine(props: IGameLineProps) {
  console.log('GAME LINE RENDER');
  
  return (
    <div className="col-12 p-2 shadow rounded-4 d-flex justify-content-evenly" style={props.teamNubmer===2?{flexDirection:'row-reverse'}:{}}>
        {
          
            // Bize gelen true, false listesini dönerek topları listeliyoruz.
            props.pointList.map((data,index)=>{
                return(
                <GameBall key={index} isFill={data} teamNumber={props.teamNubmer} />    
                )
            })
        }
            
                
    </div>
  )
}

export default GameLine