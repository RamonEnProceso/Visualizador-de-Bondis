import { useState } from "react";
import { stringToArr } from "../utilities/fixString";

const BondiInput = ({ onSubmit }: { onSubmit: (list: number[]) => void }) => {

    const [message, setMessage] = useState<string>('');

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const list : number[] = stringToArr(message)
        onSubmit(list)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="inputList" value={message} type="text" 
            autoComplete="off" onChange={(e)=> setMessage(e.target.value)}/>
            <button type="submit">{">"}</button>
        </form>  
    );
}

export default BondiInput