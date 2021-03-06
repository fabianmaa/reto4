import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Productos = () => {
   const [ productos, guardarProductos] = useState([]);

    fetch("http://129.151.120.50:8076/api/chocolate/all")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        guardarProductos(data);
    });

       return( 
         <>
         <h1 className="text-3xl font-light mb-4">Productos</h1>
            <Link to="/nuevo-producto" className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                Agregar Producto
            </Link>
        </>

     );
}
 
export default Productos;
