import { authReducer } from "../../auth/authReducer";
import { demoAuthTodo } from "../fixtures/demoAuthTodo";

describe('pruebas en authReducer', () => {

    test('debe de devolver el  valor por defecto ', () => {
        const state = authReducer(demoAuthTodo, {});
        expect(state).toEqual(demoAuthTodo);
    })
})