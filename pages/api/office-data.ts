import { NextApiRequest, NextApiResponse } from 'next';
import { OfficeApiResponse, OfficeData } from '../../types/office';

// Historical office data extracted from issue #8 with complete dataset
// Full dataset from 2001-12 to 2025-04 with proper REIT index data
// Data sorted chronologically (oldest first) for proper chart display
const getHistoricalData = (): OfficeData[] => {
  const historicalData: OfficeData[] = [
    // Starting from oldest data first (2001-12) for proper charting
    {
      "month": "2001年12月",
      "vacancyRate": 4.03,
      "rentalRate": 19998,
      "reitIndex": 0, // REIT index data starts from 2003-04
      "date": "2001-12-01T00:00:00.000Z"
    },
    {
      "month": "2002年01月",
      "vacancyRate": 4.24,
      "rentalRate": 20088,
      "reitIndex": 0,
      "date": "2002-01-01T00:00:00.000Z"
    },
    {
      "month": "2002年02月",
      "vacancyRate": 4.79,
      "rentalRate": 19926,
      "reitIndex": 0,
      "date": "2002-02-01T00:00:00.000Z"
    },
    {
      "month": "2002年03月",
      "vacancyRate": 5.00,
      "rentalRate": 19837,
      "reitIndex": 0,
      "date": "2002-03-01T00:00:00.000Z"
    },
    {
      "month": "2002年04月",
      "vacancyRate": 5.25,
      "rentalRate": 19830,
      "reitIndex": 0,
      "date": "2002-04-01T00:00:00.000Z"
    },
    {
      "month": "2002年05月",
      "vacancyRate": 5.41,
      "rentalRate": 19821,
      "reitIndex": 0,
      "date": "2002-05-01T00:00:00.000Z"
    },
    {
      "month": "2002年06月",
      "vacancyRate": 5.92,
      "rentalRate": 19701,
      "reitIndex": 0,
      "date": "2002-06-01T00:00:00.000Z"
    },
    {
      "month": "2002年07月",
      "vacancyRate": 6.06,
      "rentalRate": 19692,
      "reitIndex": 0,
      "date": "2002-07-01T00:00:00.000Z"
    },
    {
      "month": "2002年08月",
      "vacancyRate": 6.06,
      "rentalRate": 19554,
      "reitIndex": 0,
      "date": "2002-08-01T00:00:00.000Z"
    },
    {
      "month": "2002年09月",
      "vacancyRate": 6.36,
      "rentalRate": 19560,
      "reitIndex": 0,
      "date": "2002-09-01T00:00:00.000Z"
    },
    {
      "month": "2002年10月",
      "vacancyRate": 6.51,
      "rentalRate": 19451,
      "reitIndex": 0,
      "date": "2002-10-01T00:00:00.000Z"
    },
    {
      "month": "2002年11月",
      "vacancyRate": 7.22,
      "rentalRate": 19320,
      "reitIndex": 0,
      "date": "2002-11-01T00:00:00.000Z"
    },
    {
      "month": "2002年12月",
      "vacancyRate": 7.36,
      "rentalRate": 19310,
      "reitIndex": 0,
      "date": "2002-12-01T00:00:00.000Z"
    },
    {
      "month": "2003年01月",
      "vacancyRate": 7.75,
      "rentalRate": 19375,
      "reitIndex": 0,
      "date": "2003-01-01T00:00:00.000Z"
    },
    {
      "month": "2003年02月",
      "vacancyRate": 7.99,
      "rentalRate": 19303,
      "reitIndex": 0,
      "date": "2003-02-01T00:00:00.000Z"
    },
    {
      "month": "2003年03月",
      "vacancyRate": 8.18,
      "rentalRate": 19175,
      "reitIndex": 0,
      "date": "2003-03-01T00:00:00.000Z"
    },
    {
      "month": "2003年04月",
      "vacancyRate": 8.40,
      "rentalRate": 18940,
      "reitIndex": 1079.29,
      "date": "2003-04-01T00:00:00.000Z"
    },
    {
      "month": "2003年05月",
      "vacancyRate": 8.50,
      "rentalRate": 18754,
      "reitIndex": 1110.39,
      "date": "2003-05-01T00:00:00.000Z"
    },
    {
      "month": "2003年06月",
      "vacancyRate": 8.57,
      "rentalRate": 18684,
      "reitIndex": 1100.27,
      "date": "2003-06-01T00:00:00.000Z"
    },
    {
      "month": "2003年07月",
      "vacancyRate": 8.54,
      "rentalRate": 18498,
      "reitIndex": 1112.69,
      "date": "2003-07-01T00:00:00.000Z"
    },
    {
      "month": "2003年08月",
      "vacancyRate": 8.57,
      "rentalRate": 18424,
      "reitIndex": 1087.92,
      "date": "2003-08-01T00:00:00.000Z"
    },
    {
      "month": "2003年09月",
      "vacancyRate": 8.44,
      "rentalRate": 18236,
      "reitIndex": 1108.99,
      "date": "2003-09-01T00:00:00.000Z"
    },
    {
      "month": "2003年10月",
      "vacancyRate": 8.43,
      "rentalRate": 18091,
      "reitIndex": 1122.98,
      "date": "2003-10-01T00:00:00.000Z"
    },
    {
      "month": "2003年11月",
      "vacancyRate": 8.37,
      "rentalRate": 17987,
      "reitIndex": 1141.52,
      "date": "2003-11-01T00:00:00.000Z"
    },
    {
      "month": "2003年12月",
      "vacancyRate": 8.12,
      "rentalRate": 17954,
      "reitIndex": 1166.42,
      "date": "2003-12-01T00:00:00.000Z"
    },
    {
      "month": "2004年01月",
      "vacancyRate": 8.01,
      "rentalRate": 17839,
      "reitIndex": 1204.38,
      "date": "2004-01-01T00:00:00.000Z"
    },
    {
      "month": "2004年02月",
      "vacancyRate": 8.01,
      "rentalRate": 17823,
      "reitIndex": 1212.88,
      "date": "2004-02-01T00:00:00.000Z"
    },
    {
      "month": "2004年03月",
      "vacancyRate": 7.98,
      "rentalRate": 17758,
      "reitIndex": 1381.70,
      "date": "2004-03-01T00:00:00.000Z"
    },
    {
      "month": "2004年04月",
      "vacancyRate": 7.49,
      "rentalRate": 17719,
      "reitIndex": 1326.98,
      "date": "2004-04-01T00:00:00.000Z"
    },
    {
      "month": "2004年05月",
      "vacancyRate": 7.29,
      "rentalRate": 17669,
      "reitIndex": 1315.98,
      "date": "2004-05-01T00:00:00.000Z"
    },
    {
      "month": "2004年06月",
      "vacancyRate": 7.22,
      "rentalRate": 17589,
      "reitIndex": 1320.35,
      "date": "2004-06-01T00:00:00.000Z"
    },
    {
      "month": "2004年07月",
      "vacancyRate": 7.42,
      "rentalRate": 17623,
      "reitIndex": 1340.47,
      "date": "2004-07-01T00:00:00.000Z"
    },
    {
      "month": "2004年08月",
      "vacancyRate": 7.40,
      "rentalRate": 17577,
      "reitIndex": 1398.29,
      "date": "2004-08-01T00:00:00.000Z"
    },
    {
      "month": "2004年09月",
      "vacancyRate": 7.15,
      "rentalRate": 17609,
      "reitIndex": 1465.84,
      "date": "2004-09-01T00:00:00.000Z"
    },
    {
      "month": "2004年10月",
      "vacancyRate": 6.68,
      "rentalRate": 17526,
      "reitIndex": 1491.09,
      "date": "2004-10-01T00:00:00.000Z"
    },
    {
      "month": "2004年11月",
      "vacancyRate": 6.44,
      "rentalRate": 17553,
      "reitIndex": 1478.19,
      "date": "2004-11-01T00:00:00.000Z"
    },
    {
      "month": "2004年12月",
      "vacancyRate": 6.10,
      "rentalRate": 17577,
      "reitIndex": 1479.54,
      "date": "2004-12-01T00:00:00.000Z"
    },
    {
      "month": "2005年01月",
      "vacancyRate": 6.01,
      "rentalRate": 17626,
      "reitIndex": 1480.32,
      "date": "2005-01-01T00:00:00.000Z"
    },
    {
      "month": "2005年02月",
      "vacancyRate": 5.81,
      "rentalRate": 17586,
      "reitIndex": 1475.28,
      "date": "2005-02-01T00:00:00.000Z"
    },
    {
      "month": "2005年03月",
      "vacancyRate": 5.51,
      "rentalRate": 17593,
      "reitIndex": 1507.93,
      "date": "2005-03-01T00:00:00.000Z"
    },
    {
      "month": "2005年04月",
      "vacancyRate": 5.15,
      "rentalRate": 17624,
      "reitIndex": 1518.18,
      "date": "2005-04-01T00:00:00.000Z"
    },
    {
      "month": "2005年05月",
      "vacancyRate": 5.03,
      "rentalRate": 17657,
      "reitIndex": 1565.75,
      "date": "2005-05-01T00:00:00.000Z"
    },
    {
      "month": "2005年06月",
      "vacancyRate": 5.03,
      "rentalRate": 17709,
      "reitIndex": 1635.90,
      "date": "2005-06-01T00:00:00.000Z"
    },
    {
      "month": "2005年07月",
      "vacancyRate": 4.76,
      "rentalRate": 17665,
      "reitIndex": 1631.36,
      "date": "2005-07-01T00:00:00.000Z"
    },
    {
      "month": "2005年08月",
      "vacancyRate": 4.57,
      "rentalRate": 17666,
      "reitIndex": 1575.91,
      "date": "2005-08-01T00:00:00.000Z"
    },
    {
      "month": "2005年09月",
      "vacancyRate": 4.44,
      "rentalRate": 17714,
      "reitIndex": 1603.97,
      "date": "2005-09-01T00:00:00.000Z"
    },
    {
      "month": "2005年10月",
      "vacancyRate": 4.38,
      "rentalRate": 17801,
      "reitIndex": 1535.53,
      "date": "2005-10-01T00:00:00.000Z"
    },
    {
      "month": "2005年11月",
      "vacancyRate": 4.28,
      "rentalRate": 17802,
      "reitIndex": 1581.30,
      "date": "2005-11-01T00:00:00.000Z"
    },
    {
      "month": "2005年12月",
      "vacancyRate": 4.22,
      "rentalRate": 17844,
      "reitIndex": 1601.68,
      "date": "2005-12-01T00:00:00.000Z"
    },
    {
      "month": "2006年01月",
      "vacancyRate": 3.99,
      "rentalRate": 17989,
      "reitIndex": 1661.34,
      "date": "2006-01-01T00:00:00.000Z"
    },
    {
      "month": "2006年02月",
      "vacancyRate": 3.67,
      "rentalRate": 18038,
      "reitIndex": 1693.18,
      "date": "2006-02-01T00:00:00.000Z"
    },
    {
      "month": "2006年03月",
      "vacancyRate": 3.41,
      "rentalRate": 18095,
      "reitIndex": 1713.85,
      "date": "2006-03-01T00:00:00.000Z"
    },
    {
      "month": "2006年04月",
      "vacancyRate": 3.29,
      "rentalRate": 18143,
      "reitIndex": 1718.17,
      "date": "2006-04-01T00:00:00.000Z"
    },
    {
      "month": "2006年05月",
      "vacancyRate": 3.18,
      "rentalRate": 18200,
      "reitIndex": 1707.50,
      "date": "2006-05-01T00:00:00.000Z"
    },
    {
      "month": "2006年06月",
      "vacancyRate": 3.10,
      "rentalRate": 18425,
      "reitIndex": 1653.15,
      "date": "2006-06-01T00:00:00.000Z"
    },
    {
      "month": "2006年07月",
      "vacancyRate": 3.00,
      "rentalRate": 18599,
      "reitIndex": 1622.49,
      "date": "2006-07-01T00:00:00.000Z"
    },
    {
      "month": "2006年08月",
      "vacancyRate": 2.98,
      "rentalRate": 18671,
      "reitIndex": 1666.90,
      "date": "2006-08-01T00:00:00.000Z"
    },
    {
      "month": "2006年09月",
      "vacancyRate": 3.01,
      "rentalRate": 18899,
      "reitIndex": 1696.72,
      "date": "2006-09-01T00:00:00.000Z"
    },
    {
      "month": "2006年10月",
      "vacancyRate": 2.92,
      "rentalRate": 19071,
      "reitIndex": 1754.37,
      "date": "2006-10-01T00:00:00.000Z"
    },
    {
      "month": "2006年11月",
      "vacancyRate": 2.90,
      "rentalRate": 19221,
      "reitIndex": 1839.19,
      "date": "2006-11-01T00:00:00.000Z"
    },
    {
      "month": "2006年12月",
      "vacancyRate": 2.89,
      "rentalRate": 19406,
      "reitIndex": 1990.43,
      "date": "2006-12-01T00:00:00.000Z"
    },
    {
      "month": "2007年01月",
      "vacancyRate": 2.87,
      "rentalRate": 19770,
      "reitIndex": 2212.51,
      "date": "2007-01-01T00:00:00.000Z"
    },
    {
      "month": "2007年02月",
      "vacancyRate": 2.93,
      "rentalRate": 19935,
      "reitIndex": 2337.70,
      "date": "2007-02-01T00:00:00.000Z"
    },
    {
      "month": "2007年03月",
      "vacancyRate": 2.72,
      "rentalRate": 20064,
      "reitIndex": 2480.55,
      "date": "2007-03-01T00:00:00.000Z"
    },
    {
      "month": "2007年04月",
      "vacancyRate": 2.72,
      "rentalRate": 20292,
      "reitIndex": 2513.50,
      "date": "2007-04-01T00:00:00.000Z"
    },
    {
      "month": "2007年05月",
      "vacancyRate": 2.71,
      "rentalRate": 20509,
      "reitIndex": 2612.98,
      "date": "2007-05-01T00:00:00.000Z"
    },
    {
      "month": "2007年06月",
      "vacancyRate": 2.87,
      "rentalRate": 20794,
      "reitIndex": 2298.53,
      "date": "2007-06-01T00:00:00.000Z"
    },
    {
      "month": "2007年07月",
      "vacancyRate": 2.80,
      "rentalRate": 20896,
      "reitIndex": 2099.38,
      "date": "2007-07-01T00:00:00.000Z"
    },
    {
      "month": "2007年08月",
      "vacancyRate": 2.67,
      "rentalRate": 21095,
      "reitIndex": 2005.70,
      "date": "2007-08-01T00:00:00.000Z"
    },
    {
      "month": "2007年09月",
      "vacancyRate": 2.59,
      "rentalRate": 21161,
      "reitIndex": 2061.45,
      "date": "2007-09-01T00:00:00.000Z"
    },
    {
      "month": "2007年10月",
      "vacancyRate": 2.55,
      "rentalRate": 21391,
      "reitIndex": 1973.22,
      "date": "2007-10-01T00:00:00.000Z"
    },
    {
      "month": "2007年11月",
      "vacancyRate": 2.49,
      "rentalRate": 21713,
      "reitIndex": 1867.60,
      "date": "2007-11-01T00:00:00.000Z"
    },
    {
      "month": "2007年12月",
      "vacancyRate": 2.65,
      "rentalRate": 21998,
      "reitIndex": 1868.57,
      "date": "2007-12-01T00:00:00.000Z"
    },
    {
      "month": "2008年01月",
      "vacancyRate": 2.55,
      "rentalRate": 22452,
      "reitIndex": 1579.80,
      "date": "2008-01-01T00:00:00.000Z"
    },
    {
      "month": "2008年02月",
      "vacancyRate": 2.77,
      "rentalRate": 22489,
      "reitIndex": 1564.74,
      "date": "2008-02-01T00:00:00.000Z"
    },
    {
      "month": "2008年03月",
      "vacancyRate": 2.89,
      "rentalRate": 22574,
      "reitIndex": 1460.85,
      "date": "2008-03-01T00:00:00.000Z"
    },
    {
      "month": "2008年04月",
      "vacancyRate": 3.03,
      "rentalRate": 22687,
      "reitIndex": 1492.00,
      "date": "2008-04-01T00:00:00.000Z"
    },
    {
      "month": "2008年05月",
      "vacancyRate": 3.29,
      "rentalRate": 22826,
      "reitIndex": 1538.62,
      "date": "2008-05-01T00:00:00.000Z"
    },
    {
      "month": "2008年06月",
      "vacancyRate": 3.49,
      "rentalRate": 22868,
      "reitIndex": 1395.10,
      "date": "2008-06-01T00:00:00.000Z"
    },
    {
      "month": "2008年07月",
      "vacancyRate": 3.75,
      "rentalRate": 22860,
      "reitIndex": 1343.63,
      "date": "2008-07-01T00:00:00.000Z"
    },
    {
      "month": "2008年08月",
      "vacancyRate": 3.86,
      "rentalRate": 22901,
      "reitIndex": 1260.02,
      "date": "2008-08-01T00:00:00.000Z"
    },
    {
      "month": "2008年09月",
      "vacancyRate": 4.07,
      "rentalRate": 22732,
      "reitIndex": 1131.67,
      "date": "2008-09-01T00:00:00.000Z"
    },
    {
      "month": "2008年10月",
      "vacancyRate": 4.30,
      "rentalRate": 22559,
      "reitIndex": 863.21,
      "date": "2008-10-01T00:00:00.000Z"
    },
    {
      "month": "2008年11月",
      "vacancyRate": 4.56,
      "rentalRate": 22347,
      "reitIndex": 857.6,
      "date": "2008-11-01T00:00:00.000Z"
    },
    {
      "month": "2008年12月",
      "vacancyRate": 4.72,
      "rentalRate": 22186,
      "reitIndex": 900.36,
      "date": "2008-12-01T00:00:00.000Z"
    },
    {
      "month": "2009年01月",
      "vacancyRate": 4.93,
      "rentalRate": 21943,
      "reitIndex": 892.61,
      "date": "2009-01-01T00:00:00.000Z"
    },
    {
      "month": "2009年02月",
      "vacancyRate": 5.60,
      "rentalRate": 21620,
      "reitIndex": 770.18,
      "date": "2009-02-01T00:00:00.000Z"
    },
    {
      "month": "2009年03月",
      "vacancyRate": 6.05,
      "rentalRate": 21295,
      "reitIndex": 845.37,
      "date": "2009-03-01T00:00:00.000Z"
    },
    {
      "month": "2009年04月",
      "vacancyRate": 6.79,
      "rentalRate": 20965,
      "reitIndex": 838.83,
      "date": "2009-04-01T00:00:00.000Z"
    },
    {
      "month": "2009年05月",
      "vacancyRate": 6.96,
      "rentalRate": 20660,
      "reitIndex": 890.45,
      "date": "2009-05-01T00:00:00.000Z"
    },
    {
      "month": "2009年06月",
      "vacancyRate": 7.25,
      "rentalRate": 20418,
      "reitIndex": 973.14,
      "date": "2009-06-01T00:00:00.000Z"
    },
    {
      "month": "2009年07月",
      "vacancyRate": 7.57,
      "rentalRate": 20170,
      "reitIndex": 990.69,
      "date": "2009-07-01T00:00:00.000Z"
    },
    {
      "month": "2009年08月",
      "vacancyRate": 7.57,
      "rentalRate": 19867,
      "reitIndex": 1006.99,
      "date": "2009-08-01T00:00:00.000Z"
    },
    {
      "month": "2009年09月",
      "vacancyRate": 7.62,
      "rentalRate": 19657,
      "reitIndex": 987.34,
      "date": "2009-09-01T00:00:00.000Z"
    },
    {
      "month": "2009年10月",
      "vacancyRate": 7.76,
      "rentalRate": 19500,
      "reitIndex": 933.68,
      "date": "2009-10-01T00:00:00.000Z"
    },
    {
      "month": "2009年11月",
      "vacancyRate": 7.98,
      "rentalRate": 19306,
      "reitIndex": 835.88,
      "date": "2009-11-01T00:00:00.000Z"
    },
    {
      "month": "2009年12月",
      "vacancyRate": 8.09,
      "rentalRate": 18978,
      "reitIndex": 893.19,
      "date": "2009-12-01T00:00:00.000Z"
    },
    {
      "month": "2010年01月",
      "vacancyRate": 8.25,
      "rentalRate": 18904,
      "reitIndex": 905.38,
      "date": "2010-01-01T00:00:00.000Z"
    },
    {
      "month": "2010年02月",
      "vacancyRate": 8.66,
      "rentalRate": 18434,
      "reitIndex": 908.23,
      "date": "2010-02-01T00:00:00.000Z"
    },
    {
      "month": "2010年03月",
      "vacancyRate": 8.75,
      "rentalRate": 18264,
      "reitIndex": 948.9,
      "date": "2010-03-01T00:00:00.000Z"
    },
    {
      "month": "2010年04月",
      "vacancyRate": 8.82,
      "rentalRate": 18154,
      "reitIndex": 999.13,
      "date": "2010-04-01T00:00:00.000Z"
    },
    {
      "month": "2010年05月",
      "vacancyRate": 8.94,
      "rentalRate": 18088,
      "reitIndex": 915.05,
      "date": "2010-05-01T00:00:00.000Z"
    },
    {
      "month": "2010年06月",
      "vacancyRate": 9.14,
      "rentalRate": 18035,
      "reitIndex": 875.31,
      "date": "2010-06-01T00:00:00.000Z"
    },
    {
      "month": "2010年07月",
      "vacancyRate": 9.10,
      "rentalRate": 17881,
      "reitIndex": 919.31,
      "date": "2010-07-01T00:00:00.000Z"
    },
    {
      "month": "2010年08月",
      "vacancyRate": 9.17,
      "rentalRate": 17832,
      "reitIndex": 906.27,
      "date": "2010-08-01T00:00:00.000Z"
    },
    {
      "month": "2010年09月",
      "vacancyRate": 9.01,
      "rentalRate": 17709,
      "reitIndex": 935.37,
      "date": "2010-09-01T00:00:00.000Z"
    },
    {
      "month": "2010年10月",
      "vacancyRate": 8.85,
      "rentalRate": 17639,
      "reitIndex": 964.09,
      "date": "2010-10-01T00:00:00.000Z"
    },
    {
      "month": "2010年11月",
      "vacancyRate": 9.04,
      "rentalRate": 17635,
      "reitIndex": 1029.00,
      "date": "2010-11-01T00:00:00.000Z"
    },
    {
      "month": "2010年12月",
      "vacancyRate": 8.91,
      "rentalRate": 17585,
      "reitIndex": 1130.70,
      "date": "2010-12-01T00:00:00.000Z"
    },
    {
      "month": "2011年01月",
      "vacancyRate": 9.04,
      "rentalRate": 17548,
      "reitIndex": 1115.71,
      "date": "2011-01-01T00:00:00.000Z"
    },
    {
      "month": "2011年02月",
      "vacancyRate": 9.10,
      "rentalRate": 17512,
      "reitIndex": 1107.70,
      "date": "2011-02-01T00:00:00.000Z"
    },
    {
      "month": "2011年03月",
      "vacancyRate": 9.19,
      "rentalRate": 17495,
      "reitIndex": 1055.18,
      "date": "2011-03-01T00:00:00.000Z"
    },
    {
      "month": "2011年04月",
      "vacancyRate": 8.92,
      "rentalRate": 17419,
      "reitIndex": 1073.33,
      "date": "2011-04-01T00:00:00.000Z"
    },
    {
      "month": "2011年05月",
      "vacancyRate": 8.88,
      "rentalRate": 17400,
      "reitIndex": 1067.76,
      "date": "2011-05-01T00:00:00.000Z"
    },
    {
      "month": "2011年06月",
      "vacancyRate": 8.81,
      "rentalRate": 17292,
      "reitIndex": 1027.45,
      "date": "2011-06-01T00:00:00.000Z"
    },
    {
      "month": "2011年07月",
      "vacancyRate": 8.76,
      "rentalRate": 17225,
      "reitIndex": 997.89,
      "date": "2011-07-01T00:00:00.000Z"
    },
    {
      "month": "2011年08月",
      "vacancyRate": 8.65,
      "rentalRate": 17136,
      "reitIndex": 985.07,
      "date": "2011-08-01T00:00:00.000Z"
    },
    {
      "month": "2011年09月",
      "vacancyRate": 8.64,
      "rentalRate": 17056,
      "reitIndex": 928.56,
      "date": "2011-09-01T00:00:00.000Z"
    },
    {
      "month": "2011年10月",
      "vacancyRate": 8.78,
      "rentalRate": 17011,
      "reitIndex": 902.22,
      "date": "2011-10-01T00:00:00.000Z"
    },
    {
      "month": "2011年11月",
      "vacancyRate": 8.90,
      "rentalRate": 16973,
      "reitIndex": 847.08,
      "date": "2011-11-01T00:00:00.000Z"
    },
    {
      "month": "2011年12月",
      "vacancyRate": 9.01,
      "rentalRate": 16932,
      "reitIndex": 834.36,
      "date": "2011-12-01T00:00:00.000Z"
    },
    {
      "month": "2012年01月",
      "vacancyRate": 9.23,
      "rentalRate": 16920,
      "reitIndex": 850.48,
      "date": "2012-01-01T00:00:00.000Z"
    },
    {
      "month": "2012年02月",
      "vacancyRate": 9.15,
      "rentalRate": 16846,
      "reitIndex": 958.02,
      "date": "2012-02-01T00:00:00.000Z"
    },
    {
      "month": "2012年03月",
      "vacancyRate": 9.04,
      "rentalRate": 16716,
      "reitIndex": 989.64,
      "date": "2012-03-01T00:00:00.000Z"
    },
    {
      "month": "2012年04月",
      "vacancyRate": 9.23,
      "rentalRate": 16711,
      "reitIndex": 970.61,
      "date": "2012-04-01T00:00:00.000Z"
    },
    {
      "month": "2012年05月",
      "vacancyRate": 9.40,
      "rentalRate": 16729,
      "reitIndex": 927.21,
      "date": "2012-05-01T00:00:00.000Z"
    },
    {
      "month": "2012年06月",
      "vacancyRate": 9.43,
      "rentalRate": 16763,
      "reitIndex": 957.38,
      "date": "2012-06-01T00:00:00.000Z"
    },
    {
      "month": "2012年07月",
      "vacancyRate": 9.30,
      "rentalRate": 16741,
      "reitIndex": 944.55,
      "date": "2012-07-01T00:00:00.000Z"
    },
    {
      "month": "2012年08月",
      "vacancyRate": 9.17,
      "rentalRate": 16733,
      "reitIndex": 973.44,
      "date": "2012-08-01T00:00:00.000Z"
    },
    {
      "month": "2012年09月",
      "vacancyRate": 8.90,
      "rentalRate": 16675,
      "reitIndex": 1021.46,
      "date": "2012-09-01T00:00:00.000Z"
    },
    {
      "month": "2012年10月",
      "vacancyRate": 8.74,
      "rentalRate": 16628,
      "reitIndex": 1052.81,
      "date": "2012-10-01T00:00:00.000Z"
    },
    {
      "month": "2012年11月",
      "vacancyRate": 8.76,
      "rentalRate": 16588,
      "reitIndex": 1065.74,
      "date": "2012-11-01T00:00:00.000Z"
    },
    {
      "month": "2012年12月",
      "vacancyRate": 8.67,
      "rentalRate": 16572,
      "reitIndex": 1114.68,
      "date": "2012-12-01T00:00:00.000Z"
    },
    {
      "month": "2013年01月",
      "vacancyRate": 8.56,
      "rentalRate": 16554,
      "reitIndex": 1238.94,
      "date": "2013-01-01T00:00:00.000Z"
    },
    {
      "month": "2013年02月",
      "vacancyRate": 8.57,
      "rentalRate": 16547,
      "reitIndex": 1323.25,
      "date": "2013-02-01T00:00:00.000Z"
    },
    {
      "month": "2013年03月",
      "vacancyRate": 8.56,
      "rentalRate": 16504,
      "reitIndex": 1642.79,
      "date": "2013-03-01T00:00:00.000Z"
    },
    {
      "month": "2013年04月",
      "vacancyRate": 8.54,
      "rentalRate": 16487,
      "reitIndex": 1599.42,
      "date": "2013-04-01T00:00:00.000Z"
    },
    {
      "month": "2013年05月",
      "vacancyRate": 8.33,
      "rentalRate": 16467,
      "reitIndex": 1368.17,
      "date": "2013-05-01T00:00:00.000Z"
    },
    {
      "month": "2013年06月",
      "vacancyRate": 8.46,
      "rentalRate": 16377,
      "reitIndex": 1396.67,
      "date": "2013-06-01T00:00:00.000Z"
    },
    {
      "month": "2013年07月",
      "vacancyRate": 8.29,
      "rentalRate": 16310,
      "reitIndex": 1312.77,
      "date": "2013-07-01T00:00:00.000Z"
    },
    {
      "month": "2013年08月",
      "vacancyRate": 8.16,
      "rentalRate": 16268,
      "reitIndex": 1299.64,
      "date": "2013-08-01T00:00:00.000Z"
    },
    {
      "month": "2013年09月",
      "vacancyRate": 7.90,
      "rentalRate": 16230,
      "reitIndex": 1510.10,
      "date": "2013-09-01T00:00:00.000Z"
    },
    {
      "month": "2013年10月",
      "vacancyRate": 7.56,
      "rentalRate": 16237,
      "reitIndex": 1474.93,
      "date": "2013-10-01T00:00:00.000Z"
    },
    {
      "month": "2013年11月",
      "vacancyRate": 7.52,
      "rentalRate": 16219,
      "reitIndex": 1467.84,
      "date": "2013-11-01T00:00:00.000Z"
    },
    {
      "month": "2013年12月",
      "vacancyRate": 7.34,
      "rentalRate": 16207,
      "reitIndex": 1515.01,
      "date": "2013-12-01T00:00:00.000Z"
    },
    {
      "month": "2014年01月",
      "vacancyRate": 7.18,
      "rentalRate": 16242,
      "reitIndex": 1497.46,
      "date": "2014-01-01T00:00:00.000Z"
    },
    {
      "month": "2014年02月",
      "vacancyRate": 7.01,
      "rentalRate": 16250,
      "reitIndex": 1504.90,
      "date": "2014-02-01T00:00:00.000Z"
    },
    {
      "month": "2014年03月",
      "vacancyRate": 6.70,
      "rentalRate": 16325,
      "reitIndex": 1465.54,
      "date": "2014-03-01T00:00:00.000Z"
    },
    {
      "month": "2014年04月",
      "vacancyRate": 6.64,
      "rentalRate": 16455,
      "reitIndex": 1496.02,
      "date": "2014-04-01T00:00:00.000Z"
    },
    {
      "month": "2014年05月",
      "vacancyRate": 6.52,
      "rentalRate": 16501,
      "reitIndex": 1565.02,
      "date": "2014-05-01T00:00:00.000Z"
    },
    {
      "month": "2014年06月",
      "vacancyRate": 6.45,
      "rentalRate": 16607,
      "reitIndex": 1598.27,
      "date": "2014-06-01T00:00:00.000Z"
    },
    {
      "month": "2014年07月",
      "vacancyRate": 6.20,
      "rentalRate": 16663,
      "reitIndex": 1616.95,
      "date": "2014-07-01T00:00:00.000Z"
    },
    {
      "month": "2014年08月",
      "vacancyRate": 6.02,
      "rentalRate": 16729,
      "reitIndex": 1648.90,
      "date": "2014-08-01T00:00:00.000Z"
    },
    {
      "month": "2014年09月",
      "vacancyRate": 5.65,
      "rentalRate": 16805,
      "reitIndex": 1670.89,
      "date": "2014-09-01T00:00:00.000Z"
    },
    {
      "month": "2014年10月",
      "vacancyRate": 5.60,
      "rentalRate": 16913,
      "reitIndex": 1716.55,
      "date": "2014-10-01T00:00:00.000Z"
    },
    {
      "month": "2014年11月",
      "vacancyRate": 5.55,
      "rentalRate": 16950,
      "reitIndex": 1826.72,
      "date": "2014-11-01T00:00:00.000Z"
    },
    {
      "month": "2014年12月",
      "vacancyRate": 5.47,
      "rentalRate": 16953,
      "reitIndex": 1897.92,
      "date": "2014-12-01T00:00:00.000Z"
    },
    {
      "month": "2015年01月",
      "vacancyRate": 5.36,
      "rentalRate": 17109,
      "reitIndex": 1886.51,
      "date": "2015-01-01T00:00:00.000Z"
    },
    {
      "month": "2015年02月",
      "vacancyRate": 5.31,
      "rentalRate": 17167,
      "reitIndex": 1905.61,
      "date": "2015-02-01T00:00:00.000Z"
    },
    {
      "month": "2015年03月",
      "vacancyRate": 5.30,
      "rentalRate": 17195,
      "reitIndex": 1864.66,
      "date": "2015-03-01T00:00:00.000Z"
    },
    {
      "month": "2015年04月",
      "vacancyRate": 5.34,
      "rentalRate": 17257,
      "reitIndex": 1876.33,
      "date": "2015-04-01T00:00:00.000Z"
    },
    {
      "month": "2015年05月",
      "vacancyRate": 5.17,
      "rentalRate": 17320,
      "reitIndex": 1866.06,
      "date": "2015-05-01T00:00:00.000Z"
    },
    {
      "month": "2015年06月",
      "vacancyRate": 5.12,
      "rentalRate": 17401,
      "reitIndex": 1803.13,
      "date": "2015-06-01T00:00:00.000Z"
    },
    {
      "month": "2015年07月",
      "vacancyRate": 4.89,
      "rentalRate": 17467,
      "reitIndex": 1766.48,
      "date": "2015-07-01T00:00:00.000Z"
    },
    {
      "month": "2015年08月",
      "vacancyRate": 4.72,
      "rentalRate": 17490,
      "reitIndex": 1634.37,
      "date": "2015-08-01T00:00:00.000Z"
    },
    {
      "month": "2015年09月",
      "vacancyRate": 4.53,
      "rentalRate": 17594,
      "reitIndex": 1677.60,
      "date": "2015-09-01T00:00:00.000Z"
    },
    {
      "month": "2015年10月",
      "vacancyRate": 4.46,
      "rentalRate": 17612,
      "reitIndex": 1729.68,
      "date": "2015-10-01T00:00:00.000Z"
    },
    {
      "month": "2015年11月",
      "vacancyRate": 4.19,
      "rentalRate": 17637,
      "reitIndex": 1752.65,
      "date": "2015-11-01T00:00:00.000Z"
    },
    {
      "month": "2015年12月",
      "vacancyRate": 4.03,
      "rentalRate": 17692,
      "reitIndex": 1747.54,
      "date": "2015-12-01T00:00:00.000Z"
    },
    {
      "month": "2016年01月",
      "vacancyRate": 4.01,
      "rentalRate": 17790,
      "reitIndex": 1781.00,
      "date": "2016-01-01T00:00:00.000Z"
    },
    {
      "month": "2016年02月",
      "vacancyRate": 4.04,
      "rentalRate": 17904,
      "reitIndex": 1873.29,
      "date": "2016-02-01T00:00:00.000Z"
    },
    {
      "month": "2016年03月",
      "vacancyRate": 4.34,
      "rentalRate": 17973,
      "reitIndex": 1896.40,
      "date": "2016-03-01T00:00:00.000Z"
    },
    {
      "month": "2016年04月",
      "vacancyRate": 4.23,
      "rentalRate": 18061,
      "reitIndex": 1924.44,
      "date": "2016-04-01T00:00:00.000Z"
    },
    {
      "month": "2016年05月",
      "vacancyRate": 4.05,
      "rentalRate": 18107,
      "reitIndex": 1895.71,
      "date": "2016-05-01T00:00:00.000Z"
    },
    {
      "month": "2016年06月",
      "vacancyRate": 4.07,
      "rentalRate": 18179,
      "reitIndex": 1843.66,
      "date": "2016-06-01T00:00:00.000Z"
    },
    {
      "month": "2016年07月",
      "vacancyRate": 3.94,
      "rentalRate": 18271,
      "reitIndex": 1869.32,
      "date": "2016-07-01T00:00:00.000Z"
    },
    {
      "month": "2016年08月",
      "vacancyRate": 3.90,
      "rentalRate": 18322,
      "reitIndex": 1823.54,
      "date": "2016-08-01T00:00:00.000Z"
    },
    {
      "month": "2016年09月",
      "vacancyRate": 3.70,
      "rentalRate": 18336,
      "reitIndex": 1825.53,
      "date": "2016-09-01T00:00:00.000Z"
    },
    {
      "month": "2016年10月",
      "vacancyRate": 3.64,
      "rentalRate": 18435,
      "reitIndex": 1785.97,
      "date": "2016-10-01T00:00:00.000Z"
    },
    {
      "month": "2016年11月",
      "vacancyRate": 3.75,
      "rentalRate": 18476,
      "reitIndex": 1796.89,
      "date": "2016-11-01T00:00:00.000Z"
    },
    {
      "month": "2016年12月",
      "vacancyRate": 3.61,
      "rentalRate": 18540,
      "reitIndex": 1855.83,
      "date": "2016-12-01T00:00:00.000Z"
    },
    {
      "month": "2017年01月",
      "vacancyRate": 3.74,
      "rentalRate": 18582,
      "reitIndex": 1843.40,
      "date": "2017-01-01T00:00:00.000Z"
    },
    {
      "month": "2017年02月",
      "vacancyRate": 3.70,
      "rentalRate": 18655,
      "reitIndex": 1817.36,
      "date": "2017-02-01T00:00:00.000Z"
    },
    {
      "month": "2017年03月",
      "vacancyRate": 3.60,
      "rentalRate": 18730,
      "reitIndex": 1776.33,
      "date": "2017-03-01T00:00:00.000Z"
    },
    {
      "month": "2017年04月",
      "vacancyRate": 3.39,
      "rentalRate": 18774,
      "reitIndex": 1733.96,
      "date": "2017-04-01T00:00:00.000Z"
    },
    {
      "month": "2017年05月",
      "vacancyRate": 3.41,
      "rentalRate": 18801,
      "reitIndex": 1748.56,
      "date": "2017-05-01T00:00:00.000Z"
    },
    {
      "month": "2017年06月",
      "vacancyRate": 3.26,
      "rentalRate": 18864,
      "reitIndex": 1694.36,
      "date": "2017-06-01T00:00:00.000Z"
    },
    {
      "month": "2017年07月",
      "vacancyRate": 3.22,
      "rentalRate": 18916,
      "reitIndex": 1709.96,
      "date": "2017-07-01T00:00:00.000Z"
    },
    {
      "month": "2017年08月",
      "vacancyRate": 3.35,
      "rentalRate": 18957,
      "reitIndex": 1683.79,
      "date": "2017-08-01T00:00:00.000Z"
    },
    {
      "month": "2017年09月",
      "vacancyRate": 3.17,
      "rentalRate": 18995,
      "reitIndex": 1653.72,
      "date": "2017-09-01T00:00:00.000Z"
    },
    {
      "month": "2017年10月",
      "vacancyRate": 3.02,
      "rentalRate": 19033,
      "reitIndex": 1629.26,
      "date": "2017-10-01T00:00:00.000Z"
    },
    {
      "month": "2017年11月",
      "vacancyRate": 3.03,
      "rentalRate": 19064,
      "reitIndex": 1671.62,
      "date": "2017-11-01T00:00:00.000Z"
    },
    {
      "month": "2017年12月",
      "vacancyRate": 3.12,
      "rentalRate": 19173,
      "reitIndex": 1662.92,
      "date": "2017-12-01T00:00:00.000Z"
    },
    {
      "month": "2018年01月",
      "vacancyRate": 3.07,
      "rentalRate": 19338,
      "reitIndex": 1744.89,
      "date": "2018-01-01T00:00:00.000Z"
    },
    {
      "month": "2018年02月",
      "vacancyRate": 3.03,
      "rentalRate": 19500,
      "reitIndex": 1700.96,
      "date": "2018-02-01T00:00:00.000Z"
    },
    {
      "month": "2018年03月",
      "vacancyRate": 2.80,
      "rentalRate": 19699,
      "reitIndex": 1688.66,
      "date": "2018-03-01T00:00:00.000Z"
    },
    {
      "month": "2018年04月",
      "vacancyRate": 2.65,
      "rentalRate": 19896,
      "reitIndex": 1728.48,
      "date": "2018-04-01T00:00:00.000Z"
    },
    {
      "month": "2018年05月",
      "vacancyRate": 2.68,
      "rentalRate": 20019,
      "reitIndex": 1734.13,
      "date": "2018-05-01T00:00:00.000Z"
    },
    {
      "month": "2018年06月",
      "vacancyRate": 2.57,
      "rentalRate": 20108,
      "reitIndex": 1764.64,
      "date": "2018-06-01T00:00:00.000Z"
    },
    {
      "month": "2018年07月",
      "vacancyRate": 2.58,
      "rentalRate": 20202,
      "reitIndex": 1768.31,
      "date": "2018-07-01T00:00:00.000Z"
    },
    {
      "month": "2018年08月",
      "vacancyRate": 2.45,
      "rentalRate": 20291,
      "reitIndex": 1752.65,
      "date": "2018-08-01T00:00:00.000Z"
    },
    {
      "month": "2018年09月",
      "vacancyRate": 2.33,
      "rentalRate": 20438,
      "reitIndex": 1777.18,
      "date": "2018-09-01T00:00:00.000Z"
    },
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
    },
    {
      "month": "2025年05月",
      "vacancyRate": 3.56,
      "rentalRate": 20776,
      "reitIndex": 1736.74,
      "date": "2025-05-01T00:00:00.000Z"
    },
    {
      "month": "2025年06月",
      "vacancyRate": 3.37,
      "rentalRate": 20877,
      "reitIndex": 1778.87,
      "date": "2025-06-01T00:00:00.000Z"
    },
    {
      "month": "2025年07月",
      "vacancyRate": 3.16,
      "rentalRate": 20907,
      "reitIndex": 1859.19,
      "date": "2025-07-01T00:00:00.000Z"
    },
    {
      "month": "2025年08月",
      "vacancyRate": 2.85,
      "rentalRate": 21027,
      "reitIndex": 1917.89,
      "date": "2025-08-01T00:00:00.000Z"
    },
    {
      "month": "2025年09月",
      "vacancyRate": 2.68,
      "rentalRate": 21092,
      "reitIndex": 1921.07,
      "date": "2025-09-01T00:00:00.000Z"
    },
    {
      "month": "2025年10月",
      "vacancyRate": 2.59,
      "rentalRate": 21261,
      "reitIndex": 1962.44,
      "date": "2025-10-01T00:00:00.000Z"
    },
    {
      "month": "2025年11月",
      "vacancyRate": 2.44,
      "rentalRate": 21308,
      "reitIndex": 2023.80,
      "date": "2025-11-01T00:00:00.000Z"
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
