import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const Img = ({ uploadedImage }) => {
	const cld = new Cloudinary({
		cloud: {
			cloudName: "dqgz49ox3",
		},
	});

	const myImage = cld.image(uploadedImage);

	return (
		<>
			<AdvancedImage cldImg={myImage} />
		</>
	);
};

export default Img;
