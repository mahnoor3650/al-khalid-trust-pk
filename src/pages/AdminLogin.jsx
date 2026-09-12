import { useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../hooks/useAuth';
import SEO from '../components/SEO';

const AdminLogin = () => {
  const { session, loading: sessionLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  if (!sessionLoading && session) {
    const redirectTo = location.state?.from || '/admin';
    return <Navigate to={redirectTo} replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setSubmitting(false);

    if (error) {
      setError('Invalid email or password.');
      return;
    }

    navigate('/admin', { replace: true });
  };

  return (
    <main>
      <SEO title="Admin Login | Al-Khalid Trust Pakistan" />
      <section className="section-padding30 bg-gray-50 min-h-[70vh] flex items-center px-4">
        <div className="container-custom">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h1 className="text-xl sm:text-2xl font-bold text-heading mb-6 text-center">
              Admin Login
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-heading mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-primary"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-heading mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-primary"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-theme-primary transition"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    tabIndex={-1}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-red-600 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="btn btn-primary w-full disabled:opacity-60"
              >
                {submitting ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminLogin;
