import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const ProdcutCartLists = () => {
  const cartItems = useSelector((state) => state.ShoppingCart.cart);
  console.log(cartItems);

  return (
    <div>
      <div className="px-4 ">
        {cartItems.map((items) => {
          return (
            <CartItems
              key={items.id}
              id={items.id}
              title={items.title}
              description={items.description}
              image={items.image}
              discountprice={items.discountprice}
              Realprice={items.Realprice}
              discount={items.discount}
              quantity={items.quantity}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProdcutCartLists;
