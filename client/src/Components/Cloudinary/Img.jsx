import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";

const Img = ({ uploadedImage }) => {
	const cld = new Cloudinary({
		cloud: {
			cloudName: "dxek0ymgo",
		},
	});

	const myImage = cld.image(uploadedImage);
	myImage
		.resize(thumbnail().width(100).height(100).gravity(focusOn(FocusOn.face())))

	return (
		<>
			<AdvancedImage cldImg={myImage} />
		</>
	);
};

export default Img;
