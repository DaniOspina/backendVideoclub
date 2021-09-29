import {Router} from 'express';
import { deleteMovie, getMovie, 
            getMovies, saveMovie, 
            updateMovie } 
        from '../controllers';


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

export default router;