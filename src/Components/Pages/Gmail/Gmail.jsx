import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
const Gmail = () => {
  const [user, setUser] = useState({});

  const handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID token", response.credential);
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    localStorage.setItem("token", response.credential);
    document.getElementById("signIndiv").hidden = true;
  };

  const handleSignout = () => {
    setUser({});
    document.getElementById("signIndiv").hidden = false;
  };

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        "1060401697932-8t3er0s834v9kmre851hcclibnibav2h.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signIndiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  }, []);
  return (
    <div className="gmail">
      <div id="signIndiv"></div>
      {Object.keys(user).length != 0 && (
        <button onClick={(event) => handleSignout(event)} type="button">
          Sign Out
        </button>
      )}

      {user && (
        <div>
          <img src={user.picture} alt=""></img>
          <h1>{user.name}</h1>
        </div>
      )}
    </div>
  );
};
export default Gmail;
