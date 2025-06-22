import { OfficeData } from '../types/office';

interface OfficeTableProps {
  data: OfficeData[];
}

const OfficeTable: React.FC<OfficeTableProps> = ({ data }) => {
  return (
    <div className="mt-8">
      <table className="w-full border-collapse mt-4 border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border border-gray-300 text-left">
              月
            </th>
            <th className="p-3 border border-gray-300 text-right">
              平均空室率 (%)
            </th>
            <th className="p-3 border border-gray-300 text-right">
              平均賃料 (円/坪)
            </th>
            <th className="p-3 border border-gray-300 text-right">
              東証REIT指数
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="p-3 border border-gray-300">
                {item.month}
              </td>
              <td className="p-3 border border-gray-300 text-right">
                {item.vacancyRate.toFixed(2)}
              </td>
              <td className="p-3 border border-gray-300 text-right">
                {item.rentalRate.toLocaleString()}
              </td>
              <td className="p-3 border border-gray-300 text-right">
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