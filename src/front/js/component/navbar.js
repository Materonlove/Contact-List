import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	//<a href="./demo.html">
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 d-flex justify-content-center align-item-center">Contact-List</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Contact-List</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
