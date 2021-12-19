import React, {useState, useEffect} from 'react';
import { Link, useParams,useNavigate  } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2'; 
import Sidebar from '../ui/Sidebar';


const DetalleUsuarios = () => {
 // Hook para redireccionar
 const navigate = useNavigate();
 const formik = useFormik({
   initialValues: {
      id:'', 
      identification:'',
      name: '',
      birthtDay: '',
      monthBirthtDay: '',
      address: '',
      cellPhone: '',
      email: '',
      password: '',
      zone: '',
      type: '',
   }, 
   onSubmit: datos => {
    Swal.fire({
        title: 'Quieres crear el usuario?',
        text: "Al dar click, crearás un usuario nuevo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, crea este usuario!'
      }).then((result) => {
        if (result.isConfirmed) {
            try{ console.log(datos);
                fetch(`http://129.151.120.50:8076/api/user/new`, {
                    method: "POST",
                    body: JSON.stringify(datos),
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      },
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        //console.log(data);             
                });
               
          Swal.fire(
            
            'Usuario se creó correctamente.',
            'success'
            
            
          );
          navigate('/usuario');
        } catch (error) {
            console.log(error)
        }
        
    }
  })
       
}
}); 

       return( 
        <>
       <div className="md:flex min-h-screen" >
      <Sidebar />
      <div className="md:w-2/5 xl:w-4/5 p-6">

           <h1 className="text-3xl font-light mb-4">Detalle Usuarios</h1>
        
           <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <form
                      onSubmit={formik.handleSubmit}
                    >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">ID</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="id"
                                type="number"
                                placeholder="id "  
                                value={formik.values.id}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                            />
                        </div>
                        { formik.touched.id && formik.errors.id ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.id} </p>
                            </div>
                        ) : null }



                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Identificacion</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="identification"
                                type="number"
                                placeholder="identification " 
                                value={formik.values.identification}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}   
                            />
                        </div>
                        { formik.touched.identification && formik.errors.identification ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.identification} </p>
                            </div>
                        ) : null }

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="name "
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                             
                            />
                        </div>
                        { formik.touched.name && formik.errors.name ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.name} </p>
                            </div>
                        ) : null }


                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Fecha cumpleaños</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="birthtDay"
                                type="date"
                                placeholder=""  
                                value={formik.values.birthtDay}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                            />
                        </div>
                        { formik.touched.birthtDay && formik.errors.birthtDay ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.birthtDay} </p>
                            </div>
                        ) : null }

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Mes de cumpleaños</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="monthBirthtDay"
                                type="number"
                                placeholder="monthBirthtDay" 
                                value={formik.values.monthBirthtDay}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}  
                            />
                        </div>
                        { formik.touched.monthBirthtDay && formik.errors.monthBirthtDay ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.monthBirthtDay} </p>
                            </div>
                        ) : null }

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Dirección</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="address"
                                type="text"
                                placeholder="address"
                                value={formik.values.address}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}  
                            />
                        </div>
                        { formik.touched.address && formik.errors.address ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.address} </p>
                            </div>
                        ) : null }

                        <div className="mb-4">    
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Celular</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="cellPhone"
                                type="number"
                                placeholder="cellPhone"
                                value={formik.values.cellPhone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}  
                            />
                        </div>
                        { formik.touched.cellPhone && formik.errors.cellPhone ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.cellPhone} </p>
                            </div>
                        ) : null }

                            <div className="mb-4">    
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">E-mail</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="text"
                                placeholder="Correo Electrónico"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}  
                            />
                        </div>
                        { formik.touched.email && formik.errors.email ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.email} </p>
                            </div>
                        ) : null }

                            <div className="mb-4"> 
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Contraseña</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="text"
                                placeholder="Contraseña"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}  
                            />
                        </div>
                        { formik.touched.password && formik.errors.password ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.password} </p>
                            </div>
                        ) : null }
                            
                            <div className="mb-4"> 
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Zona</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="zone"
                                type="text"
                                placeholder="Zona"
                                value={formik.values.zone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}  
                            />
                        </div>
                        { formik.touched.zone && formik.errors.zone ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.zone} </p>
                            </div>
                        ) : null }
                           
                           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">DISPONIBILIDAD</label>
                        <select 
                            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                            id="availability"   
                            value={formik.values.availability}
                            onChange={formik.handleChange}        
                            >
                            <option value="">Selecciona tipo de usuario</option>
                            <option value="ADM">Administrador</option>
                            <option value="COORD">Coordinador</option>
                            <option value="ASE">Asesor</option>
                        </select>

                        <input
                            type="submit"
                            className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                            value="Agregar usuario"
                        />
                    </form>
                </div>
            </div>
            </div>
    
    </div>
    
        </>
     );
}
 
export default DetalleUsuarios;