import React from "react";
import appLogo from "../../icons/logo-app.svg";

export default function Header() {
   return (
      <div>
         {" "}
         {/* <!-- Header Starts Here --> */}
         <img src={appLogo} width="32px;" alt="White Bear Logo" />
         <h3 className="d-inline text-brand ml-1">White Bear</h3>
         <button className="btn btn-link float-right btn-navigation">
            <a href="index.html">Log Out</a>
         </button>
      </div>
   );
}
