import SaudiRiyal from '../SaudiRiyal';
const SaudiCurrency = ({ value, variant = undefined }) => {
  return value ? (
    <div className="flex justify-center items-center h-full w-full">
      <span>{value}</span>
      <SaudiRiyal size="sm" fill={variant} />
    </div>
  ) : (
    <span className="flex justify-center items-center h-full w-full">--</span>
  );
};

export default SaudiCurrency;
