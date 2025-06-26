import { Card, CardContent, CardHeader } from '@/components/card';
import TooltipInfo from '@/components/TooltipInfo';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
const data = [
  {
    name: 'يناير',
    uv: 50,
    pv: 40,
    amt: 2400,
  },
  {
    name: 'فبراير',
    uv: 50,
    pv: 30,
    amt: 2210,
  },
  {
    name: 'مارس',
    uv: 45,
    pv: 15,
    amt: 2290,
  },
  {
    name: 'ابريل',
    uv: 44,
    pv: 30,
    amt: 2000,
  },
  {
    name: 'مايو',
    uv: 40,
    pv: 20,
    amt: 2000,
  },
  {
    name: 'يونيو',
    uv: 30,
    pv: 25,
    amt: 2181,
  },
  {
    name: 'يوليو',
    uv: 20,
    pv: 30,
    amt: 2500,
  },
];

const DelinquentContractsChart = () => {
  return (
    <Card className="py-6 px-3">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-4 ">
          <h6 className="text-xl font-semibold">
            معدل التعثر المتوقع والفعلي بمرور الوقت (%)
          </h6>
          <TooltipInfo id="11#" place="top-start" delay={300}>
            معدل التعثر المتوقع والفعلي بمرور الوقت (%)
          </TooltipInfo>
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <div className="h-64" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Legend
                  wrapperStyle={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#757575"
                  activeDot={{ r: 8 }}
                  name="التعثر المتوقع (%)"
                />
                <Line
                  type="monotone"
                  dataKey="uv"
                  stroke="#2E7D32"
                  name="التعثر الفعلي (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default DelinquentContractsChart;
