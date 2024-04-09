import React from "react";
import logoAlt from "../images/dribbble_logo_alt.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Header = ({ handleTabChange }) => {
	return (
		<div className="mt-12 mx-12 flex items-center">
			<img
				src={logoAlt}
				alt="Dribbble logo"
				className="w-20 h-fit mr-8"
			/>
			<button onClick={() => handleTabChange("prev")} className="flex justify-center items-center bg-gray-100 py-3 px-4 rounded-lg">
				<FontAwesomeIcon
					icon={faChevronLeft}
					className="text-gray-500 text-xs"
				/>
			</button>
		</div>
	);
};

export default Header;
