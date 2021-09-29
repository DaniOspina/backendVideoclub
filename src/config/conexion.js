import mysql from 'mysql2/promise'  //para trabajar con promesas sql2
import {config} from './config'   //archivo config


//conection to SQL

export const connect = async() => {
  try{
    return await mysql.createConnection(config)
  }
  catch(err) {
    console.log(err)
  }
}

//try & catch manejo de errores