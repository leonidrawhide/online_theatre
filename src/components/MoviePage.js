import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

function MoviePage() {
	const {id} = useParams();
	const filmList = useSelector(state => state.filmList)
	let movie = {}
	for (let i = 0; i < filmList.length; i++) {
		if (filmList[i].id == id) {
			movie = filmList[i]
		}
	}

	useEffect(() => {
		window.scrollTo(0, 0)
  	}, [])

	if (!movie.id) {
		return (
			<main class="main">
				<div class="main__sortbar">
					<div class="main__sortbar_back main__sortbar_contents">
						{/* <a class="main__sortbar_back_anchor" href="../index.html"> */}
							<Link to={'/'} className={'link'}>
								<button class="main__sortbar_back_anchor_button">На главную</button>
							</Link>
						{/* </a> */}
					</div>
				</div>
				<div class="main__background-filler"></div>
				<div class="main__movie-page four-o-four">
					<h1>404</h1>
					<p>Вы забрели не туда</p>
					<img src="https://cdn131.picsart.com/320264460091211.png" alt="404"/>
				</div>
			</main>
		)
	}

	
	  
	return (
			<main class="main">
				<div class="main__sortbar">
					<div class="main__sortbar_back main__sortbar_contents">
						{/* <a class="main__sortbar_back_anchor" href="../index.html"> */}
							<Link to={'/'} className={'link'}>
								<button class="main__sortbar_back_anchor_button">На главную</button>
							</Link>
						{/* </a> */}
					</div>
				</div>
				<div class="main__background-filler"></div>
				<div class="main__movie-page">
					<div class="main__movie-page_poster">
						<img src={movie.linkPicture} alt="Постер" />
					</div>
					<div class="main__movie-page_description">
						<h2>{movie.name}</h2>
						<p>{movie.concept}</p>
					</div>
					<div class="main__movie-page_video">
						<iframe width="1160" height="600" src={movie.iframeLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
				</div>
			</main>
	)
}

export default MoviePage
