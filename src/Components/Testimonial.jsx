import React from "react";

const testimonials = [
  {
    name: "Bharat Singh",
    title: "CFO",
    company: "Backbone Ventures Pvt. Ltd.",
    photo: "/clients/anita.jpg",
    feedback:
      "Working with Himanshu Rawat was a game-changer for Backbone Venture. They understood our vision and created a professional, modern website that perfectly reflects our brand. The attention to detail and responsiveness made the whole process smooth and efficient.",
  },
  {
    name: "Sehzad",
    title: "Owner",
    company: "Wash&Iron",
    photo: "/clients/rahul.jpg",
    feedback:
      "WashNiron is my go-to for dry cleaning in Noida. Sehzad and his team are professional, reliable, and always deliver clothes fresh and neatly packed. Great service every time!",
  },
  {
    name: "Anchal Chaudhary",
    title: "CFO",
    company: "Acoworlds Technology",
    photo: "/clients/priya.jpg",
    feedback:
      "Working with Himanshu Rawat was a smooth and professional experience. For Acoworlds Technology, they delivered a website that perfectly aligns with our business needs. The design is modern, performance is excellent, and updates were handled quickly. We truly value their commitment and technical expertise.",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full px-6 py-12 bg-[#000000] md:px-12 lg:px-24 xl:px-32" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          What Clients Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#151515] p-6 rounded-2xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="text-base font-semibold text-gray-200">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}, {testimonial.company}</p>
                </div>
              </div>
              <p className="text-sm text-gray-200 leading-relaxed">
                “{testimonial.feedback}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
