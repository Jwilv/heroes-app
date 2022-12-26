import React from 'react'
import { render, shallow } from 'enzyme'
import { AuthContext } from "../../auth/AuthContext"
import { PrivateRouter } from "../../routers/PrivateRouter"
import { demoAuthTodo } from "../fixtures/demoAuthTodo"


describe('pruebas en <PrivateRouter />', () => {

    const { user } = demoAuthTodo[0]
    const Title = () => {
        return <h1>hola mundo</h1>
    }

    const authenticated = shallow(
        <AuthContext.Provider value={{ user }}>
            <PrivateRouter children={<Title />} />
        </AuthContext.Provider>);


    test('debe de mostrar el componente si esta autenticado', () => {
        expect(authenticated.find('Title').exists() ).toBe(true)
    })

    test('debe de mostrar el componente si esta autenticado', () => {
        expect(authenticated).toMatchSnapshot()
    })
})