export interface RegularUsers {
  name: string;
  password: string;
  confirm: string;
  lastName: string;
  email: string;
  gender: string;
  birthDate: object;
  inputNumber: number;
}
export interface AllData {
  id: string;
  email: string;
  password: string;
  role: number;
}

export interface AuthData {
  username: string;
  password: string;
}
