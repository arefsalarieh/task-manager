import supabase from "./supabase";

export async function getTasks() {
  let { data: tasks, error } = await supabase.from("tasks").select("*");

  if (error) {
    console.error(error);
    throw new Error("ویدیو ها دریافت نشد");
  }

  return tasks;
}
export async function deleteTasks(itemId){
  
  const { error } = await supabase
  .from('tasks')
  .delete()
  .eq('id', itemId)
  console.log(itemId.toString())
}


