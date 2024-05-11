import React, { useContext } from "react";
import FormContext from "../context/FormContext";

function Other() {
  const { formData, setFormData } = useContext(FormContext);
  const submitForm=()=>{
    alert('Form Submitted');
    console.log(formData);
  }
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
      <button onClick={()=>submitForm()}>Submit</button>
    </div>
  );
}

export default Other;
