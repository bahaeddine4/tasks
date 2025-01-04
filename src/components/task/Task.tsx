import { FC } from "react";
import { TaskType } from "../../declarations";
import "./styles.css";
import { Input } from "./input";
import { Edit } from "./edit/Edit";

type TaskProps = {
	task: TaskType;
	mode: "display" | "edit";
};
export const Task: FC<TaskProps> = ({ task, mode }) => {
	return (
		<div className="task">
			{mode === "display" ? <Edit task={task} /> : <Input />}
		</div>
	);
};
