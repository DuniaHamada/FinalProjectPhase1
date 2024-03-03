import style from "./LogIn.module.css";

import { Link } from "react-router-dom";

function LogIn() {
  return (
    <form>
      <div className="col-md-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="col-4">
        <button type="submit" className={style.btn}>
          Submit
        </button>
      </div>
      <div className="col-4">
        <div className={style.para}>
          <p>Not have an account?<Link to="/signup"> Sign Up</Link></p>
          
        </div>
      </div>
    </form>
  );
}

export default LogIn;
