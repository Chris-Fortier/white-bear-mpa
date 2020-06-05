import React from "react";
import appLogo from "../../icons/logo-app.svg";
import { Link } from "react-router-dom"; // a React element for linking

export default function Header() {
   return (
      <div>
         {" "}
         {/* <!-- Header Starts Here --> */}
         <img src={appLogo} width="32px;" alt="White Bear Logo" />
         <h3 className="d-inline text-brand ml-1">White Bear</h3>
         <Link to="/" className="btn btn-link float-right btn-navigation">
            Log Out
         </Link>
      </div>
   );
}
