import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation({ id }) {
	return (
		<div className={styles.nav_wrap}>
			<h1 className={styles.title}>Popular Movies</h1>
			<Link to="/">Home</Link>
			<Link to={`/notice`}>Detail</Link>
		</div>
	);
}
export default Navigation;
