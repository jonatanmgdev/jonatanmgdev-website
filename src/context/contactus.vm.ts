export interface contactUsData {
  name: string;
  surnames: string;
  email: string;
  phone: string;
  message: string;
  termsAccepted: boolean;
}

export interface InitialContactUsValue {
  data_forms: contactUsData,
}

export interface ContactUsContextProps {
  data: InitialContactUsValue;
  setFormValue: (fieldName: string, value: string ) => void;
  resetContactUsDataContext: () => void;
}