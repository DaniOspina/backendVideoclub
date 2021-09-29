import express from 'express';
import morgan from 'morgan' //en consola que peticion, a donde la hice, cuanto demoro
import allRoutes from './routes/'

//DOCUMENTATION

//INIT EXPRESS
const app =express();

//CONFIG
const port = (process.env.PORT || 3001); //cualquier puerto menos el de react para que no se cruce

//MIDDLEWARE
app.use(express.json()), //leer json
app.use(morgan('dev')); //se puede cambiar dev segun la info que quieras
app.use(allRoutes);

//PORT=PARA QUE CORRA EN EL PUERTO
app.set('port', port)

//EXPRESS=PERMITE CREAR RUTAS

app.listen(app.get('port'), (error)=> {
    if(error) {
        console.error('Failed to start')
    }
    else {
        console.log('Server started on port:'+ app.get('port'))
    }
})
