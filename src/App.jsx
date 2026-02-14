import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setMessage("Please fill all fields");
      return;
    }

    if (email === "admin@gmail.com" && password === "12345") {
      setMessage("Login Successful ✅");
    } else {
      setMessage("Invalid Credentials ❌");
    }
  };

  return (
    <div className="container">
      <h1>Experiment 3.1.1</h1>
      <h3>Login Form with React State Management</h3>

      <form onSubmit={handleSubmit} className="card">
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <p>{message}</p>
      </form>
    </div>
  );
}

export default App;
