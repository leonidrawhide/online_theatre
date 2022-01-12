import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const IndexPage = () => {
	const filmList = useSelector(state => state.filmList)
	console.log("rerendered " + filmList.length)
	return (
		<main class="main">
					<div class="main__movie-list">
						{filmList && filmList.map(filmList =>
							<Link to={{
								pathname: '' + filmList.id
								}} className={'link user-link'} >
								<div class="main__movie-list_movie"  id={filmList.idMovie}>
									{console.log(filmList.id)}								
									<div class="main__movie-list_movie_preview">
										<img src={filmList.linkPicture} alt="Превью"/>
									</div>
									<div class="main__movie-list_movie_title">
										<h3>{filmList.name}</h3>
									</div>
									<div class="main__movie-list_movie_description">
										<p>{filmList.description}</p>
									</div>
								</div>
							</Link>
						)}
					</div>
				</main>
	)
}

export default IndexPage
