import React, { useState } from "react";

function Login(props) {
  const [user, setuser] = useState({
    title: "",
    password: ""
  });
  const [login, setlogin] = useState([]);
  function handleSubmit(e) {
    setlogin(user);
    // props.data(user);
    e.preventDefault();
  }
  function handleChange(e) {
    setuser({ ...user, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <form onChange={handleSubmit}>
        <div class="container mt-3">
          <h2>Login </h2>
          <div class="card">
            <div class="card-body">
              <input
                type="email"
                placeholder="email"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="password"
                placeholder="password"
                onChange={(e) => handleChange(e)}
              />
              <input type="submit" placehlder="Login" value="Login" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
