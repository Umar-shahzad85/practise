import React, { useState } from "react";

const script = () => {
  const[login, setlogin] = useState(true)
  return (
    <div>
      <h1 className="d-flex alig-items-center bd-danger ">Registration form</h1>
      <form>
        <h4>Login</h4>
        <div className="name">
        <label htmlFor="name">Name:</label>
        <input type="text" />
        </div>
        <div className="lname">
        <label htmlFor="lname">Last Name:</label>
        <input type="text" />
        </div>
        <div className="pass">
        <label htmlFor="pass">passwords:</label>
        <input type="paswords" />
        </div>
        <button>submited</button>
        <p>already register <a href="">login</a></p>
      </form>
    </div>
  );
};

export default script;
