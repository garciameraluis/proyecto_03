
db.peliculas.find() /* Muetra todos los documentos de la colección */
db.peliculas.find({"pelicula":"Venom:Let There Be Carnage"}) /* Muestra una pelicula en concreto */
db.peliculas.find({"genero":"Acción"}) /* Muestra todas las películas de un género en concreto */
db.peliculas.find({"genero": {$ne:"Fantasía"}}) /* Muestra todas las peliculas de "fantasía" */