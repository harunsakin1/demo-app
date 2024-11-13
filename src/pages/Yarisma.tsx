import React, { useState } from 'react'
import GameLine from '../component/molecules/GameLine'
import TeamCard from '../component/molecules/TeamCard';


function Yarisma() {
  const [aTeamSize,setATeamSize]=useState(3);
  const [bTeamSize,setBTeamSize]=useState(5);
  const [aTeamList,setATeamList]=useState([true,true,true,false,false,false,false,false,false,false,false,false,false,false,false]);
  const [bTeamList,setBTeamList]=useState([true,true,true,true,true,false,false,false,false,false,false,false,false,false,false]);
  
  
  const tiklama=(teamNumber: number)=>{
    if(teamNumber==1){
      aTeamList[aTeamSize]=true;
      setATeamList(aTeamList);
      setATeamSize(aTeamSize+1);
    }
    else{
      bTeamList[bTeamSize]=true;
      setBTeamList(bTeamList);
      setBTeamSize(bTeamSize+1);
    }
  }
  console.log('YARISMA PAGE RENDER');
  
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-3">
              <TeamCard butonaTiklandiOlayi={tiklama} 
              teamName='A Takımı' teamNumber={1}/>
            </div>
            <div className="col-6 d-flex flex-wrap align-content-around" style={{minHeight:'400px'}}>
                <GameLine teamNubmer={1} pointList={aTeamList}/>
                <GameLine teamNubmer={2} pointList={bTeamList}/>
            </div>
            <div className="col-3">
              <TeamCard butonaTiklandiOlayi={tiklama}  teamName='B Takımı' teamNumber={2}/>
            </div>
        </div>
    </div>
  )
}

export default Yarisma