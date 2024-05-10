import React, { useState } from "react";
import FormContext from "./FormContext";

const FormContextProvider = ({ children }) => {
  const [page, setPage] = useState(0);
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

  const formTitles = ["Sign Up", "Personal Info", "Other"];

  return (
    <FormContext.Provider
      value={{ formData, setFormData, page, setPage, formTitles }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
