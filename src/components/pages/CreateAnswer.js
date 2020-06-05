import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom"; // a React element for linking

export default function CreateAnswer() {
   return (
      <AppTemplate>
         <h4>Add an answer</h4>

         <div className="mb-2">
            <div className="card bg-secondary">
               <div className="card-body">
                  <textarea
                     rows="11"
                     className="d-sm-none"
                     autoFocus
                     onKeyUp="charCount()"
                  ></textarea>
                  <textarea
                     rows="6"
                     className="d-none d-sm-block"
                     id="answerField"
                     autoFocus
                  ></textarea>
               </div>
            </div>
         </div>

         <div className="float-right mb-5">
            <p id="counter">0/240</p>
         </div>
         <div className="clearfix"></div>

         {/* <!-- button row --> */}
         <div className="row mb-4">
            <div className="col">
               <div className="float-right">
                  <Link
                     className="float-right btn btn-outline-primary btn-lg"
                     to="/create-imagery"
                     id="next-button"
                  >
                     Next
                  </Link>
               </div>
            </div>
         </div>
         {/* <!-- end button row -->     */}
      </AppTemplate>
   );
}
