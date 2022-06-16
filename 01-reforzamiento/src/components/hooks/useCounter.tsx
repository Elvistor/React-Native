import { useState } from 'react';


export const useCounter = (initial:number) => {

    const [valor, setvalor] = useState<number>(initial);  

    const acumular = (numero:number) =>{
        setvalor(valor + numero);
    }
    return {
        valor,
        acumular
    }
}
