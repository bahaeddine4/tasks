import React, { FormEvent, useState } from "react";

import "./styles.css";
import { useCreateTask } from "../../../services/tasks/post";

export const Input = () => {
	const [value, setValue] = useState("");
	const mutate = useCreateTask();
	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		setValue("");
		mutate({
			value,
			category: "TODO",
		});
	}
	return (
		<form onSubmit={handleSubmit} className="form">
			<input
				type="text"
				placeholder="be inspired"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className="input"
			/>
		</form>
	);
};
