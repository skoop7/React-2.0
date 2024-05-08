import Card from "./Components/Card";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="font-bold text-3xl bg-slate-600 rounded-xl text-gray-200 m-8 p-8">
        Tailwind Test
      </h1>
      <Card username="Saurabh" btnText="Click me" />
      <Card username="skoop7" btnText="View me" />
    </>
  );
}

export default App;
