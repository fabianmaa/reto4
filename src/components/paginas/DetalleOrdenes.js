import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Sidebar from '../ui/Sidebar';


const DetalleOrdenes = (   ) => {

   // validación y leer los datos del formulario
 const formik = useFormik({
   initialValues: {
      id:'', 
      registerDay:'',
      status: '',
      salesMan: '',
     
   }, 
   validationSchema: Yup.object({
        id: Yup.number()
               .min(1, 'Debes agregar un número de Id')
               .required('El id es obligatorio'),
        registerDay: Yup.date()
               .min(1, 'Debes agregar una fecha')
               .required('Esta fecha es obligatoria'),
        status: Yup.string()
               .min(3,'Debes agregar un estado')
               .required('El estado es obligatorio'),
        salesMan: Yup.string()
               .min(3,'Debes seleccionar un asesor')
               .required('El asesor es obligatorio'),                                                       
                   
   }),
   onSubmit: datos => {
     
           console.log(datos);
     
   }
});


return( 
   <>
   
   <div className="md:flex min-h-screen" >
      <Sidebar />
      <div className="md:w-2/5 xl:w-4/5 p-6">

      

      <h1 className="text-3xl font-light mb-4">Detalle ordenes</h1>
   
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
                       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Día de Registro</label>
                       <input 
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           id="registerDay"
                           type="date"
                           placeholder="" 
                           value={formik.values.registerDay}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}   
                       />
                   </div>
                   { formik.touched.registerDay && formik.errors.registerDay ? (
                       <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                           <p className="font-bold">Hubo un error:</p>
                           <p>{formik.errors.registerDay} </p>
                       </div>
                   ) : null }

                   <div className="mb-4">
                       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Estado</label>
                       <input 
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           id="status"
                           type="text"
                           placeholder="Estado "
                           value={formik.values.status}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur} 
                        
                       />
                   </div>
                   { formik.touched.status && formik.errors.status ? (
                       <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                           <p className="font-bold">Hubo un error:</p>
                           <p>{formik.errors.status} </p>
                       </div>
                   ) : null }


                   <div className="mb-4">
                       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Vendedor</label>
                       <input 
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           id="salesMan"
                           type="string"
                           placeholder="Vendedor"  
                           value={formik.values.salesMan}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur} 
                       />
                   </div>
                   { formik.touched.salesMan && formik.errors.salesMan ? (
                       <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                           <p className="font-bold">Hubo un error:</p>
                           <p>{formik.errors.salesMan} </p>
                       </div>
                   ) : null }

                   <input
                       type="submit"
                       className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                       value="Agregar orden"
                   />
               </form>
           </div>
       </div>
       </div>
       </div>
   </>
);
}

export default DetalleOrdenes;