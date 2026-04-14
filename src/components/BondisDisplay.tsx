import type { Bondi } from "../models/bondi";
import { searchBus } from "../data/bondiList";

const BondisDisplay = ({list}:{list:number[]}) => {
    
    const arrList : Bondi[] = searchBus(list);

    return(
        <div>
            {
                arrList.length === 0? "--No hay nada que mostrar--" :
                arrList.map((b)=>{
                return <div className="bondi-content" key={b.linea}>
                <div className="bondi-line" style={{backgroundColor: b.firstLine}}></div>
                <div className="bondi-line" style={{backgroundColor: b.lastLine}}></div>
                <div className="bondi-num" style={{
                    color: b.fontColor,
                    backgroundColor: b.bkg
                }}>{b.linea}</div></div>
            })
            }
        </div> 
    )
}

export default BondisDisplay