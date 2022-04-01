import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
function Movie({ id, year, coverImg, title, summary, genres, rating }) {
	return (
		<div className={styles.content_wrap}>
			<img className={styles.cover_img} src={coverImg} alt={title} />
			<div className={styles.description}>
				<h2 className={styles.title}>
					<Link to={`/movie/${id}`}>{title}</Link>
				</h2>
				<h3 className={styles.year}>{year}</h3>
				<span className={styles.rating}> ⭐️ {rating}</span>

				<ul className={styles.genres}>
					{genres.map((g) => (
						<li key={g}>{g}</li>
					))}
				</ul>
				<p>{summary.length > 100 ? `${summary.slice(0, 100)}...` : summary}</p>
			</div>
		</div>
	);
}

Movie.propType = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
