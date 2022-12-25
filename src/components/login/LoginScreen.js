import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../type/types';


export const LoginScreen = () => {
    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext)

    const [ { userName }, handleInputChanGet ] = useForm({ userName: '' }) ;

    const handleLogin = (event) => {

        event.preventDefault();

        navigate('/', { replace: true })

        dispatch({
            type: types.login,
            payload: { name: userName },
        })
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
