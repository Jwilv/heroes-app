import React from 'react'
import { shallow } from 'enzyme'
import { AppRouter } from '../../routers/AppRouter'

describe('pruebas en <AppRouter />', () => {

    const wrapper = shallow( <AppRouter /> )

    test('debe de mostrar el login si no esta autenticado', () => {
        
        expect(wrapper).toMatchSnapshot();
    })
})