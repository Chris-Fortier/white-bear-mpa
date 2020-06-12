import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom"; // a React element for linking
import memoryCards from "../../mock-data/memory-cards";
import toDisplayData from "date-fns/format";
import classnames from "classnames";
import { checkIsOver, MAX_CARD_CHARS } from "../../utils/helpers"; // use {} if its not importing the default export

const memoryCard = memoryCards[2];

export default class Edit extends React.Component {
   constructor(props) {
      super(props);
      console.log("In the edit component");
      this.state = {
         answerText: memoryCard.answer,
         imageryText: memoryCard.imagery,
      };
   }

   checkHasInvalidCharacterCount() {
      if (
         this.state.answerText.length > MAX_CARD_CHARS ||
         this.state.answerText.length === 0 ||
         this.state.imageryText.length > MAX_CARD_CHARS ||
         this.state.imageryText.length === 0
      ) {
         return true;
      } else {
         return false;
      }
   }

   // updates the state based on user edits to the input
   setImageryText(e) {
      this.setState({ imageryText: e.target.value }); // sets the state to match the user input (value of the event)
      // console.log(e.target, e.target.value);
   }

   // updates the state based on user edits to the input
   setAnswerText(e) {
      this.setState({ answerText: e.target.value }); // sets the state to match the user input (value of the event)
      // console.log(e.target, e.target.value);
   }

   render() {
      return (
         <AppTemplate>
            <h4>Edit card</h4>

            <div className="mb-2">
               <div className="card bg-primary">
                  <div className="card-body">
                     <textarea
                        rows="6"
                        className="d-sm-block"
                        autoFocus
                        defaultValue={memoryCard.imagery}
                        onChange={(e) => this.setImageryText(e)}
                     ></textarea>
                  </div>
               </div>
               <div className="card bg-secondary">
                  <div className="card-body">
                     <textarea
                        rows="6"
                        className="d-sm-block"
                        defaultValue={memoryCard.answer}
                        onChange={(e) => this.setAnswerText(e)}
                     ></textarea>
                  </div>
               </div>
            </div>

            <div className="float-right mb-5 text-muted">
               <p>
                  <span
                     className={classnames({
                        "text-danger": checkIsOver(
                           this.state.imageryText,
                           MAX_CARD_CHARS
                        ),
                     })}
                  >
                     Top:&nbsp;{this.state.imageryText.length}/{MAX_CARD_CHARS}
                     &nbsp;
                  </span>
                  <span
                     className={classnames({
                        "text-danger": checkIsOver(
                           this.state.answerText,
                           MAX_CARD_CHARS
                        ),
                     })}
                  >
                     Bottom:&nbsp;{this.state.answerText.length}/
                     {MAX_CARD_CHARS}
                  </span>
               </p>
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
                     className={classnames(
                        "btn btn-primary btn-lg float-right",
                        { disabled: this.checkHasInvalidCharacterCount() }
                     )}
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
                     <td>
                        {toDisplayData(memoryCard.createdAt, "MMM dd, yyyy")}
                     </td>
                  </tr>
                  <tr>
                     <th scope="row">Last attempt:</th>
                     <td>
                        {toDisplayData(
                           memoryCard.lastAttemptAt,
                           "MMM dd, yyyy"
                        )}
                     </td>
                  </tr>
                  <tr>
                     <th scope="row">Next attempt:</th>
                     <td>
                        {toDisplayData(
                           memoryCard.nextAttemptAt,
                           "MMM dd, yyyy"
                        )}
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
}
