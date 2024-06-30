import { useSelector } from "react-redux";

const CartItemsPriceDetails = () => {
  const cartItems = useSelector((state) => state.ShoppingCart.cart);

  const TotalQuantity = cartItems.reduce((totalQuantity, item) => {
    return totalQuantity + item.quantity;
  }, 0);
  const TotalPrice = cartItems.reduce((totalPrice, item) => {
    return totalPrice + item.Realprice;
  }, 0);
  const TotalDiscountPrice = cartItems.reduce((DiscountPrice, item) => {
    return DiscountPrice + item.discountprice;
  }, 0);
  return (
    <div className="w-[22rem] ">
      <div className="p-4">
        <div className="my-4 font-semibold text-xl capitalize">
          price details <span>{`(${TotalQuantity} items)`}</span>
        </div>
        <div className="text-[17px] text-[#282c3f]">
          <div className="mb-2  flex justify-between capitalize">
            <h3>Total MRP</h3>
            <p>
              <span>₹</span>
              {TotalPrice}
            </p>
          </div>
          <div className="mb-2  flex justify-between ">
            <h3>Discount on MRP</h3>
            <p className="text-green-600">
              <span>- </span>
              <span>₹</span>
              {TotalDiscountPrice}
            </p>
          </div>
          <div className="mb-2  flex justify-between capitalize">
            <h3>shipping fees</h3>
            <p className="uppercase text-green-600">free</p>
          </div>
        </div>
        <div className="pt-3 borderTopStyle">
          <div>
            <div className="mb-2 font-bold text-[#282c3f] flex justify-between capitalize">
              <h3>Total Amout</h3>
              <p>
                <span>₹</span> {TotalPrice}
              </p>
            </div>
          </div>
          <div>
            <button className="py-2  w-full bg-[#FF3F6C] text-white ">
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemsPriceDetails;
