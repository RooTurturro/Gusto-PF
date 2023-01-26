import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../redux/actions";
import Form from "./Form/Form";

const Edit = ({ productDetail }) => {
	const [editing, setEditing] = useState(false);
	const dispatch = useDispatch();
	const handleEdit = () => {
		setEditing(true);
	};

	useEffect(() => {
		dispatch(getAllUsers());
	})

	return (
		<div>
			<button type="button" onClick={handleEdit} style={{ fontFamily: 'Oswald', fontSize: '1.4rem', border: 'none', backgroundColor: 'red', color:'white'}}>EDITAR</button>
			{editing && <Form product={productDetail} editing={editing} />}
		</div>
	);
};

export default Edit;
