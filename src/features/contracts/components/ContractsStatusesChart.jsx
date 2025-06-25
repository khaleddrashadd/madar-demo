import {
  Bar,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
} from 'recharts';
import CustomBarTooltip from '../../../components/CustomBarTooltip';
import { useDispatch } from 'react-redux';
import { selectBuckets } from '../store/contractSlice';
import { BUCKETS, COLORS } from '@/constants/contracts';

const ContractsStatusesChart = ({ data, resetPagination }) => {
  const dispatch = useDispatch();
  const modifiedData = data?.map((item, idx) => {
    return {
      ...item,
      color: COLORS[idx + 1],
    };
  });

  const handleBarClick = (data) => {
    const bucket = BUCKETS.find((item) => item.id === data.id);
    dispatch(selectBuckets([bucket]));
    resetPagination();
  };
  return (
    <div className="w-full p-3">
      <div className="h-64" dir="ltr">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={modifiedData} margin={{ right: 30 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={true}
              vertical={false}
            />

            <XAxis
              dataKey="name"
              tick={{
                fontWeight: 600,
                fontSize: 10,
                angle: -45,
                textAnchor: 'end',
              }}
              interval={0}
              height={60}
              tickLine={false}
            />
            <YAxis tickLine={false} />
            <Tooltip
              content={<CustomBarTooltip />}
              cursor={{ fill: '#00619d', opacity: 0.1 }}
            />
            <Bar
              dataKey="count"
              onClick={handleBarClick}
              radius={[4, 4, 0, 0]}
              barSize={50}
            >
              {modifiedData?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} opacity={0.8} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ContractsStatusesChart;
