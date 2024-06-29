import { useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";
const ProdcutCartLists = () => {
  const cartItems = useSelector((state) => state.ShoppingCart.cart);
  console.log(cartItems);

  return (
    <div>
      <div className="px-4 ">
        {cartItems.map((product) => {
          const {
            id,
            title,
            description,
            image,
            discountprice,
            Realprice,
            discount,
          } = product;
          const itemName = title.substring(0, 19);
          return (
            <div
              key={id}
              className="my-4 bg-white rounded-lg p-4 flex flex-row justify-between w-[40rem] border border-gray-300"
            >
              <div className="flex">
                <div className="">
                  <img src={image} alt={title} className="w-28 h-36" />
                </div>

                <div className="px-5">
                  <h1 className="font-bold text-base  uppercase">
                    {title.length > 20 ? `${itemName}....` : title}
                  </h1>

                  <p className="text-gray-500 text-sm ">{description}</p>
                  <div className="flex items-center my-1">
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
                  <div className="flex items-center">
                    <div className="pr-2">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.63639 6.99013C6.84386 7.1976 6.84386 7.53397 6.63639 7.74143L5.7725 8.60533H8.27232C9.21251 8.60533 9.97949 7.84333 9.97949 6.89824C9.97949 5.95914 9.21859 5.19824 8.27949 5.19824H6.89116C6.59776 5.19824 6.35991 4.96039 6.35991 4.66699C6.35991 4.37359 6.59776 4.13574 6.89116 4.13574H8.27949C9.80539 4.13574 11.042 5.37234 11.042 6.89824C11.042 8.43232 9.79722 9.66783 8.27241 9.66783H5.77242L6.63639 10.5318C6.84386 10.7393 6.84386 11.0756 6.63639 11.2831C6.42893 11.4906 6.09256 11.4906 5.88509 11.2831L4.11426 9.51227C4.0417 9.43971 3.99452 9.35138 3.97271 9.25831C3.96352 9.21922 3.95866 9.17846 3.95866 9.13658C3.95866 9.05996 3.97488 8.98713 4.00407 8.92134C4.02519 8.87367 4.05366 8.82847 4.08949 8.78745C4.09828 8.77738 4.10745 8.76764 4.11697 8.75826L5.88509 6.99013C6.09256 6.78267 6.42893 6.78267 6.63639 6.99013Z"
                          fill="#282C3F"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.416992 7.50033C0.416992 3.58831 3.58831 0.416992 7.50033 0.416992C11.4123 0.416992 14.5837 3.58831 14.5837 7.50033C14.5837 11.4123 11.4123 14.5837 7.50033 14.5837C3.58831 14.5837 0.416992 11.4123 0.416992 7.50033ZM7.50033 1.47949C4.17511 1.47949 1.47949 4.17511 1.47949 7.50033C1.47949 10.8255 4.17511 13.5212 7.50033 13.5212C10.8255 13.5212 13.5212 10.8255 13.5212 7.50033C13.5212 4.17511 10.8255 1.47949 7.50033 1.47949Z"
                          fill="#282C3F"
                        ></path>
                      </svg>
                    </div>
                    <div className="text-sm">
                      <span className="font-bold"> 14 days</span> return
                      available
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-2xl">
                <button>
                  <IoClose />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProdcutCartLists;
