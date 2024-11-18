import React from 'react'
import {dataProductList,dataProperties} from '../utils/data'
import UrunFiltrelemeKismi from '../component/molecules/UrunFiltrelemeKismi'
import UrunCard from '../component/molecules/UrunCard'
function UrunTablosu() {
    const kategoriList=()=>{
        return dataProperties.map((data,index)=>{
            return(
                <UrunFiltrelemeKismi key={index} data={data}/>
            )
        })
    }

    const urunList=()=>{
        return dataProductList.map((data,index)=>{
            return(
                <UrunCard index={index} data={data}/>
            )
        })
    }
  return (
    <div className="container">
        <div className="row border shadow mt-5 p-2 rounded-3 justify-content-center ">
            <div className="col-8">
                <div className="row">
                    {
                    kategoriList()
                    }
                </div>
            </div>
        
        </div>
        <div className="row border shadow mt-5 p-2 rounded-3 justify-content-center ">
            {
                urunList()
            }
            
        </div>
    </div>
  )
}

export default UrunTablosu