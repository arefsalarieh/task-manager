import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../../../core/services/api/apiTasks";
// import { getVideos } from "../../../core/services/api/apiVideos";

export function useTasks() {
  const {
    data: tasks,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
    staleTime:1000,
      // refetchInterval:1*1000,

  });

  return { tasks, isLoading, error, isError };
}
