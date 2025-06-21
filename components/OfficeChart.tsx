import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { OfficeData } from '../types/office';

interface OfficeChartProps {
  data: OfficeData[];
}

const OfficeChart: React.FC<OfficeChartProps> = ({ data }) => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>オフィス空室率・賃料推移グラフ</h2>
      <div style={{ width: '100%', height: '400px', marginTop: '1rem' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="month" 
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis yAxisId="left" orientation="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip 
              labelFormatter={(label) => `月: ${label}`}
              formatter={(value, name) => {
                if (name === '空室率') return [`${value}%`, name];
                if (name === '賃料') return [`${Number(value).toLocaleString()}円/㎡/月`, name];
                return [value, name];
              }}
            />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="vacancyRate"
              stroke="#8884d8"
              strokeWidth={2}
              name="空室率"
              dot={{ fill: '#8884d8' }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="rentalRate"
              stroke="#82ca9d"
              strokeWidth={2}
              name="賃料"
              dot={{ fill: '#82ca9d' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OfficeChart;