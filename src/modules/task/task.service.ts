import { taskRepo } from "./task.repo";
import { taskAuth } from "./task.auth";
import { AllData, AuthData } from "./task.types";

class TaskService {
  onFinishRegistrationForm = async (values: AllData) => {
    try {
      const { data, error } = await taskAuth.signUpUser(values);
      if (error) throw error;
      const { error: insertError } = await taskRepo.insertUser(
        data?.user?.id,
        values
      );
      if (insertError) throw insertError;
    } catch (error) {
      alert(error);
    }
  };

  onFinishLogIn = (values: AuthData) => {
    taskAuth.signInUser(values);
    console.log(values);
  };

  findRole = () => {};
}

export const taskService = new TaskService();
