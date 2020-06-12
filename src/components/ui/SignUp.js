import React from "react";
// import { Link } from "react-router-dom"; // a React element for linking
import classnames from "classnames";

export default class SignUp extends React.Component {
   constructor(props) {
      super(props);
      console.log("In a new class component!");
      this.state = {
         isDisplayingInputs: false,
         emailError: "",
         passwordError: "",
         hasEmailError: false,
         hasPasswordError: false,
      };
   }

   showInputs() {
      this.setState({
         isDisplayingInputs: true,
      });
   }

   setEmailState(emailInput) {
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

   checkHasLocalPart(passwordInput, emailInput) {
      if (emailInput.length < 4) {
         return false;
      } else {
         const localPart = emailInput.split("@")[0];
         return passwordInput.includes(localPart);
      }
   }

   setPasswordState(passwordInput, emailInput) {
      console.log(passwordInput);

      const uniqChars = [...new Set(passwordInput)];
      console.log("uniqChars", uniqChars);

      if (passwordInput === "") {
         // check if password input is blank
         this.setState({
            passwordError: "Please create a password.",
            hasPasswordError: true,
         });
      } else if (passwordInput.length < 9) {
         // check if password is less than 9 characters
         this.setState({
            passwordError: "Your password must be at least 9 characters.",
            hasPasswordError: true,
         });
      } else if (this.checkHasLocalPart(passwordInput, emailInput)) {
         // check if the local part of email is in the password
         this.setState({
            passwordError: "Your password cannot contain your email address.",
            hasPasswordError: true,
         });
      } else if (uniqChars.length < 3) {
         // check if the password has less than 3 unique characters
         this.setState({
            passwordError:
               "Your password must have at least three unique characters.",
            hasPasswordError: true,
         });
      } else {
         this.setState({ passwordError: "", hasPasswordError: false });
      }
   }

   validateAndCreateUser() {
      const emailInput = document.getElementById("email-input").value;
      const passwordInput = document.getElementById("password-input").value;
      this.setEmailState(emailInput);
      this.setPasswordState(passwordInput, emailInput);
      if (!this.state.hasEmailError && !this.state.hasPasswordError) {
         console.log("Valid!");
      }
   }

   render() {
      return (
         <div className="offset-1 col-10 offset-sm-2 col-sm-8 offset-md-1 col-md-4 offset-lg-2 col-lg-3 offset-xl-2 col-xl-3">
            <div className="card">
               <h2 className="card-title">Nice to meet you</h2>
               <p>Sign up for White Bear. Free forever</p>
               <form
                  className="mb-0 needs-validation"
                  id="sign-up-form"
                  noValidate
               >
                  {this.state.isDisplayingInputs && (
                     <>
                        <p className="text-success">Let's get you signed up</p>
                        <div className="form-group">
                           <label htmlFor="exampleInputEmail2">
                              Email address
                           </label>
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
                           <label htmlFor="exampleInputPassword2">
                              Create a password
                           </label>
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
                           Let's Go
                        </button>
                     </>
                  )}
               </form>
               {!this.state.isDisplayingInputs && (
                  <button
                     onClick={() => {
                        this.showInputs();
                     }}
                     className="btn btn-success float-right"
                     id="sign-up-button"
                  >
                     Sign up
                  </button>
               )}
            </div>
         </div>
      );
   }
}
