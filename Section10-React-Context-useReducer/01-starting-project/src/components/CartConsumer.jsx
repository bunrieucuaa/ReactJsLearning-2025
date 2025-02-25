import { CartContext } from "../store/shopping-cart-context";

import { useContext } from "react";

export default function Cart({ onUpdateItemQuantity }) {
  // const { items } = useContext(CartContext);

  return (
    <CartContext.Consumer>
      {(cartCtx) => {
        const totalPrice = cartCtx.items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
        return (
          <div id="cart">
            {cartCtx.items.length === 0 && <p>No items in cart!</p>}
            {cartCtx.items.length > 0 && (
              <ul id="cart-items">
                {cartCtx.items.map((item) => {
                  const formattedPrice = `$${item.price.toFixed(2)}`;

                  return (
                    <li key={item.id}>
                      <div>
                        <span>{item.name}</span>
                        <span> ({formattedPrice})</span>
                      </div>
                      <div className="cart-item-actions">
                        <button
                          onClick={() => onUpdateItemQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => onUpdateItemQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
            <p id="cart-total-price">
              Cart Total: <strong>{formattedTotalPrice}</strong>
            </p>
          </div>
        );
      }}
    </CartContext.Consumer>
  );
}

//Giới thiệu về Context.Consumer
// Context.Consumer là một cách để tiêu thụ giá trị từ Context trong React.
//  Khi bạn sử dụng Context.Consumer, bạn có thể truy cập vào giá trị mà Context.Provider cung cấp cho các component con, mà không cần phải sử dụng hook useContext.
//  Đây là phương pháp trước khi React Hooks được giới thiệu, nhưng vẫn còn rất hữu ích trong một số trường hợp.

// Cách thức hoạt động của Context.Consumer
// Trong ví dụ bạn cung cấp, CartContext.Consumer được sử dụng để lấy giá trị từ CartContext(dữ liệu từ giỏ hàng) trong component Cart.
// Context.Consumer nhận một function con(render prop function) và function này nhận vào giá trị context(ở đây là cartCtx) như một đối số.