import React, { useContext } from "react";
import FormContext from "../context/FormContext";

function Other() {
  const { formData, setFormData } = useContext(FormContext);
  return (
    <div className="Other-Container">
      <input
        type="text"
        placeholder="Nationality"
        value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Hobbies"
        value={formData.hobbies}
        onChange={(e) => {
          setFormData({ ...formData, hobbies: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Quote"
        value={formData.quotes}
        onChange={(e) => {
          setFormData({ ...formData, quotes: e.target.value });
        }}
      />
    </div>
  );
}

export default Other;
