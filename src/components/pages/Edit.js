import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom"; // a React element for linking
import memoryCards from "../../mock-data/memory-cards";
import toDisplayData from "date-fns/format";

const memoryCard = memoryCards[2];

export default function Edit() {
   return (
      <AppTemplate>
         <h4>Edit card</h4>

         <div className="mb-2">
            <div className="card bg-primary">
               <div className="card-body">
                  <textarea
                     rows="11"
                     className="d-sm-none"
                     autoFocus
                     defaultValue={memoryCard.imagery}
                  ></textarea>
                  <textarea
                     rows="6"
                     className="d-none d-sm-block"
                     autoFocus
                     defaultValue={memoryCard.imagery}
                  ></textarea>
               </div>
            </div>
            <div className="card bg-secondary">
               <div className="card-body">
                  <textarea
                     rows="11"
                     className="d-sm-none"
                     defaultValue={memoryCard.answer}
                  ></textarea>
                  <textarea
                     rows="6"
                     className="d-none d-sm-block"
                     defaultValue={memoryCard.answer}
                  ></textarea>
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

         <table className="col-12 col-sm-8 table table-borderless table-sm">
            <tbody>
               <tr>
                  <th scope="row">Created on:</th>
                  <td>{toDisplayData(memoryCard.createdAt, "MMM dd, yyyy")}</td>
               </tr>
               <tr>
                  <th scope="row">Last attempt:</th>
                  <td>
                     {toDisplayData(memoryCard.lastAttemptAt, "MMM dd, yyyy")}
                  </td>
               </tr>
               <tr>
                  <th scope="row">Next attempt:</th>
                  <td>
                     {toDisplayData(memoryCard.nextAttemptAt, "MMM dd, yyyy")}
                  </td>
               </tr>
               <tr>
                  <th scope="row">Consecutives:</th>
                  <td>{memoryCard.totalSuccessfulAttempts}</td>
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
         <div className="row mb-4" id="delete-button">
            <div className="col">
               <Link className="btn btn-outline-danger" to="/all-cards">
                  Delete this card
               </Link>
            </div>
         </div>
         <div className="custom-control custom-switch">
            <input
               type="checkbox"
               className="custom-control-input"
               id={"show-packed-switch"}
            />
         </div>

         {/* <!-- end of content --> */}
      </AppTemplate>
   );
}
