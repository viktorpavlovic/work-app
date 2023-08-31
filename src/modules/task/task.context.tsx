import React, { createContext, useState } from "react";

type TaskContextType = {
  role: null | number;
  setRole: React.Dispatch<React.SetStateAction<null | number>>;
};

type TaskProviderProps = {
  children: React.ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TaskContext = createContext<TaskContextType>(null as any);

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [role, setRole] = useState<null | number>(null);

  return (
    <TaskContext.Provider value={{ role, setRole }}>
      {children}
    </TaskContext.Provider>
  );
};

//   formatDateToIso(regularUsers?.birthDate);
// if (regularUsers?.birthDate) {
//   const date = formatDateToIso(regularUsers?.birthDate);
//   console.log(date);
// }
