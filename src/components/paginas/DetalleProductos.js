import React, {useState, useEffect} from 'react';
import { Link, useParams,useNavigate  } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2'; 
import Sidebar from '../ui/Sidebar';


const DetalleProductos = (   ) => {
   // Hook para redireccionar
  const navigate = useNavigate();
 const formik = useFormik({
   initialValues: {
      reference:'',
      category: '',
      description: '',
      availability: '',
      price: '',
      quantity: '',
      photography: '',
     }, 
     onSubmit: datos => {
        Swal.fire({
            title: 'Quieres crear el producto?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                try{ console.log(datos);
                    fetch(`http://129.151.120.50:8076/api/chocolate/new`, {
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
                
                'Se creo correctamente.',
                'success'
                
                
              );
              navigate('/productos');
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
                    <h1 className="text-3xl font-light mb-4">Detalle productos</h1>
                 
                    <div className="flex justify-center mt-10">
                         <div className="w-full max-w-3xl">
                             <form
                               onSubmit={formik.handleSubmit}
                             >
                                 
                                 <div className="mb-4">
                                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Referencia</label>
                                     <input 
                                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                         id="reference"
                                         type="text"
                                         placeholder="reference" 
                                         value={formik.values.reference}
                                         onChange={formik.handleChange}
                                         
                                     />
                                 </div>
                                 { formik.touched.reference && formik.errors.reference ? (
                                     <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                         <p className="font-bold">Hubo un error:</p>
                                         <p>{formik.errors.reference} </p>
                                     </div>
                                 ) : null }
         
                                 <div className="mb-4">
                                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Categoría</label>
                                     <input 
                                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                         id="category"
                                         type="text"
                                         placeholder="category "
                                         value={formik.values.category}
                                         onChange={formik.handleChange}
                                         
                                      
                                     />
                                 </div>
                                 { formik.touched.category && formik.errors.category ? (
                                     <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                         <p className="font-bold">Hubo un error:</p>
                                         <p>{formik.errors.category} </p>
                                     </div>
                                 ) : null }
         
         
                                 <div className="mb-4">
                                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Descripción</label>
                                     <input 
                                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                         id="description"
                                         type="text"
                                         placeholder="descriptión"  
                                         value={formik.values.description}
                                         onChange={formik.handleChange}
                                         
                                     />
                                 </div>
                                 { formik.touched.description && formik.errors.description ? (
                                     <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                         <p className="font-bold">Hubo un error:</p>
                                         <p>{formik.errors.description} </p>
                                     </div>
                                 ) : null }
         
         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">DISPONIBILIDAD</label>
                        <select 
                            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                            id="availability"   
                            value={formik.values.availability}
                            onChange={formik.handleChange}        
                            >
                            <option value="true">Disponible</option>
                            <option value="false">No Disponible</option>
                        </select>
         
                                 <div className="mb-4">
                                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Precio</label>
                                     <input 
                                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                         id="price"
                                         type="number"
                                         placeholder="price"
                                         value={formik.values.price}
                                         onChange={formik.handleChange}
                                         
                                     />
                                 </div>
                                 { formik.touched.price && formik.errors.price ? (
                                     <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                         <p className="font-bold">Hubo un error:</p>
                                         <p>{formik.errors.price} </p>
                                     </div>
                                 ) : null }
         
                                 <div className="mb-4">    
                                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Cantidad</label>
                                     <input
                                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                         id="quantity"
                                         type="number"
                                         placeholder="quantity"
                                         value={formik.values.quantity}
                                         onChange={formik.handleChange}
                                         
                                     />
                                 </div>
                                 { formik.touched.quantity && formik.errors.quantity ? (
                                     <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                         <p className="font-bold">Hubo un error:</p>
                                         <p>{formik.errors.quantity} </p>
                                     </div>
                                 ) : null }
         
                                     <div className="mb-4">    
                                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Fotografía</label>
                                     <input
                                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                         id="photography"
                                         type="text"
                                         placeholder="photography"
                                         value={formik.values.photography}
                                         onChange={formik.handleChange}
                                         
                                     />
                                 </div>
                                 { formik.touched.photography && formik.errors.photography ? (
                                     <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                         <p className="font-bold">Hubo un error:</p>
                                         <p>{formik.errors.photography} </p>
                                     </div>
                                 ) : null }
         
                                 <input
                                     type="submit"
                                     className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                                     value="Agregar producto"
                                 />
                             </form>
                         </div>
                     </div>
                     </div>
                     </div>  
                 </>
              );
         }
          
         export default DetalleProductos;