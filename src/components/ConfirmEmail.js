import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ConfirmEmail = () => {
	const email = sessionStorage.getItem("email") || "Not Found";

	return (
		<>
			<h1 className="text-4xl font-bold text-black">
				Please verify your email...
			</h1>
			<div className="my-5">
				<FontAwesomeIcon
					className="absolute text-5xl text-[#ea4b89] -mt-2 ml-24 bg-white rounded-full border-8 border-white"
					icon={faCircleCheck}
				/>
				<FontAwesomeIcon
					className="text-[#bbbbbb] text-9xl"
					icon={faEnvelope}
				/>
			</div>
			<p>
				Please verify your email address. We've sent a confirmation
				email to:
			</p>
			<p className="font-extrabold text-lg text-black my-4">{email}</p>
			<p>
				Click the confirmation link in that email to begin using
				Dribbble.
			</p>
			<p className=" my-4 text-center">
				Didn't receive the email? Check yout Spam folder, it may have
				been caught by a filter. If
				<br />
				you still don't see it, you can{" "}
				<a href="#" className="text-[#ea4b89] font-bold">
					resend the confirmation email
				</a>
				.
			</p>
			<p>
				Wrong email address?{" "}
				<a href="#" className="text-[#ea4b89] font-bold">
					Change it.
				</a>
			</p>
		</>
	);
};

export default ConfirmEmail;