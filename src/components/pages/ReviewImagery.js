import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom"; // a React element for linking
// import memoryCards from "../../mock-data/memory-cards";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";

// const memoryCard = memoryCards[2];

class ReviewImagery extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get("https://run.mocky.io/v3/830919fe-14ee-4918-ba47-fb8d7d0243d3")
         .then(function (res) {
            // handle success
            // res is shorthand for response
            console.log(res);
            props.dispatch({
               type: actions.STORE_QUEUED_CARDS,
               payload: res.data,
            }); // dispatching an action
            // res.data is the data from the response
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         });
      // delete url https://designer.mocky.io/manage/delete/830919fe-14ee-4918-ba47-fb8d7d0243d3/Sg97iH72WMbqEXbJbyUkBezCO20fYpm85qWY
   }

   render() {
      const memoryCard = this.props.queuedCards[this.props.indexOfCurrentCard]; // gets the current card
      return (
         <AppTemplate>
            <div className="mb-5">
               <div className="card bg-primary">
                  <div className="card-body">
                     {memoryCard && memoryCard.imagery}
                     {/* it will only render memoryCard.imagery if memoryCard exists */}
                  </div>
               </div>
            </div>

            {/* <!-- button row --> */}

            <div className="row mb-4">
               <div className="col">
                  <Link to="/review-answer" className="btn btn-link">
                     Previous card
                  </Link>
                  <div className="float-right">
                     <Link
                        to="/review-answer"
                        className="btn btn-outline-primary btn-lg"
                     >
                        Show answer
                     </Link>
                  </div>
               </div>
            </div>

            {/* <!-- end button row -->          */}
         </AppTemplate>
      );
   }
}

// maps the store to props
function mapStateToProps(state) {
   return {
      queuedCards: state.queuedCards,
      indexOfCurrentCard: state.indexOfCurrentCard,
   };
}

export default connect(mapStateToProps)(ReviewImagery); // this is "currying"
