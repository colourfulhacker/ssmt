import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaCheckCircle, FaTimesCircle, FaSearch } from 'react-icons/fa';
import SEO from '../components/SEO';

interface Certificate {
  id: number;
  certificate_code: string;
  student_name: string;
  student_email: string;
  course_name: string;
  course_description: string;
  issue_date: string;
  completion_date: string;
}

export default function VerifyCertificate() {
  const [certificateCode, setCertificateCode] = useState('');
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setCertificate(null);
    setSearched(true);

    try {
      const response = await fetch(`/api/verify-certificate?code=${encodeURIComponent(certificateCode.trim())}`);
      
      if (response.ok) {
        const data = await response.json();
        setCertificate(data);
      } else if (response.status === 404) {
        setError('Certificate not found. Please check the code and try again.');
      } else {
        setError('An error occurred while verifying. Please try again.');
      }
    } catch (err) {
      setError('An error occurred while verifying. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Certificate Verification"
        description="Verify your SSMT Solutions training certificate authenticity using the unique certificate code."
        keywords="certificate verification, training certificate, SSMT Solutions, course completion, certificate validation"
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
                <FaCertificate className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Certificate Verification
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Verify the authenticity of SSMT Solutions training certificates
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <form onSubmit={handleVerify} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Certificate Code
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={certificateCode}
                      onChange={(e) => setCertificateCode(e.target.value)}
                      placeholder="Enter certificate code (e.g., SSMT-2024-1234)"
                      required
                      className="w-full px-4 py-4 pr-12 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors text-lg"
                    />
                    <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? 'Verifying...' : 'Verify Certificate'}
                </button>
              </form>

              {searched && !loading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-8"
                >
                  {certificate ? (
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <FaCheckCircle className="w-8 h-8 text-green-600" />
                        <h3 className="text-2xl font-bold text-green-900">
                          Certificate Verified ✓
                        </h3>
                      </div>
                      <div className="space-y-3 text-gray-700">
                        <div className="flex justify-between border-b border-green-200 pb-2">
                          <span className="font-semibold">Student Name:</span>
                          <span>{certificate.student_name}</span>
                        </div>
                        <div className="flex justify-between border-b border-green-200 pb-2">
                          <span className="font-semibold">Course Name:</span>
                          <span>{certificate.course_name}</span>
                        </div>
                        <div className="flex justify-between border-b border-green-200 pb-2">
                          <span className="font-semibold">Issue Date:</span>
                          <span>{new Date(certificate.issue_date).toLocaleDateString('en-IN')}</span>
                        </div>
                        <div className="flex justify-between border-b border-green-200 pb-2">
                          <span className="font-semibold">Completion Date:</span>
                          <span>{new Date(certificate.completion_date).toLocaleDateString('en-IN')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Certificate Code:</span>
                          <span className="font-mono">{certificate.certificate_code}</span>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-white rounded-lg border border-green-200">
                        <p className="text-sm text-green-800">
                          <strong>Verified:</strong> This is a genuine certificate issued by SSMT Solutions.
                        </p>
                      </div>
                    </div>
                  ) : error ? (
                    <div className="bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <FaTimesCircle className="w-8 h-8 text-red-600" />
                        <h3 className="text-2xl font-bold text-red-900">
                          Verification Failed
                        </h3>
                      </div>
                      <p className="text-red-700">{error}</p>
                      <p className="text-sm text-red-600 mt-3">
                        If you believe this is an error, please contact us at support@ssmtsolutions.com
                      </p>
                    </div>
                  ) : null}
                </motion.div>
              )}
            </div>

            <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="font-bold text-gray-900 mb-3">How to Verify:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Locate your certificate code on your training certificate</li>
                <li>Enter the complete code in the field above</li>
                <li>Click "Verify Certificate" to check authenticity</li>
                <li>View certificate details if verification is successful</li>
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
