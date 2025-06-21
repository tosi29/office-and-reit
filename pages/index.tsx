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
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Office and REIT</h1>
      <p>オフィスの平均空室率と平均賃料の関係を表示します</p>
      
      {loading && <p>データを読み込み中...</p>}
      
      {error && (
        <div style={{ color: 'red', padding: '1rem', backgroundColor: '#ffe6e6', border: '1px solid #ff0000', borderRadius: '4px' }}>
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
        <p>データがありません</p>
      )}
    </div>
  );
};

export default Home;