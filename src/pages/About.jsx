const About = () => {
  return (
    <section className="bg-gray-100 py-36">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">About Our Store</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit
            amet urna tincidunt, lacinia metus vel, fringilla leo. Sed ut turpis
            et lorem luctus efficitur. Integer vestibulum, libero vel
            ullamcorper vestibulum, erat risus mollis justo, nec varius neque
            velit id velit.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Fusce posuere purus sed ipsum feugiat, eu euismod magna ultricies.
            Morbi euismod, nulla eu scelerisque elementum, neque magna varius
            orci, ac malesuada nisi lorem nec velit.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Learn More
          </a>
        </div>

        {/* Image and Extra Components */}
        <div className="md:w-1/2 flex justify-center">
          <div className="max-w-md rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="/images/about-image.jpg"
              alt="About Us"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Meet Our Team</div>
              <p className="text-gray-700 text-base">
                Our team is dedicated to providing you with the best shopping
                experience.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #E-commerce
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #Shopping
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #Online
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
