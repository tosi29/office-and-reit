import { NextApiRequest, NextApiResponse } from 'next';
import { OfficeApiResponse, OfficeData } from '../../types/office';

// Generate stub data for the past 12 months
const generateStubData = (): OfficeData[] => {
  const data: OfficeData[] = [];
  const currentDate = new Date();
  
  for (let i = 11; i >= 0; i--) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
    const month = date.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit' });
    
    // Generate realistic stub data with some correlation
    // Higher vacancy rates tend to correlate with lower rental rates
    const vacancyRate = Math.round((3 + Math.random() * 4) * 100) / 100; // 3-7%
    const baseRentalRate = 25000; // base rental rate in yen per sqm
    const rentalRate = Math.round((baseRentalRate - (vacancyRate - 5) * 1000 + (Math.random() - 0.5) * 2000));
    
    // Generate Tokyo REIT index data (typically ranges from 1500-2500)
    const baseReitIndex = 2000;
    const reitIndex = Math.round(baseReitIndex + (Math.random() - 0.5) * 600 + Math.sin(i * 0.5) * 200);
    
    data.push({
      month,
      vacancyRate,
      rentalRate,
      reitIndex,
      date: date.toISOString(),
    });
  }
  
  return data;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<OfficeApiResponse>) {
  if (req.method !== 'GET') {
    return res.status(405).json({ data: [], success: false });
  }

  try {
    const data = generateStubData();
    res.status(200).json({ data, success: true });
  } catch (error) {
    console.error('Error generating office data:', error);
    res.status(500).json({ data: [], success: false });
  }
}