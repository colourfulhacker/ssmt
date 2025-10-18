import { useState, useEffect, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required?: boolean;
  options?: string[];
  placeholder?: string;
}

interface WhatsAppFormProps {
  title: string;
  description: string;
  fields: FormField[];
  messageTemplate: (data: Record<string, string>) => string;
  phoneNumber: string;
  submitButtonText?: string;
  defaultValues?: Record<string, string>;
}

export default function WhatsAppForm({
  title,
  description,
  fields,
  messageTemplate,
  phoneNumber,
  submitButtonText = 'Send via WhatsApp',
  defaultValues = {},
}: WhatsAppFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>(defaultValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (defaultValues && Object.keys(defaultValues).length > 0) {
      setFormData((prev) => {
        const updated = { ...prev };
        Object.entries(defaultValues).forEach(([key, value]) => {
          if (!prev[key] || prev[key] === '') {
            updated[key] = value;
          }
        });
        return updated;
      });
    }
  }, [defaultValues]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = messageTemplate(formData);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({});
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto"
    >
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-4">
            <FaWhatsapp className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{description}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {fields.map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>

              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required={field.required}
                  placeholder={field.placeholder}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              ) : field.type === 'select' ? (
                <select
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required={field.required}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select {field.label}</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Redirecting...
              </>
            ) : (
              <>
                <FaPaperPlane className="mr-3" />
                {submitButtonText}
              </>
            )}
          </button>

          <p className="text-sm text-gray-500 text-center mt-4">
            Your message will open in WhatsApp. Make sure WhatsApp is installed on your device.
          </p>
        </form>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
        <div className="flex items-start space-x-4">
          <FaWhatsapp className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Why WhatsApp?</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✓ Instant response from our team</li>
              <li>✓ Secure and direct communication</li>
              <li>✓ Quick follow-up and support</li>
              <li>✓ Share additional documents easily</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
