import React from "react";
import AppTemplate from "../ui/AppTemplate";
import MemoryCard from "../ui/MemoryCard";
import memoryCards from "../../mock-data/memory-cards";
import orderBy from "lodash/orderBy";
// const memoryCard = memoryCards[2];

export default class AllCards extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         order: '["createdAt"], ["desc"]',
         // order: [['createdAt'], ['desc']],
         memoryCards: orderBy(memoryCards, ["createdAt"], ["desc"]),
      };

      /*

      EASY
      orderBy([totalSuccessfulAttempts, createdAt], [desc, desc])

      HARD
      orderBy([totalSuccessfulAttempts, createdAt], [asc, asc])

      MOST RECENT
      orderBy([createdAt], [desc])

      OLDEST
      orderBy([createdAt], [asc])

      */
   }

   // changes the order of the memory cards
   setMemoryCardsOrder(e) {
      console.log("You've made a change.");
      const newOrder = e.target.value;
      console.log(newOrder);
      const copyOfMemoryCards = [...this.state.memoryCards];
      const toJson = JSON.parse(newOrder);
      const orderedMemoryCards = orderBy(copyOfMemoryCards, ...toJson);
      this.setState({ order: newOrder, memoryCards: orderedMemoryCards });
   }

   render() {
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
                        value={this.state.order}
                        className="float-right btn dropdown-toggle btn-block"
                        style={{ height: "36px" }}
                        onChange={(e) => this.setMemoryCardsOrder(e)}
                     >
                        <option value='[["createdAt"], ["desc"]]'>
                           Most recent
                        </option>
                        <option value='[["createdAt"], ["asc"]]'>Oldest</option>
                        <option value='[["totalSuccessfulAttempts", "createdAt"], ["asc", "asc"]]'>
                           Hardest
                        </option>
                        <option value='[["totalSuccessfulAttempts", "createdAt"], ["desc", "desc"]]'>
                           Easiest
                        </option>
                     </select>
                  </div>
               </div>
            </form>

            {this.state.memoryCards.map((memoryCard) => {
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
}
