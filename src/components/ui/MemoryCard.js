import React from "react";
import EditButton from "./EditButton";

export default function MemoryCard(props) {
   return (
      <div className="row mb-5">
         <div className="col-9 col-sm-10">
            <div className="card bg-primary">
               <div className="card-body allcards">{props.imagery}</div>
            </div>
            <div className="card bg-secondary">
               <div className="card-body allcards">{props.answer}</div>
            </div>
         </div>
         <div className="col-3 col-sm-2">
            <EditButton cssClasses="btn btn-link float right" hasIcon={true} />
         </div>
      </div>
   );
}
