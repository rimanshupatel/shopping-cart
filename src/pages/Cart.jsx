import { useSelector } from "react-redux";
import CartItemsPriceDetails from "../components/Cart/CartIPriceDetails";
import CartLists from "../components/Cart/CartLists";
import cartPng from "../images/cart/man-holding-shopping-bag-11399035-9358117.png";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((state) => state.ShoppingCart.cart);
  return (
    <>
      <section className="container mx-auto p-4">
        {cartItems.length > 0 ? (
          <>
            <h1 className="text-2xl font-bold mb-4">My Cart</h1>
            <div className="flex">
              <CartLists />
              <CartItemsPriceDetails />
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center my-12">
            <div className="flex flex-col items-center">
              <img src={cartPng} className="w-56" />
              <div className="pb-6">
                <h1 className="text-3xl font-bold text-center capitalize">
                  hey, it's feel so light!
                </h1>
                <p>there is nothing in your bag , Let's add some items.</p>
              </div>

              <Link to="/">
                <span className="py-3 px-3 font-bold w-full border border-[#FF3F6C] text-[#FF3F6C]">
                  Add items from store
                </span>
              </Link>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Cart;
