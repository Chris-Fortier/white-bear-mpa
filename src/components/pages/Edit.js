import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom"; // a React element for linking

export default function Edit() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />

         <h4>Edit card</h4>

         <div className="mb-2">
            <div className="card bg-primary">
               <div className="card-body">
                  <textarea rows="11" className="d-sm-none" autoFocus>
                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                     Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                     natoque penatibus et magnis dis parturient montes
                  </textarea>
                  <textarea rows="6" className="d-none d-sm-block" autoFocus>
                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                     Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                     natoque penatibus et magnis dis parturient montes
                  </textarea>
               </div>
            </div>
            <div className="card bg-secondary">
               <div className="card-body">
                  <textarea rows="11" className="d-sm-none">
                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                     Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                     natoque penatibus et magnis dis parturient montes
                  </textarea>
                  <textarea rows="6" className="d-none d-sm-block">
                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                     Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                     natoque penatibus et magnis dis parturient montes
                  </textarea>
               </div>
            </div>
         </div>

         <div className="float-right mb-5">
            <p>205/240</p>
         </div>
         <div className="clearfix"></div>

         <div className="row mb-4">
            <div className="col">
               <Link className="btn btn-link" to="/all-cards">
                  Discard changes
               </Link>
            </div>

            <div className="col">
               <Link
                  className="btn btn-primary btn-lg float-right"
                  to="/all-cards"
               >
                  <img
                     src="/icons/save.svg"
                     width="20px"
                     style={{ marginBottom: "5px", marginRight: "8px" }}
                     alt=""
                  />
                  Save
               </Link>
            </div>
         </div>

         {/* <!-- card properties --> */}
         <h4 className="mt-6">Card properties</h4>

         {/* <!-- https://getbootstrap.com/docs/4.4/content/tables/ -->
<!-- col-12 makes the table full width on smallest, col-sm-8 makes it take up 2/3 of width anything larger --> */}
         <table className="col-12 col-sm-8 table table-borderless table-sm">
            <tbody>
               <tr>
                  <th scope="row">Created on:</th>
                  <td>Dec. 24, 2019</td>
               </tr>
               <tr>
                  <th scope="row">Last attempt:</th>
                  <td>Dec. 31, 2019</td>
               </tr>
               <tr>
                  <th scope="row">Next attempt:</th>
                  <td>Jul. 14, 2020</td>
               </tr>
               <tr>
                  <th scope="row">Consecutives:</th>
                  <td>4</td>
               </tr>
            </tbody>
         </table>

         {/* <!-- show delete checkbox --> */}
         <div className="custom-control custom-checkbox mb-2">
            <input
               type="checkbox"
               className="custom-control-input"
               id="show-delete"
            />
            <label className="custom-control-label" htmlFor="show-delete">
               Show delete button
            </label>
         </div>

         {/* <!-- delete this card button --> */}
         <div className="row mb-4 invisible" id="delete-button">
            <div className="col">
               <Link className="btn btn-outline-danger" to="/all-cards">
                  Delete this card
               </Link>
            </div>
         </div>

         {/* <!-- end of content --> */}
      </AppTemplate>
   );
}
