import React, { createContext, useState } from "react";
import { RegularUsers } from "./task.types";
import { formatDateToIso } from "../../utils/dateTime";

type TaskContextType = {
  regularUsers: RegularUsers | null;
  setRegularUsers: React.Dispatch<React.SetStateAction<RegularUsers | null>>;
};

type TaskProviderProps = {
  children: React.ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TaskContext = createContext<TaskContextType>(null as any);

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [regularUsers, setRegularUsers] = useState<RegularUsers | null>(null);
  console.log(regularUsers);
  //   formatDateToIso(regularUsers?.birthDate);
  if (regularUsers?.birthDate) {
    const date = formatDateToIso(regularUsers?.birthDate);
    console.log(date);
  }
  return (
    <TaskContext.Provider value={{ regularUsers, setRegularUsers }}>
      {children}
    </TaskContext.Provider>
  );
};
