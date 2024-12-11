import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import supabase from "./supabase";

function InvalidHandler() {
  const QueryClient = useQueryClient();
  QueryClient.invalidateQueries(["tasks"]);
}

async function CreateTasks(values) {
  let { data, error } = await supabase.from("tasks").insert([values]);

  if (error) {
    console.error(error);

    toast.error("عملیات با خطا مواجه شد");
    throw new Error("به مشکل خوردیم");
  } else {
    toast.success("با موفقیت اضافه شد");
    InvalidHandler();
  }

  return data;
}

export const useCreateTask = () => {
  return useMutation({
    mutationFn: (values) => {
      return CreateTasks(values);
    },
  });
};
