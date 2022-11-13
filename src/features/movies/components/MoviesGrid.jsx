import React from 'react';
import { useFetch } from '../../../common/hooks/useFetch'
import DisplayMovies from './DisplayMovies'
import './stylesheets/DisplayMovies.css'
import { serviceGetPopularMovies } from './services/serviceGetPopularMovies'


const MoviesGrid = () => {
	
	const {data, isLoading, error} = useFetch(serviceGetPopularMovies);
	
	return(
		<>
			
			<h1 className="title">MOVIES</h1>
			<ul className="grid-container">
			{
				data.map(movie=> (
					<DisplayMovies
						key={movie.id}
						id={movie.id}
						title={movie.title}
						poster={movie.poster_path}
						overview={movie.overview}
						
						
						
					/>
				))
				
				
			}
			</ul>
		</>
	
	);



}

export default MoviesGrid;