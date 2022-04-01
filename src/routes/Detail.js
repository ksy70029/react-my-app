import { useEffect, useState } from "react";
import propTypes from "prop-types";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Contents({ CoverImg, title, year, rating, genres, description }) {
	return (
		<div className={styles.content_wrap}>
			<img className={styles.img} src={CoverImg} alt={title} />
			<div className={styles.text}>
				<h2>{title}</h2>
				<ul className={styles.list}>
					<li>{year}</li>
					<li>⭐️ {rating}</li>
					<li>
						{genres.map((g) => (
							<span className={styles.genres} key={g}>
								{g}
							</span>
						))}
					</li>
				</ul>
				<p className={styles.description}>{description}</p>
			</div>
		</div>
	);
}

Contents.propTypes = {
	coverImg: propTypes.string.isRequired,
	title: propTypes.string.isRequired,
	year: propTypes.number.isRequired,
	rating: propTypes.number.isRequired,
	genres: propTypes.arrayOf(propTypes.string).isRequired,
};

function Detail() {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [details, setDetails] = useState([]);
	const getMovie = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setDetails(json.data.movie);
		setLoading(false);
		console.log(json.data.movie);
	};
	useEffect(() => {
		getMovie();
	}, []);
	return (
		<div>
			{loading ? (
				<h1 className={styles.loading}>Loading...</h1>
			) : (
				<div>
					<Contents
						CoverImg={details.large_cover_image}
						title={details.title}
						year={details.year}
						rating={details.rating}
						genres={details.genres}
						description={details.description_full}
					/>
				</div>
			)}
		</div>
	);
}
export default Detail;
