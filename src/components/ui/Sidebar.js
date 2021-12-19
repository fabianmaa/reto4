import React from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
       return( 
        <div className="md:w-2/6 xl:w-1/5 bg-gray-800">
            <div className="p-6">
            <img src="https://aulapro.co/wp-content/uploads/2021/12/willie-wonka.png"></img>
                <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">Willie Wonka</p>

                <p className="mt-3 text-gray-600">Catálogo de Productos:</p>

                <nav className="mt-10">
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/">Login</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/ordenes">Ordenes</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/productos">Productos</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/usuarios">Usuarios</NavLink>
                </nav>
            </div>
        </div>
     );
}
 
export default Sidebar;