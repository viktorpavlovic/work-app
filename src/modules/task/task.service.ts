import { supabase } from "../../client";

class TaskService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFinish = async (values: any) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      });
      if (error) throw error;
      if (error !== null) alert(error);
      const { error: insertError } = await supabase
        .from("admins")
        .insert([
          {
            id: data?.user?.id, // Access user's id from response
            email: values.email,
            password: values.password,
          },
        ])
        .select();

      if (insertError) throw insertError;
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
}

export const taskService = new TaskService();
