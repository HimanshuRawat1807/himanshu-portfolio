import React from "react";

const Contact = () => {
  return (
    <section className="w-full px-6 py-12 bg-[#0A0A0A] md:px-12 lg:px-24 xl:px-32" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          Get in Touch
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
            <p className="text-white mb-2">📧 Email: <a href="mailto:hello@example.com" className="text-indigo-600 hover:underline">hello@example.com</a></p>
            <p className="text-white mb-2">📞 Phone: <a href="tel:+911234567890" className="text-indigo-600 hover:underline">+91 12345 67890</a></p>

            <div className="mt-6">
              <h4 className="font-medium text-white mb-2">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white hover:text-indigo-600">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white hover:text-indigo-600">GitHub</a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white hover:text-indigo-600">Twitter</a>
              </div>
            </div>

            {/* Optional Google Map */}
            <div className="mt-8">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14006.369173401298!2d77.3782132!3d28.6302324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56cb1455d89%3A0x3dbfd92d03c3d92d!2sH%2069%2C%20Sector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1626439393640!5m2!1sen!2sin"
                width="100%"
                height="220"
                className="rounded-md border"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-50 p-6 rounded-xl shadow-md space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                placeholder="Your message..."
                rows="5"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-medium py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
