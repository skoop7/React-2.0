import React, { useContext } from "react";
import FormContext from "../context/FormContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const gotoPersonal = () => {
    navigate("/personal");
  };
  return (
    <>
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
        <button onClick={() => gotoPersonal()}>Next</button>
      </div>
    </>
  );
}

export default Home;
