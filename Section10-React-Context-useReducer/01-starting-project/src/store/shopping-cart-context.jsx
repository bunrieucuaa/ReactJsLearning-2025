import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

const shoppingCartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];
    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payload
      );
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }
  return state;
};


// Cú pháp của useReducer:

// const [state, dispatch] = useReducer(reducer, initialState);
// reducer: Là một hàm nhận vào hai tham số:
// state: Trạng thái hiện tại.
// action: Một object đại diện cho action cần thực hiện.
// initialState: Là trạng thái khởi tạo ban đầu của ứng dụng.

export default function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    { items: [] }
  );

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId,
        amount,
      },
    });
  }

  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}

// useReducer là một hook trong React được sử dụng để quản lý state phức tạp hơn,
// nơi state mới được tính toán dựa trên state cũ và một action được truyền vào.
// useReducer rất hữu ích khi bạn cần thực hiện các thao tác phức tạp hoặc có nhiều loại action làm thay đổi state.
// Đây là một thay thế cho useState khi bạn cần một cách tiếp cận có tổ chức hơn.

// Context trong React là một cơ chế cho phép bạn chia sẻ dữ liệu giữa các component
// mà không cần phải truyền props qua nhiều lớp.
// Nó hữu ích khi bạn cần chia sẻ state giữa các component ở nhiều cấp độ khác nhau
//  mà không muốn phải truyền props qua từng component một cách thủ công.
