import React, { useState } from "react";
import FormContext from "./FormContext";

const FormContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstname: "",
    lastname: "",
    username: "",
    nationality: "",
    hobbies: "",
    quotes: "",
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;