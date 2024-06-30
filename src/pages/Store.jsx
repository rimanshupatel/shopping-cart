import ProductsList from "../components/ProductsList/ProductsList";
import Banner from "../components/banner/Banner";

const Store = () => {
  return (
    <>
      <section>
        <Banner />
        <div className="container m-auto text-black bg-white font-1 capitalize  my-4 px-3">
          <ProductsList />
        </div>
      </section>
    </>
  );
};

export default Store;
