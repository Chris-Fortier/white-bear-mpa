import actions from "../actions";

export default function indexOfCurrentCard(state = 0, action) {
   // default for state is an empty array

   // action has two things in it: action.payload and action.type

   switch (action.type) {
      case actions.UPDATE_INDEX_OF_CURRENT_CARD:
         return state + 1; // goes to the next card
      default:
         return state;
   }
}
