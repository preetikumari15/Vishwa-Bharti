import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    classGrade: '',
    address: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = 'Enter a valid email.';
    if (!formData.phone.match(/^\d{10}$/))
      newErrors.phone = 'Enter a 10-digit phone number.';
    if (!formData.classGrade.trim()) newErrors.classGrade = 'Class/Grade is required.';
    if (!formData.address.trim()) newErrors.address = 'Address is required.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto mt-5 p-4 bg-green-100 border border-green-300 rounded text-green-800 text-center" role="alert" aria-live="assertive">
        ✅ Registration Successful!
      </div>
    );
  }

  return (
    
    <form onSubmit={handleSubmit} noValidate className="max-w-md mx-auto mb-20 p-6 bg-white shadow-lg rounded-lg space-y-4 bg-gradient-to-bl from-blue-50 to-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Student Registration Form</h2>

      {/* Name */}
      <div>
        <label className="block font-medium mb-1" htmlFor="name">Name</label>
        <input
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block font-medium mb-1" htmlFor="email">Email</label>
        <input
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block font-medium mb-1" htmlFor="phone">Phone</label>
        <input
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
      </div>

      {/* Class/Grade */}
      <div>
        <label className="block font-medium mb-1" htmlFor="classGrade">Class/Grade</label>
        <input
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="classGrade"
          id="classGrade"
          value={formData.classGrade}
          onChange={handleChange}
          required
        />
        {errors.classGrade && <p className="text-red-600 text-sm mt-1">{errors.classGrade}</p>}
      </div>

      {/* Address */}
      <div>
        <label className="block font-medium mb-1" htmlFor="address">Address</label>
        <textarea
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="address"
          id="address"
          rows="3"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>
        {errors.address && <p className="text-red-600 text-sm mt-1">{errors.address}</p>}
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
