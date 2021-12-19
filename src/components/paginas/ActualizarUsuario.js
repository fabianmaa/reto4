import React, {useState, useEffect} from 'react';
import { Link, useParams,useNavigate  } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2'; 
import Sidebar from '../ui/Sidebar';

const ActualizarUsuario = () => {

    // Hook para redireccionar
    const navigate = useNavigate();
    const {id} = useParams();
    
    const [ usuariosActualizar, guardarUsuariosActualizar] = useState([]);

    fetch(`http://129.151.120.50:8076/api/user/${id}`)
    .then((res) => res.json())
    .then((data) => {
        
        guardarUsuariosActualizar(data);
    });

    const { identification, name, birthtDay, monthBirthtDay, address, cellPhone, email, password, zone, type } = usuariosActualizar;
    
    const formik = useFormik({
    initialValues: {
       id: id,
       identification: '',
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
                title: 'Quieres actualizar el usuario?',
                text: "Esta acción no se puede deshacer!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'SÍ actualízalo!'
              }).then((result) => {
                if (result.isConfirmed) {
                    try{ console.log(datos);fetch(`http://129.151.120.50:8076/api/user/update`, {
                            method: "PUT",
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
                    'Actualizado!',
                    'Se actualizo correctamente el usuario.',
                    'success'
                    
                    
                  );
                  navigate('/usuarios');
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
          
                     <h1 className="text-3xl font-light mb-4">Actualiza este Producto</h1>
                  
                     <div className="flex justify-center mt-10">
                          <div className="w-full max-w-3xl">
                              <form
                                onSubmit={formik.handleSubmit}
                              >
                                  
                                  <div className="mb-4">
                                  <p className="font-bold text-2xl text-yellow-600 mb-4">{id} </p>
                                      
                                  </div>
                                  
                                  <div className="mb-4">
                                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Identificación</label>
                                      <input 
                                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                          id="identification"
                                          type="text"
                                          placeholder="identification "
                                          value={formik.values.identification || identification}
                                          onChange={formik.handleChange}
                                         
                                      />
                                  </div>
                                            
                                  <div className="mb-4">
                                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                                      <input 
                                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                          id="name"
                                          type="text"
                                          placeholder="Nombre"  
                                          value={formik.values.name || name}
                                          onChange={formik.handleChange}

                                      />
                                  </div>

                                  <div className="mb-4">
                                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Cumpleaños</label>
                                      <input 
                                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                          id="birthtDay"
                                          type="date"
                                          placeholder=""  
                                          value={formik.values.birthtDay || birthtDay}
                                          onChange={formik.handleChange}

                                      />
                                  </div>

                                  <div className="mb-4">
                                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Mes Cumpleaños</label>
                                      <input 
                                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                          id="monthBirthtDay"
                                          type="number"
                                          placeholder="Mes Cumpleaños"  
                                          value={formik.values.monthBirthtDay || monthBirthtDay}
                                          onChange={formik.handleChange}

                                      />
                                  </div>

                                  <div className="mb-4">
                                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Dirección</label>
                                      <input 
                                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                          id="address"
                                          type="text"
                                          placeholder="Dirección"  
                                          value={formik.values.address || address}
                                          onChange={formik.handleChange}

                                      />
                                  </div>

                                  <div className="mb-4">
                                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Teléfono o Celular</label>
                                      <input 
                                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                          id="cellPhone"
                                          type="number"
                                          placeholder="Celular o Teléfono fijo"  
                                          value={formik.values.cellPhone || cellPhone}
                                          onChange={formik.handleChange}

                                      />
                                  </div>

                                  <div className="mb-4">
                                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Correo Electrónico</label>
                                      <input 
                                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                          id="email"
                                          type="text"
                                          placeholder="Correo Electrónico"  
                                          value={formik.values.email || email}
                                          onChange={formik.handleChange}

                                      />
                                  </div>

                                  <div className="mb-4">
                                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Contraseña</label>
                                      <input 
                                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                          id="password"
                                          type="text"
                                          placeholder="Contraseña"  
                                          value={formik.values.password || password}
                                          onChange={formik.handleChange}

                                      />
                                  </div>

                                  <div className="mb-4">
                                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Zona</label>
                                      <input 
                                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                          id="zone"
                                          type="text"
                                          placeholder="Zona"  
                                          value={formik.values.zone || zone}
                                          onChange={formik.handleChange}

                                      />
                                  </div>
                                           
                                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Tipo</label>
                        <select 
                            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                            id="birthtDay"   
                            value={formik.values.type || type}
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
                                        value="Actualizar Usuario"
                                    />
                              </form>
                          </div>
                      </div>
                      </div>
    </div>
                  </>
               );
          }
 
export default ActualizarUsuario;