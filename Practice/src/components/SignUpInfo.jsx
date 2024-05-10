import React, { useContext } from "react";
import FormContext from "../context/FormContext";

function SignUpInfo() {
    const {formData,setFormData}=useContext(FormContext);
  return (
    <div className="signup-container">
      <input
        type="text"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="password"
        value={formData.password}
        onChange={(e) => {
          setFormData({ ...formData, password: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="confirm password"
        value={formData.confirmPassword}
        onChange={(e) => {
          setFormData({ ...formData, confirmPassword: e.target.value });
        }}
      />
    </div>
  );
}

export default SignUpInfo;
