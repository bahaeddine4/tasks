import { useQuery } from "@tanstack/react-query";
import { TaskType } from "../../declarations";
import { Tasks as mockedTasks } from "../../fixtures/Tasks";

export const getTasks: () => TaskType[] = () =>
	mockedTasks.map((task) => ({ ...task, id: crypto.randomUUID() }));

export const useGetTasks = () =>
	useQuery({
		queryKey: ["tasks"],
		queryFn: getTasks,
	});
