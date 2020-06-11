import React from "react";
import AppTemplate from "../ui/AppTemplate";
import MemoryCard from "../ui/MemoryCard";
import memoryCards from "../../mock-data/memory-cards";
// const memoryCard = memoryCards[2];

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

         {memoryCards.map((memoryCard) => {
            return (
               <MemoryCard
                  answer={memoryCard.answer}
                  imagery={memoryCard.imagery}
                  key={memoryCard.id}
               />
            );
         })}
      </AppTemplate>
   );
}
