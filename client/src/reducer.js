// Create the initial state
// then import into index.js
export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) =>
  // reduce function will iterate thru basket, update total
  // (initial amount, each item)
  // fancy for loop to tally up amounts of each item and returns it
  basket?.reduce((amount, item) => item.price + amount, 0);

// Reducer is how we dispatch action into the data layer
const reducer = (state, action) => {
  console.log(action);
  //switch based on type, which is like an ID
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        // whatever is in our state
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      // cant just remove by id, or you remove all occurences of the item
      // so, find the first match of index of the passed in id
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      // if i >= 0, means you found the item
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`
          Cant remove product (id: ${action.id}) as it's not in the basket!`);
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
