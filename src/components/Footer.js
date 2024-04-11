import React from "react";
import DribbbleLogo from "./DribbbleLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDribbble,
	faInstagram,
	faPinterest,
	faSquareFacebook,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<footer className="bg-gray-100 p-10">
			<div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 gap-8 text-center md:text-left">
				<div className="md:col-span-2 flex md:block flex-col items-center justify-center">
					<DribbbleLogo width="100" height="30" color={"#ea4b89"} />
					<p className="my-5">
						Dribbble is the world's leading community for creatives
						to share, grow, and get hired.
					</p>
					<div className="flex space-x-5">
						<a
							href="https://dribbble.com/"
							className="text-gray-800"
						>
							<FontAwesomeIcon
								icon={faDribbble}
								className="text-xl"
							/>
						</a>
						<a
							href="https://www.twitter.com/"
							className="text-gray-800"
						>
							<FontAwesomeIcon
								icon={faTwitter}
								className="text-xl"
							/>
						</a>
						<a
							href="https://www.facebook.com/"
							className="text-gray-800"
						>
							<FontAwesomeIcon
								icon={faSquareFacebook}
								className="text-xl"
							/>
						</a>
						<a
							href="https://www.instagram.com/"
							className="text-gray-800"
						>
							<FontAwesomeIcon
								icon={faInstagram}
								className="text-xl"
							/>
						</a>
						<a
							href="https://www.pinterest.com/"
							className="text-gray-800"
						>
							<FontAwesomeIcon
								icon={faPinterest}
								className="text-xl"
							/>
						</a>
					</div>
				</div>
				<div>
					<p className="font-bold">For designers</p>
					<p className="mt-4">Go Pro!</p>
					<p className="mt-4">Explore design work</p>
					<p className="mt-4">Design blog</p>
					<p className="mt-4">Overtime podcast</p>
					<p className="mt-4">Playoffs</p>
					<p className="mt-4">Weekly Warm-Up</p>
					<p className="mt-4">Refer a Friend</p>
					<p className="mt-4">Code of conduct</p>
				</div>
				<div>
					<p className="font-bold">Hire designers</p>
					<p className="mt-4">Post a job opening</p>
					<p className="mt-4">Post a freelance project</p>
					<p className="mt-4">Search for designers</p>
					<p className="mt-4 font-bold">Brands</p>
					<p className="mt-4">Advertise with us</p>
				</div>
				<div>
					<p className="font-bold">Company</p>
					<p className="mt-4">About</p>
					<p className="mt-4">Careers</p>
					<p className="mt-4">Support</p>
					<p className="mt-4">Media kit</p>
					<p className="mt-4">Testimonials</p>
					<p className="mt-4">API</p>
					<p className="mt-4">Terms of service</p>
					<p className="mt-4">Privacy policy</p>
					<p className="mt-4">Cookie policy</p>
				</div>
				<div className="hidden md:block lg:hidden col-span-2"></div>
				<div>
					<p className="font-bold">Directories</p>
					<p className="mt-4">Design jobs</p>
					<p className="mt-4">Designers for hire</p>
					<p className="mt-4">Freelance designers for hire</p>
					<p className="mt-4">Tags</p>
					<p className="mt-4">Places</p>
					<p className="mt-4 font-bold">Design assets</p>
					<p className="mt-4">Dribbble Marketplace</p>
					<p className="mt-4">Creative Market</p>
					<p className="mt-4">Fontspring</p>
					<p className="mt-4">Font Squirrel</p>
				</div>
				<div>
					<p className="font-bold">Design Resources</p>
					<p className="mt-4">Freelancing</p>
					<p className="mt-4">Design Hiring</p>
					<p className="mt-4">Design Portfolio</p>
					<p className="mt-4">Design Education</p>
					<p className="mt-4">Creative Process</p>
					<p className="mt-4">Design Industry Trends</p>
				</div>
			</div>
			<hr className="my-12 border-t border-gray-300" />
			<div className="flex flex-col text-center md:flex-row md:justify-between mb-10">
				<p className="text-gray-500">
					© 2023 Dribbble. All rights reserved.
				</p>
				<p className="text-gray-500 items-center justify-center mt-2 md:mt-0 flex gap-1">
					<span className="font-bold text-black">20,501,853</span>
					shots dribbbled <FontAwesomeIcon icon={faDribbble} className="text-2xl rounded-full text-[#b73d6c] bg-[#ea4b89] ml-1" />
				</p>
			</div>
		</footer>
	);
};

export default Footer;
