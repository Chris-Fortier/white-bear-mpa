import React from "react";
import saveIcon from "../../icons/save.svg"; // thumbs up icon
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom"; // a React element for linking

export default function CreateImagery() {
   return (
      <AppTemplate>
         <h4>Add Memorable Imagery</h4>
         <div className="mb-2">
            <div className="card bg-primary">
               <div className="card-body">
                  <textarea
                     rows="11"
                     className="d-sm-none"
                     autoFocus={true}
                  ></textarea>
                  <textarea
                     rows="6"
                     className="d-none d-sm-block"
                     autoFocus={true}
                     id="imagery-content"
                  ></textarea>
               </div>
            </div>
            <div className="card bg-secondary">
               <div className="card-body" id="answer-content">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa
               </div>
            </div>
         </div>
         <div className="float-right mb-5">
            <p>205/240</p>
         </div>
         <div className="clearfix"></div>
         <div className="row mb-4">
            <div className="col">
               <Link
                  to="/create-answer"
                  className="btn btn-link"
                  id="back-to-answer"
               >
                  Back to answer
               </Link>
               <Link
                  to="/create-answer"
                  className="float-right btn btn-primary btn-lg"
                  id="save-imagery"
               >
                  <img
                     src={saveIcon}
                     width="20px"
                     style={{
                        marginBottom: "3px",
                        marginRight: "8px",
                     }}
                     alt=""
                  />
                  Save
               </Link>
            </div>
         </div>
         {/* <!-- end of buttons --> */}
      </AppTemplate>
   );
}
