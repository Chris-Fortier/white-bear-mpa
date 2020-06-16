import actions from "../actions";

export default function queuedCards(state = [], action) {
   // default for state is an empty array

   // action has two things in it: action.payload and action.type

   switch (action.type) {
      case actions.STORE_QUEUED_CARDS:
         return action.payload; // [{},{}]
      default:
         return state;
   }
}
