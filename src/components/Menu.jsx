import React from "react";

import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";

export const Menu = () => {
	return (
		<header className="h-36 bg-transparent flex justify-between items-center px-6">
			<img className="w-36 h-8" src={logo} alt="logo icon" />
			<img className="w-8 h-6" src={hamburger} alt="hamburger icon" />
		</header>
	);
};
