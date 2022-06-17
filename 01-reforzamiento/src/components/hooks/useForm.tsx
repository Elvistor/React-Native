import { useState } from "react";

export const useForm = <T extends Object>(formulario: T) => {

    const [state, setstate] = useState(formulario);
    

    const onChange = (valor:string, campo: keyof T) =>{
        setstate({
            ...state,
            [campo]: valor
        });
    }

    
  return{
      ...state, 
      formulario: state,
      onChange
   }
  

  }

