import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";

const UploadImage = ({ handleTabChange }) => {
	const [avatar, setAvatar] = useState(null);
	const [location, setLocation] = useState("");
	const containerRef = useRef(null);

	const handleAvatarChange = (event) => {
		const file = event.target.files[0];
		file && setAvatar(URL.createObjectURL(file));
	};

	const handleLocationChange = (event) => {
		setLocation(event.target.value);
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter" && avatar && location) {
			handleTabChange("next");
		}
	};

	return (
		<div ref={containerRef} onKeyDown={handleKeyDown} tabIndex="0">
			<Header handleTabChange={handleTabChange} />
			<div className="flex justify-center items-center px-12">
				<div>
					<h1 className="text-3xl font-bold mb-4">
						Welcome! Let's create your profile
					</h1>
					<p className="text-sm text-gray-500 mb-12">
						Let others get to know you better! You can change these
						later
					</p>
					<p className="font-extrabold text-lg mb-4">Add an avatar</p>
					<div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-8">
						<input
							id="avatar-upload"
							type="file"
							accept="image/*"
							onChange={handleAvatarChange}
							className="hidden"
						/>
						<button
							onClick={() =>
								document.getElementById("avatar-upload").click()
							}
							className="w-40 h-40 rounded-full border-[3px] border-dashed border-gray-300 flex items-center justify-center cursor-pointer mb-2 relative"
						>
							{avatar ? (
								<img
									src={avatar}
									alt="Avatar"
									className="w-full h-full rounded-full object-cover"
								/>
							) : (
								<span
									role="img"
									aria-label="Add avatar"
									className="text-3xl"
								>
									<FontAwesomeIcon
										icon={faCamera}
										className="text-gray-400"
									/>
								</span>
							)}
						</button>
						<div className="flex flex-col">
							<button
								className="w-fit mb-2 text-sm font-bold py-2 px-4 rounded-lg border-2 border-gray-200 hover:bg-gray-100 transition-colors duration-300"
								onClick={
									avatar
										? () => setAvatar(null)
										: () =>
												document
													.getElementById(
														"avatar-upload"
													)
													.click()
								}
							>
								{avatar ? "Remove image" : "Choose image"}
							</button>
							<button className="text-gray-400 text-sm font-semibold text-left mt-2">
								<FontAwesomeIcon
									icon={faChevronRight}
									className="mr-2"
								/>
								Or choose one of our defaults
							</button>
						</div>
					</div>
					<p className="font-extrabold text-lg mt-12 mb-4">
						Add your location
					</p>
					<input
						type="text"
						placeholder="Enter a location"
						value={location}
						onChange={handleLocationChange}
						className="w-full border border-b-1 border-x-0 border-t-0 border-gray-300 py-2 focus:outline-none focus:border-gray-500 transition-colors duration-300"
					/>
					<div className="mt-12 w-2/5">
						<button
							onClick={() => handleTabChange("next")}
							type="button"
							disabled={!avatar || !location}
							className="w-full bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-600 transition-colors duration-300 disabled:bg-pink-300 disabled:cursor-not-allowed"
						>
							Next
						</button>
						<p
							className={`text-sm text-center mt-2 font-bold text-gray-400 transition-all ${
								avatar && location ? "opacity-100" : "opacity-0"
							}`}
						>
							or Press RETURN
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UploadImage;
