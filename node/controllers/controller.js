//se importa el modelo insumos

import insumoModel from "../models/model.js";

//metodos para el CRUD

//mostrar todos los registros
export const getAllInsumos = async (req,res) => {
    try {
        const insumos = await insumoModel.findAll()
        res.json(insumos)
    } catch (error) {
        res.json({message:error.message})
    }
}

// mostrar un registro


// crear un registro


//actualizar un registro


//Eliminar un registro

