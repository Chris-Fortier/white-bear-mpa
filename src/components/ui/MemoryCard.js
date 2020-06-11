import React from "react";
import editIcon from "../../icons/edit.svg"; // thumbs up icon
import { Link } from "react-router-dom"; // a React element for linking

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
   );
}
