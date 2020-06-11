import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg"; // thumbs up icon
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom"; // a React element for linking
import memoryCards from "../../mock-data/memory-cards";

const memoryCard = memoryCards[2];

export default function ReviewAnswer() {
   return (
      <AppTemplate>
         {/* <!-- Header ends here --> */}

         <div className="mb-5">
            <div className="card bg-primary">
               <div className="card-body">{memoryCard.imagery}</div>
            </div>
            <div className="card bg-secondary">
               <div className="card-body">{memoryCard.answer}</div>
            </div>
         </div>

         {/* <!-- button row --> */}

         <div className="row mb-4">
            <div className="col">
               <Link className="btn btn-link" to="/edit">
                  Edit
               </Link>
               <div className="float-right">
                  <Link
                     className="btn btn-outline-primary mr-4"
                     to="/review-empty"
                  >
                     Needs work
                  </Link>
                  <Link className="btn btn-primary" to="/review-imagery">
                     <img
                        src={thumbsUpIcon}
                        width="20px"
                        style={{
                           marginBottom: "5px",
                           marginRight: "8px",
                        }}
                        alt=""
                     />
                     {/* use alt="" for decorative images */}
                     {/* converting this html to JSX:
                           style="margin-bottom: 5px; margin-right: 8px;"
                           style={{marginBottom: "5px", marginRight: "8px",}}
                           */}
                     Got it
                  </Link>
               </div>
            </div>
         </div>

         {/* <!-- end button row --> */}
      </AppTemplate>
   );
}
