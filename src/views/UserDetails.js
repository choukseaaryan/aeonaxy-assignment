import React from "react";
import ImageComponent from "../components/ImageComponent";
import DetailsForm from "../components/DetailsForm";

const UserDetails = () => {
	return (
		<div className="flex">
			<ImageComponent />
			<DetailsForm />
		</div>
	);
};

export default UserDetails;
