import React from 'react'
interface IGameBallProps{
    isFill: boolean, // toplar dolu mu boş mu olsun?
    teamNumber: number // 1. takım ya da 2. takım belirtmek için 
}
/***
 * 
 * public Object getTasarim(Musteri musteri){
 *  musteri.ad, musteri.adres
 * }
 * 
 * public String renkVer(int tur){
 *  if(tur == 1) return "kırmızı";
 *  return "yeşil";
 * }
 * 
 * getTasarim();
 */
function GameBall(ahmetAmcaNasilsin: IGameBallProps) {
  
    const borderColor = ()=>{
        if(ahmetAmcaNasilsin.teamNumber === 1)
            return '1px solid rgb(15,99,253)' // mavi
        return '1px solid rgb(255,185,11)' // sarı
    }
    const backGroundColor = ()=>{
        if(ahmetAmcaNasilsin.teamNumber === 1)
            return 'rgb(15,99,253)' // mavi
        return 'rgb(255,185,11)' // sarı
    }
    console.log('GAME BALL RENDER');
    
  return (
        <>
            {
                ahmetAmcaNasilsin.isFill
                ? <div style={{  // içi dolu top
                    display: 'inline-block', width: '35px', height: '35px', margin:'3px',
                    borderRadius: '50%', border:borderColor(), backgroundColor: backGroundColor()
                    }}>
            
                </div>
                : <div style={{ // içi boş top
                    display: 'inline-block', width: '35px', height: '35px', margin:'3px',
                    borderRadius: '50%', border:borderColor()
                    }}>
            
                </div>
            }
        </>
  )
}

export default GameBall