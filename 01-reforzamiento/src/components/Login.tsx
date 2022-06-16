import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useReducer } from "react"

interface AuthState {
    validando: boolean,
    token: string | null,
    username: string;
    nombre: string
}

const initialState ={
    validando: true,
    token: null,
    username:'',
    nombre: ''
}
type LoginPayload = {
    nombre:string;
    username:string;
}

type AuthAction = { type: 'logout'} | { type: 'login', payload:LoginPayload};

const authReducer = (state:AuthState, action:AuthAction):AuthState => {

    switch (action.type) {
        case 'logout':
            return{
                validando: false,
                token: null,
                username: '',
                nombre:''
            };
        case 'login':
            return{
                validando: false,
                token: 'ABC123',
                nombre: action.payload.nombre,
                username: action.payload.username
            }
    
        default:
            return state;
    }
}

export const Login = () => {

    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() =>{
            dispatch({type: 'logout'});
        }, 1500);
    }, []);

    const login = () =>{
        dispatch({ 
            type: 'login', 
            payload:{
                nombre: 'Victor',
                username: 'VictorEsco'
            }})
    }

    const logout = () => {
        dispatch({type: 'logout'})
    }

    if (state.validando){
        return(
            <>
            <h3>Login</h3>
            <div className='alert alert-info'>
            Validando...
            </div>
            </>)
    }

    return (
        <>
        { 
            (state.token)
            ? <div className='alert alert-success'> Autenticado como: { state.nombre }</div>
            : <div className='alert alert-danger'> No Autenticado </div>
        }

        { 
            (state.token)
            ? <button
                className='btn btn-danger'
                onClick = { logout }>
                Logout
            </button>
            : <button
                className='btn btn-primary'
                onClick={ login }>
                Login
            </button>
        }      
        </>
    )
}


