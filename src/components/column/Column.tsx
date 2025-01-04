import { FC } from "react";
import "./styles.css";
import { TaskCategory, TaskType } from "../../declarations";
import { useGetTasks } from "../../services";
import { Task } from "../task";

type ColumnProps = {
	filter: TaskCategory;
};
export const Column: FC<ColumnProps> = ({ filter }) => {
	const tasksQuery = useGetTasks();

	function renderTasks() {
		const initialTask: TaskType = { value: "", category: "TODO" };
		const InitialTask = <Task task={initialTask} mode="edit" />;

		const Tasks = (tasksQuery.data || [])
			.filter((task) => task.category === filter)
			.map((task) => <Task task={task} mode="display" />);

		return filter === "TODO" ? [InitialTask, ...Tasks] : Tasks;
	}

	if (tasksQuery.isLoading) {
		return <p>loading ...</p>;
	}
	if (tasksQuery.error) {
		return <p>something went wrong</p>;
	}

	return <div className="column">{renderTasks()}</div>;
};
