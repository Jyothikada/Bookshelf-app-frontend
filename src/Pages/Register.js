import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://book-app-backend-pylt.onrender.com/register", { username, password });
      alert(response.data.message); 
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An error occurred");
      }
      console.error(error);
    }
  };

  return (
    
    <div className="form-group">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: "100%" }} />
        </div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "100%" }} />
          <button type="submit" style={{ width: "100%", maxWidth: "200px" }}>Register</button>
        
      </form>
    </div>
  
  );
}


export default Register;
