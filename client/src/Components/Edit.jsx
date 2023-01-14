import React, { useState } from "react";
import Form from "./Form/Form";

const Edit = ({ productDetail }) => {
	const [editing, setEditing] = useState(false);

	const handleEdit = () => {
		setEditing(true);
	};

	return (
		<div>
			<button onClick={handleEdit}>Editar</button>
			{editing && <Form product={productDetail} editing={editing} />}
		</div>
	);
};

export default Edit;
