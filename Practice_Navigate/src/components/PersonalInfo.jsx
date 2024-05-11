import React, { useContext } from "react";
import FormContext from "../context/FormContext";
import { useNavigate } from "react-router-dom";

function PersonalInfo() {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();
  const gotolastPage = () => {
    navigate("/other");
  };
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
      <button onClick={() => gotolastPage()}>Go to Last Page</button>
    </div>
  );
}

export default PersonalInfo;
