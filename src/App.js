import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  //define default email values
  const [email, setEmail] = useState("");
  //handle submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submit-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        alert("Email submitted sucessfully.");
      } else {
        alert("Error submitting email.");
      }
    } catch (error) {
      console.error("Error during email submission:", error);
      alert("Error");
    }
  };

  return (
    <div className="App">
      <div className="logo">cloth aesthetic.</div>
      <div className="logo">brand</div>
      <div className="email-submission-container">
        <input
          type="email"
          className="email-input"
          placeholder="Email Address"
        />
        <button className="submit-button">Submit</button>
      </div>
      <div className="bypass-container">Enter Using Password</div>
      <div className="privacy-policy">
        © 2023 Cloth Aesthetic Brand™. All rights reserved.{" "}
        <a href="#">Privacy Policy.</a>
      </div>
    </div>
  );
}

export default App;
