import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom"; // a React element for linking

export default function ReviewImagery() {
   return (
      <AppTemplate>
         <Header />

         <Navigation />

         <div className="mb-5">
            <div className="card bg-primary">
               <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa
               </div>
            </div>
         </div>

         {/* <!-- button row --> */}

         <div className="row mb-4">
            <div className="col">
               <button className="btn btn-link">Previous card</button>
               <div className="float-right">
                  <Link
                     to="/review-answer"
                     className="btn btn-outline-primary btn-lg"
                  >
                     Show answer
                  </Link>
               </div>
            </div>
         </div>

         {/* <!-- end button row -->          */}
      </AppTemplate>
   );
}
