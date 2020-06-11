import React from "react";
import AppTemplate from "../ui/AppTemplate";
// import { Link } from "react-router-dom"; // a React element for linking

export default function Edit() {
   return (
      <AppTemplate>
         <h4>Edit card</h4>

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

         <div className="custom-control custom-switch">
            <input
               type="checkbox"
               className="custom-control-input"
               id={"show-packed-switch"}
            />
            <label
               className="custom-control-label"
               htmlFor={"show-packed-switch"}
            >
               Show {} Packed Items
            </label>
         </div>
      </AppTemplate>
   );
}
