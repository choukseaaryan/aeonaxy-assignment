import React, { useState } from "react";
import DribbbleLogo from "./DribbbleLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBriefcase,
	faCircleXmark,
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { slide as Menu } from "react-burger-menu";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1200 });

	const navItems = (
		<>
			<a
				href="#"
				className="text-gray-500 hover:text-gray-900 px-3 py-2 font-bold transition-all"
			>
				Inspiration
			</a>
			<a
				href="#"
				className="text-gray-500 hover:text-gray-900 px-3 py-2 font-bold transition-all"
			>
				Find Work
			</a>
			<a
				href="#"
				className="text-gray-500 hover:text-gray-900 px-3 py-2 font-bold transition-all"
			>
				Learn Design
			</a>
			<a
				href="#"
				className="text-gray-500 hover:text-gray-900 px-3 py-2 font-bold transition-all"
			>
				Go Pro
			</a>
			<a
				href="#"
				className="text-gray-500 hover:text-gray-900 px-3 py-2 font-bold transition-all"
			>
				Hire Designers
			</a>
		</>
	);

	const styles = {
		bmBurgerButton: {
			position: "fixed",
			width: "15px",
			height: "15px",
			right: "30px",
			top: "25px",
		},
		bmBurgerBars: {
			background: "#373a47",
		},
		bmBurgerBarsHover: {
			background: "#a90000",
		},
		bmCrossButton: {
			height: "24px",
			width: "24px",
		},
		bmCross: {
			background: "#bdc3c7",
		},
		bmMenuWrap: {
			position: "fixed",
			height: "100%",
		},
		bmOverlay: {
			background: "rgba(0, 0, 0, 0.3)",
		},
	};

	return (
		<nav className="bg-white border border-b-gray-200 fixed top-0 w-full z-50">
			<div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center gap-4">
						<button onClick={() => window.location.href="/"}>
							<DribbbleLogo
								width="100"
								height="30"
								color="#000"
							/>
						</button>
						{isDesktopOrLaptop && navItems}
					</div>
					{isDesktopOrLaptop && (
						<div className="flex items-center">
							<div className="ml-4 flex items-center md:ml-6">
								<FontAwesomeIcon
									className="absolute text-gray-400 ml-3"
									icon={faMagnifyingGlass}
								/>
								<input
									className="bg-gray-100 pl-9 py-2 rounded-lg focus:outline-none"
									placeholder="Search"
								/>
							</div>
							<div className="mx-2">
								<FontAwesomeIcon
									className="absolute text-sm text-gray-400 ml-5 mt-3 border-[3px] rounded-full border-white"
									icon={faCircleXmark}
								/>
								<FontAwesomeIcon
									className="text-gray-400 ml-3 text-xl"
									icon={faBriefcase}
								/>
							</div>
							<div className="ml-3 relative">
								<button
									className="bg-pink-600 flex text-sm rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-pink-500"
									id="user-menu"
									aria-haspopup="true"
								>
									<span className="sr-only">
										Open user menu
									</span>
									<img
										className="h-9 w-9 rounded-full"
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt="Profile picture"
									/>
								</button>
							</div>
							<button className="bg-pink-500 hover:bg-pink-600 transition text-white font-medium ml-4 mr-8 px-3 py-2 rounded-lg">
								Upload
							</button>
						</div>
					)}
				</div>
			</div>
			{!isDesktopOrLaptop && (
				<Menu
					right
					styles={styles}
					isOpen={isOpen}
					onStateChange={({ isOpen }) => setIsOpen(isOpen)}
				>
					<div className="h-full">
						<div className="flex flex-col bg-white h-full">
							{navItems}
						</div>
					</div>
				</Menu>
			)}
		</nav>
	);
};

export default Navbar;
