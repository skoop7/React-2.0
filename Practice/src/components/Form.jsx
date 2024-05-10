import { useContext, useState } from "react";
import React from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import Other from "./Other";
import FormContext from "../context/FormContext";

function Form() {
  //   const [page, setPage] = useState(0);
  //   const [formData, setFormData] = useState({
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //     firstname: "",
  //     lastname: "",
  //     username: "",
  //     nationality: "",
  //     hobbies: "",
  //     quotes: "",
  //   });

  //   const formTitles = ["Sign Up", "Personal Info", "Other"];

  const { formData, setFormData, page, setPage, formTitles } = useContext(FormContext);

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <Other formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <div className="form">
      <div className="progressbar"></div>
      <div className="form-container">
        <div className="header">
          <h1>{formTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer"></div>
        <button
          disabled={page === 0}
          onClick={() => {
            setPage((currpage) => currpage - 1);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            if (page === formTitles.length - 1) {
              alert("Form Submitted");
              console.log(formData);
              setPage(0);
            } else setPage((currpage) => currpage + 1);
          }}
        >
          {page === formTitles.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Form;
