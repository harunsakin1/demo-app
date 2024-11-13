import React from 'react'

interface ITeamCardProps{
    teamNumber: number,
    teamName: string,
    butonaTiklandiOlayi: any
}
function TeamCard(props: ITeamCardProps) {
    const butonaTiklandiOlayi=(tn:number)=>{

    }
    const getTeamColor = () => {
        if (props.teamNumber === 1) return "row text-bg-primary rounded-top-4"
        return "row text-bg-warning rounded-top-4"
    }
    const onClickEvent=(evt:any)=>{
        console.log(props.teamName,' in tahmin butonuna tıklandı');
        props.butonaTiklandiOlayi(props.teamNumber);
    }

    return (
        <div className="m-1 shadow">
            <div className={getTeamColor()}>
                <h1 className="text-center">{props.teamName}</h1>
            </div>
            <div className="row mt-5">
                <h4 className="text-center">Sayiyi tahmin et</h4>
            </div>
            <div className="row w-50 m-auto mt-4">
                <input type="text" className="form-control" />
            </div>
            <div className="row mt-4 justify-content-center pb-5">
                <input onClick={onClickEvent} type="button" value="Tahmin Et" className="btn btn-success" 
                       style={{width: '100px', height: '100px', borderRadius: '100px'}} />
            </div>
        </div>
    )
}

export default TeamCard