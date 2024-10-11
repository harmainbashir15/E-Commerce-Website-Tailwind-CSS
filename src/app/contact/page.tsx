import React from 'react';
function Contact() {
  return (
    <section className="bg-slate-100">
  <div className="container px-5 py-20 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-4xl text-2xl font-bold mb-4 text-black">Contact Us</h1>
      <p className="lg:w-2/3 mx-auto  text-slate-600 font-semibold">We love to hear from our customers! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us. For inquiries or special requests, please fill out the form below, and we’ll get back to you as soon as possible.</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-md text-gray-800">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-yellow-600 bg-opacity-100 rounded focus:bg-white border border-gray-100 text-black p-2 focus:border-yellow-400 focus:ring-2 focus:ring-green-400" />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-md text-gray-800">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-yellow-600 bg-opacity-100 rounded focus:bg-white border border-gray-100 text-black p-2 focus:border-yellow-400 focus:ring-2 focus:ring-green-400" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-md text-gray-800">Message</label>
            <textarea id="message" name="message" className="w-full bg-yellow-600 bg-opacity-100 rounded focus:bg-white border border-gray-100 text-black h-32 py-1 px-3 resize-none focus:border-yellow-400 focus:ring-2 focus:ring-green-400"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white font-bold bg-black border-0 py-2 px-4 hover:bg-yellow-600 rounded text-lg">Submit</button>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default Contact;