import React from "react";
// import { Link } from "react-router-dom"; // a React element for linking
import classnames from "classnames";
import hash from "object-hash";
import { v4 as getUuid } from "uuid";

export default class LogIn extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         emailError: "",
         passwordError: "",
         hasEmailError: false,
         hasPasswordError: false,
      };
   }

   // tests if the email is valid
   async setEmailState(emailInput) {
      const lowerCasedEmailInput = emailInput.toLowerCase();

      // eslint-disable-next-line
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (emailInput === "")
         this.setState({
            emailError: "Please enter your email address.",
            hasEmailError: true,
         });
      else if (!emailRegex.test(lowerCasedEmailInput)) {
         this.setState({
            emailError: "Please enter a valid email address.",
            hasEmailError: true,
         });
      } else {
         this.setState({ emailError: "", hasEmailError: false });
      }
   }

   // tests if the email and password are valid and if so creates the user
   async validateAndCreateUser() {
      const emailInput = document.getElementById("email-input").value;
      const passwordInput = document.getElementById("password-input").value;
      console.log(emailInput, passwordInput);

      // await is used on these to make sure we get the states of these before the if statement
      await this.setEmailState(emailInput);
      await this.setPasswordState(passwordInput, emailInput);

      if (!this.state.hasEmailError && !this.state.hasPasswordError) {
         const user = {
            id: getUuid(),
            email: emailInput,
            password: hash(passwordInput),
            createdAt: Date.now(),
         };
         console.log(user);
      }
   }

   // checks if the password is valid
   async setPasswordState(passwordInput, emailInput) {
      if (passwordInput === "") {
         // check if password input is blank
         this.setState({
            passwordError: "Please enter your password.",
            hasPasswordError: true,
         });
      } else {
         this.setState({ passwordError: "", hasPasswordError: false });
      }
   }

   render() {
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
                        className={classnames({
                           "form-control": true,
                           "is-invalid": this.state.hasEmailError,
                        })}
                        id="email-input"
                        required
                     />
                     {this.state.hasEmailError && (
                        <div className="text-danger" id="email-error">
                           {this.state.emailError}
                        </div>
                     )}
                  </div>
                  <div className="form-group">
                     <label htmlFor="exampleInputPassword1">Password</label>
                     <input
                        type="password"
                        className={classnames({
                           "form-control": true,
                           "is-invalid": this.state.hasPasswordError,
                        })}
                        id="password-input"
                        required
                     />
                     {this.state.hasPasswordError && (
                        <div className="text-danger" id="password-error">
                           {this.state.passwordError}
                        </div>
                     )}
                  </div>
                  <button
                     to="/create-answer"
                     className="btn btn-success w-100"
                     id="user-button"
                     type="button"
                     onClick={() => this.validateAndCreateUser()}
                  >
                     Log In
                  </button>
               </form>
            </div>
         </div>
      );
   }
}
