import { useState } from 'react';
import { FaWhatsapp, FaBriefcase, FaRupeeSign } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  experienceLevel: string;
  workType: string;
  hourlyRate: string;
  monthlySalary: string;
  skills: string;
  availability: string;
}

export default function WorkWithUsForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    position: '',
    experienceLevel: 'Mid-Level (2-5 years)',
    workType: 'Full-time',
    hourlyRate: '',
    monthlySalary: '',
    skills: '',
    availability: 'Immediate',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = '919432588119';
    
    let message = `*New Career Application from SSMT Website*\n\n`;
    message += `*Personal Information:*\n`;
    message += `Name: ${formData.name}\n`;
    message += `Email: ${formData.email}\n`;
    message += `Phone: ${formData.phone}\n\n`;
    
    message += `*Position Details:*\n`;
    message += `Position: ${formData.position}\n`;
    message += `Experience: ${formData.experienceLevel}\n`;
    message += `Work Type: ${formData.workType}\n`;
    message += `Availability: ${formData.availability}\n\n`;
    
    message += `*Compensation Expectations:*\n`;
    if (formData.hourlyRate) {
      message += `Hourly Rate: ₹${formData.hourlyRate}/hour\n`;
    }
    if (formData.monthlySalary) {
      message += `Monthly Salary: ₹${formData.monthlySalary}/month\n`;
    }
    
    if (formData.skills) {
      message += `\n*Key Skills:*\n${formData.skills}`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
          <FaBriefcase className="w-7 h-7 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Work With Us</h3>
          <p className="text-sm text-gray-600">Share your expectations and connect via WhatsApp</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@email.com"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Position Applied For *
            </label>
            <input
              type="text"
              name="position"
              required
              value={formData.position}
              onChange={handleChange}
              placeholder="e.g., Full Stack Developer"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Experience Level *
            </label>
            <select
              name="experienceLevel"
              required
              value={formData.experienceLevel}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
            >
              <option>Fresher (0-1 year)</option>
              <option>Junior (1-2 years)</option>
              <option>Mid-Level (2-5 years)</option>
              <option>Senior (5-8 years)</option>
              <option>Expert (8+ years)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Work Type *
            </label>
            <select
              name="workType"
              required
              value={formData.workType}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
            >
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Freelance</option>
              <option>Hourly Support</option>
            </select>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-100">
          <div className="flex items-center gap-2 mb-4">
            <FaRupeeSign className="w-5 h-5 text-blue-600" />
            <h4 className="font-bold text-gray-900">Compensation Expectations</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Hourly Rate (₹)
              </label>
              <input
                type="number"
                name="hourlyRate"
                value={formData.hourlyRate}
                onChange={handleChange}
                placeholder="e.g., 500"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors bg-white"
              />
              <p className="text-xs text-gray-500 mt-1">For hourly/freelance work</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Monthly Salary (₹)
              </label>
              <input
                type="number"
                name="monthlySalary"
                value={formData.monthlySalary}
                onChange={handleChange}
                placeholder="e.g., 50000"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors bg-white"
              />
              <p className="text-xs text-gray-500 mt-1">For full-time positions</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Availability
            </label>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
            >
              <option>Immediate</option>
              <option>Within 2 weeks</option>
              <option>Within 1 month</option>
              <option>Within 2-3 months</option>
              <option>Flexible</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Key Skills *
            </label>
            <input
              type="text"
              name="skills"
              required
              value={formData.skills}
              onChange={handleChange}
              placeholder="React, Node.js, AWS, etc."
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
        >
          <FaWhatsapp className="w-6 h-6" />
          Connect via WhatsApp
        </button>

        <p className="text-xs text-gray-500 text-center">
          Your information will be sent via WhatsApp. We'll review and get back to you within 24-48 hours.
        </p>
      </form>
    </div>
  );
}
