import { supabase } from "../../client";
import { AllData } from "./task.types";

const insertUser = async (id: string | undefined, user: AllData) => {
  return supabase.from("users").insert([
    {
      id: id,
      email: user.email,
      password: user.password,
    },
  ]);
};

// const selectRole = async () => {
//   {
//     data: users, error;
//   }
//   supabase.from("users").select("*");
// };

// const { data: users, userError } = await supabase.from("users").select("id");
// const { data: admins, adminError } = await supabase.from("admins").select("id");
// const { data: shift, shiftError } = await supabase
//   .from("shift_leaders")
//   .select("id");

// const userId = users[0]?.id;
// const adminId = admins[0]?.id;
// const shiftId = shift[0]?.id;
// if(userId ===  )

export const taskRepo = {
  insertUser,
};
