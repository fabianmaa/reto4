import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ActualizarUsuario from '../paginas/ActualizarUsuario';

const FormularioUsuarios = ({usuario}) => {
    const { id, identification, name, birthtDay, monthBirthtDay, address, cellPhone, email, password, zone, type, photography } = usuario;
    const [ usuarios, guardarUsuarios] = useState([]);

    fetch("http://129.151.120.50:8076/api/user/all")
    .then((res) => res.json())
    .then((data) => {
        //console.log(data);
        guardarUsuarios(data);
    });

    const actualizarUsuario = id =>{
        {usuarios.map( usuario =>(
            <ActualizarUsuario 
           key={usuario.id}
            usuario={usuario}
           /> ))}
      
    }

    const borrarUsuario = id =>{

        Swal.fire({
            title: 'Quieres borrar este usuario?',
            text: "Esta acción no se puede deshacer",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Bórralo!'
          }).then((result) => {
            if (result.isConfirmed) {
                try{
                    console.log(id);
                    fetch(`http://129.151.120.50:8076/api/user/${id}`,{
                        method: "DELETE",
                        headers: {
                            Accept: "aplication/json",
                            "Content-Type": "aplication/json",
                        },
                      }).then((data) =>{
                         // console.log(data);
                      });   
              Swal.fire(
                'Borrado!',
                'El usuario se borró correctamente.',
                'success'
              );
            } catch (error) {
                console.log(error)
            }
            
        }
      })
}

return( 
    <>
    <div className="w-full px-3 mb-4">
        <div className="p-5 shadow-md bg-white">
            <div className="lg:flex">
                <div className="lg:w-5/12 xl:w-3/12">
               
                  <img src={photography} alt=" avatar usuario " />
                        <div className="sm:flex sm:-mx-2 pl-2">
                            
                        </div>
                        </div>
                        <div className="lg:w-7/12 xl:w-9/12 pl-5">
                        
                        <p className="font-bold text-2xl text-yellow-600 mb-4">{id} </p>
                        
                        <p className="text-gray-600 mb-4">Nombre: {''}
                        <span className="text-gray-700 font-bold">$ {name}</span> 
                        
                        <p className="text-gray-600 mb-4">Email: {''}
                        <span className="text-gray-700 font-bold">{email}</span>

                        <p className="text-gray-600 mb-4">Dirección: {''}
                        <span className="text-gray-700 font-bold">{address}</span> 

                        <p className="text-gray-600 mb-4">Teléfono: {''}
                        <span className="text-gray-700 font-bold">{cellPhone}</span>

                        <p className="text-gray-600 mb-4">Zona: {''}
                        <span className="text-gray-700 font-bold">{zone}</span>

                        <p className="text-gray-600 mb-4">Tipo: {''}
                        <span className="text-gray-700 font-bold">{type}</span>

                        
                    </p>
                    </p>
                    </p>
                    </p>
                    </p>
                    </p>
                    <button
                        onClick={ () => borrarUsuario(usuario.id)}
                        type="submit"
                        className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                       > 
                       Borrar
                       
                       </button>
                       
                       <Link to={`/actualizar-usuario/${usuario.id}`} className=" bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                            Actualizar Usuario
                        </Link>
                        
                        


                       
                </div>
            </div>
        </div>
    </div>
    </>
 );
}

export default FormularioUsuarios;
