const initialState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0,
};

const getTotal = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotal(currentPizzaItems),
        },
      };

      const totalCount = Object.keys(newItems).reduce(
        (sum, key) => sum + newItems[key].items.length,
        0,
      );
      const totalPrice = Object.keys(newItems).reduce(
        (sum, key) => sum + newItems[key].totalPrice,
        0,
      );
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case 'REMOVE_CART_ITEM': {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;

      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    case 'ADD_CLEAR_CART': {
      return {
        items: {},
        totalPrice: 0,
        itemsCount: 0,
      };
    }

    case 'PLUS_CART_ITEM': {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotal(newObjItems),
        },
      };

      const totalCount = Object.keys(newItems).reduce(
        (sum, key) => sum + newItems[key].items.length,
        0,
      );
      const totalPrice = Object.keys(newItems).reduce(
        (sum, key) => sum + newItems[key].totalPrice,
        0,
      );

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case 'MINUS_CART_ITEM': {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotal(newObjItems),
        },
      };

      const totalCount = Object.keys(newItems).reduce(
        (sum, key) => sum + newItems[key].items.length,
        0,
      );
      const totalPrice = Object.keys(newItems).reduce(
        (sum, key) => sum + newItems[key].totalPrice,
        0,
      );
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    default:
      return state;
  }
};

export default cart;
