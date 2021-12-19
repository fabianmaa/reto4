import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Usuarios = () => {
   const [ usuarios, guardarUsuarios] = useState([]);

    fetch("http://129.151.120.50:8076/api/user/all")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        guardarUsuarios(data);
    });

       return( 
         <>
         <h1 className="text-3xl font-light mb-4">Usuarios</h1>
            <Link to="/nuevo-usuario" className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                Agregar Usuario
            </Link>
        </>

     );
}
 
export default Usuarios;