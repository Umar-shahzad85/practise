import React from "react";

const script = () => {
  return (
    <div>
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
      </form>
    </div>
  );
};

export default script;
