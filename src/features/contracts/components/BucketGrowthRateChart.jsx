import CustomTooltip from '@/components/CustomTooltip';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import CustomDot from './CustomDot';
import { getSelectedBuckets } from '../store/contractSlice';
import { useSelector } from 'react-redux';
import CustomLegend from './CustomLegend';
import { BUCKETS } from '@/constants/contracts';
import { transformBucketGrowthRateData } from '../utils/transformBucketData';

const BucketGrowthRateChart = ({ data }) => {
  const selectedBuckets = useSelector(getSelectedBuckets);

  const modifiedData = transformBucketGrowthRateData(data);

  return (
    <div className="w-full p-3">
      <div className="h-64" dir="ltr">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={modifiedData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="dateLabel"
              interval={0}
              tick={{ fontSize: 10, angle: -30, textAnchor: 'end' }}
              padding={{ left: 30, right: 30 }}
            />
            <YAxis />
            <Tooltip content={<CustomTooltip dir="ltr" />} />
            <Legend
              content={<CustomLegend />}
              verticalAlign="bottom"
              height={36}
              wrapperStyle={{ fontSize: '10px', bottom: -10 }}
            />
            {BUCKETS.map((bucket, index) => (
              <Line
                dot={<CustomDot />}
                key={`cell-${index}`}
                type="monotone"
                dataKey={bucket.name}
                stroke={bucket.color}
                unit={selectedBuckets}
                opacity={
                  !selectedBuckets.length ||
                  selectedBuckets.map((bucket) => bucket.id).includes(bucket.id)
                    ? 0.8
                    : 0.05
                }
                strokeWidth={2}
                activeDot={
                  !selectedBuckets.length ||
                  selectedBuckets.map((bucket) => bucket.id).includes(bucket.id)
                    ? true
                    : false
                }
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BucketGrowthRateChart;
