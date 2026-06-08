import { Outlet, Link, useLocation } from 'react-router-dom';
import { Workflow, Shield, Zap, Users } from 'lucide-react';

function AuthLayout() {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  const features = [
    { icon: Zap, title: 'Efisien', desc: 'Kelola project dengan workflow yang optimal' },
    { icon: Users, title: 'Kolaborasi', desc: 'Tim bekerja bersama secara real-time' },
    { icon: Shield, title: 'Aman', desc: 'Data Anda terlindungi dengan enkripsi' },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding (Desktop Only) */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-5/12 bg-sidebar-bg relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <Workflow className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">TaskFlow</span>
          </Link>

          {/* Features */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {isLogin ? 'Selamat Datang Kembali!' : 'Bergabung dengan TaskFlow'}
              </h2>
              <p className="text-slate-400 text-lg">
                {isLogin
                  ? 'Kelola project Anda dengan lebih efisien dan terorganisir.'
                  : 'Mulai perjalanan manajemen project yang lebih baik hari ini.'}
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{feature.title}</h3>
                      <p className="text-sm text-slate-400 mt-0.5">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <p className="text-sm text-slate-500">
            © 2026 TaskFlow. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right Side - Form Area */}
      <div className="flex-1 flex flex-col bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/50">
        {/* Mobile Logo */}
        <div className="lg:hidden flex items-center justify-center gap-3 pt-8 pb-4">
          <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
            <Workflow className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-800">TaskFlow</span>
        </div>

        {/* Form Container */}
        <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;