import React from 'react'
import {dataProductList,dataProperties} from '../utils/data'
import UrunFiltrelemeKismi from '../component/molecules/UrunFiltrelemeKismi'
import UrunCard from '../component/molecules/UrunCard'
function UrunTablosu() {
  return (
    <div className="container">
        <div className="row border shadow mt-5 p-2 rounded-3" >
            {
                dataProperties.map((data,index)=>{
                    return(
                        <UrunFiltrelemeKismi key={index} data={data}/>
                    )
                })
            }
        </div>
        <div className="row border shadow mt-5 p-2 rounded-3 justify-content-center rounded-1">
            {
                dataProductList.map((data,index)=>{
                    return(
                        <UrunCard index={index} data={data}/>
                    )
                })
            }
            
        </div>
    </div>
  )
}

export default UrunTablosu