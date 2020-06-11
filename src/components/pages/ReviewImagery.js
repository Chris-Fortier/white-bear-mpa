import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom"; // a React element for linking
import memoryCards from "../../mock-data/memory-cards";

const memoryCard = memoryCards[2];

export default function ReviewImagery() {
   return (
      <AppTemplate>
         <div className="mb-5">
            <div className="card bg-primary">
               <div className="card-body">{memoryCard.imagery}</div>
            </div>
         </div>

         {/* <!-- button row --> */}

         <div className="row mb-4">
            <div className="col">
               <Link to="/review-answer" className="btn btn-link">
                  Previous card
               </Link>
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
