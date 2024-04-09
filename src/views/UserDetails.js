import React from "react";
import ImageComponent from "../components/ImageComponent";
import DetailsForm from "../components/DetailsForm";

const UserDetails = ({ handleTabChange }) => {
	return (
		<div className="flex">
			<ImageComponent />
			<DetailsForm handleTabChange={handleTabChange}/>
		</div>
	);
};

export default UserDetails;
