import React from "react";
import landingLogo from "../../img/logo-landing.png"; // thumbs up icon
import { Link } from "react-router-dom"; // a React element for linking

export default function Landing() {
   return (
      <div className="background-image">
         <div className="container landing-page">
            {/* <!-- logo and title --> */}
            <div className="row mb-8 pt-7">
               {/* <!-- logo for larger sizes --> */}
               <div className="d-none d-md-block offset-sm-1 col-sm-11 offset-md-1 col-md-11 offset-lg-1 col-lg-11 offset-xl-1 col-xl-11">
                  <img src={landingLogo} alt="White Bear Logo" />
                  <h1 className="d-inline text-brand">White Bear</h1>
               </div>

               {/* <!-- logo for small sizes --> */}
               <div className="d-md-none offset-1">
                  <img
                     src={landingLogo}
                     alt="White Bear Logo"
                     className="small-title"
                  />
                  <h1 className="d-inline text-brand small-title">
                     White Bear
                  </h1>
               </div>
            </div>

            {/* <!-- cards --> */}
            <div className="row">
               {/* <!-- div for both cards with space between them --> */}
               <div className="offset-1 col-10 offset-sm-2 col-sm-8 offset-md-1 col-md-4 offset-lg-2 col-lg-3 offset-xl-2 col-xl-3">
                  <div className="card">
                     <h2 className="card-title">Nice to meet you</h2>
                     <p>Sign up for White Bear. Free forever</p>
                     <form
                        className="mb-0 needs-validation"
                        id="sign-up-form"
                        noValidate
                     >
                        <p className="text-success">Let's get you signed up</p>
                        <div className="form-group">
                           <label htmlFor="exampleInputEmail2">
                              Email address
                           </label>
                           <input
                              type="email"
                              className="form-control"
                              id="new-email-input"
                              required
                           />
                           <div className="text-danger" id="new-email-error">
                              email error
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="exampleInputPassword2">
                              Create a password
                           </label>
                           <input
                              type="password"
                              className="form-control"
                              id="new-password-input"
                              required
                           />
                           <div className="text-danger" id="new-password-error">
                              password error
                           </div>
                        </div>
                        <button
                           className="btn btn-success w-100"
                           id="new-user-button"
                        >
                           Let's Go
                        </button>
                     </form>
                     <Link
                        to="/create-answer"
                        className="btn btn-success float-right"
                        id="sign-up-button"
                     >
                        Sign up
                     </Link>
                  </div>
               </div>
               <div className="offset-1 col-10 offset-sm-2 col-sm-8 offset-md-1 col-md-4 offset-lg-1 col-lg-3 offset-xl-1 col-xl-3">
                  <div className="card">
                     <h2 className="card-title">Welcome back</h2>
                     <p>Log in with your email address and password.</p>

                     <form className="mb-0 needs-validation" noValidate>
                        <div className="form-group">
                           <label htmlFor="exampleInputEmail1">
                              Email address
                           </label>
                           <input
                              type="email"
                              className="form-control"
                              id="existing-email-input"
                              required
                           />
                           <div
                              className="text-danger"
                              id="existing-email-error"
                           >
                              email error
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="exampleInputPassword1">
                              Password
                           </label>
                           <input
                              type="password"
                              className="form-control"
                              id="existing-password-input"
                              required
                           />
                           <div
                              className="text-danger"
                              id="existing-password-error"
                           >
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
            </div>
            {/* <div className="row full-height">
               <div className="col full-height"></div>
            </div> */}
         </div>
      </div>
   );
}
