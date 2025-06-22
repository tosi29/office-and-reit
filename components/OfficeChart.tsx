import { useState } from 'react';
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
  // 各線の表示状態を管理するstate
  const [vacancyRateVisible, setVacancyRateVisible] = useState(true);
  const [rentalRateVisible, setRentalRateVisible] = useState(true);
  const [reitIndexVisible, setReitIndexVisible] = useState(true);

  return (
    <div className="mt-8">
      
      {/* 表示切り替えボタン */}
      <div className="mt-4 mb-4 flex gap-4 flex-wrap">
        <button
          onClick={() => setVacancyRateVisible(!vacancyRateVisible)}
          className={`px-4 py-2 rounded border-none cursor-pointer text-sm font-bold ${
            vacancyRateVisible 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-300 text-gray-600'
          }`}
        >
          平均空室率 {vacancyRateVisible ? '✓' : '✗'}
        </button>
        
        <button
          onClick={() => setRentalRateVisible(!rentalRateVisible)}
          className={`px-4 py-2 rounded border-none cursor-pointer text-sm font-bold ${
            rentalRateVisible 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-300 text-gray-600'
          }`}
        >
          平均賃料 {rentalRateVisible ? '✓' : '✗'}
        </button>
        
        <button
          onClick={() => setReitIndexVisible(!reitIndexVisible)}
          className={`px-4 py-2 rounded border-none cursor-pointer text-sm font-bold ${
            reitIndexVisible 
              ? 'bg-orange-500 text-white' 
              : 'bg-gray-300 text-gray-600'
          }`}
        >
          東証REIT指数 {reitIndexVisible ? '✓' : '✗'}
        </button>
      </div>
      <div className="w-full h-96 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 60,
              left: 20,
              bottom: 60,
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
            <YAxis yAxisId="reit" orientation="right" />
            <Tooltip 
              labelFormatter={(label) => `月: ${label}`}
              formatter={(value, name) => {
                if (name === '平均空室率') return [`${value}%`, name];
                if (name === '平均賃料') return [`${Number(value).toLocaleString()}円/坪`, name];
                if (name === '東証REIT指数') return [`${Number(value).toLocaleString()}`, name];
                return [value, name];
              }}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="line"
              align="center"
              verticalAlign="bottom"
            />
            {vacancyRateVisible && (
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="vacancyRate"
                stroke="#8884d8"
                strokeWidth={2}
                name="平均空室率"
                dot={{ fill: '#8884d8' }}
              />
            )}
            {rentalRateVisible && (
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="rentalRate"
                stroke="#82ca9d"
                strokeWidth={2}
                name="平均賃料"
                dot={{ fill: '#82ca9d' }}
              />
            )}
            {reitIndexVisible && (
              <Line
                yAxisId="reit"
                type="monotone"
                dataKey="reitIndex"
                stroke="#ff7300"
                strokeWidth={2}
                name="東証REIT指数"
                dot={{ fill: '#ff7300' }}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OfficeChart;