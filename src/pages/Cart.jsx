import CartItemsPriceDetails from "../components/CartItemsPriceDetails";
import ProdcutCartLists from "../components/ProdcutCartLists";

const Cart = () => {
  return (
    <>
      <section className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">My Cart</h1>
        <div className="flex">
          <ProdcutCartLists />
          <CartItemsPriceDetails />
        </div>
      </section>
    </>
  );
};

export default Cart;
