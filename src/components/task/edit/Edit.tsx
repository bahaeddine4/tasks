import React, { FC } from "react";
import { TaskType } from "../../../declarations";
import "./styles.css";
import { CgPen } from "react-icons/cg";

type EditProps = {
	task: TaskType;
};
export const Edit: FC<EditProps> = ({ task }) => {
	return (
		<div className="edit">
			<p className="value">{task.value}</p>
			<CgPen className="icon" />
		</div>
	);
};
