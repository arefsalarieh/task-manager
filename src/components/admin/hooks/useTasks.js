import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteTasks, getTasks } from "../../../core/services/api/apiTasks";

export function useTasks() {
  const {
    data: tasks,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
    staleTime: 1000,
  });

  return { tasks, isLoading, error, isError };
}

export function useDeleteTasks() {

  return useMutation({
    mutationFn:(id)=>deleteTasks(id) ,
  });
}
