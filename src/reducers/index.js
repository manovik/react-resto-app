const initialState = {
  menu: [],
  loading: true,
  error: false,
  items: [],
  total: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "MENU_LOADED":
      return {
        ...state,
        menu: action.payload,
        loading: false,
      };
    case "MENU_REQUESTED":
      return {
        ...state,
        loading: true,
      };
    case "MENU_ERROR":
      return {
        ...state,
        error: true,
      };
    case "ADD_TO_CART":
      const id = action.payload;
      const item = state.menu.find(item => item.id === id);
      const newItem = {
        title: item.title,
        id: item.id,
        price: item.price,
        url: item.url
      };
      const totalCost = countPrice([...state.items, newItem]);
      return {
        ...state,
        items: [
          ...state.items,
          newItem
        ],
        total: totalCost
      };
    case "DELETE_FROM_CART":
      const itemToDelete = state.items.findIndex(item => {
        return item.id === action.payload
      });
      const totalCostx = countPrice(state.items);
      const newItems = [];
      state.items.map((item, i) => {
        if(i !== itemToDelete) {
          newItems.push(item);
        }
        return newItems;
      });
      console.log('newItems ---', newItems);

      return {
        ...state,
        items: newItems,
        total: totalCostx
      };
    default:
      return state
  }
}

function countPrice(arr) {
  let cost = 0;
  arr.forEach(item => {
    cost += item.price;
  });
  return cost;
}

export default reducer;