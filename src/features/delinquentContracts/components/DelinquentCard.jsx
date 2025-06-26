import { Card } from '@/components/card';

const DelinquentCard = ({ title, value, icon }) => {
  return (
    <Card className="shadow-md p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold text-[##797D8C]">{title}</p>
          <h3 className="text-3xl font-bold text-gray-950">{value}</h3>
        </div>
        <div className="flex items-center justify-center">{icon}</div>
      </div>
    </Card>
  );
};
export default DelinquentCard;
