export interface SafeInterface extends SafeFieldsInterface {
  _id: string;
  name: string;
  category: string;
  date: Date;
  user: string;
}

export interface SafeFieldsInterface {
  email: string;
  password: string;
  additional?: AdditionalSafeFieldsInterface[];
}

export interface AdditionalSafeFieldsInterface {
  [key: string]: string;
}

