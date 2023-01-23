const cloudinary = require("../../configCloudinary/cloudinary");

// .../images/cloudinary
app.post("/cloudinary", async (req, res) => {
	const { image } = req.body;

	const uploadedImage = await cloudinary.uploader.upload(
		image,
		{
			upload_preset: "unsigned_uploads",
			// public_id: `${username}Avatar`,
			public_id: `nombre_producto`,
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
