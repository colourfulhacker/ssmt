import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { FaDatabase, FaUser, FaBook, FaCertificate, FaCheckCircle, FaTimesCircle, FaLock, FaSignOutAlt } from 'react-icons/fa';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [activeTab, setActiveTab] = useState('students');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  
  const [students, setStudents] = useState<any[]>([]);
  const [courses, setCourses] = useState<any[]>([]);
  const [certificates, setCertificates] = useState<any[]>([]);

  const [studentForm, setStudentForm] = useState({ name: '', email: '', phone: '' });
  const [courseForm, setCourseForm] = useState({ name: '', description: '', duration: '' });
  const [certificateForm, setCertificateForm] = useState({
    certificate_code: '',
    student_id: '',
    course_id: '',
    issue_date: '',
    completion_date: ''
  });

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [activeTab, isAuthenticated]);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/admin/check-auth');
      const data = await res.json();
      setIsAuthenticated(data.isLoggedIn);
    } catch (error) {
      console.error('Auth check failed:', error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: loginPassword })
      });

      if (res.ok) {
        setIsAuthenticated(true);
        setLoginPassword('');
      } else {
        const data = await res.json();
        setLoginError(data.error || 'Invalid password');
      }
    } catch (error) {
      setLoginError('Login failed. Please try again.');
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      setIsAuthenticated(false);
      setStudents([]);
      setCourses([]);
      setCertificates([]);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const loadData = async () => {
    try {
      if (activeTab === 'students') {
        const res = await fetch('/api/admin/students');
        if (res.ok) {
          const data = await res.json();
          setStudents(Array.isArray(data) ? data : []);
        } else {
          console.error('Failed to load students');
          setStudents([]);
        }
      } else if (activeTab === 'courses') {
        const res = await fetch('/api/admin/courses');
        if (res.ok) {
          const data = await res.json();
          setCourses(Array.isArray(data) ? data : []);
        } else {
          console.error('Failed to load courses');
          setCourses([]);
        }
      } else if (activeTab === 'certificates') {
        const res = await fetch('/api/admin/certificates');
        if (res.ok) {
          const data = await res.json();
          setCertificates(Array.isArray(data) ? data : []);
        } else {
          console.error('Failed to load certificates');
          setCertificates([]);
        }
      }
    } catch (error) {
      console.error('Failed to load data:', error);
      if (activeTab === 'students') setStudents([]);
      else if (activeTab === 'courses') setCourses([]);
      else if (activeTab === 'certificates') setCertificates([]);
    }
  };

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  };

  const initializeDatabase = async () => {
    try {
      const res = await fetch('/api/admin/init-db', { method: 'POST' });
      if (res.ok) {
        showMessage('success', 'Database initialized successfully');
      } else {
        showMessage('error', 'Failed to initialize database');
      }
    } catch (error) {
      showMessage('error', 'Failed to initialize database');
    }
  };

  const addStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentForm)
      });
      
      if (res.ok) {
        showMessage('success', 'Student added successfully');
        setStudentForm({ name: '', email: '', phone: '' });
        loadData();
      } else {
        const error = await res.json();
        showMessage('error', error.error || 'Failed to add student');
      }
    } catch (error) {
      showMessage('error', 'Failed to add student');
    }
  };

  const addCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/courses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(courseForm)
      });
      
      if (res.ok) {
        showMessage('success', 'Course added successfully');
        setCourseForm({ name: '', description: '', duration: '' });
        loadData();
      } else {
        showMessage('error', 'Failed to add course');
      }
    } catch (error) {
      showMessage('error', 'Failed to add course');
    }
  };

  const addCertificate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/certificates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(certificateForm)
      });
      
      if (res.ok) {
        showMessage('success', 'Certificate added successfully');
        setCertificateForm({
          certificate_code: '',
          student_id: '',
          course_id: '',
          issue_date: '',
          completion_date: ''
        });
        loadData();
      } else {
        const error = await res.json();
        showMessage('error', error.error || 'Failed to add certificate');
      }
    } catch (error) {
      showMessage('error', 'Failed to add certificate');
    }
  };

  if (isLoading) {
    return (
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </section>
    );
  }

  if (!isAuthenticated) {
    return (
      <>
        <SEO
          title="Admin Login - SSMT Solutions"
          description="Admin panel login for SSMT Solutions"
          keywords="admin login, SSMT Solutions admin"
        />

        <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <FaLock className="text-white text-2xl" />
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
                Admin Login
              </h1>
              <p className="text-center text-gray-600 mb-8">
                Enter your password to access the admin panel
              </p>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Enter admin password"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {loginError && (
                  <div className="p-3 bg-red-100 text-red-800 rounded-lg flex items-center gap-2">
                    <FaTimesCircle />
                    {loginError}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold flex items-center justify-center gap-2"
                >
                  <FaLock />
                  Login
                </button>
              </form>
            </div>
          </motion.div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Admin Panel - SSMT Solutions"
        description="Admin panel for managing certificates, students, and courses"
        keywords="admin panel, certificate management, SSMT Solutions admin"
      />

      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
        <div className="container-custom max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Admin Panel
              </h1>
              <div className="flex gap-3">
                <button
                  onClick={initializeDatabase}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2"
                >
                  <FaDatabase />
                  Initialize Database
                </button>
                <button
                  onClick={handleLogout}
                  className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all flex items-center gap-2"
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </div>
            </div>

            {message && (
              <div className={`mb-6 p-4 rounded-lg flex items-center gap-2 ${
                message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {message.type === 'success' ? <FaCheckCircle /> : <FaTimesCircle />}
                {message.text}
              </div>
            )}

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="border-b border-gray-200">
                <nav className="flex">
                  <button
                    onClick={() => setActiveTab('students')}
                    className={`flex-1 px-6 py-4 text-center font-semibold transition-colors flex items-center justify-center gap-2 ${
                      activeTab === 'students'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <FaUser />
                    Students ({students.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('courses')}
                    className={`flex-1 px-6 py-4 text-center font-semibold transition-colors flex items-center justify-center gap-2 ${
                      activeTab === 'courses'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <FaBook />
                    Courses ({courses.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('certificates')}
                    className={`flex-1 px-6 py-4 text-center font-semibold transition-colors flex items-center justify-center gap-2 ${
                      activeTab === 'certificates'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <FaCertificate />
                    Certificates ({certificates.length})
                  </button>
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'students' && (
                  <div className="space-y-6">
                    <form onSubmit={addStudent} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
                      <input
                        type="text"
                        placeholder="Student Name"
                        value={studentForm.name}
                        onChange={(e) => setStudentForm({ ...studentForm, name: e.target.value })}
                        required
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        value={studentForm.email}
                        onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })}
                        required
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="tel"
                        placeholder="Phone"
                        value={studentForm.phone}
                        onChange={(e) => setStudentForm({ ...studentForm, phone: e.target.value })}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        type="submit"
                        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-semibold"
                      >
                        Add Student
                      </button>
                    </form>

                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-4 py-3 text-left">ID</th>
                            <th className="px-4 py-3 text-left">Name</th>
                            <th className="px-4 py-3 text-left">Email</th>
                            <th className="px-4 py-3 text-left">Phone</th>
                            <th className="px-4 py-3 text-left">Created</th>
                          </tr>
                        </thead>
                        <tbody>
                          {students.map((student) => (
                            <tr key={student.id} className="border-b border-gray-200">
                              <td className="px-4 py-3">{student.id}</td>
                              <td className="px-4 py-3">{student.name}</td>
                              <td className="px-4 py-3">{student.email}</td>
                              <td className="px-4 py-3">{student.phone || '-'}</td>
                              <td className="px-4 py-3">{new Date(student.created_at).toLocaleDateString()}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'courses' && (
                  <div className="space-y-6">
                    <form onSubmit={addCourse} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
                      <input
                        type="text"
                        placeholder="Course Name"
                        value={courseForm.name}
                        onChange={(e) => setCourseForm({ ...courseForm, name: e.target.value })}
                        required
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        placeholder="Description"
                        value={courseForm.description}
                        onChange={(e) => setCourseForm({ ...courseForm, description: e.target.value })}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        placeholder="Duration (e.g., 4 weeks)"
                        value={courseForm.duration}
                        onChange={(e) => setCourseForm({ ...courseForm, duration: e.target.value })}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        type="submit"
                        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-semibold"
                      >
                        Add Course
                      </button>
                    </form>

                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-4 py-3 text-left">ID</th>
                            <th className="px-4 py-3 text-left">Name</th>
                            <th className="px-4 py-3 text-left">Description</th>
                            <th className="px-4 py-3 text-left">Duration</th>
                            <th className="px-4 py-3 text-left">Created</th>
                          </tr>
                        </thead>
                        <tbody>
                          {courses.map((course) => (
                            <tr key={course.id} className="border-b border-gray-200">
                              <td className="px-4 py-3">{course.id}</td>
                              <td className="px-4 py-3 font-semibold">{course.name}</td>
                              <td className="px-4 py-3">{course.description || '-'}</td>
                              <td className="px-4 py-3">{course.duration || '-'}</td>
                              <td className="px-4 py-3">{new Date(course.created_at).toLocaleDateString()}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'certificates' && (
                  <div className="space-y-6">
                    <form onSubmit={addCertificate} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                      <input
                        type="text"
                        placeholder="Certificate Code"
                        value={certificateForm.certificate_code}
                        onChange={(e) => setCertificateForm({ ...certificateForm, certificate_code: e.target.value })}
                        required
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <select
                        value={certificateForm.student_id}
                        onChange={(e) => setCertificateForm({ ...certificateForm, student_id: e.target.value })}
                        required
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select Student</option>
                        {students.map((student) => (
                          <option key={student.id} value={student.id}>
                            {student.name} ({student.email})
                          </option>
                        ))}
                      </select>
                      <select
                        value={certificateForm.course_id}
                        onChange={(e) => setCertificateForm({ ...certificateForm, course_id: e.target.value })}
                        required
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select Course</option>
                        {courses.map((course) => (
                          <option key={course.id} value={course.id}>
                            {course.name}
                          </option>
                        ))}
                      </select>
                      <input
                        type="date"
                        placeholder="Issue Date"
                        value={certificateForm.issue_date}
                        onChange={(e) => setCertificateForm({ ...certificateForm, issue_date: e.target.value })}
                        required
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="date"
                        placeholder="Completion Date"
                        value={certificateForm.completion_date}
                        onChange={(e) => setCertificateForm({ ...certificateForm, completion_date: e.target.value })}
                        required
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        type="submit"
                        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-semibold"
                      >
                        Add Certificate
                      </button>
                    </form>

                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-4 py-3 text-left">ID</th>
                            <th className="px-4 py-3 text-left">Certificate Code</th>
                            <th className="px-4 py-3 text-left">Student</th>
                            <th className="px-4 py-3 text-left">Course</th>
                            <th className="px-4 py-3 text-left">Issue Date</th>
                            <th className="px-4 py-3 text-left">Completion</th>
                          </tr>
                        </thead>
                        <tbody>
                          {certificates.map((cert) => (
                            <tr key={cert.id} className="border-b border-gray-200">
                              <td className="px-4 py-3">{cert.id}</td>
                              <td className="px-4 py-3 font-mono font-semibold text-blue-600">{cert.certificate_code}</td>
                              <td className="px-4 py-3">{cert.student_name}</td>
                              <td className="px-4 py-3">{cert.course_name}</td>
                              <td className="px-4 py-3">{new Date(cert.issue_date).toLocaleDateString()}</td>
                              <td className="px-4 py-3">{new Date(cert.completion_date).toLocaleDateString()}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
