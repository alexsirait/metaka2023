import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
	return (
		<>
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a className="navbar-item" href="https://bulma.io">
						Metaka
					</a>
					<a
						href="https://bulma.io"
						role="button"
						className="navbar-burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample"
					>
						<span aria-hidden="true" />
						<span aria-hidden="true" />
						<span aria-hidden="true" />
					</a>
				</div>
				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-start">
						<NavLink to="/home" className="navbar-item">
							Home
						</NavLink>
						<NavLink to="/about" className="navbar-item">
							About
						</NavLink>
					</div>
					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttons">
								<a href="https://bulma.io" className="button is-primary">
									<strong>Sign up</strong>
								</a>
								<a href="https://bulma.io" className="button is-light">
									Log in
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
