import { authReducer } from "../../auth/authReducer";
import { types } from "../../type/types";
import { demoAuthTodo } from "../fixtures/demoAuthTodo";

describe('pruebas en authReducer', () => {

    test('debe de devolver el  valor por defecto ', () => {
        const state = authReducer(demoAuthTodo, {});
        expect(state).toEqual(demoAuthTodo);
    })

    test('debe de autenticar y colocar el name del user', () => {
        const state = authReducer( {} , {
            type: types.login,
            payload:demoAuthTodo[0]
        });
        expect(state.user).toEqual(demoAuthTodo[0].user);
    })

    test('debe de borrar el user y pasar el logged a false', () => {
        const state = authReducer( demoAuthTodo[0] , {
            type: types.logout,
        });
        
        expect(state.logged).toBe(false);
        expect(state).toEqual({logged:false});
    
    })

})