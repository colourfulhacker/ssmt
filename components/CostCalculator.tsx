import { useState } from 'react';
import { FaCalculator, FaRupeeSign } from 'react-icons/fa';

interface ServiceOption {
  name: string;
  basePrice: number;
  unit: string;
}

const services: Record<string, ServiceOption[]> = {
  'Job Support': [
    { name: 'Hourly Support', basePrice: 500, unit: 'per hour' },
    { name: 'Daily Support', basePrice: 3500, unit: 'per day' },
    { name: 'Weekly Support (20 hrs)', basePrice: 12000, unit: 'per week' },
    { name: 'Monthly Support (80 hrs)', basePrice: 40000, unit: 'per month' },
  ],
  'Development Services': [
    { name: 'Frontend Development', basePrice: 40000, unit: 'per project' },
    { name: 'Backend Development', basePrice: 60000, unit: 'per project' },
    { name: 'Full Stack Development', basePrice: 100000, unit: 'per project' },
    { name: 'Custom Enterprise Solution', basePrice: 250000, unit: 'per project' },
  ],
  'Training Programs': [
    { name: 'Individual Training (1 month)', basePrice: 15000, unit: 'per person' },
    { name: 'Corporate Training (Basic)', basePrice: 50000, unit: 'per batch (10-15)' },
    { name: 'Corporate Training (Advanced)', basePrice: 80000, unit: 'per batch (10-15)' },
    { name: 'White-Label Training Partnership', basePrice: 150000, unit: 'per program' },
  ],
  'Consultancy': [
    { name: 'Technical Consultation', basePrice: 2000, unit: 'per hour' },
    { name: 'Architecture Review', basePrice: 25000, unit: 'per project' },
    { name: 'Technology Audit', basePrice: 50000, unit: 'per audit' },
    { name: 'Digital Transformation Strategy', basePrice: 100000, unit: 'per engagement' },
  ],
};

export default function CostCalculator() {
  const [selectedCategory, setSelectedCategory] = useState('Job Support');
  const [selectedService, setSelectedService] = useState(services['Job Support'][0]);
  const [quantity, setQuantity] = useState(1);
  const [discount, setDiscount] = useState(0);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedService(services[category][0]);
    setQuantity(1);
  };

  const handleServiceChange = (serviceName: string) => {
    const service = services[selectedCategory].find(s => s.name === serviceName);
    if (service) setSelectedService(service);
  };

  const subtotal = selectedService.basePrice * quantity;
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;
  const gst = total * 0.18;
  const grandTotal = total + gst;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
          <FaCalculator className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Service Cost Calculator</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Service Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
          >
            {Object.keys(services).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Select Service
          </label>
          <select
            value={selectedService.name}
            onChange={(e) => handleServiceChange(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
          >
            {services[selectedCategory].map((service) => (
              <option key={service.name} value={service.name}>
                {service.name} - ₹{service.basePrice.toLocaleString('en-IN')} {service.unit}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Quantity / Duration
          </label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Discount (%)
          </label>
          <input
            type="number"
            min="0"
            max="50"
            value={discount}
            onChange={(e) => setDiscount(Math.min(50, Math.max(0, parseInt(e.target.value) || 0)))}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
          />
        </div>

        <div className="border-t-2 border-gray-200 pt-6 space-y-3">
          <div className="flex justify-between text-gray-700">
            <span>Subtotal:</span>
            <span className="font-semibold">₹{subtotal.toLocaleString('en-IN')}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Discount ({discount}%):</span>
              <span className="font-semibold">-₹{discountAmount.toLocaleString('en-IN')}</span>
            </div>
          )}
          <div className="flex justify-between text-gray-700">
            <span>GST (18%):</span>
            <span className="font-semibold">₹{gst.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between text-xl font-bold text-blue-600 pt-3 border-t-2 border-gray-200">
            <span>Total Amount:</span>
            <span className="flex items-center">
              <FaRupeeSign className="w-5 h-5" />
              {grandTotal.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-500 italic text-center">
          *Prices in INR. American standard quality at Indian prices. Contact us for custom quotes.
        </p>
      </div>
    </div>
  );
}
