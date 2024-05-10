import "./App.css";
import Form from "./components/Form";
import FormContextProvider from "./context/FormContextProvider";

function App() {
  return (
    <FormContextProvider>
      <Form />
    </FormContextProvider>
  );
}

export default App;
