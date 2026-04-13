import bondis from "../assets/bondis.json";
import type { Bondi } from "../models/bondi";

const arrBondis: Bondi[] = bondis; 

const arrToObject = (list:Bondi[]): Record<number,Bondi> =>{
    const objList = list.reduce <Record<number,Bondi>>((acc, bondi) => {
        acc[bondi.linea] = bondi;
        return acc
    },{})
    return objList
}

const objBondis: Record<number,Bondi> = arrToObject(arrBondis);

const searchBus = (list:number[]) : Bondi[] =>{
    const arrList = list.map((n)=>{
        const bondi = objBondis[n];
        if(bondi){
            return bondi
        }
        return null
    }).filter((b:Bondi|null): b is Bondi=>{
        return  b !== null
    })

    return arrList
}

const BondisDisplay = ({list}:{list:number[]}) => {
    
    const arrList : Bondi[] = searchBus(list);

    return(
        <div>
            {arrList.map((b)=>{
                return <div className="bondi-content" key={b.linea}>
                <div className="bondi-line" style={{backgroundColor: b.firstLine}}></div>
                <div className="bondi-line" style={{backgroundColor: b.lastLine}}></div>
                <div className="bondi-num" style={{
                    color: b.fontColor,
                    backgroundColor: b.bkg
                }}>{b.linea}</div></div>
            })}
        </div> 
    )
}

export default BondisDisplay