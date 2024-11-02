import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaInstagramSquare, FaLinkedin, FaSquare } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#f40000] text-white p-4 mt-5 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Quick Links Column */}
        <div>
          <h2 className="text-md font-semibold">Quick Links</h2>
          <hr className="mt-3 mb-2" />
          <ul className="list-none pl-4 text-white space-y-2 text-sm">
            <li className="flex items-center">
              <FaSquare className="text-xs mr-2" />
              View Products
            </li>
            <li className="flex items-center">
              <FaSquare className="text-xs mr-2" />
              About Us
            </li>
            <li className="flex items-center">
              <FaSquare className="text-xs mr-2" />
              Services
            </li>
            <li className="flex items-center">
              <FaSquare className="text-xs mr-2" />
              Contact Us
            </li>
          </ul>
        </div>

        {/* Follow Mattress Home Column */}
        <div>
          <h3 className="text-md font-semibold">Follow Mattress Home</h3>
          <hr className="mt-3 mb-2" />
          <ul className="flex text-white text-xl space-x-4 mt-2">
            <li>
              <a href="https://www.facebook.com/">
                <BsFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <BsTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>

        {/* About Us Column */}
        <div>
          <h3 className="text-md font-semibold">About Us</h3>
          <hr className="mt-3 mb-2" />
          <p className="text-sm">
            Mattress Home is dedicated to providing quality and affordable
            mattresses for your best rest. Our mission is to ensure everyone
            enjoys a good night's sleep with our wide range of products.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="text-center p-4 bg-slate-800 text-xs mt-5">
        &copy; {new Date().getFullYear()} Amonoo's MATTRESSES HOME developed by
        <span className="relative inline-block group ml-2">
          <a
            href="https://wa.me/qr/6FXMPK6GN3R4D1"
            className="text-white hover:text-gray-400"
          >
            Cephas Amonoo
          </a>
          <MdAddCall className="absolute left-full top-1/2 -translate-y-1/2 ml-2 hidden group-hover:block text-gray-400" />
        </span>
        . All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
