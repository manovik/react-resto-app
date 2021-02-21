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

      const itemIndx = state.items.findIndex(item => item.id === id);
      // console.log(itemIndx);
      if(itemIndx >= 0) {
        const itemInState = state.items.find(item => item.id === id);

        const newItem = {
          ...itemInState,
          count: itemInState.count + 1
        }

        return {
          ...state,
          items: [
            ...state.items.slice(0, itemIndx),
            newItem,
            ...state.items.slice(itemIndx + 1)
          ],
          total: state.total + newItem.price
        }
      }

      const item = state.menu.find(item => item.id === id);
      const newItem = {
        title: item.title,
        id: item.id,
        price: item.price,
        url: item.url,
        count: 1
      };

      const allItems = [...state.items, newItem];

      return {
        ...state,
        items: allItems,
        total: countPrice(allItems)
      };
    case "DELETE_FROM_CART":
      const itemToDelete = state.items.findIndex(item => {
        return item.id === action.payload
      });
      const newItems = [];
      state.items.map((item, i) => {
        if(i !== itemToDelete) {
          newItems.push(item);
        }
        return newItems;
      });
      
      const totalCostx = countPrice(newItems);
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
    cost += item.price * item.count;
  });
  return cost;
}


export default reducer;