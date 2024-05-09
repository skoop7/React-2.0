import Login from "./components/Login";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>React with Chai and this video is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
