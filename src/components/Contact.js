// src/components/Contact.js

import React from "react";

// Function to redirect to WhatsApp with predefined phone number
function redirectToWhatsApp() {

  // Get the form inputs (you might need to adjust these based on your actual form structure)
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Malaysian phone number to be included in the WhatsApp URL
  var phoneNumber = "60165204271"; // Country code for Malaysia is 60

  // Construct the WhatsApp message with the form details
  var whatsappMessage = "Name: " + name + "\n" +
                        "Email: " + email + "\n" +
                        "Message: " + message;

  // Construct the WhatsApp URL with the predefined phone number and message
  var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(whatsappMessage);

  // Open WhatsApp website in a new window
  var whatsappWindow = window.open(whatsappURL, "_blank");

  // Check if the window has been successfully opened
  if (whatsappWindow) {
      // Display message if the window was successfully opened
      alert("Message sent on WhatsApp!");
  } else {
      // Display message if the window couldn't be opened
      alert("Failed to open WhatsApp. Please make sure your browser allows pop-ups.");
  }
}

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Jln+2/155a,+Bukit+Jalil,+Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur,+Malaysia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Jln 2/155a, Bandar Bukit Jalil,<br />
                Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur 57000
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                laiyimin94@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">016-XXX-XXXX</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Opportunities Await
          </h2>
          <p className="leading-relaxed mb-5">
            Thank you for your interest! Unfortunately, I'm unable to provide contact information or engage in direct communication. 
            However, if you have any questions or need further assistance, feel free to reach out whenever you're ready. 
            I look forward to hearing from you soon. 
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button onClick={redirectToWhatsApp} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send Message on WhatsApp</button>
        </form>
      </div>
    </section>
  );
}