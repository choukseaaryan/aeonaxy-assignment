import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ConfirmEmail from "../components/ConfirmEmail";

const Verification = () => {
	return (
		<>
			<Navbar  />
			<div className="mb-24 mt-40 px-10 flex flex-col justify-center items-center text-lg text-center text-gray-500 font-medium">
				<ConfirmEmail />
			</div>
			<Footer />
		</>
	);
};

export default Verification;
