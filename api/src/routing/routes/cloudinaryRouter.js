const cloudinary = require("../../configCloudinary/cloudinary");

("use strict");
const { Router } = require("express");

const cloudinaryRouter = Router();

// .../images/cloudinary
cloudinaryRouter.post("/cloudinary", async (req, res) => {
	const { image } = req.body;
	
	const uploadedImage = await cloudinary.uploader.upload(
		image,
		{
			upload_preset: "nxwzc0rh",
			// it shold be:		public_id: `${nombre}_productor`,
			// public_id: `nombre_producto`,
			allowed_formats: ["png", "jpg", "jpeg", "svg", "ico", "jfif", "webp"],
		},
		function (error, result) {
			if (error) {
				console.log(error);
			}
			console.log(result);
		}
	);

	try {
		res.status(200).json(uploadedImage);
	} catch (error) {
		console.log(error);
	}
});

module.exports = cloudinaryRouter;
