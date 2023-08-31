import { supabase } from "../../client";
import { AllData, AuthData } from "./task.types";

const signUpUser = async (auth: AllData) => {
  return supabase.auth.signUp({ email: auth.email, password: auth.password });
};

const signInUser = async (auth: AuthData) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: auth.username,
    password: auth.password,
  });
  console.log(data.user?.id);
};

export const taskAuth = {
  signUpUser,
  signInUser,
};
