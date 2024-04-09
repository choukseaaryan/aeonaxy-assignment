import React, { useState } from "react";
import UserDetails from "../../views/UserDetails";
import UploadImage from "../../views/UploadImage";
import SelectType from "../../views/SelectType";

const Signup = () => {
	const [activeTab, setActiveTab] = useState(
		sessionStorage.getItem("activeTab") || "3"
	);

	const handleTabChange = (tab) => {
		if (tab === "prev") {
			setActiveTab((prevTab) => (parseInt(prevTab) - 1).toString());
			return;
		} else if (tab === "next") {
			setActiveTab((prevTab) => (parseInt(prevTab) + 1).toString());
			return;
		} else {
			setActiveTab(tab);
		}
		// sessionStorage.setItem("activeTab", tab);
	};

	return (
		<>
			{(() => {
				switch (activeTab) {
					case "1":
						return <UserDetails handleTabChange={handleTabChange} />;
					case "2":
						return <UploadImage handleTabChange={handleTabChange} />;
					case "3":
						return <SelectType handleTabChange={handleTabChange} />;
					default:
						return <></>;
				}
			})()}
		</>
	);
};

export default Signup;
