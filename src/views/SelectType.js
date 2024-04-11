import React, { useRef, useState } from "react";
import Header from "../components/Header";
import designerImg from "../images/select-type/designer.svg";
import hiringImg from "../images/select-type/hiring.svg";
import inspirationImg from "../images/select-type/inspiration.svg";

const SelectType = () => {
	const containerRef = useRef(null);
	const [CheckedArray, setCheckedArray] = useState([]);

	const handleCheckboxChange = (key) => {
		if (CheckedArray.includes(key)) {
			setCheckedArray((prev) => prev.filter((item) => item !== key));
			return;
		}
		setCheckedArray((prev) => [...prev, key]);
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter" && CheckedArray.length) {
			window.location.href = "/verification";
		}
	};

	const tileContent = [
		{
			key: "designer",
			img: designerImg,
			title: "I'm a designer looking to share my work",
			description:
				"With over a 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.",
		},
		{
			key: "hiring",
			img: hiringImg,
			title: "I'm looking to hire a designer",
			description:
				"With over a 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.",
		},
		{
			key: "inspiration",
			img: inspirationImg,
			title: "I'm looking for design inspiration",
			description:
				"With over a 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.",
		},
	];

	return (
		<div ref={containerRef} onKeyDown={handleKeyDown} tabIndex="0">
			<Header href="/upload-image" />
			<div className="flex flex-col w-full items-center justify-center mt-8 px-8">
				<h1 className="text-3xl font-bold mb-4">
					What brings you to Dribbble?
				</h1>
				<p className="text-sm text-gray-500">
					Select the options that best describes you. Don't worry, you
					can explore other options later.
				</p>

				<div className="grid grid-cols-1 gap-32 lg:grid-cols-3 lg:gap-8 max-w-[950px] mt-24">
					{tileContent.map((tile) => (
						<div
							key={tile.key}
							className={`flex flex-col items-center justify-center transition px-8 py-4 rounded-2xl border-2 ${
								CheckedArray.includes(tile.key)
									? "border-pink-500"
									: "border-gray-200"
							}`}
						>
							<div
								className={`flex flex-col items-center justify-center relative z-10 transition-all duration-500 ease-in-out ${
									CheckedArray.includes(tile.key)
										? "bottom-24"
										: "bottom-0"
								}`}
							>
								<img
									src={tile.img}
									alt={tile.key}
									className="w-52 h-52"
								/>
								<p className="text-lg font-extrabold text-center mt-2">
									{tile.title}
								</p>
								<p
									className={`absolute text-sm text-center text-gray-500 mt-2 transition-all duration-500 ease-in-out transform ${
										CheckedArray.includes(tile.key)
											? "top-[17rem] visible opacity-100 translate-y-0"
											: "opacity-0 -translate-y-5"
									}`}
								>
									{tile.description}
								</p>
							</div>
							<div
								className={`mt-4 w-6 h-6 rounded-full border flex items-center justify-center cursor-pointer ${
									CheckedArray.includes(tile.key)
										? "bg-pink-500 border-pink-500"
										: "bg-white border-gray-400"
								}`}
								onClick={() => handleCheckboxChange(tile.key)}
							>
								{CheckedArray.includes(tile.key) && (
									<svg
										className="w-4 h-4 text-white"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
								)}
							</div>
						</div>
					))}
				</div>

				<p
					className={`mt-12 font-bold transition ${
						CheckedArray.length ? "opacity-100" : "opacity-0"
					}`}
				>
					Anything else? You can select multiple
				</p>
				<button
					disabled={!CheckedArray.length}
					className="mt-4 bg-pink-500 disabled:bg-pink-300 hover:bg-pink-600 text-white px-20 py-2 rounded-lg transition-all"
					onClick={() => window.location.href = "/verification"}
				>
					Finish
				</button>
				<p
					className={`text-sm text-center my-2 font-bold text-gray-400 transition-all ${
						CheckedArray.length ? "opacity-100" : "opacity-0"
					}`}
				>
					or Press RETURN
				</p>
			</div>
		</div>
	);
};

export default SelectType;
