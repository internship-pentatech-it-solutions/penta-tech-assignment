import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="/images/image (5).avif" 
            className="w-full h-[600px] object-cover rounded-md" 
            alt="Contact Us"
          />
        </div>

        
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <h1 className="text-5xl text-yellow-300 font-bold mb-4 text-center md:text-left">
            Contact Us
          </h1>
          <form action="post" className="bg-white p-6 rounded-xl shadow-lg flex-grow">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold mb-6 text-yellow-600">Send Us A Message</h2>
              <div className="space-y-6">
                <div className="w-full">
                  <label className="block text-xl font-medium text-gray-500">
                    Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Cephas Amonoo"
                    className="p-2 rounded-md w-full border border-gray-300"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-xl font-medium text-gray-500">
                    Email:
                  </label>
                  <input
                    type="email"
                    placeholder="cephasarhin@gmail.com"
                    className="p-2 rounded-md w-full border border-gray-300"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-xl font-medium text-gray-500">
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    placeholder="+XX XXX XXX XXXX"
                    className="p-2 rounded-md w-full border border-gray-300"
                  />
                </div>

                <div className="w-full">
                  <h2 className="text-2xl text-gray-400">
                    Preferred method of communication
                  </h2>
                  <div className="space-x-14 mt-2">
                    <input type="radio" name="communication" id="email" />
                    <label htmlFor="email">Email</label>
                    <input type="radio" name="communication" id="phone" />
                    <label htmlFor="phone">Phone</label>
                  </div>
                </div>
                <textarea
                  cols="30"
                  placeholder="Message"
                  className="w-full h-36 rounded-lg border border-gray-300 mt-4 p-2"
                ></textarea>
              </div>
              <button
                type="submit"
                className="border-2 border-yellow-300 rounded-lg w-full p-3 bg-yellow-300 text-white font-bold text-xl hover:bg-yellow-400 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
