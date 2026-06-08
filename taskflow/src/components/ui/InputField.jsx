import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

function InputField({
  label,
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  required = false,
  error = '',
  icon: Icon,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-slate-700">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
        )}
        <input
          type={inputType}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full py-2.5 bg-white border rounded-lg text-sm text-slate-800 placeholder:text-slate-400
            focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500
            transition-all duration-200
            ${Icon ? 'pl-10' : 'pl-4'}
            ${isPassword ? 'pr-10' : 'pr-4'}
            ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200'}
          `}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default InputField;