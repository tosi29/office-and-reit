import { useState } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Brush
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
  
  // ドラッグ選択による範囲フィルタを管理するstate
  const [brushRange, setBrushRange] = useState<{ startIndex?: number; endIndex?: number }>({});
  
  // 選択範囲に基づいてデータをフィルタリング
  const filteredData = brushRange.startIndex !== undefined && brushRange.endIndex !== undefined
    ? data.slice(brushRange.startIndex, brushRange.endIndex + 1)
    : data;
  
  // ブラシでの選択変更ハンドラ
  const handleBrushChange = (brushData: { startIndex?: number; endIndex?: number } | null) => {
    console.log('Brush change:', brushData); // デバッグ用
    if (brushData) {
      setBrushRange(brushData);
    } else {
      setBrushRange({});
    }
  };
  
  // 選択範囲をリセット
  const resetSelection = () => {
    setBrushRange({});
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      {/* デバッグ情報 */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{ 
          fontSize: '12px', 
          color: '#666', 
          marginBottom: '1rem',
          padding: '8px',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px'
        }}>
          データ総数: {data.length}, 表示中: {filteredData.length}, 
          選択範囲: {brushRange.startIndex !== undefined ? `${brushRange.startIndex}-${brushRange.endIndex}` : '未選択'}
        </div>
      )}
      
      {/* 表示切り替えボタン */}
      <div style={{ 
        marginTop: '1rem', 
        marginBottom: '1rem', 
        display: 'flex', 
        gap: '1rem', 
        flexWrap: 'wrap' 
      }}>
        <button
          onClick={() => setVacancyRateVisible(!vacancyRateVisible)}
          style={{
            padding: '8px 16px',
            backgroundColor: vacancyRateVisible ? '#8884d8' : '#e0e0e0',
            color: vacancyRateVisible ? 'white' : '#666',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold'
          }}
        >
          平均空室率 {vacancyRateVisible ? '✓' : '✗'}
        </button>
        
        <button
          onClick={() => setRentalRateVisible(!rentalRateVisible)}
          style={{
            padding: '8px 16px',
            backgroundColor: rentalRateVisible ? '#82ca9d' : '#e0e0e0',
            color: rentalRateVisible ? 'white' : '#666',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold'
          }}
        >
          平均賃料 {rentalRateVisible ? '✓' : '✗'}
        </button>
        
        <button
          onClick={() => setReitIndexVisible(!reitIndexVisible)}
          style={{
            padding: '8px 16px',
            backgroundColor: reitIndexVisible ? '#ff7300' : '#e0e0e0',
            color: reitIndexVisible ? 'white' : '#666',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold'
          }}
        >
          東証REIT指数 {reitIndexVisible ? '✓' : '✗'}
        </button>
        
        {(brushRange.startIndex !== undefined && brushRange.endIndex !== undefined) && (
          <button
            onClick={resetSelection}
            style={{
              padding: '8px 16px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
          >
            選択範囲をリセット
          </button>
        )}
      </div>
      <div style={{ width: '100%', height: '400px', marginTop: '1rem' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={filteredData}
            margin={{
              top: 5,
              right: 60,
              left: 20,
              bottom: 120, // Increased bottom margin for brush and legend
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
              wrapperStyle={{ paddingTop: '20px', paddingBottom: '10px' }}
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
                dot={false}
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
                dot={false}
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
                dot={false}
              />
            )}
            <Brush
              dataKey="month" 
              height={40}
              stroke="#8884d8"
              onChange={handleBrushChange}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OfficeChart;