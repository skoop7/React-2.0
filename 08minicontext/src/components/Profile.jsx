import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Log In</div>;

  return (
    <div>
      <h2>Welcome {user.username}</h2>
      <h3>Is your password {user.password}</h3>
    </div>
  );
}

export default Profile;
