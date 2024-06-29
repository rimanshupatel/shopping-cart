// import React from 'react';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg mx-auto text-center">
        {/* <img
            src="/images/error-image.jpg"
            alt="Error"
            className="mb-8 rounded-lg shadow-md"
          /> */}
        <h1 className="text-8xl font-bold text-black">404</h1>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Oops! Something went wrong.
        </h1>
        <p className="text-lg text-gray-700 mb-6">{`We're sorry, but it seems like there's been an error.`}</p>
        <a
          href="/"
          className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default Error;
