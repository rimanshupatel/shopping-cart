import ProductItem from "./ProductItem";
import data from "../../data/StoreItems.json";
// import { useSelector } from "react-redux";
const ProductsList = () => {
  // const items = useSelector((state) => state.ShoppingCart.items);
  return (
    <section>
      <div className="container m-auto text-black bg-white font-1 capitalize  my-4 px-3">
        <div className="title">
          <p className="text-2xl font-medium py-6">best deals on products</p>
        </div>
        <ul className="grid grid-cols-5 gap-4">
          {data.map((cards) => {
            return (
              <ProductItem
                key={cards.id}
                id={cards.id}
                title={cards.title}
                description={cards.description}
                image={cards.image}
                discountprice={cards.discountprice}
                Realprice={cards.Realprice}
                discount={cards.discount}
                rating={cards.rating}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ProductsList;
