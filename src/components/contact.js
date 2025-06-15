// src/components/Contact.jsx
import React, { useState } from 'react';
import  db  from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', msg: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.msg) {
      setStatus('Please fill out all fields.');
      return;
    }

    try {
      await addDoc(collection(db, 'form'), {
        ...formData,
        timestamp: Timestamp.now()
      });
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', msg: '' });
    } catch (err) {
      console.error('Error sending message:', err);
      setStatus('Something went wrong. Try again later.');
    }
  };

  return (
    <div className="bg-black text-white py-16 px-6 lg:px-20 min-h-screen contact">
      <h2 className="text-4xl font-bold text-center text-green-500 mb-10">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-xl shadow-lg">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-300">Message</label>
          <textarea
            name="msg"
            rows="5"
            value={formData.msg}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your message..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Send Message
        </button>
        {status && <p className="text-center mt-4 text-sm text-gray-300">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
