import React from "react";
import loginImg from "../images/user-details/login_img.png";
import dribbbleLogo from "../images/user-details/dribbble_logo.svg";

const ImageComponent = () => {
	return (
		<div className="hidden lg:block bg-[#f5d38d] min-h-[100svh] w-[900px]">
			<div className="p-12 pb-5">
				<img className="w-[100px]" src={dribbbleLogo} alt="dribbble" />
				<h1 className="text-3xl text-[#856115] font-bold pt-8">
					Discover the world's top
					<br />
					Designers & Creatives.
				</h1>
			</div>
			<img className="w-[600px]" src={loginImg} alt="login" />
			<p className="text-[#856115] pl-12 mt-10">
				Art by{" "}
				<a
					href="https://dribbble.com/tarka/shots"
					target="_blank"
					rel="noopener noreferrer"
					className="underline"
				>
					Peter Tarka
				</a>
			</p>
		</div>
	);
};

export default ImageComponent;