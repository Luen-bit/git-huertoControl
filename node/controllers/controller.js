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
 export const getInsumo = async(req,res) =>{
    try {
        const insumo = await insumoModel.findAll({
            where : {id:req.params.id}
        })
        res.json(insumo[0])
    } catch (error) {
        res.json({message:error.message})
    }
 }

// crear un registro
 export const createInsumo = async(req,res) => {
    try {
        await insumoModel.create(req.body)
        res.json({
            "message": "Insumo credo correctamente"
        })
    } catch (error) {
        res.json({message:error.message})
    }

 }

//actualizar un registro

export const updateInsumo = async (req,res) => {
    try {
        await insumoModel.update(req.body,{
            where: { id: req.params.id}
        })
        res.json({
            "message": "Insumo actualizado correctamente"
        })
    } catch (error) {
        res.json({message:error.message})
    }
}

//Eliminar un registro
export const deleteInsumo = async (req,res) => {
    try {
        await insumoModel.destroy({
            where: {id:req.params.id}
        })
        res.json({
            "message":"Insumo eliminado"
        })
    } catch (error) {
        res.json({message:error.message})
    }
}
