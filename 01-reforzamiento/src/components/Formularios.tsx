import { useForm } from "./hooks/useForm"


export const Formularios = () => {

    const {formulario, email, password, onChange} = useForm({
        email: 'test@email.com',
        password: 'Contraseña'
    });

  return (
    <>
      <h3> Formularios</h3>
      <input 
        type="text"
        className='form-control'
        value= {email}
        placeholder = 'Email' 
        onChange = {({ target }) => onChange( target.value ,'email')} />

      <input 
        type="password"
        className='form-control mt-2 mb-2'
        placeholder = 'password'
        value= { password }
        onChange = {({ target }) => onChange( target.value ,'password')}/>
    <code>
        <pre>{JSON.stringify(formulario, null, 2)} </pre>
    </code>
    </>
  )
}

