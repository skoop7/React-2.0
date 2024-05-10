import React, { useContext } from "react";
import FormContext from "../context/FormContext";

function PersonalInfo() {
  const { formData, setFormData } = useContext(FormContext);
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="Firstname"
        value={formData.firstname}
        onChange={(e) => {
          setFormData({ ...formData, firstname: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Lastname"
        value={formData.lastname}
        onChange={(e) => {
          setFormData({ ...formData, lastname: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
    </div>
  );
}

export default PersonalInfo;
