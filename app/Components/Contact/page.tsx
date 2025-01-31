import React from 'react';

const Contactpage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-10">Contact Us</h1>
      <p className="text-xl text-center max-w-4xl mx-auto text-gray-600 mb-6">
        We would love to hear from you! Whether you&apos;re interested in working together, have a question, or want to book a service, feel free to get in touch with us.
      </p>

      <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <label className="block text-gray-800 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-4 bg-gray-100 rounded-lg"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-800 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-4 bg-gray-100 rounded-lg"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-800 font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-4 bg-gray-100 rounded-lg"
            placeholder="Enter your message"
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-6">Booking Details</h2>

        <div className="mb-6">
          <label className="block text-gray-800 font-bold mb-2" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="w-full p-4 bg-gray-100 rounded-lg"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-800 font-bold mb-2" htmlFor="time">
            Time
          </label>
          <input
            type="time"
            id="time"
            className="w-full p-4 bg-gray-100 rounded-lg"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-800 font-bold mb-2" htmlFor="service">
            Service
          </label>
          <select
            id="service"
            className="w-full p-4 bg-gray-100 rounded-lg"
          >
            <option value="">Select a service</option>
            <option value="consultation">Consultation</option>
            <option value="design">Design</option>
            <option value="photography">Photography</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold p-4 rounded-lg hover:bg-indigo-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contactpage;
