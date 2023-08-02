import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlesubmit = () => {
    console.log(email);
  };
  function changeemail(e) {
    setEmail(e.target.value);
  }
  const changepass = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        name="email"
        type="text"
        placeholder="Email"
        onChange={changeemail}
        style={{
          width: "20rem",
          height: "2rem",
          margin: "1rem",
        }}
      />
      <input
        value={password}
        type="password"
        placeholder="password"
        onChange={changepass}
        style={{
          width: "20rem",
          height: "2rem",
          margin: "1rem",
        }}
      />
      <button
        style={{
          width: "10rem",
          height: "2rem",
        }}
        onClick={handlesubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
