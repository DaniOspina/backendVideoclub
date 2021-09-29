const mysql=require('mysql2/promise')  //para trabajar con promesas sql2
const {config}=require('./config')   //archivo config


//conection to SQL

const connect = async() => {
  try{
    return await mysql.createConnection(config)
  }
  catch(err) {
    console.log(err)
  }
}

module.exports = connect
//try & catch manejo de errores