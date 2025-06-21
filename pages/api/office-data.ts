import { NextApiRequest, NextApiResponse } from 'next';
import { OfficeApiResponse, OfficeData } from '../../types/office';

// Historical office data extracted from the provided table
// Data includes vacancy rates (%) and rental rates converted from yen/tsubo to yen/sqm
const getHistoricalData = (): OfficeData[] => {
  const historicalData: OfficeData[] = [
    {
      "month": "2025年04月",
      "vacancyRate": 3.73,
      "rentalRate": 6289,
      "reitIndex": 0,
      "date": "2025-04-01T00:00:00.000Z"
    },
    {
      "month": "2025年03月",
      "vacancyRate": 3.86,
      "rentalRate": 6255,
      "reitIndex": 0,
      "date": "2025-03-01T00:00:00.000Z"
    },
    {
      "month": "2025年02月",
      "vacancyRate": 3.94,
      "rentalRate": 6206,
      "reitIndex": 0,
      "date": "2025-02-01T00:00:00.000Z"
    },
    {
      "month": "2025年01月",
      "vacancyRate": 3.83,
      "rentalRate": 6172,
      "reitIndex": 0,
      "date": "2025-01-01T00:00:00.000Z"
    },
    {
      "month": "2024年12月",
      "vacancyRate": 4.00,
      "rentalRate": 6150,
      "reitIndex": 0,
      "date": "2024-12-01T00:00:00.000Z"
    },
    {
      "month": "2024年11月",
      "vacancyRate": 4.16,
      "rentalRate": 6134,
      "reitIndex": 0,
      "date": "2024-11-01T00:00:00.000Z"
    },
    {
      "month": "2024年10月",
      "vacancyRate": 4.48,
      "rentalRate": 6114,
      "reitIndex": 0,
      "date": "2024-10-01T00:00:00.000Z"
    },
    {
      "month": "2024年09月",
      "vacancyRate": 4.61,
      "rentalRate": 6099,
      "reitIndex": 0,
      "date": "2024-09-01T00:00:00.000Z"
    },
    {
      "month": "2024年08月",
      "vacancyRate": 4.76,
      "rentalRate": 6092,
      "reitIndex": 0,
      "date": "2024-08-01T00:00:00.000Z"
    },
    {
      "month": "2024年07月",
      "vacancyRate": 5.00,
      "rentalRate": 6071,
      "reitIndex": 0,
      "date": "2024-07-01T00:00:00.000Z"
    },
    {
      "month": "2024年06月",
      "vacancyRate": 5.15,
      "rentalRate": 6054,
      "reitIndex": 0,
      "date": "2024-06-01T00:00:00.000Z"
    },
    {
      "month": "2024年05月",
      "vacancyRate": 5.48,
      "rentalRate": 6043,
      "reitIndex": 0,
      "date": "2024-05-01T00:00:00.000Z"
    },
    {
      "month": "2024年04月",
      "vacancyRate": 5.38,
      "rentalRate": 6008,
      "reitIndex": 0,
      "date": "2024-04-01T00:00:00.000Z"
    },
    {
      "month": "2024年03月",
      "vacancyRate": 5.47,
      "rentalRate": 6006,
      "reitIndex": 0,
      "date": "2024-03-01T00:00:00.000Z"
    },
    {
      "month": "2024年02月",
      "vacancyRate": 5.86,
      "rentalRate": 5993,
      "reitIndex": 0,
      "date": "2024-02-01T00:00:00.000Z"
    },
    {
      "month": "2024年01月",
      "vacancyRate": 5.83,
      "rentalRate": 5979,
      "reitIndex": 0,
      "date": "2024-01-01T00:00:00.000Z"
    },
    {
      "month": "2023年12月",
      "vacancyRate": 6.03,
      "rentalRate": 5984,
      "reitIndex": 0,
      "date": "2023-12-01T00:00:00.000Z"
    },
    {
      "month": "2023年11月",
      "vacancyRate": 6.03,
      "rentalRate": 5977,
      "reitIndex": 0,
      "date": "2023-11-01T00:00:00.000Z"
    },
    {
      "month": "2023年10月",
      "vacancyRate": 6.10,
      "rentalRate": 5982,
      "reitIndex": 0,
      "date": "2023-10-01T00:00:00.000Z"
    },
    {
      "month": "2023年09月",
      "vacancyRate": 6.15,
      "rentalRate": 5985,
      "reitIndex": 0,
      "date": "2023-09-01T00:00:00.000Z"
    },
    {
      "month": "2023年08月",
      "vacancyRate": 6.40,
      "rentalRate": 5987,
      "reitIndex": 0,
      "date": "2023-08-01T00:00:00.000Z"
    },
    {
      "month": "2023年07月",
      "vacancyRate": 6.46,
      "rentalRate": 6006,
      "reitIndex": 0,
      "date": "2023-07-01T00:00:00.000Z"
    },
    {
      "month": "2023年06月",
      "vacancyRate": 6.48,
      "rentalRate": 6012,
      "reitIndex": 0,
      "date": "2023-06-01T00:00:00.000Z"
    },
    {
      "month": "2023年05月",
      "vacancyRate": 6.16,
      "rentalRate": 6023,
      "reitIndex": 0,
      "date": "2023-05-01T00:00:00.000Z"
    }
  ];

  return historicalData;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<OfficeApiResponse>) {
  if (req.method !== 'GET') {
    return res.status(405).json({ data: [], success: false });
  }

  try {
    const data = getHistoricalData();
    res.status(200).json({ data, success: true });
  } catch (error) {
    console.error('Error getting historical office data:', error);
    res.status(500).json({ data: [], success: false });
  }
}