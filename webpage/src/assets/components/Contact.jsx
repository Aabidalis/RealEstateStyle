import React, { useEffect } from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

 
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "80dc0a51-1505-4c33-9f3f-6cfb18df0c0e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      toast.error(data.message)
      setResult("");
    }
  };


  return (
   <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center px-4">
  <h1 className="font-bold text-7xl text-white text-center mb-40">Get In Touch</h1>

  <form onSubmit={onSubmit} className="bg-gray-800 p-20 rounded-2xl shadow-2xl w-full max-w-6xl space-y-6">
    <div className="flex flex-col md:flex-row gap-6">
      <input
        type="text"
        required
        placeholder="Your Name"
        name="name"
        className="w-full md:w-1/2 px-4 h-20 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        required
        placeholder="Your Email"
        name="email"
        className="w-full md:w-1/2 px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <textarea
        name="message"
        required
        rows="5"
        placeholder="Your Message"
        className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold rounded-lg shadow-lg"
    >
      {result ? result : "Send message"}
    </button>
  </form>
  <ToastContainer position="top-right" autoClose={3000} />
</div>

  )
}

export default Contact
