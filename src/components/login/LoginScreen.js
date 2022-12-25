import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../type/types';


export const LoginScreen = () => {
    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext)

    const [{ userName }, handleInputChanGet] = useForm({ userName: '' });

    const [validName, setValidName] = useState(null);

    const handleLogin = (event) => {

        event.preventDefault();

        if (userName.trim().length <= 3) return setValidName(false);

        setValidName(true);

        dispatch({
            type: types.login,
            payload: { name: userName },
        })

        navigate('/', { replace: true })


    }
    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr />
            <form onSubmit={handleLogin}>
                <input
                    type={'text'}
                    autoComplete='off'
                    placeholder={'Nombre de usuario'}
                    className={'form-control'}
                    name={'userName'}
                    value={userName}
                    onChange={handleInputChanGet}
                />
                {
                    (validName === !!validName)
                    &&
                    <div className='alert alert-danger'>
                        Tu nombre de usuario requiere como minimo 4 caracteres
                    </div>
                }
                <button
                    type='submit'
                    className='btn btn-primary'
                >
                    Login
                </button>
            </form>
        </div >
    )
}

//(validName === !!validName) validName se niega 2 veces porque su estado inicial es null
// la negacion de !null (!validName) es true
// la doble negacion de un null lo hace false
//por que se niega el true
//(validName === !!validName) la condicion al inicio no se cumple porque cuando (validName) no tiene nada es null y no salta el aviso
// el aviso no salta por que es un (null === false)
// luego de que  se ponga un name con menos caracteres de los necessarios queda
//( flase === false ) y ahi se cumple la condicion
// y salata el aviso
