import { FormEvent, useState, FC } from "react";
import { CgAddR } from "react-icons/cg";

import "./styles.css";

export const Input = () => {
	const [value, setValue] = useState("");
	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		setValue("");
	}
	return (
		<form onSubmit={handleSubmit} className="form">
			<input
				type="text"
				placeholder="be inspired"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<CgAddR className="icon" />
		</form>
	);
};
