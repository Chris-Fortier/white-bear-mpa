import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg"; // thumbs up icon
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom"; // a React element for linking
import { connect } from "react-redux";
import actions from "../../store/actions";

class ReviewAnswer extends React.Component {
   goToNextCard() {
      // TODO: if index of current card = length fo the array of all the cards, we've gone to the end of the arry
      // then show out of cards component
      this.props.dispatch({ type: actions.UPDATE_INDEX_OF_CURRENT_CARD });
      this.props.history.push("/review-imagery"); // goes to review imagery of next card
   }

   render() {
      const memoryCard = this.props.queue.cards[this.props.queue.index]; // gets the current card
      return (
         <AppTemplate>
            {/* <!-- Header ends here --> */}

            <div className="mb-5">
               <div className="card bg-primary">
                  <div className="card-body">
                     {memoryCard && memoryCard.imagery}
                  </div>
               </div>
               <div className="card bg-secondary">
                  <div className="card-body">
                     {memoryCard && memoryCard.answer}
                  </div>
               </div>
            </div>

            {/* <!-- button row --> */}

            <div className="row mb-4">
               <div className="col">
                  <Link className="btn btn-link" to="/edit">
                     Edit
                  </Link>
                  <div className="float-right">
                     <button
                        className="btn btn-outline-primary mr-4"
                        onClick={() => {
                           this.goToNextCard();
                        }}
                     >
                        Needs work
                     </button>
                     <button
                        className="btn btn-primary"
                        onClick={() => {
                           this.goToNextCard();
                        }}
                     >
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
                     </button>
                  </div>
               </div>
            </div>

            {/* <!-- end button row --> */}
         </AppTemplate>
      );
   }
}

// maps the store to props
function mapStateToProps(state) {
   return {
      queue: state.queue,
   };
}

export default connect(mapStateToProps)(ReviewAnswer); // this is "currying"
