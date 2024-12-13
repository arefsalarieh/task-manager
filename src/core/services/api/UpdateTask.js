import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import supabase from "./supabase";

async function UpdateTasks(values) {
  let { data, error } = await supabase
    .from("tasks")
    .update([values])
    .eq("id", values.id);

  if (error) {
    console.error(error);

    toast.error("عملیات با خطا مواجه شد");
    throw new Error("به مشکل خوردیم");
  } else {
    toast.success("با موفقیت ویرایش شد");
  }

  return data;
}

export const useUpdateTasks = () => {
  return useMutation({
    mutationFn: (values) => {
      return UpdateTasks(values);
    },
  });
};
