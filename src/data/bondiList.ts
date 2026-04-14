import bondis from "../assets/bondis.json";
import type { Bondi } from "../models/bondi"

const arrBondis: Bondi[] = bondis; 

const arrToObject = (list:Bondi[]): Record<number,Bondi> =>{
    const objList = list.reduce <Record<number,Bondi>>((acc, bondi) => {
        acc[bondi.linea] = bondi;
        return acc
    },{})
    return objList
}

const objBondis: Record<number,Bondi> = arrToObject(arrBondis);

export const searchBus = (list:number[]) : Bondi[] =>{
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

