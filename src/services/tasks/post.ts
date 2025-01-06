import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TaskType } from "../../declarations";

export const createTask = (task: TaskType) =>
	new Promise((resolve) => {
		setTimeout(() => {
			// eslint-disable-next-line @typescript-eslint/no-unused-expressions
			Math.random() > 0.5 ? resolve(task) : resolve(task);
		}, 1000);
	});

export const useCreateTask = () => {
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationKey: ["addTask"],
		mutationFn: createTask,
		onMutate: async (task: TaskType) => {
			await queryClient.cancelQueries({ queryKey: ["tasks"] });
			const previousTasks = queryClient.getQueryData(["tasks"]);
			queryClient.setQueryData(["tasks"], (oldTasks: TaskType[]) => [
				...oldTasks,
				task,
			]);
			return { previousTasks };
		},
		onSuccess: (data) => {
			console.log("look at me ", data);
		},
		onError: (error, task, context) => {
			queryClient.setQueryData(["tasks"], context?.previousTasks);
		},
		onSettled: () => {
			//	queryClient.invalidateQueries({ queryKey: ["tasks"] });
		},
	});
	return mutate;
};
