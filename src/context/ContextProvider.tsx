"use client";
import { useState } from "react";
import {
  ContactUsContextProps,
  InitialContactUsValue,
} from "@/context/contactus.vm";
import { INIT_VALUE_CONTACT_US } from "./context.initvalue";
import ContactUsContext from "./Context";

interface ContextProp {
  children: JSX.Element;
}

export const ContactUsContextProvider = ({ children }: ContextProp) => {
  const [data, setData] = useState<InitialContactUsValue>(INIT_VALUE_CONTACT_US);

  const setFormValue = (fieldName: string, value: string): void => {
    setData((prevData) => ({
      ...prevData,
      data_forms: {
        ...prevData.data_forms,
        [fieldName]: value,
      },
    }));
  };

  const resetContactUsDataContext = () => {
    setData(INIT_VALUE_CONTACT_US);
};

  const context: ContactUsContextProps = {
    data,
    setFormValue,
    resetContactUsDataContext,
  };

  return (
    <ContactUsContext.Provider value={context}>
      {children}
    </ContactUsContext.Provider>
  );
};
