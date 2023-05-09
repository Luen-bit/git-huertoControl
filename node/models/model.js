//se importa la conexion a la bd

import db from "../database/db.js";
// se imparta sequelize
import { DataTypes } from "sequelize";

const insumoModel = db.define('insumos', {
    nombre_insumo:{type: DataTypes.STRING},
    marca_insumo:{type: DataTypes.STRING},
    tipo_insumo:{type: DataTypes.STRING},
    descripcion:{type: DataTypes.STRING},
    unidad_medida:{type: DataTypes.STRING},

})

export default insumoModel;