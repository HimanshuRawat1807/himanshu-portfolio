import React, { useState } from "react";

const PopUpForm = ({isOpen,toggleModal}) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleModal = ({isOpen}) => {
//     setIsOpen(!isOpen);
//   };

  return (
    // <div className="flex justify-center items-center h-screen bg-gray-900">
    //   {/* Trigger Button */}
    //   <button
    //     onClick={toggleModal}
    //     className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
    //   >
    //     Open Form
    //   </button>

    <>

      
      {/* Modal Overlay */}
      {isOpen && (
          <div
          className="fixed inset-0 bg-transparent backdrop-blur-md bg-opacity-50 flex justify-center items-center z-50"
        //   onClick={toggleModal}
          >
          {/* Modal Content */}
          <div
            className="bg-white rounded-lg shadow-lg w-11/12 sm:w-96 p-6 relative animate-scale-up"
            // onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
              Contact Us
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
</>

    // </div>
  );
};

export default PopUpForm;
