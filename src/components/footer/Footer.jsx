const Footer = () => {
  return (
    <div className="">
      <div className="md:border border-white rounded-2xl md:mx-14 mx-4 relative z-40 md:top-40 top-36 py-4 ">
        <div className="border px-10 w-full md:h-[300px] h-[250px] bg-gradient-to-r from-teal-100  to-amber-100 container mx-auto rounded-2xl ">
          <h1 className="text-3xl font-bold text-center md:mt-16 mt-4">
            Subscribe to our Newsletter
          </h1>
          <p className="text-gray-500 text-center mt-4">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex justify-center mt-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn ml-2 md:px-8 py-4 bg-gradient-to-r from-pink-400 to-amber-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#06091A] absolute ">
        <div className="flex justify-center items-center container mx-auto">
          <img
            src="/src/assets/images/logo-footer.png"
            alt=""
            className="mt-48"
          />
        </div>
        <footer className="footer text-base-content w-full md:p-10 md:flex justify-between">
          <div className="md:w-2/3 md:flex justify-between mx-10 mt-6 md:mt-0">
            <nav className="md:w-1/3 text-white md:text-start md:ml-20">
              <h6 className="footer-title mb-4 text-base">About Us</h6>
              <p className="text-gray-500 text-base">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </nav>

            <nav className="md:w-1/3 text-gray-500 text-base mt-6 md:mt-0">
              <div className="">
                <h6 className="footer-title text-white ">Quick Links</h6>
                <ul className="">
                  <li>
                    {" "}
                    <a className="link link-hover">About us</a>
                  </li>
                  <li>
                    {" "}
                    <a className="link link-hover">Contact</a>
                  </li>
                  <li>
                    <a className="link link-hover">Jobs</a>
                  </li>
                  <li>
                    {" "}
                    <a className="link link-hover">Press kit</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <form className="md:w-1/3 md:ml-28 mx-10">
            <h6 className="footer-title text-white">Subscribe</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text text-gray-500">
                  Subscribe to our newsletter for the latest updates.
                </span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn bg-gradient-to-r from-amber-300 to-pink-400 join-item">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
        <hr className="border-gray-600 md:mt-0 mt-4" />
        <p className="md:text-center text-gray-500  md:mx-0 p-4 md:p-0 ml-6 md:ml-6 mb-6 mt-4 ">
          @2024 Your Company All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
