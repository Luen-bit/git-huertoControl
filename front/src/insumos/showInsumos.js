import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const URI='http://localhost:8000/insumos';

const CompShowInsumos = () =>{
    //configuracion del hook de react
    const [insumos,setInsumo] = useState([])
    useEffect( ()=>{
        getInsumos()
    },[])

    //obtiene todos los registros
    const getInsumos = async () =>{
        const res = await axios.get(URI)
        setInsumo(res.data)
    }

    // elimina un registro

    const deleteInsumo = async (id) =>{
        const res = await axios.get(`${URI}${id}`)
        getInsumos()
    }

        //retornAa vista
    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'>Nuevo Insumo</Link>
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Insumo</th>
                                <th>Marca</th>
                                <th>Tipo</th>
                                <th>Descripción</th>
                                <th>Unidad de medida</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {insumos.map( (insumo)=>(
                                <tr key={insumo.id}>
                                    <td>{insumo.id}</td>
                                    <td>{insumo.nombre_insumo}</td>
                                    <td>{insumo.marca_insumo}</td>
                                    <td>{insumo.tipo_insumo}</td>
                                    <td>{insumo.descripcion}</td>
                                    <td>{insumo.unidad_medida}</td>
                                    <td>
                                        <Link to={`/edit/${insumo.id}`} className='btn btn-info'>Editar</Link>
                                        <button className='btn btn-danger'>Borrar</button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowInsumos;