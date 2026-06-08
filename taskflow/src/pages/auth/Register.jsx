import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight, Workflow, CheckCircle2 } from 'lucide-react';
import InputField from '../../components/ui/InputField';
import SocialButton from '../../components/ui/SocialButton';

function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: form, 2: success
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Nama lengkap wajib diisi';
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    if (!formData.password) {
      newErrors.password = 'Password wajib diisi';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password minimal 8 karakter';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Password tidak cocok';
    }
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'Anda harus menyetujui syarat dan ketentuan';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    // Simulasi API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setStep(2);
  };

  const getPasswordStrength = () => {
    const pwd = formData.password;
    if (!pwd) return { label: '', color: '', width: '0%' };
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    const levels = [
      { label: 'Lemah', color: 'bg-red-500', width: '25%' },
      { label: 'Sedang', color: 'bg-yellow-500', width: '50%' },
      { label: 'Kuat', color: 'bg-blue-500', width: '75%' },
      { label: 'Sangat Kuat', color: 'bg-green-500', width: '100%' },
    ];
    return levels[Math.min(score, 3)];
  };

  const strength = getPasswordStrength();

  const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path fill="#EA4335" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path fill="#4285F4" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#34A853" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );

  const GithubIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.235-.015-2.25-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );

  // Success State
  if (step === 2) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4">
        <div className="w-full max-w-md text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Pendaftaran Berhasil!</h1>
          <p className="text-slate-500 mb-8">
            Akun Anda telah berhasil dibuat. Silakan masuk untuk mulai menggunakan TaskFlow.
          </p>
          <button
            onClick={() => navigate('/login')}
            className="w-full py-2.5 bg-primary-600 text-white rounded-lg font-medium
              hover:bg-primary-700 active:scale-[0.98] transition-all duration-200"
          >
            Masuk Sekarang
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30">
            <Workflow className="w-7 h-7 text-white" />
          </div>
          <span className="text-2xl font-bold text-slate-800">TaskFlow</span>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-slate-800">Buat Akun Baru</h1>
            <p className="text-slate-500 mt-1 text-sm">Mulai kelola project Anda dengan TaskFlow</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <InputField
              label="Nama Lengkap"
              type="text"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              required
              error={errors.fullName}
              icon={User}
            />

            <InputField
              label="Email"
              type="email"
              name="email"
              placeholder="nama@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              error={errors.email}
              icon={Mail}
            />

            <div>
              <InputField
                label="Password"
                type="password"
                name="password"
                placeholder="Minimal 8 karakter"
                value={formData.password}
                onChange={handleChange}
                required
                error={errors.password}
                icon={Lock}
              />
              {/* Password Strength */}
              {formData.password && (
                <div className="mt-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-slate-500">Kekuatan password</span>
                    <span className="text-xs font-medium" style={{ color: strength.color.replace('bg-', '').replace('500', '600') }}>
                      {strength.label}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${strength.color} transition-all duration-300`}
                      style={{ width: strength.width }}
                    />
                  </div>
                </div>
              )}
            </div>

            <InputField
              label="Konfirmasi Password"
              type="password"
              name="confirmPassword"
              placeholder="Ulangi password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              error={errors.confirmPassword}
              icon={Lock}
            />

            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="w-4 h-4 mt-0.5 rounded border-slate-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-slate-600">
                Saya menyetujui{' '}
                <Link to="/terms" className="text-primary-600 hover:underline">Syarat dan Ketentuan</Link>
                {' '}serta{' '}
                <Link to="/privacy" className="text-primary-600 hover:underline">Kebijakan Privasi</Link>
              </span>
            </label>
            {errors.agreeTerms && (
              <p className="text-xs text-red-500 -mt-3">{errors.agreeTerms}</p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-primary-600 text-white rounded-lg font-medium
                hover:bg-primary-700 active:scale-[0.98] transition-all duration-200
                disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Daftar
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-slate-400">atau daftar dengan</span>
            </div>
          </div>

          {/* Social Register */}
          <div className="space-y-3">
            <SocialButton
              provider="google"
              icon={<GoogleIcon />}
              label="Google"
              onClick={() => {}}
            />
            <SocialButton
              provider="github"
              icon={<GithubIcon />}
              label="GitHub"
              onClick={() => {}}
            />
          </div>

          {/* Login Link */}
          <p className="text-center text-sm text-slate-500 mt-6">
            Sudah punya akun?{' '}
            <Link
              to="/login"
              className="font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              Masuk di sini
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          © 2026 TaskFlow. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Register;