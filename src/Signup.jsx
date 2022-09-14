import React, { useState } from "react";

function Signup(props) {
  const [user, setuser] = useState({
    title: "",
    password: ""
  });
  const [login, setlogin] = useState([]);
  function handlesubmit(e) {
    setlogin(() => {
      return [...login, user];
    });
    console.log(user);
    // props.sata(user);
    e.preventDefault();
  }
  function handleChange(e) {
    setuser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <h3>Signup</h3>
        <div class="card">
          <div class="card-body">
            <input
              type="text"
              class="form-control"
              placeholder="username"
              name="username"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="email"
              class="form-control"
              placeholder="email"
              name="email"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <button type="submit" class="btn btn-primary">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
