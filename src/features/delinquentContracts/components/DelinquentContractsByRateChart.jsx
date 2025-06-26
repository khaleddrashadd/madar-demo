import { Card, CardContent, CardHeader } from '@/components/card';
import TooltipInfo from '@/components/TooltipInfo';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
const data = [
  {
    name: 'يناير',
    uv: 20,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'فبراير',
    uv: 30,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'مارس',
    uv: 25,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'ابريل',
    uv: 45,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'مايو',
    uv: 25,
    pv: 3908,
    amt: 2000,
  },
];

const DelinquentContractsByRateChart = () => {
  return (
    <Card className="py-6 px-3">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-4 ">
          <h6 className="text-xl font-semibold">
            معدل تعثر القروض بمرور الوقت
          </h6>
          <TooltipInfo id="11#" place="top-start" delay={300}>
            معدل تعثر القروض بمرور الوقت
          </TooltipInfo>
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <div className="h-64" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis />

                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#FF7E67"
                  fill="#FF7E6733"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default DelinquentContractsByRateChart;
