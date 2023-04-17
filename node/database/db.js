import {Sequelize}  from 'sequelize'
const db = new Sequelize('huertocontrol', 'root', '' ,{
    host:'localhost',
    dialect:'mysql'
})
