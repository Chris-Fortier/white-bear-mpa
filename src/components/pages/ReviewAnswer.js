import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg"; // thumbs up icon
import Header from "../ui/Header";

export default function ReviewAnswer() {
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
                     className="btn btn-secondary btn-navigation"
                  >
                     Create new
                  </a>
                  <a
                     type="button"
                     href="review-imagery.html"
                     className="btn btn-secondary tab-separator btn-navigation tab-active"
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

               <div className="mb-5">
                  <div className="card bg-primary">
                     <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa
                     </div>
                  </div>
                  <div className="card bg-secondary">
                     <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa
                     </div>
                  </div>
               </div>

               {/* <!-- button row --> */}

               <div className="row mb-4">
                  <div className="col">
                     <a className="btn btn-link" href="edit.html">
                        Edit
                     </a>
                     <div className="float-right">
                        <a
                           className="btn btn-outline-primary mr-4"
                           href="review-empty.html"
                        >
                           Needs work
                        </a>
                        <a className="btn btn-primary" href="review-empty.html">
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
                        </a>
                     </div>
                  </div>
               </div>

               {/* <!-- end button row --> */}
            </div>
         </div>
      </div>
   );
}
