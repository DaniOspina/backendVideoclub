const {connect} =require ('../config/conexion')


//traer arreglo y luego ya puedo jugar con el
const getMovies = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM movie')
    res.json(rows)
}

const getMovie = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM movie WHERE mov_id = ?', [
        req.params.id
    ])
    if(rows.length > 0)  res.json(rows[0]) //si el array es mayoy a cero mostrar lo que encontro
    else res.sendStatus(402) //no existe ... error
}

const saveMovie = async (req, res) => {
    console.log(req.body.mov_title)
    const connection = await connect()
    const [results] = await connection.query(
        "INSERT INTO movie(mov_title, mov_year, mov_time, mov_lang, mov_dt_rel, mov_rel_country) VALUES(?, ?, ?, ?, ?, ?)",
        [
        req.body.mov_title, 
        req.body.mov_year,
        req.body.mov_time,
        req.body.mov_lang, 
        req.body.mov_dt_rel,
        req.body.mov_rel_country,
    ])
    
    res.json({
        id: results.insertId,
        ...req.body,               //duplico en el objeto todo
    })
}


const updateMovie = async (req, res) => {
    const connection = await connect()
    const results = await connection.query("UPDATE movie SET ? WHERE mov_id = ?", [
        req.body,
        req.params.id
    ])
    console.log(results)
    res.sendStatus(204);
}

const deleteMovie = async (req, res) => {
    const connection = await connect()
    await connection.query('DELETE  FROM movie WHERE mov_id = ?', [
        req.params.id
    ])
    res.sendStatus(204);
}

module.exports = deleteMovie
module.exports = updateMovie
module.exports = saveMovie
module.exports = getMovie
module.exports = getMovies


