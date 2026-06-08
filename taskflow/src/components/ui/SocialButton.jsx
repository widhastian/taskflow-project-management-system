function SocialButton({ icon, label, onClick, provider }) {
  const bgColors = {
    google: 'hover:bg-red-50',
    github: 'hover:bg-slate-100',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full flex items-center justify-center gap-3 px-4 py-2.5 
        bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700
        hover:border-slate-300 ${bgColors[provider] || ''} 
        transition-all duration-200 active:scale-[0.98]`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default SocialButton;