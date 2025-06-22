import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { OfficeData, OfficeApiResponse } from '../types/office';
import OfficeChart from '../components/OfficeChart';
import OfficeTable from '../components/OfficeTable';

const Home: NextPage = () => {
  const [officeData, setOfficeData] = useState<OfficeData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOfficeData = async () => {
      try {
        const response = await fetch('/api/office-data');
        const result: OfficeApiResponse = await response.json();
        
        if (result.success) {
          setOfficeData(result.data);
        } else {
          setError('データの取得に失敗しました');
        }
      } catch (err) {
        setError('データの取得中にエラーが発生しました');
        console.error('Error fetching office data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOfficeData();
  }, []);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Office and REIT</h1>
      
      {loading && <p className="text-gray-600">データを読み込み中...</p>}
      
      {error && (
        <div className="text-red-600 p-4 bg-red-50 border border-red-200 rounded">
          エラー: {error}
        </div>
      )}
      
      {!loading && !error && officeData.length > 0 && (
        <>
          <OfficeChart data={officeData} />
          <OfficeTable data={officeData} />
        </>
      )}
      
      {!loading && !error && officeData.length === 0 && (
        <p className="text-gray-600">データがありません</p>
      )}
    </div>
  );
};

export default Home;