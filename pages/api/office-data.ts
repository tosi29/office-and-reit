import { NextApiRequest, NextApiResponse } from 'next';
import { OfficeApiResponse, OfficeData } from '../../types/office';

// Historical office data extracted from the provided table
// Data includes vacancy rates (%) and rental rates converted from yen/tsubo to yen/sqm
// Total of 79 records from 2018-10 to 2025-04
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
    "vacancyRate": 4,
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
    "rentalRate": 6115,
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
    "vacancyRate": 5,
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
    "vacancyRate": 6.1,
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
    "vacancyRate": 6.4,
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
  },
  {
    "month": "2023年04月",
    "vacancyRate": 6.11,
    "rentalRate": 6029,
    "reitIndex": 0,
    "date": "2023-04-01T00:00:00.000Z"
  },
  {
    "month": "2023年03月",
    "vacancyRate": 6.41,
    "rentalRate": 6058,
    "reitIndex": 0,
    "date": "2023-03-01T00:00:00.000Z"
  },
  {
    "month": "2023年02月",
    "vacancyRate": 6.15,
    "rentalRate": 6065,
    "reitIndex": 0,
    "date": "2023-02-01T00:00:00.000Z"
  },
  {
    "month": "2023年01月",
    "vacancyRate": 6.26,
    "rentalRate": 6068,
    "reitIndex": 0,
    "date": "2023-01-01T00:00:00.000Z"
  },
  {
    "month": "2022年12月",
    "vacancyRate": 6.47,
    "rentalRate": 6078,
    "reitIndex": 0,
    "date": "2022-12-01T00:00:00.000Z"
  },
  {
    "month": "2022年11月",
    "vacancyRate": 6.38,
    "rentalRate": 6085,
    "reitIndex": 0,
    "date": "2022-11-01T00:00:00.000Z"
  },
  {
    "month": "2022年10月",
    "vacancyRate": 6.44,
    "rentalRate": 6095,
    "reitIndex": 0,
    "date": "2022-10-01T00:00:00.000Z"
  },
  {
    "month": "2022年09月",
    "vacancyRate": 6.49,
    "rentalRate": 6108,
    "reitIndex": 0,
    "date": "2022-09-01T00:00:00.000Z"
  },
  {
    "month": "2022年08月",
    "vacancyRate": 6.49,
    "rentalRate": 6136,
    "reitIndex": 0,
    "date": "2022-08-01T00:00:00.000Z"
  },
  {
    "month": "2022年07月",
    "vacancyRate": 6.37,
    "rentalRate": 6140,
    "reitIndex": 0,
    "date": "2022-07-01T00:00:00.000Z"
  },
  {
    "month": "2022年06月",
    "vacancyRate": 6.39,
    "rentalRate": 6143,
    "reitIndex": 0,
    "date": "2022-06-01T00:00:00.000Z"
  },
  {
    "month": "2022年05月",
    "vacancyRate": 6.37,
    "rentalRate": 6157,
    "reitIndex": 0,
    "date": "2022-05-01T00:00:00.000Z"
  },
  {
    "month": "2022年04月",
    "vacancyRate": 6.38,
    "rentalRate": 6161,
    "reitIndex": 0,
    "date": "2022-04-01T00:00:00.000Z"
  },
  {
    "month": "2022年03月",
    "vacancyRate": 6.37,
    "rentalRate": 6172,
    "reitIndex": 0,
    "date": "2022-03-01T00:00:00.000Z"
  },
  {
    "month": "2022年02月",
    "vacancyRate": 6.41,
    "rentalRate": 6187,
    "reitIndex": 0,
    "date": "2022-02-01T00:00:00.000Z"
  },
  {
    "month": "2022年01月",
    "vacancyRate": 6.26,
    "rentalRate": 6215,
    "reitIndex": 0,
    "date": "2022-01-01T00:00:00.000Z"
  },
  {
    "month": "2021年12月",
    "vacancyRate": 6.33,
    "rentalRate": 6241,
    "reitIndex": 0,
    "date": "2021-12-01T00:00:00.000Z"
  },
  {
    "month": "2021年11月",
    "vacancyRate": 6.35,
    "rentalRate": 6268,
    "reitIndex": 0,
    "date": "2021-11-01T00:00:00.000Z"
  },
  {
    "month": "2021年10月",
    "vacancyRate": 6.47,
    "rentalRate": 6304,
    "reitIndex": 0,
    "date": "2021-10-01T00:00:00.000Z"
  },
  {
    "month": "2021年09月",
    "vacancyRate": 6.43,
    "rentalRate": 6320,
    "reitIndex": 0,
    "date": "2021-09-01T00:00:00.000Z"
  },
  {
    "month": "2021年08月",
    "vacancyRate": 6.31,
    "rentalRate": 6343,
    "reitIndex": 0,
    "date": "2021-08-01T00:00:00.000Z"
  },
  {
    "month": "2021年07月",
    "vacancyRate": 6.28,
    "rentalRate": 6377,
    "reitIndex": 0,
    "date": "2021-07-01T00:00:00.000Z"
  },
  {
    "month": "2021年06月",
    "vacancyRate": 6.19,
    "rentalRate": 6412,
    "reitIndex": 0,
    "date": "2021-06-01T00:00:00.000Z"
  },
  {
    "month": "2021年05月",
    "vacancyRate": 5.9,
    "rentalRate": 6439,
    "reitIndex": 0,
    "date": "2021-05-01T00:00:00.000Z"
  },
  {
    "month": "2021年04月",
    "vacancyRate": 5.65,
    "rentalRate": 6489,
    "reitIndex": 0,
    "date": "2021-04-01T00:00:00.000Z"
  },
  {
    "month": "2021年03月",
    "vacancyRate": 5.42,
    "rentalRate": 6528,
    "reitIndex": 0,
    "date": "2021-03-01T00:00:00.000Z"
  },
  {
    "month": "2021年02月",
    "vacancyRate": 5.24,
    "rentalRate": 6564,
    "reitIndex": 0,
    "date": "2021-02-01T00:00:00.000Z"
  },
  {
    "month": "2021年01月",
    "vacancyRate": 4.82,
    "rentalRate": 6620,
    "reitIndex": 0,
    "date": "2021-01-01T00:00:00.000Z"
  },
  {
    "month": "2020年12月",
    "vacancyRate": 4.49,
    "rentalRate": 6666,
    "reitIndex": 0,
    "date": "2020-12-01T00:00:00.000Z"
  },
  {
    "month": "2020年11月",
    "vacancyRate": 4.33,
    "rentalRate": 6734,
    "reitIndex": 0,
    "date": "2020-11-01T00:00:00.000Z"
  },
  {
    "month": "2020年10月",
    "vacancyRate": 3.93,
    "rentalRate": 6798,
    "reitIndex": 0,
    "date": "2020-10-01T00:00:00.000Z"
  },
  {
    "month": "2020年09月",
    "vacancyRate": 3.43,
    "rentalRate": 6889,
    "reitIndex": 0,
    "date": "2020-09-01T00:00:00.000Z"
  },
  {
    "month": "2020年08月",
    "vacancyRate": 3.07,
    "rentalRate": 6916,
    "reitIndex": 0,
    "date": "2020-08-01T00:00:00.000Z"
  },
  {
    "month": "2020年07月",
    "vacancyRate": 2.77,
    "rentalRate": 6974,
    "reitIndex": 0,
    "date": "2020-07-01T00:00:00.000Z"
  },
  {
    "month": "2020年06月",
    "vacancyRate": 1.97,
    "rentalRate": 6933,
    "reitIndex": 0,
    "date": "2020-06-01T00:00:00.000Z"
  },
  {
    "month": "2020年05月",
    "vacancyRate": 1.64,
    "rentalRate": 6920,
    "reitIndex": 0,
    "date": "2020-05-01T00:00:00.000Z"
  },
  {
    "month": "2020年04月",
    "vacancyRate": 1.56,
    "rentalRate": 6915,
    "reitIndex": 0,
    "date": "2020-04-01T00:00:00.000Z"
  },
  {
    "month": "2020年03月",
    "vacancyRate": 1.5,
    "rentalRate": 6847,
    "reitIndex": 0,
    "date": "2020-03-01T00:00:00.000Z"
  },
  {
    "month": "2020年02月",
    "vacancyRate": 1.49,
    "rentalRate": 6832,
    "reitIndex": 0,
    "date": "2020-02-01T00:00:00.000Z"
  },
  {
    "month": "2020年01月",
    "vacancyRate": 1.53,
    "rentalRate": 6802,
    "reitIndex": 0,
    "date": "2020-01-01T00:00:00.000Z"
  },
  {
    "month": "2019年12月",
    "vacancyRate": 1.55,
    "rentalRate": 6732,
    "reitIndex": 0,
    "date": "2019-12-01T00:00:00.000Z"
  },
  {
    "month": "2019年11月",
    "vacancyRate": 1.56,
    "rentalRate": 6687,
    "reitIndex": 0,
    "date": "2019-11-01T00:00:00.000Z"
  },
  {
    "month": "2019年10月",
    "vacancyRate": 1.63,
    "rentalRate": 6670,
    "reitIndex": 0,
    "date": "2019-10-01T00:00:00.000Z"
  },
  {
    "month": "2019年09月",
    "vacancyRate": 1.64,
    "rentalRate": 6623,
    "reitIndex": 0,
    "date": "2019-09-01T00:00:00.000Z"
  },
  {
    "month": "2019年08月",
    "vacancyRate": 1.71,
    "rentalRate": 6601,
    "reitIndex": 0,
    "date": "2019-08-01T00:00:00.000Z"
  },
  {
    "month": "2019年07月",
    "vacancyRate": 1.71,
    "rentalRate": 6565,
    "reitIndex": 0,
    "date": "2019-07-01T00:00:00.000Z"
  },
  {
    "month": "2019年06月",
    "vacancyRate": 1.72,
    "rentalRate": 6521,
    "reitIndex": 0,
    "date": "2019-06-01T00:00:00.000Z"
  },
  {
    "month": "2019年05月",
    "vacancyRate": 1.64,
    "rentalRate": 6483,
    "reitIndex": 0,
    "date": "2019-05-01T00:00:00.000Z"
  },
  {
    "month": "2019年04月",
    "vacancyRate": 1.7,
    "rentalRate": 6448,
    "reitIndex": 0,
    "date": "2019-04-01T00:00:00.000Z"
  },
  {
    "month": "2019年03月",
    "vacancyRate": 1.78,
    "rentalRate": 6404,
    "reitIndex": 0,
    "date": "2019-03-01T00:00:00.000Z"
  },
  {
    "month": "2019年02月",
    "vacancyRate": 1.78,
    "rentalRate": 6394,
    "reitIndex": 0,
    "date": "2019-02-01T00:00:00.000Z"
  },
  {
    "month": "2019年01月",
    "vacancyRate": 1.82,
    "rentalRate": 6367,
    "reitIndex": 0,
    "date": "2019-01-01T00:00:00.000Z"
  },
  {
    "month": "2018年12月",
    "vacancyRate": 1.88,
    "rentalRate": 6329,
    "reitIndex": 0,
    "date": "2018-12-01T00:00:00.000Z"
  },
  {
    "month": "2018年11月",
    "vacancyRate": 1.98,
    "rentalRate": 6286,
    "reitIndex": 0,
    "date": "2018-11-01T00:00:00.000Z"
  },
  {
    "month": "2018年10月",
    "vacancyRate": 2.2,
    "rentalRate": 6242,
    "reitIndex": 0,
    "date": "2018-10-01T00:00:00.000Z"
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