import actions from "../actions";

export default function currentUser(state = {}, action) {
   // default for state is an empty object

   switch (action.type) {
      case actions.STORE_CURRENT_USER:
         return action.payload;
      default:
         return state;
   }
}
