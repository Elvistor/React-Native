//import { TiposBasicos } from "./tipescrypt/TiposBasicos"

import { Contador } from "./components/Contador"
import { ContadorConHook } from "./components/ContadorConHook"

//import { Funciones } from "./tipescrypt/Funciones"
//import { ObjetosLiterales } from "./tipescrypt/ObjetosLiterales"


const App = () => {
  return (
    <div className='mt-2'>
      <h1> Introducción a Typescript - React</h1>
      <hr />
      {/*<TiposBasicos/>*/}
      {/*<ObjetosLiterales/>*/}
      {/*<Funciones/>*/}
      {/*<Contador/>*/}
      <ContadorConHook/>
    </div>
  )
}

export default App
