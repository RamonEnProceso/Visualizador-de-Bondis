const deleteLetters = (str:string) =>{
    const regex = /[^0-9,]/g
    return str.replace(regex, "");
}

export const stringToArr = (str:string) => {
    return deleteLetters(str).split(",").map((str)=>Number.parseInt(str))
}