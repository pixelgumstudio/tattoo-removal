// components/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    website: "",
    details: "",
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: target.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("You must agree to the terms and privacy policy.");
      return;
    }
    console.log("Form submitted", formData);
    // Handle submission logic
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto p-6 space-y-6 bg-white rounded-lg shadow-md"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Fullname
        </label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Company email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company Website
          </label>
          <input
            type="url"
            name="website"
            placeholder="Enter your website"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
            value={formData.website}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tell us about what you need
        </label>
        <textarea
          name="details"
          placeholder="Enter your project details"
          className="w-full border border-gray-300 rounded-md px-4 py-2 h-32 resize-none focus:outline-none focus:ring focus:border-blue-500"
          value={formData.details}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
          className="mr-2"
        />
        <label className="text-sm text-gray-700">
          I agree to terms and privacy policy
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 transition"
      >
        Submit your form
      </button>
    </form>
  );
}
