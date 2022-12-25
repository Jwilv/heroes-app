import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../type/types';


export const Navbar = () => {
    //esto sirve para desestrcturar una propiedo de un obejeto ( user )
    // y cons :{} al aldo podemos desestructurar la propiedad que queremos del objeto que ya desestructuramos
    // ej const { user:{name} ( aca sacamos la propiedad del objeto que desestructuramos ) } = useContext(AuthContext)
    //es una segunda desestructuracion que se puede hacer dentro de la primera 
    const { user: { name }, dispatch } = useContext(AuthContext);

    const navegate = useNavigate();

    const handleLogout = () => {

        dispatch({
            type:types.logout,
        });

        navegate('/login', {replace : true});
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className="nav-item nav-link"
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/search"
                    >
                        Buscar
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>{name}</span>
                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}