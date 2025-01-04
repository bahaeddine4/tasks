export type TaskCategory = "TODO" | "WIP" | "BLOCKED" | "DONE" | "DISCARDED";

export type TaskType = {
	value: string;
	category: TaskCategory;
};
