import React from "react";

const testimonials = [
  {
    name: "Anita Verma",
    title: "Marketing Head",
    company: "GlowTech Pvt. Ltd.",
    photo: "/clients/anita.jpg",
    feedback:
      "Working with you was a seamless experience. The website redesign not only improved our UX but also boosted conversions by over 30%.",
  },
  {
    name: "Rahul Sharma",
    title: "Founder",
    company: "StartupVerse",
    photo: "/clients/rahul.jpg",
    feedback:
      "Your development skills and professionalism exceeded expectations. Our MVP was delivered on time and perfectly matched the brief.",
  },
  {
    name: "Priya Nanda",
    title: "Digital Consultant",
    company: "Freelance",
    photo: "/clients/priya.jpg",
    feedback:
      "The design you crafted was not only visually stunning but also highly functional. Would love to collaborate again soon.",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full px-6 py-12 bg-[#0A0A0A] md:px-12 lg:px-24 xl:px-32" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          What Clients Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="text-base font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}, {testimonial.company}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
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
