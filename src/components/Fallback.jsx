const Fallback = ({ title, subtitle }) => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md w-full text-center">
        <h2 className="text-red-800 text-lg font-semibold mb-2">{title}</h2>
        {!!subtitle && <p className="text-red-600 text-sm">{subtitle}</p>}
      </div>
    </div>
  );
};

export default Fallback;
