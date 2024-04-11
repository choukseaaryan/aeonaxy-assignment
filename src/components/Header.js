import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import DribbbleLogo from "./DribbbleLogo";

const Header = ({ href = "/" }) => {
	return (
		<div className="mt-12 px-8 md:px-12 flex items-center justify-between md:justify-start">
			<DribbbleLogo width="100" height="30" color="#DB568A" />
			<button
				onClick={() => (window.location.href = href)}
				className="flex justify-center items-center bg-gray-100 ml-8 py-3 px-4 rounded-lg"
			>
				<FontAwesomeIcon
					icon={faChevronLeft}
					className="text-gray-500 text-xs"
				/>
			</button>
		</div>
	);
};

export default Header;
