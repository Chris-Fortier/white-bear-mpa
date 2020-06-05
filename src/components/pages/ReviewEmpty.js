import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom"; // a React element for linking

export default function ReviewEmpty() {
   return (
      <AppTemplate>
         <Header />

         <Navigation />

         <h4>Out of cards</h4>

         {/* <!-- button row --> */}

         <div className="row mb-4">
            <div className="col">
               <Link className="btn btn-link" to="/review-answer">
                  Previous card
               </Link>
               <div className="float-right">
                  <Link
                     to="/review-imagery"
                     className="btn btn-outline-primary btn-lg"
                  >
                     Get more cards
                  </Link>
               </div>
            </div>
         </div>

         {/* <!-- end button row -->          */}
      </AppTemplate>
   );
}
