import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import supabase from "./supabase";

async function createTasks(values) {
  let { data, error } = await supabase.from("tasks").insert([values]);

  if (error) {
    console.error(error);

    toast.error("عملیات با خطا مواجه شد");
    throw new Error("به مشکل خوردیم");
  } else {
    toast.success("با موفقیت اضافه شد");
  }

  return tasks;
}

export const useCreateTask = () => {
  return useMutation({
    mutationFn: (values) => {
      return createTasks(values);
    },
  });
};
