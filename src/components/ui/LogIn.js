import React from "react";
import { Link } from "react-router-dom"; // a React element for linking

export default function SignUp() {
   return (
      <div className="offset-1 col-10 offset-sm-2 col-sm-8 offset-md-1 col-md-4 offset-lg-1 col-lg-3 offset-xl-1 col-xl-3">
         <div className="card">
            <h2 className="card-title">Welcome back</h2>
            <p>Log in with your email address and password.</p>

            <form className="mb-0 needs-validation" noValidate>
               <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                     type="email"
                     className="form-control"
                     id="existing-email-input"
                     required
                  />
                  <div className="text-danger" id="existing-email-error">
                     email error
                  </div>
               </div>
               <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                     type="password"
                     className="form-control"
                     id="existing-password-input"
                     required
                  />
                  <div className="text-danger" id="existing-password-error">
                     password error
                  </div>
               </div>
               <Link
                  className="btn btn-success float-right"
                  id="login-button"
                  to="/create-answer"
               >
                  Log in
               </Link>
            </form>
         </div>
      </div>
   );
}
