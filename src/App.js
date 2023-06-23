import logo from "./logo.svg";
import "./App.css";

function App() {
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
