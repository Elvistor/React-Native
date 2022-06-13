
interface Persona{
    nombre:string,
    edad:number,
    direccion:Direcion
}

interface Direcion{
    pais:string,
    casaNo:number
}

export const ObjetosLiterales = () => {
     
    const persona: Persona = {
        nombre: 'Victor',
        edad: 35,
        direccion: {
            pais: 'Argentina',
            casaNo: 615

        }
    }

  return (
    <>
      <h3>Persona</h3>
      <code>
        <pre>
            { JSON.stringify( persona, null, 2)}
        </pre>
      </code>
    </>
  )
}

