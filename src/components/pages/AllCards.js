import React from "react";
import editIcon from "../../icons/edit.svg"; // thumbs up icon
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom"; // a React element for linking

export default function AllCards() {
   return (
      <AppTemplate>
         {/* <!-- form stuff --> */}
         <form className="row mb-0">
            <div className="form-group col-8">
               <input
                  className="form-control"
                  id="search-for"
                  placeholder="Search for a word"
               />
            </div>
            <div className="col-4">
               <button
                  className="btn btn-primary btn-block btn-sm"
                  id="search-button"
                  type="button"
               >
                  Search
               </button>
            </div>
         </form>

         {/* <!-- select version --> */}
         <form className="row mb-0">
            <label htmlFor="cars" className="col-4">
               Sort cards by
            </label>

            <div className="form-group col-8">
               <div className="dropdown">
                  <select
                     id="cars"
                     className="float-right btn dropdown-toggle btn-block"
                     style={{ height: "36px" }}
                  >
                     <option value="volvo">Most recent</option>
                     <option value="saab">Oldest</option>
                     <option value="mercedes">Hardest</option>
                     <option value="audi">Easiest</option>
                  </select>
               </div>
            </div>
         </form>

         {/* <!-- one card --> */}
         <div className="row mb-5">
            <div className="col-9 col-sm-10">
               <div className="card bg-primary">
                  <div className="card-body allcards">
                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                     Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                     natoque penatibus et magnis dis parturient montes, nascetur
                     ridiculus mus. Donec quam felis, ultricies nec,
                     pellentesque eu, pretium quis, sem. Nulla consequat massa
                  </div>
               </div>
               <div className="card bg-secondary">
                  <div className="card-body allcards">
                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                     Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                     natoque penatibus et magnis dis parturient montes, nascetur
                     ridiculus mus. Donec quam felis, ultricies nec,
                     pellentesque eu, pretium quis, sem. Nulla consequat massa
                  </div>
               </div>
            </div>
            <div className="col-3 col-sm-2">
               <Link className="btn btn-link float-right" to="/edit">
                  <img
                     src={editIcon}
                     width="20px"
                     style={{
                        marginBottom: "5px",
                        marginRight: "8px",
                     }}
                     alt=""
                  />
                  Edit
               </Link>
            </div>
         </div>

         {/* <!-- one card --> */}
         <div className="row mb-5">
            <div className="col-9 col-sm-10">
               <div className="card bg-primary">
                  <div className="card-body allcards">
                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                     Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                     natoque penatibus et magnis dis parturient montes, nascetur
                     ridiculus mus. Donec quam felis, ultricies nec,
                     pellentesque eu, pretium quis, sem. Nulla consequat massa
                  </div>
               </div>
               <div className="card bg-secondary">
                  <div className="card-body allcards">
                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                     Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                     natoque penatibus et magnis dis parturient montes, nascetur
                     ridiculus mus. Donec quam felis, ultricies nec,
                     pellentesque eu, pretium quis, sem. Nulla consequat massa
                  </div>
               </div>
            </div>
            <div className="col-3 col-sm-2">
               <Link className="btn btn-link float-right" to="/edit">
                  <img
                     src={editIcon}
                     width="20px"
                     style={{
                        marginBottom: "5px",
                        marginRight: "8px",
                     }}
                     alt=""
                  />
                  Edit
               </Link>
            </div>
         </div>
      </AppTemplate>
   );
}
