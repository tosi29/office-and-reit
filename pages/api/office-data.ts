import { NextApiRequest, NextApiResponse } from 'next';
import { OfficeApiResponse, OfficeData } from '../../types/office';

// Historical office data extracted from issue #8 and REIT index from user comments  
// Extended dataset from 2018-10 to 2025-04 with proper REIT index data
// Data sorted chronologically (oldest first) for proper chart display
const getHistoricalData = (): OfficeData[] => {
  const historicalData: OfficeData[] = [
  // Starting from oldest data first (2018-10) for proper charting
  {
    "month": "2018年10月",
    "vacancyRate": 2.20,
    "rentalRate": 20597,
    "reitIndex": 1745.97,
    "date": "2018-10-01T00:00:00.000Z"
  },
  {
    "month": "2018年11月",
    "vacancyRate": 1.98,
    "rentalRate": 20743,
    "reitIndex": 1816.96,
    "date": "2018-11-01T00:00:00.000Z"
  },
  {
    "month": "2018年12月",
    "vacancyRate": 1.88,
    "rentalRate": 20887,
    "reitIndex": 1774.06,
    "date": "2018-12-01T00:00:00.000Z"
  },
  {
    "month": "2019年01月",
    "vacancyRate": 1.82,
    "rentalRate": 21010,
    "reitIndex": 1850.85,
    "date": "2019-01-01T00:00:00.000Z"
  },
  {
    "month": "2019年02月",
    "vacancyRate": 1.78,
    "rentalRate": 21101,
    "reitIndex": 1850.03,
    "date": "2019-02-01T00:00:00.000Z"
  },
  {
    "month": "2019年03月",
    "vacancyRate": 1.78,
    "rentalRate": 21134,
    "reitIndex": 1907.36,
    "date": "2019-03-01T00:00:00.000Z"
  },
  {
    "month": "2019年04月",
    "vacancyRate": 1.70,
    "rentalRate": 21279,
    "reitIndex": 1889.13,
    "date": "2019-04-01T00:00:00.000Z"
  },
  {
    "month": "2019年05月",
    "vacancyRate": 1.64,
    "rentalRate": 21396,
    "reitIndex": 1916.92,
    "date": "2019-05-01T00:00:00.000Z"
  },
  {
    "month": "2019年06月",
    "vacancyRate": 1.72,
    "rentalRate": 21518,
    "reitIndex": 1938.82,
    "date": "2019-06-01T00:00:00.000Z"
  },
  {
    "month": "2019年07月",
    "vacancyRate": 1.71,
    "rentalRate": 21665,
    "reitIndex": 2017.48,
    "date": "2019-07-01T00:00:00.000Z"
  },
  {
    "month": "2019年08月",
    "vacancyRate": 1.71,
    "rentalRate": 21784,
    "reitIndex": 2082.64,
    "date": "2019-08-01T00:00:00.000Z"
  },
  {
    "month": "2019年09月",
    "vacancyRate": 1.64,
    "rentalRate": 21855,
    "reitIndex": 2177.18,
    "date": "2019-09-01T00:00:00.000Z"
  },
  {
    "month": "2019年10月",
    "vacancyRate": 1.63,
    "rentalRate": 22010,
    "reitIndex": 2245.01,
    "date": "2019-10-01T00:00:00.000Z"
  },
  {
    "month": "2019年11月",
    "vacancyRate": 1.56,
    "rentalRate": 22066,
    "reitIndex": 2219.74,
    "date": "2019-11-01T00:00:00.000Z"
  },
  {
    "month": "2019年12月",
    "vacancyRate": 1.55,
    "rentalRate": 22206,
    "reitIndex": 2145.49,
    "date": "2019-12-01T00:00:00.000Z"
  },
  {
    "month": "2020年01月",
    "vacancyRate": 1.53,
    "rentalRate": 22448,
    "reitIndex": 2215.67,
    "date": "2020-01-01T00:00:00.000Z"
  },
  {
    "month": "2020年02月",
    "vacancyRate": 1.49,
    "rentalRate": 22548,
    "reitIndex": 2017.50,
    "date": "2020-02-01T00:00:00.000Z"
  },
  {
    "month": "2020年03月",
    "vacancyRate": 1.50,
    "rentalRate": 22594,
    "reitIndex": 1595.19,
    "date": "2020-03-01T00:00:00.000Z"
  },
  {
    "month": "2020年04月",
    "vacancyRate": 1.56,
    "rentalRate": 22820,
    "reitIndex": 1576.43,
    "date": "2020-04-01T00:00:00.000Z"
  },
  {
    "month": "2020年05月",
    "vacancyRate": 1.64,
    "rentalRate": 22836,
    "reitIndex": 1701.03,
    "date": "2020-05-01T00:00:00.000Z"
  },
  {
    "month": "2020年06月",
    "vacancyRate": 1.97,
    "rentalRate": 22880,
    "reitIndex": 1666.83,
    "date": "2020-06-01T00:00:00.000Z"
  },
  {
    "month": "2020年07月",
    "vacancyRate": 2.77,
    "rentalRate": 23014,
    "reitIndex": 1664.48,
    "date": "2020-07-01T00:00:00.000Z"
  },
  {
    "month": "2020年08月",
    "vacancyRate": 3.07,
    "rentalRate": 22822,
    "reitIndex": 1747.53,
    "date": "2020-08-01T00:00:00.000Z"
  },
  {
    "month": "2020年09月",
    "vacancyRate": 3.43,
    "rentalRate": 22733,
    "reitIndex": 1726.66,
    "date": "2020-09-01T00:00:00.000Z"
  },
  {
    "month": "2020年10月",
    "vacancyRate": 3.93,
    "rentalRate": 22434,
    "reitIndex": 1635.35,
    "date": "2020-10-01T00:00:00.000Z"
  },
  {
    "month": "2020年11月",
    "vacancyRate": 4.33,
    "rentalRate": 22223,
    "reitIndex": 1687.98,
    "date": "2020-11-01T00:00:00.000Z"
  },
  {
    "month": "2020年12月",
    "vacancyRate": 4.49,
    "rentalRate": 21999,
    "reitIndex": 1783.90,
    "date": "2020-12-01T00:00:00.000Z"
  },
  {
    "month": "2021年01月",
    "vacancyRate": 4.82,
    "rentalRate": 21846,
    "reitIndex": 1846.41,
    "date": "2021-01-01T00:00:00.000Z"
  },
  {
    "month": "2021年02月",
    "vacancyRate": 5.24,
    "rentalRate": 21662,
    "reitIndex": 1929.15,
    "date": "2021-02-01T00:00:00.000Z"
  },
  {
    "month": "2021年03月",
    "vacancyRate": 5.42,
    "rentalRate": 21541,
    "reitIndex": 2013.08,
    "date": "2021-03-01T00:00:00.000Z"
  },
  {
    "month": "2021年04月",
    "vacancyRate": 5.65,
    "rentalRate": 21415,
    "reitIndex": 2063.80,
    "date": "2021-04-01T00:00:00.000Z"
  },
  {
    "month": "2021年05月",
    "vacancyRate": 5.90,
    "rentalRate": 21249,
    "reitIndex": 2073.55,
    "date": "2021-05-01T00:00:00.000Z"
  },
  {
    "month": "2021年06月",
    "vacancyRate": 6.19,
    "rentalRate": 21160,
    "reitIndex": 2150.73,
    "date": "2021-06-01T00:00:00.000Z"
  },
  {
    "month": "2021年07月",
    "vacancyRate": 6.28,
    "rentalRate": 21045,
    "reitIndex": 2160.33,
    "date": "2021-07-01T00:00:00.000Z"
  },
  {
    "month": "2021年08月",
    "vacancyRate": 6.31,
    "rentalRate": 20932,
    "reitIndex": 2142.91,
    "date": "2021-08-01T00:00:00.000Z"
  },
  {
    "month": "2021年09月",
    "vacancyRate": 6.43,
    "rentalRate": 20858,
    "reitIndex": 2071.77,
    "date": "2021-09-01T00:00:00.000Z"
  },
  {
    "month": "2021年10月",
    "vacancyRate": 6.47,
    "rentalRate": 20804,
    "reitIndex": 2092.94,
    "date": "2021-10-01T00:00:00.000Z"
  },
  {
    "month": "2021年11月",
    "vacancyRate": 6.35,
    "rentalRate": 20686,
    "reitIndex": 2002.58,
    "date": "2021-11-01T00:00:00.000Z"
  },
  {
    "month": "2021年12月",
    "vacancyRate": 6.33,
    "rentalRate": 20596,
    "reitIndex": 2066.33,
    "date": "2021-12-01T00:00:00.000Z"
  },
  {
    "month": "2022年01月",
    "vacancyRate": 6.26,
    "rentalRate": 20508,
    "reitIndex": 1946.81,
    "date": "2022-01-01T00:00:00.000Z"
  },
  {
    "month": "2022年02月",
    "vacancyRate": 6.41,
    "rentalRate": 20418,
    "reitIndex": 1877.38,
    "date": "2022-02-01T00:00:00.000Z"
  },
  {
    "month": "2022年03月",
    "vacancyRate": 6.37,
    "rentalRate": 20366,
    "reitIndex": 2003.04,
    "date": "2022-03-01T00:00:00.000Z"
  },
  {
    "month": "2022年04月",
    "vacancyRate": 6.38,
    "rentalRate": 20328,
    "reitIndex": 1975.75,
    "date": "2022-04-01T00:00:00.000Z"
  },
  {
    "month": "2022年05月",
    "vacancyRate": 6.37,
    "rentalRate": 20319,
    "reitIndex": 2006.03,
    "date": "2022-05-01T00:00:00.000Z"
  },
  {
    "month": "2022年06月",
    "vacancyRate": 6.39,
    "rentalRate": 20273,
    "reitIndex": 1966.90,
    "date": "2022-06-01T00:00:00.000Z"
  },
  {
    "month": "2022年07月",
    "vacancyRate": 6.37,
    "rentalRate": 20262,
    "reitIndex": 2021.99,
    "date": "2022-07-01T00:00:00.000Z"
  },
  {
    "month": "2022年08月",
    "vacancyRate": 6.49,
    "rentalRate": 20250,
    "reitIndex": 2033.71,
    "date": "2022-08-01T00:00:00.000Z"
  },
  {
    "month": "2022年09月",
    "vacancyRate": 6.49,
    "rentalRate": 20156,
    "reitIndex": 1945.25,
    "date": "2022-09-01T00:00:00.000Z"
  },
  {
    "month": "2022年10月",
    "vacancyRate": 6.44,
    "rentalRate": 20114,
    "reitIndex": 1974.70,
    "date": "2022-10-01T00:00:00.000Z"
  },
  {
    "month": "2022年11月",
    "vacancyRate": 6.38,
    "rentalRate": 20081,
    "reitIndex": 1970.04,
    "date": "2022-11-01T00:00:00.000Z"
  },
  {
    "month": "2022年12月",
    "vacancyRate": 6.47,
    "rentalRate": 20059,
    "reitIndex": 1894.06,
    "date": "2022-12-01T00:00:00.000Z"
  },
  {
    "month": "2023年01月",
    "vacancyRate": 6.26,
    "rentalRate": 20026,
    "reitIndex": 1826.84,
    "date": "2023-01-01T00:00:00.000Z"
  },
  {
    "month": "2023年02月",
    "vacancyRate": 6.15,
    "rentalRate": 20014,
    "reitIndex": 1843.21,
    "date": "2023-02-01T00:00:00.000Z"
  },
  {
    "month": "2023年03月",
    "vacancyRate": 6.41,
    "rentalRate": 19991,
    "reitIndex": 1785.77,
    "date": "2023-03-01T00:00:00.000Z"
  },
  {
    "month": "2023年04月",
    "vacancyRate": 6.11,
    "rentalRate": 19896,
    "reitIndex": 1873.45,
    "date": "2023-04-01T00:00:00.000Z"
  },
  {
    "month": "2023年05月",
    "vacancyRate": 6.16,
    "rentalRate": 19877,
    "reitIndex": 1880.45,
    "date": "2023-05-01T00:00:00.000Z"
  },
  {
    "month": "2023年06月",
    "vacancyRate": 6.48,
    "rentalRate": 19838,
    "reitIndex": 1862.30,
    "date": "2023-06-01T00:00:00.000Z"
  },
  {
    "month": "2023年07月",
    "vacancyRate": 6.46,
    "rentalRate": 19819,
    "reitIndex": 1877.19,
    "date": "2023-07-01T00:00:00.000Z"
  },
  {
    "month": "2023年08月",
    "vacancyRate": 6.40,
    "rentalRate": 19756,
    "reitIndex": 1892.25,
    "date": "2023-08-01T00:00:00.000Z"
  },
  {
    "month": "2023年09月",
    "vacancyRate": 6.15,
    "rentalRate": 19750,
    "reitIndex": 1859.59,
    "date": "2023-09-01T00:00:00.000Z"
  },
  {
    "month": "2023年10月",
    "vacancyRate": 6.10,
    "rentalRate": 19741,
    "reitIndex": 1816.11,
    "date": "2023-10-01T00:00:00.000Z"
  },
  {
    "month": "2023年11月",
    "vacancyRate": 6.03,
    "rentalRate": 19726,
    "reitIndex": 1845.45,
    "date": "2023-11-01T00:00:00.000Z"
  },
  {
    "month": "2023年12月",
    "vacancyRate": 6.03,
    "rentalRate": 19748,
    "reitIndex": 1806.96,
    "date": "2023-12-01T00:00:00.000Z"
  },
  {
    "month": "2024年01月",
    "vacancyRate": 5.83,
    "rentalRate": 19730,
    "reitIndex": 1798.71,
    "date": "2024-01-01T00:00:00.000Z"
  },
  {
    "month": "2024年02月",
    "vacancyRate": 5.86,
    "rentalRate": 19776,
    "reitIndex": 1698.87,
    "date": "2024-02-01T00:00:00.000Z"
  },
  {
    "month": "2024年03月",
    "vacancyRate": 5.47,
    "rentalRate": 19820,
    "reitIndex": 1794.97,
    "date": "2024-03-01T00:00:00.000Z"
  },
  {
    "month": "2024年04月",
    "vacancyRate": 5.38,
    "rentalRate": 19825,
    "reitIndex": 1808.73,
    "date": "2024-04-01T00:00:00.000Z"
  },
  {
    "month": "2024年05月",
    "vacancyRate": 5.48,
    "rentalRate": 19944,
    "reitIndex": 1741.01,
    "date": "2024-05-01T00:00:00.000Z"
  },
  {
    "month": "2024年06月",
    "vacancyRate": 5.15,
    "rentalRate": 19979,
    "reitIndex": 1724.02,
    "date": "2024-06-01T00:00:00.000Z"
  },
  {
    "month": "2024年07月",
    "vacancyRate": 5.00,
    "rentalRate": 20034,
    "reitIndex": 1722.58,
    "date": "2024-07-01T00:00:00.000Z"
  },
  {
    "month": "2024年08月",
    "vacancyRate": 4.76,
    "rentalRate": 20103,
    "reitIndex": 1758.05,
    "date": "2024-08-01T00:00:00.000Z"
  },
  {
    "month": "2024年09月",
    "vacancyRate": 4.61,
    "rentalRate": 20126,
    "reitIndex": 1726.24,
    "date": "2024-09-01T00:00:00.000Z"
  },
  {
    "month": "2024年10月",
    "vacancyRate": 4.48,
    "rentalRate": 20178,
    "reitIndex": 1682.36,
    "date": "2024-10-01T00:00:00.000Z"
  },
  {
    "month": "2024年11月",
    "vacancyRate": 4.16,
    "rentalRate": 20243,
    "reitIndex": 1662.14,
    "date": "2024-11-01T00:00:00.000Z"
  },
  {
    "month": "2024年12月",
    "vacancyRate": 4.00,
    "rentalRate": 20296,
    "reitIndex": 1652.94,
    "date": "2024-12-01T00:00:00.000Z"
  },
  {
    "month": "2025年01月",
    "vacancyRate": 3.83,
    "rentalRate": 20368,
    "reitIndex": 1704.84,
    "date": "2025-01-01T00:00:00.000Z"
  },
  {
    "month": "2025年02月",
    "vacancyRate": 3.94,
    "rentalRate": 20481,
    "reitIndex": 1700.49,
    "date": "2025-02-01T00:00:00.000Z"
  },
  {
    "month": "2025年03月",
    "vacancyRate": 3.86,
    "rentalRate": 20641,
    "reitIndex": 1691.63,
    "date": "2025-03-01T00:00:00.000Z"
  },
  {
    "month": "2025年04月",
    "vacancyRate": 3.73,
    "rentalRate": 20755,
    "reitIndex": 1712.43,
    "date": "2025-04-01T00:00:00.000Z"
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