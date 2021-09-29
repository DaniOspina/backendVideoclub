const {Router} =require ('express');
const getMovies=require ('../controllers/index.js')
const getMovie=require ('../controllers/index.js')
const saveMovie=require ('../controllers/index.js')
const updateMovie=require ('../controllers/index.js')
const deleteMovie=require ('../controllers/index.js')

/* const { deleteMovie, getMovie, 
            getMovies, saveMovie, 
            updateMovie } 
        =require ('../controllers'); */


const router = Router();

//traer todas las peliculas
router.get('/movies', getMovies);

//traer una pelicula
router.get('/movies/:id', getMovie);

//guardar una pelicula    
router.post('/movies', saveMovie);

//actualizar pelicula
router.put('/movies/:id', updateMovie);

//borrar pelicula
router.delete('/movies/:id', deleteMovie);

module.exports=router;