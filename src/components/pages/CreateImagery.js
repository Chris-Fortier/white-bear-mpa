import React from "react";
import saveIcon from "../../icons/save.svg"; // thumbs up icon
import Header from "../ui/Header";

export default function CreateImagery() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
               <Header />

               <div
                  className="btn-group d-flex mb-5"
                  role="navigation"
                  aria-label="navigation"
               >
                  <a
                     type="button"
                     href="create-answer.html"
                     className="btn btn-secondary btn-navigation tab-active"
                  >
                     Create new
                  </a>
                  <a
                     type="button"
                     href="review-imagery.html"
                     className="btn btn-secondary tab-separator btn-navigation"
                  >
                     Review
                  </a>
                  <a
                     type="button"
                     href="all-cards.html"
                     className="btn btn-secondary tab-separator btn-navigation"
                  >
                     All cards
                  </a>
               </div>

               {/* <!-- Header ends here --> */}

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
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa
                     </div>
                  </div>
               </div>

               <div className="float-right mb-5">
                  <p>205/240</p>
               </div>
               <div className="clearfix"></div>

               <div className="row mb-4">
                  <div className="col">
                     <button className="btn btn-link" id="back-to-answer">
                        Back to answer
                     </button>
                     <button
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
                     </button>
                  </div>
               </div>

               {/* <!-- end of buttons --> */}
            </div>
         </div>
      </div>
   );
}
