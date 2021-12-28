import "./styles.css";
import Login from "./Login";
import Signup from "./Signup";
import React, { useState } from "react";

export default function App() {
  const [authType, setAuthType] = useState("login");
  return (
    <div className="App">
      {authType === "login" && <Login setAuthType={setAuthType} />}
      {authType === "signup" && <Signup setAuthType={setAuthType} />}
    </div>
  );
}
