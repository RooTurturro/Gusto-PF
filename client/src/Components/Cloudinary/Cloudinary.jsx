import React, { useState } from "react";
import axios from "axios";
import Img from "./Img";

const Cloudinary = () => {
	const [file, setFile] = useState("");
	const [image, setImage] = useState("");
	const [uploadedImg, setUploadedImg] = useState("");

	function previewFiles(file) {
		const reader = new FileReader();
		reader.readAsDataURL(file);

		reader.onloadend = () => {
			setImage(reader.result);
			console.log(image);
		};
	}

	const handleChange = (e) => {
		const file = e.target.files[0];
		setFile(file);
		previewFiles(file);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = await axios.post("/images/cloudinary", {
			image: image,
		});
		try {
			const uploadedImage = result.data.public_id;
			setUploadedImg(uploadedImage);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div style={{marginTop:'10%'}}>
			<div className="container mt-5 align-items-center justify-content-center">
				<h2>Hello, Welcome on this Cloudinary course</h2>
				<form onSubmit={(e) => handleSubmit(e)}>
					<label htmlFor="fileInput">Upload your photo here</label>
					<input
						type="file"
						id="fileInput"
						onChange={(e) => handleChange(e)}
						required
					/>
					<button className="btn btn-primary">Submit</button>
				</form>
			</div>
			<img src={image} alt="" />
			<Img uploadedImage={uploadedImg} />
		</div>
	);
};

export default Cloudinary;
