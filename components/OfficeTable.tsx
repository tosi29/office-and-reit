import { OfficeData } from '../types/office';

interface OfficeTableProps {
  data: OfficeData[];
}

const OfficeTable: React.FC<OfficeTableProps> = ({ data }) => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>オフィス平均空室率・平均賃料・東証REIT指数データテーブル</h2>
      <table style={{ 
        width: '100%', 
        borderCollapse: 'collapse',
        marginTop: '1rem',
        border: '1px solid #ddd'
      }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5' }}>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>
              月
            </th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'right' }}>
              平均空室率 (%)
            </th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'right' }}>
              平均賃料 (円/坪)
            </th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'right' }}>
              東証REIT指数
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f9f9f9' }}>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                {item.month}
              </td>
              <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'right' }}>
                {item.vacancyRate.toFixed(2)}
              </td>
              <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'right' }}>
                {item.rentalRate.toLocaleString()}
              </td>
              <td style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'right' }}>
                {item.reitIndex.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OfficeTable;