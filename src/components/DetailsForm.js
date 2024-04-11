import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const DetailsForm = () => {
	const [errors, setErrors] = useState({});
	const [formValues, setFormValues] = useState({});

	const handleChange = (e) => {
		const { name, value, checked, type } = e.target;

		if (errors[name]) {
			const newErrors = { ...errors };
			delete newErrors[name];
			setErrors(newErrors);
		}

		setFormValues((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const findFormErrors = () => {
		const { name, username, email, password, checked } = formValues;
		const newErrors = {};

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		// name errors
		if (!name || name === "") newErrors.name = "Name cannot be blank";

		// username errors
		if (!username || username === "")
			newErrors.username = "Username cannot be blank";

		// email errors
		if (!email || email === "") newErrors.email = "Email cannot be blank";
		else if (!emailRegex.test(email))
			newErrors.email = "Email is not valid";

		// password errors
		if (!password || password === "")
			newErrors.password = "Password cannot be blank";
		else if (password.length < 6)
			newErrors.password = "Password must be 6 characters or more";

		if (!checked)
			newErrors.checked = "You must accept the terms and conditions";

		return newErrors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newErrors = findFormErrors();
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
		} else {
			setErrors({});
			sessionStorage.setItem("email", formValues.email);
			window.location.href = "/upload-image";
		}
	};

	const errorStyle =
		"w-full bg-[#fbecec] text-red-500 px-4 py-3 rounded-lg mt-1 focus:outline-none";
	const inputStyle =
		"w-full bg-[#f3f3f3] px-4 py-3 rounded-lg mt-1 focus:outline-none";

	return (
		<div className="w-full p-8">
			<div className="flex justify-end">
				<p className="font-medium">
					Already a member?{" "}
					<a href="#" className="text-purple-700">
						Sign In
					</a>
				</p>
			</div>
			<div className="w-full flex mt-8 items-center justify-center">
				<div className="max-w-[500px]">
					{Object.keys(errors).length === 0 ? (
						<h1 className="text-3xl font-bold">
							Sign up to Dribbble
						</h1>
					) : (
						<ul className="list-disc ml-4">
							{Object.values(errors).map((error) => (
								<li key={error} className="text-red-500">
									{error}
								</li>
							))}
						</ul>
					)}
					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<label className="text-md font-bold">
								{errors.name && (
									<FontAwesomeIcon
										icon={faTriangleExclamation}
										color="red"
									/>
								)}{" "}
								Name
							</label>
							<input
								name="name"
								type="text"
								className={
									errors.name ? errorStyle : inputStyle
								}
								onChange={handleChange}
							/>
						</div>
						<div>
							<label className="text-md font-bold">
								{errors.username && (
									<FontAwesomeIcon
										icon={faTriangleExclamation}
										color="red"
									/>
								)}{" "}
								Username
							</label>
							<input
								name="username"
								type="text"
								className={
									errors.username ? errorStyle : inputStyle
								}
								onChange={handleChange}
							/>
						</div>
						<div className="md:col-span-2">
							<label className="text-md font-bold">
								{errors.email && (
									<FontAwesomeIcon
										icon={faTriangleExclamation}
										color="red"
									/>
								)}{" "}
								Email
							</label>
							<input
								name="email"
								type="text"
								className={
									errors.email ? errorStyle : inputStyle
								}
								onChange={handleChange}
							/>
						</div>
						<div className="md:col-span-2">
							<label className="text-md font-bold">
								{errors.password && (
									<FontAwesomeIcon
										icon={faTriangleExclamation}
										color="red"
									/>
								)}{" "}
								Password
							</label>
							<input
								name="password"
								type="passsword"
								className={
									errors.password ? errorStyle : inputStyle
								}
								placeholder="6+ characters"
								onChange={handleChange}
							/>
						</div>
						<div className="md:col-span-2 flex items-start">
							<input
								name="checked"
								type="checkbox"
								className="mr-2 mt-1"
								onChange={handleChange}
							/>
							<p className="text-[#7c7a8c]">
								Creating an account means you're okay with our{" "}
								<a href="#" className="text-purple-700">
									Terms of Service
								</a>
								,{" "}
								<a href="#" className="text-purple-700">
									Privacy Policy
								</a>{" "}
								and our default{" "}
								<a href="#" className="text-purple-700">
									Notification Settings
								</a>
								.
							</p>
						</div>
						<div>
							<button
								onClick={handleSubmit}
								className="w-full bg-[#ea4b8b] text-white border border-[#ea4b8b] rounded-lg py-2 hover:text-[#ea4b8b] hover:bg-white transition focus:outline-[#ea4b8b]"
							>
								Create Account
							</button>
						</div>
					</div>
					<p className="text-sm text-[#a0a0a3] mt-8">
						This site is protected by reCAPTCHA and the Google
						<br />{" "}
						<a href="#" className="text-purple-700">
							Privacy Policy
						</a>{" "}
						and{" "}
						<a href="#" className="text-purple-700">
							Terms of Service
						</a>{" "}
						apply.
					</p>
				</div>
			</div>
		</div>
	);
};

export default DetailsForm;
