import CartItemsPriceDetails from "../components/Cart/CartIPriceDetails";
import CartLists from "../components/Cart/CartLists";
const Cart = () => {
  return (
    <>
      <section className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">My Cart</h1>
        <div className="flex">
          <CartLists />
          <CartItemsPriceDetails />
        </div>
      </section>
    </>
  );
};

export default Cart;
