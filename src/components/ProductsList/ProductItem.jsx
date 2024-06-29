import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { Add_To_Cart } from "../../App/Slice";

const ProductItem = ({
  id,
  title,
  description,
  image,
  discountprice,
  Realprice,
  discount,
  rating,
}) => {
  const dispatch = useDispatch();
  const itemName = title.substring(0, 19);
  const itemDesc = description.substring(0, 28);
  return (
    <>
      <Link to="/" className="px-3 py-2 hover:shadow-lg">
        <li key={id}>
          <div className=" relative">
            <div className="px-3 flex flex-col justify-center  w-full ">
              <img src={image} alt="" className="w-48 h-64" />
            </div>
            {/* product items rating */}
            <div className="  absolute  top-[225px] left-[9px]">
              <span className="px-3 rating-bg text-black font-semibold text-sm rounded">
                {rating.rate}{" "}
                <span className="text-base text-green-600">★</span>
              </span>
            </div>
            {/* product item details */}
            <div className=" py-2">
              <h1 className="font-bold text-base  uppercase">
                {title.length > 20 ? `${itemName}....` : title}
              </h1>

              <p className="text-gray-500 text-sm ">
                {description.length > 20 ? `${itemDesc}....` : description}
              </p>
              <div className="flex items-center ">
                <p className="font-bold text-base">
                  Rs. <span>{Realprice}</span>
                </p>
                <span className="px-2 text-sm line-through text-gray-400">
                  Rs. {discountprice}
                </span>
                <span className=" text-sm  text-red-400">
                  {`(${discount} % OFF)`}
                </span>
              </div>
            </div>
            <div className=" w-full">
              <button
                className="py-2  my-2 flex justify-center w-full bg-black text-white text-center"
                onClick={() => {
                  dispatch(
                    Add_To_Cart({
                      id,
                      title,
                      description,
                      image,
                      discountprice,
                      Realprice,
                      discount,
                    })
                  );
                }}
              >
                add to cart
              </button>
            </div>
          </div>
        </li>
      </Link>
    </>
  );
};

export default ProductItem;
